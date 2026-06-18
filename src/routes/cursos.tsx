import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  GraduationCap,
  BarChart3,
  Handshake,
  Bot,
  Store,
  Leaf,
  FileCheck2,
  Cpu,
  TrendingDown,
  Clock,
  Users,
  Check,
  CheckCircle2,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { SOCIAL_META, SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/cursos")({
  validateSearch: z.object({
    curso: z.string().optional(),
    solicitar: z.string().optional(),
  }),
  head: () => {
    const title = "Buy Group Academy: capacitação para compras";
    const description =
      "Programas in-company de estratégia de compra, negociação, IA aplicada, ESG e gestão de fornecedores para equipes de grandes empresas.";
    const url = `${SITE_URL}/cursos`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Buy Group Academy: capacitação para equipes de compras" },
        {
          property: "og:description",
          content: "Capacitação prática para equipes que precisam gerar economia com método e governança.",
        },
        { property: "og:url", content: url },
        ...SOCIAL_META,
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Buy Group Academy: cursos in-company",
            itemListElement: courses.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Course",
                name: c.title,
                description: c.description,
                provider: { "@id": `${SITE_URL}/#organization` },
                educationalLevel: c.level,
                timeRequired: c.hours,
              },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", path: "/" },
              { name: "Academy", path: "/cursos" },
            ]),
          ),
        },
      ],
    };
  },
  component: CursosPage,
});

type Category = "Compras Estratégicas" | "Negociação" | "IA e Tecnologia" | "Gestão" | "ESG";
type Level = "Iniciante" | "Intermediário" | "Avançado";
type BadgeKind = "popular" | "novo" | "tendencia" | "exclusivo";

type Course = {
  id: string;
  category: Category;
  badge?: BadgeKind;
  icon: LucideIcon;
  title: string;
  description: string;
  hours: string;
  level: Level;
  topics: string[];
};

const categoryStyles: Record<Category, { pill: string; iconBg: string; iconColor: string }> = {
  "Compras Estratégicas": {
    pill: "bg-navy/8 text-navy",
    iconBg: "bg-green/15",
    iconColor: "text-navy",
  },
  Negociação: {
    pill: "bg-navy/8 text-navy",
    iconBg: "bg-green/15",
    iconColor: "text-navy",
  },
  "IA e Tecnologia": {
    pill: "bg-navy/8 text-navy",
    iconBg: "bg-green/15",
    iconColor: "text-navy",
  },
  Gestão: {
    pill: "bg-navy/8 text-navy",
    iconBg: "bg-green/15",
    iconColor: "text-navy",
  },
  ESG: {
    pill: "bg-navy/8 text-navy",
    iconBg: "bg-green/15",
    iconColor: "text-navy",
  },
};

const badgeStyles: Record<BadgeKind, { label: string; cls: string }> = {
  popular: { label: "Mais solicitado", cls: "bg-green text-navy" },
  novo: { label: "Novo", cls: "border border-navy/20 bg-white text-navy" },
  tendencia: { label: "Tendência", cls: "border border-navy/20 bg-white text-navy" },
  exclusivo: { label: "Exclusivo", cls: "bg-green text-navy" },
};

const levelStyles: Record<Level, string> = {
  Iniciante: "border-border text-muted-foreground bg-secondary",
  Intermediário: "border-border text-navy bg-secondary",
  Avançado: "border-navy/30 text-navy bg-green/10",
};

