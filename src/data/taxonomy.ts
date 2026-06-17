import type {
  Dimension,
  Locale,
  LocalizedText,
  RecordsByDimension,
} from '../types/classification'

export const wizardUiText: Record<
  Locale,
  {
    appTagline: string
    appTitle: string
    intro: string
    completion: string
    dimensions: string
    dimensionTerm: string
    dimensionHelp: string
    done: string
    pending: string
    dimensionProgress: (current: number, total: number) => string
    primaryCategory: string
    primaryCategoryTerm: string
    primaryCategoryHelp: string
    showDefinitions: string
    hideDefinitions: string
    categoryDefinitions: string
    evidenceSource: string
    evidenceSourceTerm: string
    evidenceSourceHelp: string
    evidencePlaceholder: string
    assignmentRationale: string
    assignmentRationaleTerm: string
    assignmentRationaleHelp: string
    rationalePlaceholder: string
    secondaryNotes: string
    secondaryNotesTerm: string
    secondaryNotesHelp: string
    secondaryPlaceholder: string
    previous: string
    next: string
    resetForm: string
    exportPdf: string
    completionCounter: (done: number, total: number) => string
    pdfTitle: string
    pdfGeneratedAt: string
    pdfCompletion: string
    pdfFooter: string
    pdfHeaders: [string, string, string, string, string]
    browserTitle: string
  }
