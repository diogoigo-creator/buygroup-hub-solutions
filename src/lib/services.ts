// Fonte única dos serviços principais da Buy Group.
// Usado por OutrosServicos, Breadcrumb labels, /servicos, Header e Footer.

export type ServiceSlug =
  | "otimizacao-de-custos"
  | "inteligencia-de-gastos"
  | "bpo-de-compras"
  | "revisao-pre-fechamento"
  | "gestao-de-fornecedores"
  | "maturidade-em-compras";

export type ServiceRoute =
  | "/otimizacao-de-custos"
  | "/inteligencia-de-gastos"
  | "/bpo-de-compras"
  | "/revisao-pre-fechamento"
  | "/gestao-de-fornecedores"
  | "/maturidade-em-compras";

export interface Service {
  slug: ServiceSlug;
  to: ServiceRoute;
  label: string;
  oneLiner: string;
  isNew?: boolean;
  // Slugs complementares em ordem de prioridade (até 3 serão mostrados em "Outros serviços").
  complementares: ServiceSlug[];
  // Títulos exatos de cursos existentes em /cursos relacionados a este serviço.
  cursosRelacionados?: string[];
  // Âncora padrão (sem #) usada por links que querem cair em conteúdo útil, e não no topo.
  defaultAnchor?: string;
  // Slug de "interesse" enviado ao /contato para pré-selecionar o assunto.
  interesseSlug?: string;
}

// Mapeia o título exato do curso (como aparece em /cursos) para seu id de card.
// Usado para construir links âncora /cursos#curso-<id> que rolam direto para o curso.
export const COURSE_ID_BY_TITLE: Record<string, string> = {
  "Estratégia de Compra e Análise de Gastos": "strategic-sourcing",
  "Gestão de Compras na Prática": "gestao-compras-pratica",
  "Compras Estratégicas para Gestores": "procurement-estrategico-gestores",
  "Negociação Avançada com Fornecedores": "negociacao-avancada",
  "IA Aplicada à Cadeia de Suprimentos": "ia-supply-chain",
  "Gestão e Desenvolvimento de Fornecedores": "gestao-fornecedores",
  "ESG Aplicado a Compras e à Cadeia de Suprimentos": "esg-compras",
  "Gestão de Contratos para Compradores": "gestao-contratos",
  "Cadeia de Suprimentos 4.0 — Tecnologia e Inovação": "supply-chain-4",
  "Redução de Custos Indiretos na Prática": "custos-indiretos",
};

export const SERVICES: Service[] = [
  {
    slug: "otimizacao-de-custos",
    to: "/otimizacao-de-custos",
    label: "Otimização de Custos",
    oneLiner:
      "Programa estruturado de redução de custos com remuneração 100% vinculada aos savings homologados.",
    complementares: [
      "revisao-pre-fechamento",
      "bpo-de-compras",
      "inteligencia-de-gastos",
    ],
    cursosRelacionados: [
      "Estratégia de Compra e Análise de Gastos",
      "Redução de Custos Indiretos na Prática",
      "Negociação Avançada com Fornecedores",
    ],
  },
  {
    slug: "inteligencia-de-gastos",
    to: "/inteligencia-de-gastos",
    label: "Inteligência de Gastos",
    oneLiner:
      "Classificação forense de 24 meses de gasto, baseline auditável e quick wins em 30 dias.",
    complementares: [
      "otimizacao-de-custos",
      "maturidade-em-compras",
      "gestao-de-fornecedores",
    ],
    cursosRelacionados: [
      "Estratégia de Compra e Análise de Gastos",
      "IA Aplicada à Cadeia de Suprimentos",
    ],
  },
  {
    slug: "bpo-de-compras",
    to: "/bpo-de-compras",
    label: "BPO de Compras",
    oneLiner:
      "Célula externa de compras orientada a SLA, savings e governança financeira.",
    complementares: [
      "otimizacao-de-custos",
      "gestao-de-fornecedores",
      "inteligencia-de-gastos",
    ],
    cursosRelacionados: [
      "Gestão de Compras na Prática",
      "Gestão de Contratos para Compradores",
      "Negociação Avançada com Fornecedores",
    ],
  },
  {
    slug: "revisao-pre-fechamento",
    to: "/revisao-pre-fechamento",
    label: "Revisão Pré-Fechamento",
    oneLiner:
      "Revisão independente de propostas já negociadas. A Buy Group conduz a rodada final e divide 50/50 o saving capturado.",
    isNew: true,
    complementares: [
      "otimizacao-de-custos",
      "bpo-de-compras",
      "gestao-de-fornecedores",
    ],
    cursosRelacionados: [
      "Negociação Avançada com Fornecedores",
      "Estratégia de Compra e Análise de Gastos",
    ],
  },
  {
    slug: "gestao-de-fornecedores",
    to: "/gestao-de-fornecedores",
    label: "Gestão de Fornecedores",
    oneLiner:
      "Homologação, segmentação e governança de fornecedores críticos sob a ótica de risco e continuidade.",
    complementares: [
      "bpo-de-compras",
      "maturidade-em-compras",
      "inteligencia-de-gastos",
    ],
    cursosRelacionados: [
      "Gestão e Desenvolvimento de Fornecedores",
      "ESG Aplicado a Compras e à Cadeia de Suprimentos",
    ],
  },
  {
    slug: "maturidade-em-compras",
    to: "/maturidade-em-compras",
    label: "Maturidade em Compras",
    oneLiner:
      "Diagnóstico da área de compras frente a referências de mercado, com plano priorizado e business case.",
    complementares: [
      "inteligencia-de-gastos",
      "gestao-de-fornecedores",
      "otimizacao-de-custos",
    ],
    cursosRelacionados: [
      "Compras Estratégicas para Gestores",
      "Cadeia de Suprimentos 4.0 — Tecnologia e Inovação",
      "Gestão de Compras na Prática",
    ],
  },
];

export const SERVICE_BY_SLUG: Record<ServiceSlug, Service> = SERVICES.reduce(
  (acc, s) => {
    acc[s.slug] = s;
    return acc;
  },
  {} as Record<ServiceSlug, Service>,
);

export function getOutros(currentSlug: ServiceSlug, max = 3): Service[] {
  const current = SERVICE_BY_SLUG[currentSlug];
  const ordered = current
    ? current.complementares
        .map((s) => SERVICE_BY_SLUG[s])
        .filter((s): s is Service => Boolean(s) && s.slug !== currentSlug)
    : [];
  const fallback = SERVICES.filter((s) => s.slug !== currentSlug);
  const merged: Service[] = [];
  for (const s of [...ordered, ...fallback]) {
    if (!merged.find((m) => m.slug === s.slug)) merged.push(s);
    if (merged.length >= max) break;
  }
  return merged;
}
