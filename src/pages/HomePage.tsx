import { Link } from 'react-router-dom'
import { ExampleCard } from '../components/ExampleCard'
import { ImportJsonButton } from '../components/ImportJsonButton'
import { appUiText } from '../data/appUiText'
import { examples } from '../data/examples'
import { useLocale } from '../context/useLocale'

export function HomePage() {
  const { locale } = useLocale()
  const text = appUiText[locale]

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          {text.home.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
          {text.home.intro}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/wizard"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            {text.home.newClassification}
          </Link>
          <ImportJsonButton />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          <Link to="/guide" className="font-medium text-indigo-700 hover:underline">
            {text.home.usageGuide}
          </Link>
          {' · '}
          {text.home.dissertationNote}
        </p>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900">
            {text.home.examplesTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{text.home.examplesIntro}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => (
            <ExampleCard key={example.id} example={example} />
          ))}
        </div>
      </section>
    </main>
  )
}