> = {
  en: {
    appTagline: 'Software Business Models',
    appTitle: 'Taxonomy Instantiation Workspace',
    intro:
      'Classify a software business model across six dimensions. For each dimension, select one primary category and document what supports your choice, why it is primary, and any complementary context.',
    completion: 'Completion',
    dimensions: 'Dimensions',
    dimensionTerm: 'Dimension',
    dimensionHelp:
      'An analytical axis used to classify software business model configurations. The taxonomy uses six fixed dimensions.',
    done: 'Done',
    pending: 'Pending',
    dimensionProgress: (current, total) => `Dimension ${current} of ${total}`,
    primaryCategory: 'Primary Category',
    primaryCategoryTerm: 'Primary Category',
    primaryCategoryHelp:
      'The dominant category for this dimension. Assign exactly one primary category per dimension so profiles remain comparable.',
    showDefinitions: 'Show Definitions',
    hideDefinitions: 'Hide Definitions',
    categoryDefinitions: 'Category Definitions',
    evidenceSource: 'Evidence Source',
    evidenceSourceTerm: 'Evidence Source',
    evidenceSourceHelp:
      'Where the information comes from so someone else can verify your choice (for example, product website, pricing page, contract, demo, interview, or internal document).',
    evidencePlaceholder:
      'Example: pricing page, product documentation, customer contract, public report, or stakeholder interview.',
    assignmentRationale: 'Assignment Rationale',
    assignmentRationaleTerm: 'Assignment Rationale',
    assignmentRationaleHelp:
      'Short justification for why this category is primary in your case, especially when multiple categories seem plausible.',
    rationalePlaceholder:
      'Explain why this category is dominant (for example, where most revenue, adoption, or operational focus is concentrated).',
    secondaryNotes: 'Secondary Notes (Optional)',
    secondaryNotesTerm: 'Secondary Notes',
    secondaryNotesHelp:
      'Optional complementary details (secondary channels, revenue streams, transition context) that do not change the primary category.',
    secondaryPlaceholder:
      'Optional: secondary channels, mixed models, constraints, or transition notes.',
    previous: 'Previous',
    next: 'Next',
    resetForm: 'Reset Form',
    exportPdf: 'Export PDF',
    completionCounter: (done, total) => `${done} / ${total} dimensions complete`,
    pdfTitle: 'SBM Taxonomy Classification Report',
    pdfGeneratedAt: 'Generated',
    pdfCompletion: 'Completion',
    pdfFooter:
      'Classification profile generated from the SBM taxonomy instantiation form.',
    pdfHeaders: [
      'Dimension',
      'Primary Category',
      'Evidence Source',
      'Assignment Rationale',
      'Secondary Notes',
    ],
    browserTitle: 'SBM Taxonomy Classifier',
  },
  pt: {
    appTagline: 'Modelos de Negócio de Software',
    appTitle: 'Espaço de Instanciação da Taxonomia',
    intro:
      'Classifique um modelo de negócio de software em seis dimensões. Em cada dimensão, selecione uma categoria primária e registre o que sustenta a escolha, por que ela é primária e qual contexto complementar é relevante.',
    completion: 'Progresso',
    dimensions: 'Dimensões',
    dimensionTerm: 'Dimensão',
    dimensionHelp:
      'Eixo analítico usado para classificar configurações de modelo de negócio de software. A taxonomia utiliza seis dimensões fixas.',
    done: 'Concluído',
    pending: 'Pendente',
    dimensionProgress: (current, total) => `Dimensão ${current} de ${total}`,
    primaryCategory: 'Categoria Primária',
    primaryCategoryTerm: 'Categoria Primária',
    primaryCategoryHelp:
      'Categoria dominante nesta dimensão. Atribua exatamente uma categoria primária por dimensão para manter comparabilidade entre perfis.',
    showDefinitions: 'Mostrar Definições',
    hideDefinitions: 'Ocultar Definições',
    categoryDefinitions: 'Definições das Categorias',
    evidenceSource: 'Fonte de Evidência',
    evidenceSourceTerm: 'Fonte de Evidência',
    evidenceSourceHelp:
      'Origem da informação para que outra pessoa consiga verificar a escolha (por exemplo, site do produto, página de preços, contrato, demonstração, entrevista ou documento interno).',
    evidencePlaceholder:
      'Exemplo: página de preços, documentação do produto, contrato com cliente, relatório público ou entrevista com stakeholder.',
    assignmentRationale: 'Justificativa da Atribuição',
    assignmentRationaleTerm: 'Justificativa da Atribuição',
    assignmentRationaleHelp:
      'Justificativa curta de por que esta categoria é primária no seu caso, especialmente quando mais de uma categoria parece plausível.',
    rationalePlaceholder:
      'Explique por que esta categoria é dominante (por exemplo, onde se concentra a maior parte da receita, da adoção ou do foco operacional).',
    secondaryNotes: 'Notas Secundárias (Opcional)',
    secondaryNotesTerm: 'Notas Secundárias',
    secondaryNotesHelp:
      'Detalhes complementares opcionais (canais secundários, fluxos de receita, contexto de transição) que não alteram a categoria primária.',
    secondaryPlaceholder:
      'Opcional: canais secundários, modelos mistos, restrições ou observações de transição.',
    previous: 'Anterior',
    next: 'Próxima',
    resetForm: 'Limpar Formulário',
    exportPdf: 'Exportar PDF',
    completionCounter: (done, total) =>
      `${done} / ${total} dimensões concluídas`,
    pdfTitle: 'Relatório de Classificação da Taxonomia SBM',
    pdfGeneratedAt: 'Gerado em',
    pdfCompletion: 'Progresso',
    pdfFooter:
      'Perfil de classificação gerado a partir do formulário de instanciação da taxonomia SBM.',
    pdfHeaders: [
      'Dimensão',
      'Categoria Primária',
      'Fonte de Evidência',
      'Justificativa',
      'Notas Secundárias',
    ],
    browserTitle: 'Classificador da Taxonomia SBM',
  },
}

