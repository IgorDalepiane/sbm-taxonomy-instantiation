import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  dimensions,
  getCategoryLabel,
  resolveText,
  wizardUiText,
} from '../data/taxonomy'
import type { Locale, RecordsByDimension } from '../types/classification'

type ExportPdfOptions = {
  records: RecordsByDimension
  locale: Locale
  caseName?: string
  completionRate: number
}

export function exportPdf({
  records,
  locale,
  caseName,
  completionRate,
}: ExportPdfOptions) {
  const text = wizardUiText[locale]
  const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.text(text.pdfTitle, 40, 48)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  let metaY = 66
  if (caseName?.trim()) {
    doc.text(`Case: ${caseName.trim()}`, 40, metaY)
    metaY += 16
  }
  doc.text(`${text.pdfGeneratedAt}: ${new Date().toLocaleString()}`, 40, metaY)
  doc.text(`${text.pdfCompletion}: ${completionRate}%`, 40, metaY + 16)

  const body = dimensions.map((dimension) => {
    const record = records[dimension.id]
    return [
      resolveText(dimension.title, locale),
      getCategoryLabel(dimension, record.primaryCategory, locale),
      record.evidenceSource || '-',
      record.assignmentRationale || '-',
      record.secondaryNotes || '-',
    ]
  })

  autoTable(doc, {
    startY: metaY + 30,
    head: [text.pdfHeaders],
    body,
    styles: { fontSize: 8, cellPadding: 5, valign: 'top' },
    headStyles: { fillColor: [67, 56, 202] },
    columnStyles: {
      0: { cellWidth: 92 },
      1: { cellWidth: 88 },
      2: { cellWidth: 100 },
      3: { cellWidth: 130 },
      4: { cellWidth: 92 },
    },
    margin: { left: 28, right: 28 },
  })

  const finalY =
    (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? metaY + 30
  doc.setFontSize(9)
  doc.text(text.pdfFooter, 40, finalY + 20)

  doc.save('sbm-taxonomy-classification-report.pdf')
}
