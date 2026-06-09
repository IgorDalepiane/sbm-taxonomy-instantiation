import { useLocale } from '../context/useLocale'
import type { Locale } from '../types/classification'

export function LocaleToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <div
      className="inline-flex rounded-lg border border-slate-300 bg-white p-1"
      role="group"
      aria-label="Language"
    >
      {(['pt', 'en'] as const satisfies readonly Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-md px-3 py-1 text-xs font-semibold transition ${
            locale === code
              ? 'bg-indigo-600 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
