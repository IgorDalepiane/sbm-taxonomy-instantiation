import type { ClassificationExport, LocalizedText } from '../../types/classification'
import { parseAndValidateClassification } from '../../lib/jsonIO'
import adobeData from './adobe.json'
import notionData from './notion.json'
import stripeData from './stripe.json'

export type ExampleMeta = {
  id: string
  name: string
  tagline: LocalizedText
  data: ClassificationExport
}

function loadExample(data: unknown, label: string): ClassificationExport {
  const result = parseAndValidateClassification(data)
  if (!result.ok) {
    throw new Error(`Invalid example ${label}: ${result.errorCode}`)
  }
  return data as ClassificationExport
}

export const examples: ExampleMeta[] = [
  {
    id: 'adobe',
    name: 'Adobe Creative Cloud',
    tagline: {
      en: 'B2C creative suite · subscription transition',
      pt: 'Suite criativa B2C · transição para assinatura',
    },
    data: loadExample(adobeData, 'adobe'),
  },
  {
    id: 'notion',
    name: 'Notion',
    tagline: {
      en: 'Freemium collaboration · bottom-up PLG',
      pt: 'Colaboração freemium · PLG bottom-up',
    },
    data: loadExample(notionData, 'notion'),
  },
  {
    id: 'stripe',
    name: 'Stripe',
    tagline: {
      en: 'API payments · two-sided platform',
      pt: 'Pagamentos via API · plataforma bilateral',
    },
    data: loadExample(stripeData, 'stripe'),
  },
]

export function getExampleById(id: string): ExampleMeta | undefined {
  return examples.find((example) => example.id === id)
}
