import type { LocalizedText, Locale } from '../../types/classification'

export type LocalizedExampleFields = {
  evidenceSource: LocalizedText
  assignmentRationale: LocalizedText
  secondaryNotes: LocalizedText
}

export const exampleLocalizedRecords: Record<
  string,
  Record<string, LocalizedExampleFields>
> = {
  adobe: {
    'monetization-pricing': {
      evidenceSource: {
        en: 'Adobe Creative Cloud pricing page (individual app and All Apps plans, monthly/annual billing); Adobe investor relations materials on the 2013 subscription transition.',
        pt: 'Página de preços do Adobe Creative Cloud (planos por aplicativo e All Apps, cobrança mensal/anual); materiais de relações com investidores da Adobe sobre a transição para assinatura em 2013.',
      },
      assignmentRationale: {
        en: 'Revenue is captured through recurring subscription plans priced per application or full suite, replacing the former perpetual-license model. This is the dominant and publicly documented pricing architecture today.',
        pt: 'A receita é capturada por planos de assinatura recorrente precificados por aplicativo ou suite completa, substituindo o antigo modelo de licença perpétua. Esta é a arquitetura de precificação dominante e documentada publicamente hoje.',
      },
      secondaryNotes: {
        en: 'Perpetual license was the historical model pre-2013; subscription pricing reflects the current operational reality.',
        pt: 'Licença perpétua foi o modelo histórico antes de 2013; precificação por assinatura reflete a realidade operacional atual.',
      },
    },
    'delivery-deployment': {
      evidenceSource: {
        en: 'Adobe Creative Cloud product documentation (desktop installers for Photoshop, Illustrator, Premiere; cloud-synced Libraries, Fonts, Cloud Documents, Behance integration).',
        pt: 'Documentação do Adobe Creative Cloud (instaladores desktop de Photoshop, Illustrator, Premiere; Libraries, Fonts, Cloud Documents e integração com Behance sincronizados na nuvem).',
      },
      assignmentRationale: {
        en: 'The offering combines locally installed desktop applications with cloud-backed services and asset sync. It is neither pure multi-tenant SaaS nor purely on-premise delivery.',
        pt: 'A oferta combina aplicativos desktop instalados localmente com serviços em nuvem e sincronização de ativos. Não é SaaS multi-tenant puro nem entrega puramente on-premise.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'market-segmentation': {
      evidenceSource: {
        en: 'Adobe.com consumer-oriented plan pages; brand positioning toward individual creatives, students, and freelancers; Teams/Enterprise as secondary tier.',
        pt: 'Páginas de planos orientadas ao consumidor em Adobe.com; posicionamento da marca para criativos individuais, estudantes e freelancers; Teams/Enterprise como camada secundária.',
      },
      assignmentRationale: {
        en: 'The primary user base and brand identity target individual professionals and prosumers. Although organizational plans exist, volume and positioning remain consumer-centric.',
        pt: 'A base principal de usuários e a identidade da marca visam profissionais individuais e prosumers. Embora existam planos organizacionais, volume e posicionamento permanecem centrados no consumidor.',
      },
      secondaryNotes: {
        en: 'Teams and Enterprise plans serve organizations but do not redefine the dominant segmentation profile.',
        pt: 'Planos Teams e Enterprise atendem organizações, mas não redefinem o perfil dominante de segmentação.',
      },
    },
    'ecosystem-dynamics': {
      evidenceSource: {
        en: 'Product pages and feature documentation for individual Creative Cloud applications used in isolation.',
        pt: 'Páginas de produto e documentação de funcionalidades dos aplicativos Creative Cloud usados de forma isolada.',
      },
      assignmentRationale: {
        en: 'Each major application delivers standalone value to a single user without requiring participation from other users on the platform. Network effects are not structurally central to the value proposition.',
        pt: 'Cada aplicativo principal entrega valor autônomo a um único usuário sem exigir participação de outros usuários na plataforma. Efeitos de rede não são estruturalmente centrais na proposta de valor.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'go-to-market': {
      evidenceSource: {
        en: 'Adobe social channels, YouTube tutorials, creative-community campaigns, and performance marketing for individual plans.',
        pt: 'Canais sociais da Adobe, tutoriais no YouTube, campanhas para comunidades criativas e marketing de performance para planos individuais.',
      },
      assignmentRationale: {
        en: 'Customer acquisition for the core B2C segment relies on digital campaigns, content marketing, and community presence rather than enterprise direct sales or classic developer PLG.',
        pt: 'A aquisição de clientes no segmento B2C central depende de campanhas digitais, marketing de conteúdo e presença em comunidades, e não de vendas diretas enterprise ou PLG clássico de ferramentas para desenvolvedores.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'adoption-implementation': {
      evidenceSource: {
        en: 'Adobe SEC filings and earnings reports (2013 onward); academic and industry literature citing Adobe\'s license-to-subscription shift.',
        pt: 'Relatórios SEC e de resultados da Adobe (a partir de 2013); literatura acadêmica e de mercado citando a transição da Adobe de licença para assinatura.',
      },
      assignmentRationale: {
        en: 'Adobe is a canonical case of deliberate revenue-model transformation—from perpetual licensing to recurring subscriptions—with documented financial and strategic impact.',
        pt: 'A Adobe é um caso canônico de transformação deliberada do modelo de receita — de licenciamento perpétuo para assinaturas recorrentes — com impacto financeiro e estratégico documentado.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
  },
  notion: {
    'monetization-pricing': {
      evidenceSource: {
        en: 'Notion pricing page (Free tier with unlimited pages/blocks for individuals; Plus, Business, Enterprise paid tiers).',
        pt: 'Página de preços do Notion (plano Free com páginas/blocos ilimitados para indivíduos; planos pagos Plus, Business e Enterprise).',
      },
      assignmentRationale: {
        en: 'A robust free tier drives adoption; monetization occurs when individuals or teams convert to paid plans. The pricing structure is explicitly freemium.',
        pt: 'Um plano gratuito robusto impulsiona a adoção; a monetização ocorre quando indivíduos ou times convertem para planos pagos. A estrutura de preços é explicitamente freemium.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'delivery-deployment': {
      evidenceSource: {
        en: 'Notion web and mobile apps; no local installation; cloud-hosted workspaces.',
        pt: 'Aplicativos web e mobile do Notion; sem instalação local; workspaces hospedados em nuvem.',
      },
      assignmentRationale: {
        en: 'The product is delivered entirely as a cloud application with shared infrastructure across workspaces—classic multi-tenant SaaS.',
        pt: 'O produto é entregue integralmente como aplicação em nuvem com infraestrutura compartilhada entre workspaces — SaaS multi-tenant clássico.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'market-segmentation': {
      evidenceSource: {
        en: 'Notion Business and Enterprise plan positioning; team billing and workspace administration features; conversion patterns in team contexts.',
        pt: 'Posicionamento dos planos Notion Business e Enterprise; cobrança por time e recursos de administração de workspace; padrões de conversão em contextos de equipe.',
      },
      assignmentRationale: {
        en: 'Despite a large individual user base, monetization and growth strategy prioritize teams and organizations. Paid conversion predominantly occurs in corporate and team contexts.',
        pt: 'Apesar da grande base de usuários individuais, a estratégia de monetização e crescimento prioriza times e organizações. A conversão paga ocorre predominantemente em contextos corporativos e de equipe.',
      },
      secondaryNotes: {
        en: 'B2C is equally defensible given the volume of individual users; this profile emphasizes monetization strategy over user-count composition.',
        pt: 'B2C é igualmente defensável dado o volume de usuários individuais; este perfil enfatiza a estratégia de monetização em vez da composição por contagem de usuários.',
      },
    },
    'ecosystem-dynamics': {
      evidenceSource: {
        en: 'Notion collaboration features (shared pages, team wikis, collaborative databases).',
        pt: 'Recursos de colaboração do Notion (páginas compartilhadas, wikis de time, databases colaborativos).',
      },
      assignmentRationale: {
        en: 'Platform value increases as more members of the same team adopt—shared workspaces and collaborative content become more useful with in-team participation.',
        pt: 'O valor da plataforma aumenta conforme mais membros do mesmo time adotam — workspaces compartilhados e conteúdo colaborativo ficam mais úteis com participação interna ao time.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'go-to-market': {
      evidenceSource: {
        en: 'Notion adoption patterns documented in product marketing and community case studies (bottom-up team expansion).',
        pt: 'Padrões de adoção do Notion documentados em marketing do produto e estudos de caso da comunidade (expansão bottom-up em times).',
      },
      assignmentRationale: {
        en: 'Growth follows classic PLG: an individual adopts, invites teammates, the team converts to a paid plan, and usage scales within the organization without initial sales-led motion.',
        pt: 'O crescimento segue PLG clássico: um indivíduo adota, convida colegas, o time converte para plano pago e o uso escala na organização sem movimento inicial liderado por vendas.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'adoption-implementation': {
      evidenceSource: {
        en: 'Notion customer stories and implementation guides on replacing multiple tools (Confluence, Trello, Google Docs, wikis).',
        pt: 'Histórias de clientes e guias de implementação do Notion sobre substituição de múltiplas ferramentas (Confluence, Trello, Google Docs, wikis).',
      },
      assignmentRationale: {
        en: 'Adoption is hybrid in practice—Notion simultaneously substitutes several incumbent tools. Implementation challenges center on consolidating multiple systems into one workspace.',
        pt: 'A adoção é híbrida na prática — o Notion substitui simultaneamente várias ferramentas incumbentes. Os desafios de implementação concentram-se em consolidar múltiplos sistemas em um único workspace.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
  },
  stripe: {
    'monetization-pricing': {
      evidenceSource: {
        en: 'Stripe pricing page (percentage + fixed fee per successful card charge, e.g. 2.9% + $0.30 in the US).',
        pt: 'Página de preços da Stripe (percentual + taxa fixa por cobrança de cartão bem-sucedida, ex.: 2,9% + US$ 0,30 nos EUA).',
      },
      assignmentRationale: {
        en: 'Revenue is earned per payment processed—a classic transaction-based model documented directly on the public pricing page.',
        pt: 'A receita é obtida por pagamento processado — modelo clássico transacional documentado diretamente na página pública de preços.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'delivery-deployment': {
      evidenceSource: {
        en: 'Stripe API reference documentation; integration guides for developers; absence of end-consumer-facing application UI as the core product.',
        pt: 'Documentação de referência da API Stripe; guias de integração para desenvolvedores; ausência de interface de aplicativo para consumidor final como produto central.',
      },
      assignmentRationale: {
        en: 'The product is delivered primarily through APIs and developer integrations rather than a standalone end-user application—among the most canonical API-based delivery cases in software.',
        pt: 'O produto é entregue principalmente por APIs e integrações para desenvolvedores, e não por um aplicativo standalone para usuário final — um dos casos mais canônicos de entrega baseada em API em software.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'market-segmentation': {
      evidenceSource: {
        en: 'Stripe.com positioning toward businesses and developers accepting payments; no direct offering to end consumers as customers.',
        pt: 'Posicionamento do Stripe.com para empresas e desenvolvedores que aceitam pagamentos; sem oferta direta ao consumidor final como cliente.',
      },
      assignmentRationale: {
        en: 'Stripe sells exclusively to merchants, platforms, and developers who need payment acceptance—not to the paying consumer.',
        pt: 'A Stripe vende exclusivamente para merchants, plataformas e desenvolvedores que precisam aceitar pagamentos — não para o consumidor que paga.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'ecosystem-dynamics': {
      evidenceSource: {
        en: 'Stripe Connect documentation; marketplace and platform payment flows connecting merchants and payers.',
        pt: 'Documentação do Stripe Connect; fluxos de pagamento em marketplaces e plataformas conectando merchants e pagadores.',
      },
      assignmentRationale: {
        en: 'Stripe structurally connects merchants/businesses that collect payments with consumers who pay—two distinct sides with different incentives and platform rules.',
        pt: 'A Stripe conecta estruturalmente merchants/empresas que recebem pagamentos com consumidores que pagam — dois lados distintos com incentivos e regras de plataforma diferentes.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'go-to-market': {
      evidenceSource: {
        en: 'Stripe developer documentation, test-mode onboarding, and widespread bottom-up integration by individual developers before organizational rollout.',
        pt: 'Documentação para desenvolvedores da Stripe, onboarding em modo de teste e integração bottom-up disseminada por desenvolvedores individuais antes do rollout organizacional.',
      },
      assignmentRationale: {
        en: 'Adoption typically begins with a developer integrating the API in a project, then expanding to production and organizational commitment—classic dev-tool PLG.',
        pt: 'A adoção tipicamente começa com um desenvolvedor integrando a API em um projeto, depois expandindo para produção e compromisso organizacional — PLG clássico de ferramenta para desenvolvedores.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
    'adoption-implementation': {
      evidenceSource: {
        en: 'Stripe company history; partner/integration ecosystem (plugins, platforms); displacement of legacy payment gateways and bank-centric intermediaries.',
        pt: 'História da empresa Stripe; ecossistema de parceiros/integrações (plugins, plataformas); deslocamento de gateways legados e intermediários centrados em bancos.',
      },
      assignmentRationale: {
        en: 'Stripe entered the market by disrupting traditional payment intermediaries through a partner-rich integration ecosystem, redefining how software businesses embed payments.',
        pt: 'A Stripe entrou no mercado disruptando intermediários tradicionais de pagamento por meio de um ecossistema rico em integrações, redefinindo como negócios de software incorporam pagamentos.',
      },
      secondaryNotes: { en: '', pt: '' },
    },
  },
}

export function getExampleLocalizedField(
  exampleId: string,
  dimensionId: string,
  field: keyof LocalizedExampleFields,
  locale: Locale,
  enFallback: string,
): string {
  const localized = exampleLocalizedRecords[exampleId]?.[dimensionId]?.[field]
  if (!localized) return enFallback
  const text = localized[locale].trim()
  return text || enFallback
}
