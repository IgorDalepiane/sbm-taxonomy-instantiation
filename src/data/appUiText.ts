import type { Locale } from '../types/classification'
import type { ValidationErrorCode } from '../lib/jsonIO'

export const appUiText: Record<
  Locale,
  {
    browserTitle: string
    headerTagline: string
    headerTitle: string
    backToHome: string
    home: {
      title: string
      intro: string
      newClassification: string
      usageGuide: string
      dissertationNote: string
      examplesTitle: string
      examplesIntro: string
    }
    guide: {
      title: string
      intro: string
      dimensionsTitle: string
      fieldsTitle: string
      fieldPrimaryCategory: string
      fieldEvidenceSource: string
      fieldRationale: string
      fieldSecondaryNotes: string
      workflowTitle: string
      workflowNew: string
      workflowTemplate: string
      workflowExportJson: string
      workflowImportJson: string
      workflowExportPdf: string
    }
    example: {
      badge: string
      viewProfile: string
      profileLabel: string
      useAsTemplate: string
      notFound: string
      invalidData: string
    }
    importJson: string
    exportJson: string
    importSuccess: (caseName: string) => string
    importSuccessGeneric: string
    importFileError: string
    caseNameLabel: string
    caseNamePlaceholder: string
  }
> = {
  en: {
    browserTitle: 'SBM Taxonomy Instantiation',
    headerTagline: 'Software Business Models',
    headerTitle: 'SBM Taxonomy Instantiation',
    backToHome: '← Back to home',
    home: {
      title: 'SBM Taxonomy Instantiation',
      intro:
        'Instantiate the Software Business Model (SBM) taxonomy v1 across six fixed dimensions. Document a primary category, evidence source, assignment rationale, and optional secondary notes for each dimension—then export your classification as JSON or PDF.',
      newClassification: 'New classification',
      usageGuide: 'Usage guide',
      dissertationNote: 'For dissertation artifact structure (Cap. 6)',
      examplesTitle: 'Examples',
      examplesIntro:
        'Three pre-classified software cases covering distinct business model profiles.',
    },
    guide: {
      title: 'Usage guide',
      intro:
        'This prototype supports taxonomy instantiation for software business models (SBM taxonomy v1). It complements the static appendix form described in the dissertation (Cap. 6, §6.6.2).',
      dimensionsTitle: 'Six dimensions',
      fieldsTitle: 'Artifact fields (per dimension)',
      fieldPrimaryCategory:
        'Primary Category — one dominant category per dimension.',
      fieldEvidenceSource:
        'Evidence Source — verifiable source for your assignment.',
      fieldRationale:
        'Assignment Rationale — short justification when multiple categories are plausible.',
      fieldSecondaryNotes:
        'Secondary Notes — optional complementary context.',
      workflowTitle: 'Workflow',
      workflowNew:
        'Start a new classification or open an example profile.',
      workflowTemplate:
        'Use Use as template on an example to copy its profile into the editable wizard.',
      workflowExportJson:
        'Export JSON to share classifications with other evaluators (§6.7).',
      workflowImportJson:
        "Import JSON to load a peer's classification for comparison.",
      workflowExportPdf:
        'Export PDF for a consolidated report of all six dimensions.',
    },
    example: {
      badge: 'Example',
      viewProfile: 'View profile →',
      profileLabel: 'Example profile',
      useAsTemplate: 'Use as template',
      notFound: 'Example not found.',
      invalidData: 'Invalid example data.',
    },
    importJson: 'Import JSON',
    exportJson: 'Export JSON',
    importSuccess: (caseName) => `Imported "${caseName}" successfully.`,
    importSuccessGeneric: 'Classification imported successfully.',
    importFileError: 'Could not read the file. Please upload a valid JSON file.',
    caseNameLabel: 'Case name (optional)',
    caseNamePlaceholder: 'e.g. Acme Corp — CRM platform',
  },
  pt: {
    browserTitle: 'Instanciação da Taxonomia SBM',
    headerTagline: 'Modelos de Negócio de Software',
    headerTitle: 'Instanciação da Taxonomia SBM',
    backToHome: '← Voltar ao início',
    home: {
      title: 'Instanciação da Taxonomia SBM',
      intro:
        'Instancie a taxonomia de Modelos de Negócio de Software (SBM) v1 em seis dimensões fixas. Registre categoria primária, fonte de evidência, justificativa da atribuição e notas secundárias opcionais para cada dimensão — depois exporte a classificação em JSON ou PDF.',
      newClassification: 'Nova classificação',
      usageGuide: 'Guia de uso',
      dissertationNote: 'Para a estrutura do artefato da dissertação (Cap. 6)',
      examplesTitle: 'Exemplos',
      examplesIntro:
        'Três casos de software pré-classificados cobrindo perfis distintos de modelo de negócio.',
    },
    guide: {
      title: 'Guia de uso',
      intro:
        'Este protótipo apoia a instanciação da taxonomia de modelos de negócio de software (taxonomia SBM v1). Complementa o formulário estático do apêndice descrito na dissertação (Cap. 6, §6.6.2).',
      dimensionsTitle: 'Seis dimensões',
      fieldsTitle: 'Campos do artefato (por dimensão)',
      fieldPrimaryCategory:
        'Categoria Primária — uma categoria dominante por dimensão.',
      fieldEvidenceSource:
        'Fonte de Evidência — origem verificável da atribuição.',
      fieldRationale:
        'Justificativa da Atribuição — justificativa curta quando mais de uma categoria é plausível.',
      fieldSecondaryNotes:
        'Notas Secundárias — contexto complementar opcional.',
      workflowTitle: 'Fluxo de trabalho',
      workflowNew:
        'Inicie uma nova classificação ou abra o perfil de um exemplo.',
      workflowTemplate:
        'Use Usar como modelo em um exemplo para copiar o perfil para o wizard editável.',
      workflowExportJson:
        'Exporte JSON para compartilhar classificações com outros avaliadores (§6.7).',
      workflowImportJson:
        'Importe JSON para carregar a classificação de outro classificador para comparação.',
      workflowExportPdf:
        'Exporte PDF para um relatório consolidado das seis dimensões.',
    },
    example: {
      badge: 'Exemplo',
      viewProfile: 'Ver perfil →',
      profileLabel: 'Perfil de exemplo',
      useAsTemplate: 'Usar como modelo',
      notFound: 'Exemplo não encontrado.',
      invalidData: 'Dados do exemplo inválidos.',
    },
    importJson: 'Importar JSON',
    exportJson: 'Exportar JSON',
    importSuccess: (caseName) => `"${caseName}" importado com sucesso.`,
    importSuccessGeneric: 'Classificação importada com sucesso.',
    importFileError:
      'Não foi possível ler o arquivo. Envie um arquivo JSON válido.',
    caseNameLabel: 'Nome do caso (opcional)',
    caseNamePlaceholder: 'ex.: Acme Corp — plataforma CRM',
  },
}

