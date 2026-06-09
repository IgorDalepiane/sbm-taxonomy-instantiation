import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { HelpTooltip } from '../components/HelpTooltip'
import { appUiText } from '../data/appUiText'
import { useClassification } from '../context/useClassification'
import { useLocale } from '../context/useLocale'
import {
  dimensions,
  getCategoryHelp,
  resolveText,
  wizardUiText,
} from '../data/taxonomy'
import { exportPdf } from '../lib/exportPdf'
import {
  downloadJson,
  serializeClassification,
  slugifyCaseName,
} from '../lib/jsonIO'
import type { ClassificationRecord } from '../types/classification'

export function WizardPage() {
  const {
    records,
    setRecords,
    caseName,
    setCaseName,
    importMessage,
    clearImportMessage,
    resetClassification,
  } = useClassification()

  const { locale } = useLocale()
  const appText = appUiText[locale]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDimensionGlossary, setShowDimensionGlossary] = useState(false)

  const text = wizardUiText[locale]
  const currentDimension = dimensions[currentIndex]

  useEffect(() => {
    if (!importMessage) return
    const timer = window.setTimeout(clearImportMessage, 6000)
    return () => window.clearTimeout(timer)
  }, [importMessage, clearImportMessage])

  const completedCount = useMemo(
    () =>
      dimensions.filter((dimension) => {
        const record = records[dimension.id]
        return (
          record.primaryCategory.trim() !== '' &&
          record.evidenceSource.trim() !== '' &&
          record.assignmentRationale.trim() !== ''
        )
      }).length,
    [records],
  )

  const completionRate = Math.round((completedCount / dimensions.length) * 100)

  const updateRecord = (field: keyof ClassificationRecord, value: string) => {
    setRecords((previous) => ({
      ...previous,
      [currentDimension.id]: {
        ...previous[currentDimension.id],
        [field]: value,
      },
    }))
  }

  const handleExportJson = () => {
    const payload = serializeClassification(records, caseName)
    const slug = slugifyCaseName(caseName || 'classification')
    downloadJson(payload, `sbm-classification-${slug}.json`)
  }

  const handleExportPdf = () => {
    exportPdf({ records, locale, caseName, completionRate })
  }

  const handleReset = () => {
    resetClassification()
    setCurrentIndex(0)
  }

  const currentRecord = records[currentDimension.id]

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <div className="mb-4">
        <Link
          to="/"
          className="text-sm font-medium text-indigo-700 hover:underline"
        >
          {appText.backToHome}
        </Link>
      </div>

      {importMessage && (
        <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {importMessage}
        </div>
      )}

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium uppercase tracking-wide text-indigo-700">
              {text.appTagline}
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
              {text.appTitle}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">{text.intro}</p>
            <div className="mt-4 w-full max-w-md">
              <label
                htmlFor="case-name"
                className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                {appText.caseNameLabel}
              </label>
              <input
                id="case-name"
                type="text"
                value={caseName}
                onChange={(event) => setCaseName(event.target.value)}
                placeholder={appText.caseNamePlaceholder}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
          <div className="w-full sm:w-auto sm:shrink-0">
            <div className="w-full rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 sm:text-right">
              <p className="text-xs font-medium uppercase text-indigo-700">
                {text.completion}
              </p>
              <p className="text-2xl font-semibold text-indigo-900">
                {completionRate}%
              </p>
              <p className="text-xs text-indigo-700">
                {text.completionCounter(completedCount, dimensions.length)}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-indigo-600 transition-all"
            style={{ width: `${completionRate}%` }}
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {text.dimensions}
            </h2>
            <HelpTooltip
              term={text.dimensionTerm}
              explanation={text.dimensionHelp}
            />
          </div>
          <ul className="space-y-2">
            {dimensions.map((dimension, index) => {
              const record = records[dimension.id]
              const completed =
                record.primaryCategory &&
                record.evidenceSource &&
                record.assignmentRationale
              const active = index === currentIndex
              return (
                <li key={dimension.id}>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition ${
                      active
                        ? 'border-indigo-300 bg-indigo-50 text-indigo-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium">
                        {resolveText(dimension.title, locale)}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs ${
                          completed
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {completed ? text.done : text.pending}
                      </span>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 border-b border-slate-200 pb-4">
            <p className="text-xs font-medium uppercase tracking-wide text-indigo-700">
              {text.dimensionProgress(currentIndex + 1, dimensions.length)}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">
              {resolveText(currentDimension.title, locale)}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {resolveText(currentDimension.description, locale)}
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    {text.primaryCategory}
                  </label>
                  <HelpTooltip
                    term={text.primaryCategoryTerm}
                    explanation={text.primaryCategoryHelp}
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setShowDimensionGlossary((previous) => !previous)
                  }
                  className="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {showDimensionGlossary
                    ? text.hideDefinitions
                    : text.showDefinitions}
                </button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {currentDimension.categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex min-w-0 items-center gap-2 rounded-lg border border-transparent"
                  >
                    <button
                      type="button"
                      onClick={() => updateRecord('primaryCategory', category.id)}
                      className={`min-w-0 flex-1 rounded-lg border px-3 py-2 text-left text-sm transition ${
                        currentRecord.primaryCategory === category.id
                          ? 'border-indigo-300 bg-indigo-50 text-indigo-900'
                          : 'border-slate-200 text-slate-700 hover:border-indigo-200 hover:bg-slate-50'
                      }`}
                    >
                      {resolveText(category.label, locale)}
                    </button>
                    <HelpTooltip
                      term={resolveText(category.label, locale)}
                      explanation={getCategoryHelp(category.id, locale)}
                    />
                  </div>
                ))}
              </div>
              {showDimensionGlossary && (
                <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="mb-3 text-sm font-semibold text-slate-800">
                    {resolveText(currentDimension.title, locale)} -{' '}
                    {text.categoryDefinitions}
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {currentDimension.categories.map((category) => (
                      <li key={`glossary-${currentDimension.id}-${category.id}`}>
                        <strong className="font-semibold text-slate-900">
                          {resolveText(category.label, locale)}:
                        </strong>{' '}
                        {getCategoryHelp(category.id, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  htmlFor="evidence-source"
                  className="block text-sm font-semibold text-slate-700"
                >
                  {text.evidenceSource}
                </label>
                <HelpTooltip
                  term={text.evidenceSourceTerm}
                  explanation={text.evidenceSourceHelp}
                />
              </div>
              <textarea
                id="evidence-source"
                value={currentRecord.evidenceSource}
                onChange={(event) =>
                  updateRecord('evidenceSource', event.target.value)
                }
                placeholder={text.evidencePlaceholder}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  htmlFor="assignment-rationale"
                  className="block text-sm font-semibold text-slate-700"
                >
                  {text.assignmentRationale}
                </label>
                <HelpTooltip
                  term={text.assignmentRationaleTerm}
                  explanation={text.assignmentRationaleHelp}
                />
              </div>
              <textarea
                id="assignment-rationale"
                value={currentRecord.assignmentRationale}
                onChange={(event) =>
                  updateRecord('assignmentRationale', event.target.value)
                }
                placeholder={text.rationalePlaceholder}
                rows={4}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <label
                  htmlFor="secondary-notes"
                  className="block text-sm font-semibold text-slate-700"
                >
                  {text.secondaryNotes}
                </label>
                <HelpTooltip
                  term={text.secondaryNotesTerm}
                  explanation={text.secondaryNotesHelp}
                />
              </div>
              <textarea
                id="secondary-notes"
                value={currentRecord.secondaryNotes}
                onChange={(event) =>
                  updateRecord('secondaryNotes', event.target.value)
                }
                placeholder={text.secondaryPlaceholder}
                rows={3}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
              <button
                type="button"
                onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
                disabled={currentIndex === 0}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {text.previous}
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentIndex((value) =>
                    Math.min(dimensions.length - 1, value + 1),
                  )
                }
                disabled={currentIndex === dimensions.length - 1}
                className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {text.next}
              </button>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="order-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:order-none sm:w-auto"
              >
                {text.resetForm}
              </button>
              <div className="order-1 grid grid-cols-2 gap-2 sm:contents">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="rounded-lg border border-indigo-300 bg-indigo-50 px-4 py-2.5 text-sm font-medium text-indigo-800 transition hover:bg-indigo-100"
                >
                  {appText.exportJson}
                </button>
                <button
                  type="button"
                  onClick={handleExportPdf}
                  className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  {text.exportPdf}
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
