import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { appUiText } from '../data/appUiText'
import { useLocale } from '../context/useLocale'
import { LocaleToggle } from './LocaleToggle'

export function AppLayout() {
  const { locale } = useLocale()
  const text = appUiText[locale]

  useEffect(() => {
    document.title = text.browserTitle
  }, [text.browserTitle])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/30">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="min-w-0 group">
            <p className="truncate text-xs font-medium uppercase tracking-wide text-indigo-700">
              {text.headerTagline}
            </p>
            <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-indigo-900 sm:text-base">
              {text.headerTitle}
            </p>
          </Link>
          <LocaleToggle />
        </div>
      </header>
      <Outlet />
    </div>
  )
}
