import { dimensions } from '../data/taxonomy'
import type {
  ClassificationRecord,
  RecordsByDimension,
} from '../types/classification'

const STORAGE_KEY = 'sbm-taxonomy-draft'

const recordFields: (keyof ClassificationRecord)[] = [
  'primaryCategory',
  'evidenceSource',
  'assignmentRationale',
  'secondaryNotes',
]

export type ClassificationDraft = {
  records: RecordsByDimension
  caseName: string
  currentIndex: number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parseRecords(raw: unknown): RecordsByDimension | null {
  if (!isRecord(raw)) return null
  const records: RecordsByDimension = {}
  for (const dimension of dimensions) {
    const item = raw[dimension.id]
    if (!isRecord(item)) return null
    if (recordFields.some((field) => typeof item[field] !== 'string')) {
      return null
    }
    records[dimension.id] = {
      primaryCategory: item.primaryCategory as string,
      evidenceSource: item.evidenceSource as string,
      assignmentRationale: item.assignmentRationale as string,
      secondaryNotes: item.secondaryNotes as string,
    }
  }
  return records
}

export function isDraftEmpty(draft: ClassificationDraft): boolean {
  return (
    draft.caseName.trim() === '' &&
    Object.values(draft.records).every((record) =>
      recordFields.every((field) => record[field].trim() === ''),
    )
  )
}

export function loadDraft(): ClassificationDraft | null {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    const raw: unknown = JSON.parse(stored)
    if (!isRecord(raw)) return null
    const records = parseRecords(raw.records)
    if (!records) return null
    const caseName = typeof raw.caseName === 'string' ? raw.caseName : ''
    const index = Number(raw.currentIndex)
    const currentIndex =
      Number.isInteger(index) && index >= 0 && index < dimensions.length
        ? index
        : 0
    const draft = { records, caseName, currentIndex }
    return isDraftEmpty(draft) ? null : draft
  } catch {
    return null
  }
}

export function saveDraft(draft: ClassificationDraft) {
  try {
    if (isDraftEmpty(draft)) {
      sessionStorage.removeItem(STORAGE_KEY)
    } else {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    }
  } catch {
    // ignore
  }
}
