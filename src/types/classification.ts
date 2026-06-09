export type Locale = 'en' | 'pt'

export type LocalizedText = {
  en: string
  pt: string
}

export type Category = {
  id: string
  label: LocalizedText
}

export type Dimension = {
  id: string
  title: LocalizedText
  description: LocalizedText
  categories: Category[]
}

export type ClassificationRecord = {
  primaryCategory: string
  evidenceSource: string
  assignmentRationale: string
  secondaryNotes: string
}

export type RecordsByDimension = Record<string, ClassificationRecord>

export type ClassificationExportRecord = {
  dimension: string
  primaryCategory: string
  evidenceSource: string
  assignmentRationale: string
  secondaryNotes?: string
}

export type ClassificationExport = {
  schemaVersion: string
  taxonomyVersion: string
  caseName?: string
  exportedAt: string
  records: ClassificationExportRecord[]
}

export const SCHEMA_VERSION = '1.0'
export const TAXONOMY_VERSION = 'v1'

export const DIMENSION_TITLES_EN = [
  'Monetization and Pricing',
  'Delivery and Deployment',
  'Market Segmentation',
  'Ecosystem Dynamics',
  'Go-to-Market',
  'Adoption and Implementation',
] as const
