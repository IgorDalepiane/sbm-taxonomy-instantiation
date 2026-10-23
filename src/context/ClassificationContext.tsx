import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { appUiText } from '../data/appUiText'
import { createDefaultRecords } from '../data/taxonomy'
import { loadDraft, saveDraft } from '../lib/draftStorage'
import type { RecordsByDimension } from '../types/classification'
import { ClassificationContext } from './classificationContextState'
import { useLocale } from './useLocale'

export function ClassificationProvider({ children }: { children: ReactNode }) {
  const { locale } = useLocale()
  const [initialDraft] = useState(loadDraft)
  const [records, setRecords] = useState<RecordsByDimension>(
    () => initialDraft?.records ?? createDefaultRecords(),
  )
  const [caseName, setCaseName] = useState(() => initialDraft?.caseName ?? '')
  const [currentIndex, setCurrentIndex] = useState(
    () => initialDraft?.currentIndex ?? 0,
  )
  const [importMessage, setImportMessage] = useState<string | null>(() =>
    initialDraft ? appUiText[locale].draftRestored : null,
  )

  useEffect(() => {
    saveDraft({ records, caseName, currentIndex })
  }, [records, caseName, currentIndex])

  const loadClassification = useCallback(
    (nextRecords: RecordsByDimension, nextCaseName = '') => {
      setRecords(nextRecords)
      setCaseName(nextCaseName)
      setCurrentIndex(0)
    },
    [],
  )

  const resetClassification = useCallback(() => {
    setRecords(createDefaultRecords())
    setCaseName('')
    setCurrentIndex(0)
    setImportMessage(null)
  }, [])

  const clearImportMessage = useCallback(() => setImportMessage(null), [])

  const value = useMemo(
    () => ({
      records,
      caseName,
      currentIndex,
      importMessage,
      setRecords,
      setCaseName,
      setCurrentIndex,
      loadClassification,
      resetClassification,
      clearImportMessage,
      setImportMessage,
    }),
    [
      records,
      caseName,
      currentIndex,
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