export const categoryHelp: Record<string, LocalizedText> = {
  recurring_subscription: {
    en: 'Revenue model based on recurring payments over defined periods (for example, monthly or yearly plans).',
    pt: 'Modelo de receita baseado em pagamentos recorrentes em períodos definidos (por exemplo, planos mensais ou anuais).',
  },
  usage_consumption: {
    en: 'Revenue model where charges depend on actual usage volume, transactions, or consumed resources.',
    pt: 'Modelo de receita em que a cobrança depende do volume real de uso, de transações ou de recursos consumidos.',
  },
  transaction: {
    en: 'Revenue is generated per completed transaction, exchange, or mediated operation.',
    pt: 'A receita é gerada por transação concluída, troca ou operação mediada.',
  },
  advertising: {
    en: 'Revenue is generated by selling advertising space, audience access, or sponsored exposure.',
    pt: 'A receita é gerada pela venda de espaço publicitário, acesso à audiência ou exposição patrocinada.',
  },
  perpetual_license: {
    en: 'Revenue comes from one-time licensing with indefinite use rights, usually with separate support terms.',
    pt: 'A receita vem de licenciamento único com direito de uso por tempo indeterminado, geralmente com suporte em termos separados.',
  },
  subscription_pricing: {
    en: 'Pricing logic organized as recurring plan tiers with periodic payment cycles.',
    pt: 'Lógica de precificação organizada em níveis de plano recorrentes com ciclos periódicos de pagamento.',
  },
  payg_pricing: {
    en: 'Pricing logic where costs scale with effective use, without fixed recurring commitment.',
    pt: 'Lógica de precificação em que os custos escalam com o uso efetivo, sem compromisso recorrente fixo.',
  },
  value_based_pricing: {
    en: 'Pricing is set according to perceived or measurable customer value rather than cost only.',
    pt: 'A precificação é definida conforme o valor percebido ou mensurável para o cliente, e não apenas pelo custo.',
  },
  cost_based_pricing: {
    en: 'Pricing is derived primarily from internal cost structure plus target margin.',
    pt: 'A precificação é derivada principalmente da estrutura de custos interna somada à margem desejada.',
  },
  freemium: {
    en: 'A free baseline offering is provided while advanced features or capacity require payment.',
    pt: 'Uma oferta básica gratuita é disponibilizada, enquanto funcionalidades avançadas ou maior capacidade exigem pagamento.',
  },
  data_driven_monetization: {
    en: 'Data assets or analytics capabilities are directly or indirectly converted into revenue.',
    pt: 'Ativos de dados ou capacidades analíticas são convertidos direta ou indiretamente em receita.',
  },
  multi_tenant_saas: {
    en: 'A shared software instance serves multiple customers with logical data separation.',
    pt: 'Uma instância compartilhada do software atende múltiplos clientes com separação lógica de dados.',
  },
  cloud_delivery: {
    en: 'Software is delivered and operated through cloud infrastructure rather than local installation.',
    pt: 'O software é entregue e operado por infraestrutura em nuvem, em vez de instalação local.',
  },
  mobile_app_orientation: {
    en: 'The offering is primarily distributed and consumed through mobile app ecosystems.',
    pt: 'A oferta é distribuída e consumida principalmente por ecossistemas de aplicativos móveis.',
  },
  hybrid_deployment: {
    en: 'Two deployment modes are structurally combined (for example, cloud plus on-premise).',
    pt: 'Dois modos de implantação são combinados estruturalmente (por exemplo, nuvem e on-premise).',
  },
  api_based_delivery: {
    en: 'Core value is delivered through programmable interfaces integrated into external systems.',
    pt: 'O valor central é entregue por interfaces programáveis integradas a sistemas externos.',
  },
  b2b: {
    en: 'Business-to-business focus, where organizations are the primary customers.',
    pt: 'Foco business-to-business, em que organizações são os clientes principais.',
  },
  b2c: {
    en: 'Business-to-consumer focus, where end users are the primary customers.',
    pt: 'Foco business-to-consumer, em que usuários finais são os clientes principais.',
  },
  b2b_smb_sme: {
    en: 'Business-to-business focus directed to small and medium-sized businesses.',
    pt: 'Foco business-to-business direcionado a pequenas e médias empresas.',
  },
  mid_market: {
    en: 'Commercial focus on mid-market organizations with intermediate complexity and scale.',
    pt: 'Foco comercial em organizações mid-market com complexidade e escala intermediárias.',
  },
  enterprise: {
    en: 'Commercial focus directed to large enterprises with complex requirements and procurement cycles.',
    pt: 'Foco comercial direcionado a grandes empresas com requisitos complexos e ciclos formais de contratação.',
  },
  developers_dev_tools: {
    en: 'Primary customer profile is developers or technical teams adopting dev-tools workflows.',
    pt: 'Perfil de cliente principal formado por desenvolvedores ou times técnicos em fluxos de dev-tools.',
  },
  government_b2g: {
    en: 'Business-to-government focus, serving public-sector institutions and procurement contexts.',
    pt: 'Foco business-to-government, atendendo instituições do setor público e contextos de compras governamentais.',
  },
  others: {
    en: 'Market profile does not fit the listed segments cleanly and requires clarification in secondary notes.',
    pt: 'Perfil de mercado que não se encaixa claramente nos segmentos listados e exige detalhamento em notas secundárias.',
  },
  standalone_product: {
    en: 'The focal software creates value mainly as an independent product, not as a multi-sided platform.',
    pt: 'O software focal gera valor principalmente como produto independente, e não como plataforma de múltiplos lados.',
  },
  two_sided_platform: {
    en: 'The software mediates interactions between two distinct participant groups that co-create value.',
    pt: 'O software media interações entre dois grupos distintos de participantes que cocriam valor.',
  },
  marketplace: {
    en: 'The software operates as a marketplace environment that matches supply and demand participants.',
    pt: 'O software opera como um ambiente de marketplace que conecta participantes de oferta e demanda.',
  },
  plugin_complement: {
    en: 'The product creates value as a complement, extension, or plugin on top of another core platform.',
    pt: 'O produto cria valor como complemento, extensão ou plugin sobre outra plataforma principal.',
  },
  oem_component: {
    en: 'The offering is embedded as a component in third-party products via OEM or white-label arrangements.',
    pt: 'A oferta é embarcada como componente em produtos de terceiros por meio de arranjos OEM ou white-label.',
  },
  direct: {
    en: 'Value increases primarily as participation grows on the same user side.',
    pt: 'O valor aumenta principalmente à medida que cresce a participação no mesmo lado de usuários.',
  },
  cross_sided: {
    en: 'Value on one side increases as participation expands on the opposite side.',
    pt: 'O valor em um lado aumenta conforme a participação se expande no lado oposto.',
  },
  data_driven: {
    en: 'Value improves as accumulated usage data enhances matching, recommendations, or system performance.',
    pt: 'O valor melhora à medida que dados acumulados de uso aprimoram matching, recomendações ou desempenho do sistema.',
  },
  direct_sales: {
    en: 'Customer acquisition is mainly driven by direct commercial interaction with the provider.',
    pt: 'A aquisição de clientes é impulsionada principalmente por interação comercial direta com o fornecedor.',
  },
  product_led_growth: {
    en: 'Acquisition and conversion are primarily driven by product usage and self-service adoption.',
    pt: 'Aquisição e conversão são guiadas principalmente pelo uso do produto e pela adoção em autosserviço.',
  },
  partners_channels: {
    en: 'Acquisition is primarily mediated by third-party partners, resellers, or channel networks.',
    pt: 'A aquisição é mediada principalmente por parceiros terceiros, revendedores ou redes de canais.',
  },
  digital_marketing: {
    en: 'Acquisition depends mainly on digital campaigns, inbound strategies, and online demand generation.',
    pt: 'A aquisição depende principalmente de campanhas digitais, estratégias de inbound e geração de demanda online.',
  },
  marketplace_channel: {
    en: 'Acquisition relies on listing and conversion through external marketplace ecosystems.',
    pt: 'A aquisição depende de listagem e conversão por ecossistemas externos de marketplace.',
  },
  ecosystem_management: {
    en: 'Implementation success depends on orchestrating relationships and incentives among ecosystem actors.',
    pt: 'O sucesso da implementação depende da orquestração de relacionamentos e incentivos entre atores do ecossistema.',
  },
  market_expansion: {
    en: 'Adoption gains are linked to entering or scaling into broader customer or geographic markets.',
    pt: 'Ganhos de adoção estão ligados à entrada ou escala em mercados mais amplos de clientes ou geografias.',
  },
  organizational_preparedness: {
    en: 'Adoption depends on internal readiness in structure, skills, governance, and processes.',
    pt: 'A adoção depende da prontidão interna em estrutura, competências, governança e processos.',
  },
  service_quality_improvement: {
    en: 'Adoption benefits from measurable enhancements in reliability, support, and user experience.',
    pt: 'A adoção se beneficia de melhorias mensuráveis em confiabilidade, suporte e experiência do usuário.',
  },
  value_based_orientation: {
    en: 'Implementation decisions are guided by delivered customer value rather than technical outputs alone.',
    pt: 'As decisões de implementação são orientadas pelo valor entregue ao cliente, e não apenas por entregas técnicas.',
  },
  security_concerns: {
    en: 'Adoption is constrained by risk perception and requirements related to information security and trust.',
    pt: 'A adoção é limitada por percepção de risco e requisitos ligados à segurança da informação e confiança.',
  },
  revenue_stream_transformation: {
    en: 'Adoption involves shifting revenue logic (for example, from one-time licensing to recurring models).',
    pt: 'A adoção envolve mudança de lógica de receita (por exemplo, de licença única para modelos recorrentes).',
  },
  organizational_readiness: {
    en: 'Implementation friction emerges when internal capabilities and change capacity are insufficient.',
    pt: 'Atritos de implementação surgem quando capacidades internas e capacidade de mudança são insuficientes.',
  },
  partner_ecosystem_disruption: {
    en: 'Adoption may create tension with existing partners, roles, or compensation structures.',
    pt: 'A adoção pode gerar tensão com parceiros existentes, papéis definidos ou estruturas de compensação.',
  },
  customer_trust_maintenance: {
    en: 'Sustained adoption requires preserving confidence during pricing, delivery, or operational transitions.',
    pt: 'A adoção sustentada exige preservar confiança durante transições de precificação, entrega ou operação.',
  },
  quality_management: {
    en: 'Implementation outcomes depend on continuous monitoring and governance of service quality.',
    pt: 'Os resultados de implementação dependem de monitoramento contínuo e governança da qualidade do serviço.',
  },
  flexible_pricing_strategies: {
    en: 'Mitigation through adaptable pricing structures to reduce adoption barriers and transition risks.',
    pt: 'Mitigação por estruturas de preço adaptáveis para reduzir barreiras de adoção e riscos de transição.',
  },
  hybrid_model_adoption: {
    en: 'Mitigation by combining legacy and new model elements during transition phases.',
    pt: 'Mitigação pela combinação de elementos de modelo legado e novo durante fases de transição.',
  },
  pilot_implementation: {
    en: 'Mitigation through controlled small-scale rollout before broader deployment.',
    pt: 'Mitigação por implantação piloto controlada em pequena escala antes de ampliar o rollout.',
  },
  partner_compensation: {
    en: 'Mitigation by redesigning partner incentives to reduce resistance and align ecosystem interests.',
    pt: 'Mitigação pelo redesenho de incentivos de parceiros para reduzir resistência e alinhar interesses do ecossistema.',
  },
}

