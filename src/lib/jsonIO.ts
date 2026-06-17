import {
  dimensionTitleToId,
  dimensions,
  getDimensionTitleEn,
} from '../data/taxonomy'
import type {
  ClassificationExport,
  ClassificationExportRecord,
  RecordsByDimension,
} from '../types/classification'
import {
  SCHEMA_VERSION,
  TAXONOMY_VERSION,
} from '../types/classification'

export type ValidationErrorCode =
  | 'invalid_object'
  | 'unsupported_schema'
  | 'unsupported_taxonomy'
  | 'invalid_record_count'
  | 'record_not_object'
  | 'missing_dimension_title'
  | 'unknown_dimension'
  | 'duplicate_dimension'
  | 'missing_primary_category'
  | 'invalid_category'
  | 'missing_evidence'
  | 'missing_rationale'
  | 'missing_dimension_record'

export type ParseResult =
  | { ok: true; records: RecordsByDimension; caseName: string }
  | { ok: false; errorCode: ValidationErrorCode; errorDetail?: string }

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function validateCategoryForDimension(
  dimensionId: string,
  categoryId: string,
): boolean {
  const dimension = dimensions.find((d) => d.id === dimensionId)
  if (!dimension) return false
  return dimension.categories.some((c) => c.id === categoryId)
}

const legacyDimensionAliases: Record<string, string> = {
  'Market Segments': 'Market Segmentation',
  'Ecosystem and Network Dynamics': 'Ecosystem Dynamics',
}

const legacyCategoryAliasesByDimension: Record<string, Record<string, string>> = {
  'market-segmentation': {
    sme_focused: 'b2b_smb_sme',
    enterprise_focused: 'enterprise',
  },
  'ecosystem-dynamics': {
    marketplace_model: 'marketplace',
    direct_network_effects: 'direct',
    cross_sided_network_effects: 'cross_sided',
    data_driven_network_effects: 'data_driven',
  },
}

function normalizeDimensionTitle(rawTitle: string): string {
  const trimmed = rawTitle.trim()
  return legacyDimensionAliases[trimmed] ?? trimmed
}

function normalizeCategoryId(
  dimensionId: string,
  rawCategoryId: string,
): string {
  const trimmed = rawCategoryId.trim()
  return legacyCategoryAliasesByDimension[dimensionId]?.[trimmed] ?? trimmed
}

export function serializeClassification(
  records: RecordsByDimension,
  caseName?: string,
): ClassificationExport {
  const exportRecords: ClassificationExportRecord[] = dimensions.map(
    (dimension) => {
      const record = records[dimension.id]
      return {
        dimension: dimension.title.en,
        primaryCategory: record.primaryCategory,
        evidenceSource: record.evidenceSource,
        assignmentRationale: record.assignmentRationale,
        secondaryNotes: record.secondaryNotes || '',
      }
    },
  )

  return {
    schemaVersion: SCHEMA_VERSION,
    taxonomyVersion: TAXONOMY_VERSION,
    caseName: caseName?.trim() || undefined,
    exportedAt: new Date().toISOString(),
    records: exportRecords,
  }
}

export function parseAndValidateClassification(raw: unknown): ParseResult {
  if (!isRecord(raw)) {
    return { ok: false, errorCode: 'invalid_object' }
  }

  if (raw.schemaVersion !== SCHEMA_VERSION) {
    return { ok: false, errorCode: 'unsupported_schema' }
  }

  if (raw.taxonomyVersion !== TAXONOMY_VERSION) {
    return { ok: false, errorCode: 'unsupported_taxonomy' }
  }

  if (!Array.isArray(raw.records) || raw.records.length !== 6) {
    return { ok: false, errorCode: 'invalid_record_count' }
  }

  const caseName =
    typeof raw.caseName === 'string' ? raw.caseName.trim() : ''

  const records: RecordsByDimension = {}
  const seenDimensions = new Set<string>()

  for (const item of raw.records) {
    if (!isRecord(item)) {
      return { ok: false, errorCode: 'record_not_object' }
    }

    const rawDimensionTitle = item.dimension
    if (typeof rawDimensionTitle !== 'string' || !rawDimensionTitle.trim()) {
      return { ok: false, errorCode: 'missing_dimension_title' }
    }
    const dimensionTitle = normalizeDimensionTitle(rawDimensionTitle)

    const dimensionId = dimensionTitleToId[dimensionTitle]
    if (!dimensionId) {
      return {
        ok: false,
        errorCode: 'unknown_dimension',
        errorDetail: dimensionTitle,
      }
    }

    if (seenDimensions.has(dimensionId)) {
      return {
        ok: false,
        errorCode: 'duplicate_dimension',
        errorDetail: dimensionTitle,
      }
    }
    seenDimensions.add(dimensionId)

    const rawPrimaryCategory = item.primaryCategory
    if (
      typeof rawPrimaryCategory !== 'string' ||
      !rawPrimaryCategory.trim()
    ) {
      return {
        ok: false,
        errorCode: 'missing_primary_category',
        errorDetail: dimensionTitle,
      }
    }
    const primaryCategory = normalizeCategoryId(
      dimensionId,
      rawPrimaryCategory,
    )

    if (!validateCategoryForDimension(dimensionId, primaryCategory)) {
      return {
        ok: false,
        errorCode: 'invalid_category',
        errorDetail: `${primaryCategory} · ${dimensionTitle}`,
      }
    }

    const evidenceSource = item.evidenceSource
    if (typeof evidenceSource !== 'string' || !evidenceSource.trim()) {
      return {
        ok: false,
        errorCode: 'missing_evidence',
        errorDetail: dimensionTitle,
      }
    }

    const assignmentRationale = item.assignmentRationale
    if (
      typeof assignmentRationale !== 'string' ||
      !assignmentRationale.trim()
    ) {
      return {
        ok: false,
        errorCode: 'missing_rationale',
        errorDetail: dimensionTitle,
      }
    }

    const secondaryNotes =
      typeof item.secondaryNotes === 'string' ? item.secondaryNotes : ''

    records[dimensionId] = {
      primaryCategory,
      evidenceSource,
      assignmentRationale,
      secondaryNotes,
    }
  }

  for (const dimension of dimensions) {
    if (!records[dimension.id]) {
      return {
        ok: false,
        errorCode: 'missing_dimension_record',
        errorDetail: getDimensionTitleEn(dimension.id),
      }
    }
  }

  return { ok: true, records, caseName }
}

export function downloadJson(data: ClassificationExport, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function slugifyCaseName(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return slug || 'classification'
}

export function exportRecordsFromFile(
  data: ClassificationExport,
): RecordsByDimension {
  const result = parseAndValidateClassification(data)
  if (!result.ok) {
    throw new Error(result.errorCode)
  }
  return result.records
}
