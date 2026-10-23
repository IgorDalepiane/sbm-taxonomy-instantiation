import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { RecordsByDimension } from '../types/classification'

export type ClassificationContextValue = {
  records: RecordsByDimension
  caseName: string
  currentIndex: number
  importMessage: string | null
  setRecords: Dispatch<SetStateAction<RecordsByDimension>>
  setCaseName: (name: string) => void
  setCurrentIndex: Dispatch<SetStateAction<number>>
  loadClassification: (records: RecordsByDimension, caseName?: string) => void
  resetClassification: () => void
  clearImportMessage: () => void
  setImportMessage: (message: string | null) => void
}

export const ClassificationContext =
  createContext<ClassificationContextValue | null>(null)
