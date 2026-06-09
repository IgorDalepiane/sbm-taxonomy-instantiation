import { createContext, type Dispatch, type SetStateAction } from 'react'
import type { Locale } from '../types/classification'

export type LocaleContextValue = {
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