export const dimensions: Dimension[] = [
  {
    id: 'monetization-pricing',
    title: { en: 'Monetization and Pricing', pt: 'Monetização e Precificação' },
    description: {
      en: 'How value capture is operationalized through revenue logic and pricing architecture.',
      pt: 'Como a captura de valor é operacionalizada por lógica de receita e arquitetura de precificação.',
    },
    categories: [
      { id: 'recurring_subscription', label: { en: 'Recurring subscription', pt: 'Assinatura recorrente' } },
      { id: 'usage_consumption', label: { en: 'Usage/consumption', pt: 'Uso/consumo' } },
      { id: 'transaction', label: { en: 'Transaction', pt: 'Transação' } },
      { id: 'advertising', label: { en: 'Advertising', pt: 'Publicidade' } },
      { id: 'perpetual_license', label: { en: 'Perpetual license', pt: 'Licença perpétua' } },
      { id: 'subscription_pricing', label: { en: 'Subscription-based pricing', pt: 'Precificação por assinatura' } },
      { id: 'payg_pricing', label: { en: 'Pay-as-you-go pricing', pt: 'Precificação por uso' } },
      { id: 'value_based_pricing', label: { en: 'Value-based pricing', pt: 'Precificação por valor' } },
      { id: 'cost_based_pricing', label: { en: 'Cost-based pricing', pt: 'Precificação por custo' } },
      { id: 'freemium', label: { en: 'Freemium', pt: 'Freemium' } },
      { id: 'data_driven_monetization', label: { en: 'Data-driven monetization', pt: 'Monetização orientada a dados' } },
    ],
  },
  {
    id: 'delivery-deployment',
    title: { en: 'Delivery and Deployment', pt: 'Entrega e Implantação' },
    description: {
      en: 'How the software is delivered, hosted, and technically operated for customers.',
      pt: 'Como o software é entregue, hospedado e operado tecnicamente para os clientes.',
    },
    categories: [
      { id: 'multi_tenant_saas', label: { en: 'Multi-tenant SaaS', pt: 'SaaS multi-tenant' } },
      { id: 'cloud_delivery', label: { en: 'Cloud delivery model', pt: 'Modelo de entrega em nuvem' } },
      { id: 'mobile_app_orientation', label: { en: 'Mobile app market orientation', pt: 'Orientação ao mercado de apps móveis' } },
      { id: 'hybrid_deployment', label: { en: 'Hybrid business model deployment', pt: 'Implantação híbrida do modelo de negócio' } },
      { id: 'api_based_delivery', label: { en: 'API-based business model delivery', pt: 'Entrega do modelo de negócio baseada em API' } },
    ],
  },
  {
    id: 'market-segmentation',
    title: { en: 'Market Segmentation', pt: 'Segmentação de Mercado' },
    description: {
      en: 'Which customer profile and commercial segment are prioritized by the business model. If multiple segments apply, keep one primary category and capture additional segments in Secondary Notes.',
      pt: 'Qual perfil de cliente e segmento comercial são priorizados pelo modelo de negócio. Se múltiplos segmentos se aplicarem, mantenha uma categoria primária e registre os demais em Notas Secundárias.',
    },
    categories: [
      { id: 'b2b', label: { en: 'B2B', pt: 'B2B' } },
      { id: 'b2c', label: { en: 'B2C', pt: 'B2C' } },
      { id: 'b2b_smb_sme', label: { en: 'B2B SMB / SME', pt: 'B2B PMEs' } },
      { id: 'mid_market', label: { en: 'Mid-market', pt: 'Mid-market' } },
      { id: 'enterprise', label: { en: 'Enterprise', pt: 'Enterprise' } },
      { id: 'developers_dev_tools', label: { en: 'Developers/Dev-tools', pt: 'Desenvolvedores/Dev-tools' } },
      { id: 'government_b2g', label: { en: 'Government / B2G', pt: 'Governo / B2G' } },
      { id: 'others', label: { en: 'Others', pt: 'Outros' } },
    ],
  },
  {
    id: 'ecosystem-dynamics',
    title: { en: 'Ecosystem Dynamics', pt: 'Dinâmica de Ecossistema' },
    description: {
      en: 'What ecosystem role is played and which network effects drive growth.',
      pt: 'Qual papel ecossistêmico é desempenhado e quais efeitos de rede impulsionam o crescimento.',
    },
    categories: [
      { id: 'standalone_product', label: { en: 'Standalone product', pt: 'Produto standalone' } },
      { id: 'two_sided_platform', label: { en: 'Two-sided platform', pt: 'Plataforma de dois lados' } },
      { id: 'marketplace', label: { en: 'Marketplace', pt: 'Marketplace' } },
      { id: 'plugin_complement', label: { en: 'Plugin/Complement', pt: 'Plugin/Complemento' } },
      { id: 'oem_component', label: { en: 'OEM component', pt: 'Componente OEM' } },
      { id: 'direct', label: { en: 'Direct', pt: 'Direto' } },
      { id: 'cross_sided', label: { en: 'Cross-sided', pt: 'Lado cruzado' } },
      { id: 'data_driven', label: { en: 'Data-driven', pt: 'Orientado a dados' } },
    ],
  },
  {
    id: 'go-to-market',
    title: { en: 'Go-to-Market', pt: 'Go-to-Market' },
    description: {
      en: 'Which acquisition and conversion channels dominate customer growth.',
      pt: 'Quais canais de aquisição e conversão dominam o crescimento de clientes.',
    },
    categories: [
      { id: 'direct_sales', label: { en: 'Direct sales', pt: 'Vendas diretas' } },
      { id: 'product_led_growth', label: { en: 'Product-led growth', pt: 'Product-led growth' } },
      { id: 'partners_channels', label: { en: 'Partners/channels', pt: 'Parceiros/canais' } },
      { id: 'digital_marketing', label: { en: 'Digital marketing', pt: 'Marketing digital' } },
      { id: 'marketplace_channel', label: { en: 'Marketplace channel', pt: 'Canal marketplace' } },
    ],
  },
  {
    id: 'adoption-implementation',
    title: { en: 'Adoption and Implementation', pt: 'Adoção e Implementação' },
    description: {
      en: 'Practical conditions affecting implementation outcomes (success factors, challenges, and mitigations).',
      pt: 'Condições práticas que afetam os resultados de implementação (fatores de sucesso, desafios e mitigações).',
    },
    categories: [
      { id: 'ecosystem_management', label: { en: 'Ecosystem management', pt: 'Gestão de ecossistema' } },
      { id: 'market_expansion', label: { en: 'Market expansion', pt: 'Expansão de mercado' } },
      { id: 'organizational_preparedness', label: { en: 'Organizational preparedness', pt: 'Preparação organizacional' } },
      { id: 'service_quality_improvement', label: { en: 'Service quality improvement', pt: 'Melhoria da qualidade de serviço' } },
      { id: 'value_based_orientation', label: { en: 'Value-based orientation', pt: 'Orientação a valor' } },
      { id: 'security_concerns', label: { en: 'Security concerns', pt: 'Preocupações de segurança' } },
      { id: 'revenue_stream_transformation', label: { en: 'Revenue stream transformation', pt: 'Transformação de fluxo de receita' } },
      { id: 'organizational_readiness', label: { en: 'Organizational readiness', pt: 'Prontidão organizacional' } },
      { id: 'partner_ecosystem_disruption', label: { en: 'Partner ecosystem disruption', pt: 'Disrupção no ecossistema de parceiros' } },
      { id: 'customer_trust_maintenance', label: { en: 'Customer trust maintenance', pt: 'Manutenção da confiança do cliente' } },
      { id: 'quality_management', label: { en: 'Quality management', pt: 'Gestão da qualidade' } },
      { id: 'flexible_pricing_strategies', label: { en: 'Flexible pricing strategies', pt: 'Estratégias flexíveis de precificação' } },
      { id: 'hybrid_model_adoption', label: { en: 'Hybrid model adoption', pt: 'Adoção de modelo híbrido' } },
      { id: 'pilot_implementation', label: { en: 'Pilot implementation', pt: 'Implementação piloto' } },
      { id: 'partner_compensation', label: { en: 'Partner compensation', pt: 'Compensação de parceiros' } },
    ],
  },
]

