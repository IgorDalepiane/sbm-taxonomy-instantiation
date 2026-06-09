import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { createDefaultRecords } from '../data/taxonomy'
import type { RecordsByDimension } from '../types/classification'
import { ClassificationContext } from './classificationContextState'

export function ClassificationProvider({ children }: { children: ReactNode }) {
  const [records, setRecords] = useState<RecordsByDimension>(
    createDefaultRecords,
  )
  const [caseName, setCaseName] = useState('')
  const [importMessage, setImportMessage] = useState<string | null>(null)

  const loadClassification = useCallback(
    (nextRecords: RecordsByDimension, nextCaseName = '') => {
      setRecords(nextRecords)
      setCaseName(nextCaseName)
    },
    [],
  )

  const resetClassification = useCallback(() => {
    setRecords(createDefaultRecords())
    setCaseName('')
    setImportMessage(null)
  }, [])

  const clearImportMessage = useCallback(() => setImportMessage(null), [])

  const value = useMemo(
    () => ({
      records,
      caseName,
      importMessage,
      setRecords,
      setCaseName,
      loadClassification,
      resetClassification,
      clearImportMessage,
      setImportMessage,
    }),
    [
      records,
      caseName,
      importMessage,
      loadClassification,
      resetClassification,
      clearImportMessage,
    ],
  )

  return (
    <ClassificationContext.Provider value={value}>
      {children}
    </ClassificationContext.Provider>
  )
}
