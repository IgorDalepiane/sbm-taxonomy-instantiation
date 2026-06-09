import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { appUiText, translateValidationError } from '../data/appUiText'
import { useClassification } from '../context/useClassification'
import { useLocale } from '../context/useLocale'
import { parseAndValidateClassification } from '../lib/jsonIO'

type ImportJsonButtonProps = {
  variant?: 'primary' | 'secondary'
}

export function ImportJsonButton({ variant = 'secondary' }: ImportJsonButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const { locale } = useLocale()
  const text = appUiText[locale]
  const { loadClassification, setImportMessage } = useClassification()
  const [error, setError] = useState<string | null>(null)

  const handleFile = async (file: File) => {
    setError(null)
    try {
      const fileText = await file.text()
      const parsed: unknown = JSON.parse(fileText)
      const result = parseAndValidateClassification(parsed)
      if (!result.ok) {
        setError(
          translateValidationError(
            result.errorCode,
            locale,
            result.errorDetail,
          ),
        )
        return
      }
      loadClassification(result.records, result.caseName)
      setImportMessage(
        result.caseName
          ? text.importSuccess(result.caseName)
          : text.importSuccessGeneric,
      )
      navigate('/wizard')
    } catch {
      setError(text.importFileError)
    }
  }

  const buttonClass =
    variant === 'primary'
      ? 'rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700'
      : 'rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50'

  return (
    <div className="flex flex-col items-start gap-2">
      <input
        ref={inputRef}
        type="file"
        accept=".json,application/json"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0]
          if (file) void handleFile(file)
          event.target.value = ''
        }}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={buttonClass}
      >
        {text.importJson}
      </button>
      {error && (
        <p className="max-w-md rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