const courses: Course[] = [
  {
    id: "strategic-sourcing",
    category: "Compras Estratégicas",
    badge: "popular",
    icon: Search,
    title: "Estratégia de Compra e Análise de Gastos",
    description:
      "Processo completo de estratégia de compra integrado à análise de gastos: Matriz de Kraljic, custo total, concorrências e identificação de oportunidades de redução.",
    hours: "16h a 32h",
    level: "Intermediário",
    topics: [
      "Análise de gastos: coleta, limpeza e categorização dos dados",
      "Painéis de análise de gastos em Excel e Power BI",
      "Segmentação de categorias e Matriz de Kraljic",
      "TCO (Custo Total de Propriedade)",
      "Processo de RFI, RFQ e RFP",
      "Avaliação e seleção de fornecedores",
      "Negociação baseada em dados",
      "Indicadores e monitoramento de resultados",
    ],
  },
  {
    id: "gestao-compras-pratica",
    category: "Compras Estratégicas",
    icon: GraduationCap,
    title: "Gestão de Compras na Prática",
    description:
      "Formação completa para equipes que estão iniciando ou consolidando a área de compras: ciclo P2P, cotação, equalização de propostas e relacionamento com fornecedores.",
    hours: "8h a 20h",
    level: "Iniciante",
    topics: [
      "O papel estratégico de compras na empresa",
      "Ciclo completo de compras (P2P)",
      "Tipos de compras: diretas, indiretas e serviços",
      "Processo de cotação e equalização de propostas",
      "Relacionamento com fornecedores",
      "Indicadores de desempenho em compras",
      "Ferramentas e sistemas de gestão de compras",
    ],
  },
  {
    id: "procurement-estrategico-gestores",
    category: "Gestão",
    icon: BarChart3,
    title: "Compras Estratégicas para Gestores",
    description:
      "Para líderes que querem elevar compras ao nível estratégico, com indicadores, modelo de atuação, governança e geração de valor para o negócio.",
    hours: "12h a 28h",
    level: "Avançado",
    topics: [
      "Compras como função estratégica do negócio",
      "Painel estratégico de indicadores (BSC) aplicado a compras",
      "Desenho do modelo de atuação de compras",
      "Gestão de times e desenvolvimento de equipes",
      "Governança, compliance e políticas de compras",
      "Projeto aplicado: plano estratégico da área",
    ],
  },
  {
    id: "negociacao-avancada",
    category: "Negociação",
    badge: "popular",
    icon: Handshake,
    title: "Negociação Avançada com Fornecedores",
    description:
      "Técnicas práticas de negociação para compradores: planejamento, BATNA, ancoragem, táticas e contra-táticas, com simulações baseadas em situações reais do mercado.",
    hours: "8h a 16h",
    level: "Intermediário",
    topics: [
      "Fundamentos e psicologia da negociação",
      "Planejamento e preparação da negociação",
      "BATNA, ZOPA e poder de barganha",
      "Táticas e contra-táticas",
      "Negociação por categorias: commodities, serviços e tecnologia",
      "Simulações práticas com feedback",
    ],
  },
  {
    id: "ia-supply-chain",
    category: "IA e Tecnologia",
    badge: "novo",
    icon: Bot,
    title: "IA Aplicada à Cadeia de Suprimentos",
    description:
      "Como usar inteligência artificial para prever demanda, analisar riscos de fornecedores, automatizar compras e criar painéis inteligentes, sem necessidade de programação.",
    hours: "16h a 40h",
    level: "Intermediário",
    topics: [
      "Fundamentos de IA aplicados à cadeia de suprimentos",
      "Ferramentas de IA aplicadas a compras (assistentes generativos e painéis com IA)",
      "Previsão de demanda na prática",
      "Gestão de fornecedores orientada por dados",
      "Automação de processos de compras",
      "Análise de gastos e painéis inteligentes",
      "Gestão de riscos com IA",
      "Projeto prático aplicado à realidade da empresa",
    ],
  },
  {
    id: "gestao-fornecedores",
    category: "Compras Estratégicas",
    icon: Store,
    title: "Gestão e Desenvolvimento de Fornecedores",
    description:
      "Como estruturar, segmentar, avaliar e desenvolver a base de fornecedores para garantir qualidade, continuidade de fornecimento e vantagem competitiva nas compras.",
    hours: "8h a 18h",
    level: "Intermediário",
    topics: [
      "Segmentação e classificação de fornecedores",
      "Homologação e qualificação de novos fornecedores",
      "Painel de avaliação de desempenho de fornecedores",
      "Planos de desenvolvimento e melhoria contínua",
      "Gestão de risco na base fornecedora",
      "Relacionamentos estratégicos e parcerias",
    ],
  },
  {
    id: "esg-compras",
    category: "ESG",
    badge: "tendencia",
    icon: Leaf,
    title: "ESG Aplicado a Compras e à Cadeia de Suprimentos",
    description:
      "Como implementar critérios ambientais, sociais e de governança nas decisões de compra, atender exigências regulatórias e criar valor sustentável na cadeia de suprimentos.",
    hours: "8h a 14h",
    level: "Intermediário",
    topics: [
      "Fundamentos de ESG e impacto direto em compras",
      "Regulamentações e exigências do mercado brasileiro",
      "Critérios ESG na seleção e avaliação de fornecedores",
      "Rastreabilidade e transparência na cadeia",
      "Métricas e relatórios de sustentabilidade em compras",
    ],
  },
  {
    id: "gestao-contratos",
    category: "Gestão",
    icon: FileCheck2,
    title: "Gestão de Contratos para Compradores",
    description:
      "Elaboração, análise e gestão de contratos comerciais com fornecedores: cláusulas críticas, SLAs, reajustes, penalidades e encerramento de contratos.",
    hours: "8h a 16h",
    level: "Intermediário",
    topics: [
      "Estrutura e elementos do contrato comercial",
      "Cláusulas críticas para o comprador",
      "Definição e monitoramento de SLAs",
      "Reajustes, índices contratuais e gatilhos",
      "Gestão de inadimplência e penalidades",
      "Encerramento e renovação de contratos",
    ],
  },
  {
    id: "supply-chain-4",
    category: "IA e Tecnologia",
    icon: Cpu,
    title: "Cadeia de Suprimentos 4.0: Tecnologia e Inovação",
    description:
      "Como aplicar os conceitos da Indústria 4.0 na cadeia de suprimentos: automação, internet das coisas, dados e tecnologias que transformam compras e logística.",
    hours: "12h a 22h",
    level: "Intermediário",
    topics: [
      "Indústria 4.0 e impacto na cadeia de suprimentos",
      "Automação de processos em compras e logística",
      "Internet das Coisas aplicada à cadeia de suprimentos",
      "Dados e análises na cadeia de suprimentos",
      "Tecnologias de registro distribuído para rastreabilidade",
      "Plano de transformação digital em compras",
    ],
  },
  {
    id: "custos-indiretos",
    category: "Compras Estratégicas",
    badge: "exclusivo",
    icon: TrendingDown,
    title: "Redução de Custos Indiretos na Prática",
    description:
      "Metodologia completa para identificar e executar projetos de redução em despesas indiretas: energia, telecom, TI, facilities, logística e serviços, com ou sem troca de fornecedor.",
    hours: "12h a 24h",
    level: "Intermediário",
    topics: [
      "Mapeamento e classificação de custos indiretos",
      "Diagnóstico de oportunidades por categoria",
      "Referências de preços e mercado fornecedor",
      "Estratégias de redução sem troca de fornecedor",
      "Negociação orientada a dados para custos indiretos",
      "Implementação e monitoramento de ganhos",
      "Apresentação de resultados para a liderança",
    ],
  },
];