export function resolveText(text: LocalizedText, locale: Locale): string {
  return text[locale]
}

export function getCategoryHelp(categoryId: string, locale: Locale): string {
  return (
    categoryHelp[categoryId]?.[locale] ||
    (locale === 'pt'
      ? 'Categoria definida na taxonomia de modelos de negócio de software.'
      : 'Category defined in the software business model taxonomy.')
  )
}

export function getCategoryLabel(
  dimension: Dimension,
  categoryId: string,
  locale: Locale,
): string {
  const category = dimension.categories.find((item) => item.id === categoryId)
  if (!category) return '-'
  return resolveText(category.label, locale)
}

export function createDefaultRecords(): RecordsByDimension {
  return dimensions.reduce<RecordsByDimension>((acc, dimension) => {
    acc[dimension.id] = {
      primaryCategory: '',
      evidenceSource: '',
      assignmentRationale: '',
      secondaryNotes: '',
    }
    return acc
  }, {})
}

export function getDimensionTitleEn(dimensionId: string): string {
  const dimension = dimensions.find((d) => d.id === dimensionId)
  return dimension ? dimension.title.en : dimensionId
}

export function getDimensionIdFromTitle(title: string): string | undefined {
  return dimensions.find((d) => d.title.en === title)?.id
}

export const dimensionTitleToId = Object.fromEntries(
  dimensions.map((d) => [d.title.en, d.id]),
) as Record<string, string>
