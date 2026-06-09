import { Link } from 'react-router-dom'
import { appUiText } from '../data/appUiText'
import type { ExampleMeta } from '../data/examples'
import { resolveText } from '../data/taxonomy'
import { useLocale } from '../context/useLocale'

type ExampleCardProps = {
  example: ExampleMeta
}

export function ExampleCard({ example }: ExampleCardProps) {
  const { locale } = useLocale()
  const text = appUiText[locale]

  return (
    <Link
      to={`/example/${example.id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-900">
          {example.name}
        </h3>
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
          {text.example.badge}
        </span>
      </div>
      <p className="text-sm text-slate-600">{resolveText(example.tagline, locale)}</p>
      <p className="mt-3 text-xs font-medium text-indigo-600">
        {text.example.viewProfile}
      </p>
    </Link>
  )
}