const filters = [
  "Todos",
  "Compras Estratégicas",
  "Negociação",
  "IA e Tecnologia",
  "Gestão",
  "ESG",
] as const;
type Filter = (typeof filters)[number];



function minParticipants(level: Level): number {
  return level === "Avançado" ? 4 : 8;
}

function CursosPage() {
  const { curso, solicitar } = Route.useSearch();
  const [filter, setFilter] = useState<Filter>("Todos");
  const [detail, setDetail] = useState<Course | null>(null);
  const [requestCourse, setRequestCourse] = useState<string>(curso || solicitar || "");

  const visible = useMemo(
    () => (filter === "Todos" ? courses : courses.filter((c) => c.category === filter)),
    [filter],
  );

  function openRequest(courseTitle: string) {
    setRequestCourse(courseTitle);
    setDetail(null);
    setTimeout(() => {
      document.getElementById("solicitar")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  // Reage a hash (#solicitar ou #curso-<id>) e a ?solicitar=<titulo> / ?curso=<titulo>.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");

    if (solicitar || hash === "solicitar") {
      setFilter("Todos");
      setTimeout(() => {
        document.getElementById("solicitar")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return;
    }

    if (hash.startsWith("curso-")) {
      const id = hash.slice("curso-".length);
      const target = courses.find((c) => c.id === id);
      if (target) {
        setFilter("Todos");
        setTimeout(() => {
          document.getElementById(`curso-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
          setDetail(target);
        }, 80);
      }
      return;
    }

    if (curso) {
      const target = courses.find((c) => c.title === curso);
      if (target) {
        setFilter("Todos");
        setTimeout(() => {
          document.getElementById(`curso-${target.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
          setDetail(target);
        }, 80);
      }
    }
    // Roda apenas no mount / quando a query muda.
  }, [curso, solicitar]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Buy Group Academy"
        title={
          <>
            Prepare sua equipe para gerar <span className="text-green">economia com método</span>.
          </>
        }
        description="Programas in-company sob medida para a realidade, o setor e o nível de maturidade da sua equipe."
        identity={{ kind: "lockup", caption: "Buy Group Academy" }}
      />

      {/* Catálogo de cursos */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl text-navy md:text-5xl">
              Cursos disponíveis para sua equipe
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Todos os programas são adaptados à realidade, setor e nível de maturidade da sua equipe.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-navy">Tamanho mínimo de turma:</span> programas
              executivos (nível Avançado) a partir de 4 participantes. Demais programas, mínimo de 8.
            </p>
          </div>

          {/* Filtros */}
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-white text-muted-foreground hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Destaque para alta gestão (usa apenas cursos existentes) */}
          {filter === "Todos" ? (
            <div className="mt-10 rounded-2xl border border-navy/15 bg-navy text-white p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-green">Para gestores e alta gestão</p>
                  <p className="mt-2 font-serif text-2xl leading-snug">
                    Programas executivos voltados a líderes de compras, CFOs e diretores.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFilter("Gestão")}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
                >
                  Ver trilha de Gestão
                </button>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {courses
                  .filter((c) =>
                    [
                      "procurement-estrategico-gestores",
                      "custos-indiretos",
                      "negociacao-avancada",
                      "gestao-contratos",
                    ].includes(c.id),
                  )
                  .map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => setDetail(c)}
                        className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:border-green hover:text-green"
                      >
                        {c.title}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ) : null}

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => {
              const s = categoryStyles[c.category];
              const Icon = c.icon;
              return (
                <article
                  key={c.id}
                  id={`curso-${c.id}`}
                  className="group card-lift flex flex-col rounded-2xl border border-border bg-white p-6 scroll-mt-[var(--scroll-anchor)] hover:border-green/60"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${s.pill}`}
                    >
                      {c.category}
                    </span>
                    {c.badge && (
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeStyles[c.badge].cls}`}
                      >
                        {badgeStyles[c.badge].label}
                      </span>
                    )}
                  </div>

                  <div
                    className={`mt-5 flex h-10 w-10 items-center justify-center rounded-xl ${s.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${s.iconColor}`} />
                  </div>

                  <h3 className="mt-4 font-serif text-2xl leading-tight text-navy">{c.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.description}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {c.hours}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" /> A partir de {minParticipants(c.level)} participantes
                    </span>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${levelStyles[c.level]}`}
                    >
                      {c.level}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <button
                      type="button"
                      onClick={() => setDetail(c)}
                      className="text-sm font-medium text-navy underline-offset-4 hover:underline"
                    >
                      Ver conteúdo
                    </button>
                    <button
                      type="button"
                      onClick={() => openRequest(c.title)}
                      className="ml-auto inline-flex items-center gap-2 rounded-full bg-green px-4 py-2 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
                    >
                      Solicitar este curso
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h3 className="font-serif text-3xl text-white md:text-4xl">
              Não tem certeza de qual curso sua equipe precisa?
            </h3>
            <p className="mt-2 max-w-2xl text-base text-white/75">
              Realizamos uma conversa inicial para identificar as principais lacunas e recomendar o
              treinamento mais adequado.
            </p>
          </div>
          <Link
            to="/contato" hash="form"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
          >
            Falar sobre a capacitação
          </Link>
        </div>
      </section>

      {/* Formulário de solicitação */}
      <RequestSection initialCourse={requestCourse} onCourseChange={setRequestCourse} />

      {/* Modal de conteúdo do curso */}
      <Dialog open={!!detail} onOpenChange={(o) => !o && setDetail(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto bg-white text-navy sm:max-w-2xl">
          {detail && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[detail.category].pill}`}
                  >
                    {detail.category}
                  </span>
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${levelStyles[detail.level]}`}
                  >
                    {detail.level}
                  </span>
                </div>
                <DialogTitle className="mt-3 text-left font-serif text-3xl leading-tight text-navy">
                  {detail.title}
                </DialogTitle>
                <DialogDescription className="text-left text-muted-foreground">
                  {detail.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {detail.hours}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-4 w-4" /> A partir de {minParticipants(detail.level)} participantes
                </span>
              </div>
              <div className="mt-4">
                <h4 className="font-serif text-xl text-navy">Conteúdo programático</h4>
                <ul className="mt-3 space-y-2">
                  {detail.topics.map((t) => (
                    <li key={t} className="flex gap-2 text-sm text-navy/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => openRequest(detail.title)}
                  className="inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-navy shadow-[var(--shadow-green)]"
                >
                  Solicitar este curso
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

    </SiteLayout>
  );
}

/* ---------------- Formulário de solicitação ---------------- */

function RequestSection({
  initialCourse,
  onCourseChange,
}: {
  initialCourse: string;
  onCourseChange: (v: string) => void;
}) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const courseOptions = [...courses.map((c) => c.title), "Mais de um curso / Programa completo"];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const required = ["nome", "empresa", "cargo", "email", "telefone"];
    const next: Record<string, string> = {};
    for (const k of required) {
      const v = (fd.get(k) as string | null)?.trim();
      if (!v) next[k] = "Campo obrigatório.";
    }
    const email = (fd.get("email") as string | null)?.trim() ?? "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "E-mail inválido.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    const { supabase } = await import("@/integrations/supabase/client");
    const { toast } = await import("sonner");
    const payload = {
      nome: String(fd.get("nome") ?? "").trim(),
      empresa: String(fd.get("empresa") ?? "").trim(),
      cargo: String(fd.get("cargo") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      telefone: String(fd.get("telefone") ?? "").trim(),
      curso: String(fd.get("curso") ?? "").trim() || null,
      tamanho: String(fd.get("tamanho") ?? "").trim() || null,
      formato: String(fd.get("formato") ?? "").trim() || null,
      mensagem: String(fd.get("mensagem") ?? "").trim() || null,
    };
    const { error } = await supabase.from("course_signups").insert(payload);
    setSubmitting(false);
    if (error) {
      console.error("[cursos] insert failed", error);
      toast.error("Não foi possível enviar agora. Tente novamente em instantes.");
      return;
    }
    setSent(true);
  }


  return (
    <section id="solicitar" className="scroll-mt-[var(--scroll-anchor)] bg-navy text-white">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Solicite um treinamento para sua equipe
          </h2>
          <p className="mt-4 text-base text-white/70">
            Preencha o formulário e nossa equipe entrará em contato para entender o contexto e
            preparar uma proposta.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/45">
            Turmas a partir de 4 (executivo) ou 8 participantes, conforme o programa
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[640px]">
          {sent ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-green/40 bg-green/10 p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-green" />
              <h3 className="font-serif text-2xl text-white">Solicitação recebida!</h3>
              <p className="text-white/70">
                Nossa equipe entrará em contato para dar continuidade à solicitação.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
            >
              <FormField label="Nome completo" name="nome" required error={errors.nome} />
              <div className="grid gap-5 md:grid-cols-2">
                <FormField label="Empresa" name="empresa" required error={errors.empresa} />
                <FormField label="Cargo" name="cargo" required error={errors.cargo} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="E-mail corporativo"
                  name="email"
                  type="email"
                  required
                  error={errors.email}
                />
                <FormField
                  label="Telefone / WhatsApp"
                  name="telefone"
                  type="tel"
                  required
                  error={errors.telefone}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <FormSelect
                label="Curso de interesse"
                name="curso"
                value={initialCourse || courseOptions[0]}
                onChange={onCourseChange}
                options={courseOptions}
              />

              <FormSelect
                label="Tamanho da equipe"
                name="tamanho"
                defaultValue="8 a 15 pessoas"
                options={[
                  "4 a 7 pessoas (programa executivo)",
                  "8 a 15 pessoas",
                  "16 a 30 pessoas",
                  "31 a 50 pessoas",
                  "Mais de 50 pessoas",
                ]}
              />

              <div>
                <span className="text-sm text-white/70">Formato preferido</span>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Presencial", "Online", "Híbrido", "Sem preferência"].map((opt, i) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white transition-colors hover:border-green/60 has-[:checked]:border-green has-[:checked]:bg-green/10"
                    >
                      <input
                        type="radio"
                        name="formato"
                        value={opt}
                        defaultChecked={i === 3}
                        className="accent-green"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="text-sm text-white/70">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  autoComplete="off"
                  placeholder="Conte-nos sobre os desafios da sua equipe ou objetivos do treinamento"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-green"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-green px-6 py-3.5 text-base font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? "Enviando…" : "Enviar solicitação"}
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-white/55">
                <Lock className="h-3.5 w-3.5" />
                Seus dados estão seguros. Não compartilhamos suas informações.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const cursosAutoComplete: Record<string, string> = {
  nome: "name",
  email: "email",
  empresa: "organization",
  cargo: "organization-title",
  telefone: "tel",
};

function FormField({
  label,
  name,
  type = "text",
  required,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-white/70">
        {label} {required && <span className="text-green">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        autoComplete={cursosAutoComplete[name] ?? "off"}
        className={`mt-2 w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-green ${
          error ? "border-destructive" : "border-white/10"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function FormSelect({
  label,
  name,
  options,
  value,
  defaultValue,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-white/70">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        defaultValue={value ? undefined : defaultValue}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-green"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-navy text-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
