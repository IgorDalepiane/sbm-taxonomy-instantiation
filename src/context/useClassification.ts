import { useContext } from 'react'
import { ClassificationContext } from './classificationContextState'

export function useClassification() {
  const context = useContext(ClassificationContext)
  if (!context) {
    throw new Error('useClassification must be used within ClassificationProvider')
  }
  return context
}
