import { useMemo, useState, type ReactNode } from 'react'
import type { Locale } from '../types/classification'
import { LocaleContext } from './localeContextState'

const STORAGE_KEY = 'sbm-taxonomy-locale'

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'pt') return stored
  } catch {
    // ignore
  }
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = (value: Locale | ((prev: Locale) => Locale)) => {
    setLocaleState((previous) => {
      const next = typeof value === 'function' ? value(previous) : value
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // ignore
      }
      return next
    })
  }

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
