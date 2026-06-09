import { Link, useNavigate, useParams } from 'react-router-dom'
import { appUiText } from '../data/appUiText'
import { useClassification } from '../context/useClassification'
import { useLocale } from '../context/useLocale'
import { getExampleById } from '../data/examples'
import { getExampleLocalizedField } from '../data/examples/localizedRecords'
import {
  dimensions,
  getCategoryLabel,
  resolveText,
  wizardUiText,
} from '../data/taxonomy'
import { parseAndValidateClassification } from '../lib/jsonIO'

export function ExampleProfilePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { locale } = useLocale()
  const text = appUiText[locale]
  const wizardText = wizardUiText[locale]
  const { loadClassification } = useClassification()
  const example = id ? getExampleById(id) : undefined

  if (!example) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-slate-700">{text.example.notFound}</p>
        <Link to="/" className="mt-4 inline-block text-indigo-700 hover:underline">
          {text.backToHome}
        </Link>
      </main>
    )
  }

  const parsed = parseAndValidateClassification(example.data)
  if (!parsed.ok) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-red-700">{text.example.invalidData}</p>
        <Link to="/" className="mt-4 inline-block text-indigo-700 hover:underline">
          {text.backToHome}
        </Link>
      </main>
    )
  }

  const handleUseAsTemplate = () => {
    loadClassification(parsed.records, parsed.caseName)
    navigate('/wizard')
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link
            to="/"
            className="text-sm font-medium text-indigo-700 hover:underline"
          >
            {text.backToHome}
          </Link>
          <p className="mt-2 text-sm font-medium uppercase tracking-wide text-indigo-700">
            {text.example.profileLabel}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
            {example.name}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {resolveText(example.tagline, locale)}
          </p>
        </div>
        <button
          type="button"
          onClick={handleUseAsTemplate}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          {text.example.useAsTemplate}
        </button>
      </div>

      <div className="space-y-4">
        {dimensions.map((dimension) => {
          const record = parsed.records[dimension.id]
          const exampleId = example.id
          const evidence = getExampleLocalizedField(
            exampleId,
            dimension.id,
            'evidenceSource',
            locale,
            record.evidenceSource,
          )
          const rationale = getExampleLocalizedField(
            exampleId,
            dimension.id,
            'assignmentRationale',
            locale,
            record.assignmentRationale,
          )
          const notes = getExampleLocalizedField(
            exampleId,
            dimension.id,
            'secondaryNotes',
            locale,
            record.secondaryNotes,
          )
          return (
            <section
              key={dimension.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {resolveText(dimension.title, locale)}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {resolveText(dimension.description, locale)}
              </p>

              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-slate-700">
                    {wizardText.primaryCategory}
                  </dt>
                  <dd className="mt-1 text-slate-800">
                    {getCategoryLabel(dimension, record.primaryCategory, locale)}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700">
                    {wizardText.evidenceSource}
                  </dt>
                  <dd className="mt-1 whitespace-pre-wrap text-slate-800">
                    {evidence}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700">
                    {wizardText.assignmentRationale}
                  </dt>
                  <dd className="mt-1 whitespace-pre-wrap text-slate-800">
                    {rationale}
                  </dd>
                </div>
                {notes.trim() && (
                  <div>
                    <dt className="font-semibold text-slate-700">
                      {wizardText.secondaryNotes}
                    </dt>
                    <dd className="mt-1 whitespace-pre-wrap text-slate-800">
                      {notes}
                    </dd>
                  </div>
                )}
              </dl>
            </section>
          )
        })}
      </div>
    </main>
  )
}