export function translateValidationError(
  code: ValidationErrorCode,
  locale: Locale,
  detail?: string,
): string {
  const messages: Record<Locale, Record<ValidationErrorCode, string>> = {
    en: {
      invalid_object: 'Invalid file: expected a JSON object.',
      unsupported_schema: `Unsupported schema version. Expected "1.0".`,
      unsupported_taxonomy: `Unsupported taxonomy version. Expected "v1".`,
      invalid_record_count:
        'Classification must contain exactly 6 dimension records.',
      record_not_object: 'Each record must be a JSON object.',
      missing_dimension_title:
        'Each record must include a dimension title.',
      unknown_dimension: detail
        ? `Unknown dimension: "${detail}".`
        : 'Unknown dimension.',
      duplicate_dimension: detail
        ? `Duplicate dimension: "${detail}".`
        : 'Duplicate dimension.',
      missing_primary_category: detail
        ? `Primary category is required for "${detail}".`
        : 'Primary category is required.',
      invalid_category: detail
        ? `Invalid category for dimension "${detail}".`
        : 'Invalid category for dimension.',
      missing_evidence: detail
        ? `Evidence source is required for "${detail}".`
        : 'Evidence source is required.',
      missing_rationale: detail
        ? `Assignment rationale is required for "${detail}".`
        : 'Assignment rationale is required.',
      missing_dimension_record: detail
        ? `Missing record for dimension "${detail}".`
        : 'Missing dimension record.',
    },
    pt: {
      invalid_object: 'Arquivo inválido: era esperado um objeto JSON.',
      unsupported_schema: 'Versão de schema não suportada. Esperado "1.0".',
      unsupported_taxonomy: 'Versão da taxonomia não suportada. Esperado "v1".',
      invalid_record_count:
        'A classificação deve conter exatamente 6 registros de dimensão.',
      record_not_object: 'Cada registro deve ser um objeto JSON.',
      missing_dimension_title:
        'Cada registro deve incluir o título da dimensão.',
      unknown_dimension: detail
        ? `Dimensão desconhecida: "${detail}".`
        : 'Dimensão desconhecida.',
      duplicate_dimension: detail
        ? `Dimensão duplicada: "${detail}".`
        : 'Dimensão duplicada.',
      missing_primary_category: detail
        ? `Categoria primária obrigatória para "${detail}".`
        : 'Categoria primária obrigatória.',
      invalid_category: detail
        ? `Categoria inválida para a dimensão "${detail}".`
        : 'Categoria inválida para a dimensão.',
      missing_evidence: detail
        ? `Fonte de evidência obrigatória para "${detail}".`
        : 'Fonte de evidência obrigatória.',
      missing_rationale: detail
        ? `Justificativa da atribuição obrigatória para "${detail}".`
        : 'Justificativa da atribuição obrigatória.',
      missing_dimension_record: detail
        ? `Registro ausente para a dimensão "${detail}".`
        : 'Registro de dimensão ausente.',
    },
  }
  return messages[locale][code]
}
