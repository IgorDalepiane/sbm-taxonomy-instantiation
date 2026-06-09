import { Link } from 'react-router-dom'
import { appUiText } from '../data/appUiText'
import { dimensions, resolveText } from '../data/taxonomy'
import { useLocale } from '../context/useLocale'

export function GuidePage() {
  const { locale } = useLocale()
  const text = appUiText[locale]
  const guide = text.guide

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="text-sm font-medium text-indigo-700 hover:underline"
      >
        {text.backToHome}
      </Link>

      <article className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">{guide.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {guide.intro}
        </p>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          {guide.dimensionsTitle}
        </h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
          {dimensions.map((dimension) => (
            <li key={dimension.id}>{resolveText(dimension.title, locale)}</li>
          ))}
        </ol>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          {guide.fieldsTitle}
        </h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>{guide.fieldPrimaryCategory}</li>
          <li>{guide.fieldEvidenceSource}</li>
          <li>{guide.fieldRationale}</li>
          <li>{guide.fieldSecondaryNotes}</li>
        </ul>

        <h2 className="mt-6 text-lg font-semibold text-slate-900">
          {guide.workflowTitle}
        </h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>{guide.workflowNew}</li>
          <li>{guide.workflowTemplate}</li>
          <li>{guide.workflowExportJson}</li>
          <li>{guide.workflowImportJson}</li>
          <li>{guide.workflowExportPdf}</li>
        </ul>
      </article>
    </main>
  )
}
