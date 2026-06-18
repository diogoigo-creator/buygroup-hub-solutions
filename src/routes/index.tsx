import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShieldCheck,
  Lock,
  Award,
  Sparkles,
  TrendingUp,
  Scale,
  Building2,
  Search,
  Compass,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionWatermark } from "@/components/site/SectionWatermark";
import heroImg from "@/assets/hero-boardroom.webp";
import { SOCIAL_META, SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Buy Group — Economia em compras com governança";
    const description =
      "A Buy Group ajuda grandes empresas a transformar despesas em margem por meio de análise, negociação estratégica e governança financeira.";
    const url = "https://buygroup-hub-solutions.lovable.app/";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: "Buy Group — Compras estratégicas e margem real" },
        {
          property: "og:description",
          content: "Economia em compras, negociações estratégicas e savings validados com governança financeira.",
        },
        { property: "og:url", content: url },
        ...SOCIAL_META,
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: url },
        {
          rel: "preload",
          as: "image",
          href: heroImg,
          fetchpriority: "high",
        } as unknown as { rel: string; href: string },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}/#service`,
            name: "Buy Group",
            url: SITE_URL,
            description,
            areaServed: { "@type": "Country", name: "Brasil" },
            priceRange: "$$$",
            provider: { "@id": `${SITE_URL}/#organization` },
          }),
        },
      ],
    };
  },
  component: Index,
});

const credibility = [
  { value: "R$ 1,4 bi+", label: "Em volume de compras analisado" },
  { value: "23", label: "Grandes empresas atendidas" },
  { value: "8,7x", label: "ROI médio nos projetos" },
  { value: "100%", label: "Remuneração vinculada ao resultado\u00A0" },
];


const frameworkOverview = [
  { n: "01", icon: Search, t: "Mapeamento de Oportunidades" },
  { n: "02", icon: Compass, t: "Estratégia de Compra" },
  { n: "03", icon: Handshake, t: "Condução da Negociação" },
  { n: "04", icon: CheckCircle2, t: "Validação dos Savings" },
];



const moat = [
  {
    icon: ShieldCheck,
    t: "Remuneração vinculada ao resultado",
    d: "Nossa remuneração é vinculada aos savings homologados conforme o baseline aprovado com o cliente.",
  },
  {
    icon: Lock,
    t: "Confidencialidade institucional",
    d: "O trabalho começa sob NDA, com tratamento reservado das informações comerciais e financeiras.",
  },
  {
    icon: Award,
    t: "Atuação direta de especialistas",
    d: "Cada projeto é liderado por profissionais com mais de 15 anos de experiência em compras, negociação e gestão de fornecedores em ambientes corporativos complexos.",
  },
  {
    icon: Scale,
    t: "Independência estrutural",
    d: "A Buy Group atua sem vínculos comerciais com fornecedores, garantindo recomendações alinhadas às prioridades financeiras e operacionais do cliente.",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate flex overflow-hidden bg-navy text-white lg:min-h-[78svh] lg:items-center">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="hero-cinematic-image pointer-events-none absolute inset-0 h-full w-full object-cover opacity-65"
        />

        <div className="hero-cinematic-light pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/50 via-navy/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        <div className="hero-cinematic-glow pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-green/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-16 sm:pb-20 sm:pt-24 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-16 lg:pt-16">
          <div className="lg:col-span-11">
            <div className="hero-editorial hero-delay-1 inline-flex items-center gap-3 border-l-2 border-green px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/75">
              <Sparkles className="h-3.5 w-3.5 text-green" />
              PERFORMANCE EM COMPRAS
            </div>

            <h1 className="mt-7 max-w-5xl text-balance font-serif text-[2.125rem] font-medium leading-[1.04] tracking-[-0.03em] text-white sm:mt-9 sm:text-5xl sm:leading-[0.98] sm:tracking-[-0.035em] md:text-6xl lg:text-[5rem]">
              <span className="hero-editorial hero-delay-2 block">
                Encontramos oportunidades que os líderes{" "}
              </span>
              <span className="hero-editorial hero-delay-3 block text-white/65">
                ainda não conseguem enxergar.
              </span>
            </h1>

            <p className="hero-editorial hero-delay-4 mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/75 lg:text-lg">
              Revelamos economias nas compras que sua empresa já realiza, conduzimos negociações
              estratégicas e transformamos despesas em margem com governança.
            </p>

            <div className="hero-editorial hero-delay-5 mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                to="/contato" hash="form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
              >
                Falar com especialista
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>

            <p className="hero-editorial hero-delay-6 mt-7 flex max-w-2xl items-start gap-2 text-xs uppercase leading-relaxed tracking-[0.2em] text-white/45">
              <Lock className="mt-0.5 h-3 w-3 shrink-0" />
              SOB NDA · REMUNERAÇÃO VINCULADA A SAVINGS HOMOLOGADOS
            </p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY MATRIX */}
      <section className="border-y border-white/5 bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-white/10 lg:grid-cols-4">
          {credibility.map((m, index) => (
            <div
              key={m.label}
              className="credibility-reveal bg-navy px-5 py-9 sm:px-6 sm:py-12 lg:px-10 text-center"
              style={{ animationDelay: `${0.18 + index * 0.12}s` }}
            >
              <p className="credibility-value font-tabular font-serif text-3xl text-green sm:text-4xl lg:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-white/65">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY HERO */}
      <section className="relative overflow-hidden mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <SectionWatermark variant="right" tone="dark" />
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
              ESTUDO DE CASO · CONFIDENCIAL
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              R$ 12MM capturados em <span className="text-green">90 dias</span>.
            </h2>
            <p className="mt-6 text-pretty text-muted-foreground">
              Grupo industrial brasileiro. Faturamento de R$ 3,2 bilhões.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; R$ 380 milhões em compras indiretas mapeadas e validadas pelo comitê de auditoria.
            </p>
            <Link
              to="/contato" hash="form"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-green"
            >
              Solicitar case completo (sob NDA) <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {[
                { k: "SAVING\u00A0 CAPTURADO", v: "12,4%", s: "sobre o volume anual analisado" },
                { k: "Retorno", v: "< 90 dias", s: "a partir do primeiro contrato renegociado" },
                { k: "ROI do projeto", v: "9,3x", s: "sobre o investimento na Buy Group" },
              ].map((c) => (
                <div key={c.k} className="bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.k}</p>
                  <p className="mt-4 font-tabular font-serif text-4xl text-navy">{c.v}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.s}</p>
                </div>
              ))}
            </div>

            <figure className="mt-6 rounded-2xl border border-border bg-secondary/40 p-8">
              <blockquote className="font-serif text-2xl leading-snug text-navy">
                "Em 90 dias, savings que permaneciam não capturados havia dois anos foram
                destravados com governança financeira, risco compartilhado e validação do
                resultado."
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                CFO · Grupo industrial · R$ 3.2Bi faturamento
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PROCUREMAX FRAMEWORK */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-green/30 bg-green/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
              <p className="font-sans text-[0.7rem] uppercase tracking-[0.32em] text-green">
                Metodologia proprietária CUT4MORE™
              </p>
            </div>
            <h2 className="mt-6 text-balance font-serif text-4xl text-white md:text-5xl">
              Uma metodologia estruturada em quatro fases.
              <span className="text-white/55"> Da análise ao resultado validado.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-white/70">
              Desenvolvida a partir da experiência em projetos de compras complexos, a{" "}
              <span className="font-semibold uppercase tracking-wider text-green">CUT4MORE™</span>{" "}
              organiza a análise, a estratégia, a negociação e a validação financeira dos savings.
            </p>
          </div>

          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-4">
            {frameworkOverview.map((step, idx) => (
              <li
                key={step.n}
                className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-green/40 hover:bg-green/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green/20 bg-gradient-to-br from-green/25 to-green/5 text-green">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-tabular font-serif text-xs text-green/80">{step.n}</span>
                  <p className="mt-0.5 truncate font-serif text-sm leading-snug text-white">
                    {step.t}
                  </p>
                </div>
                {idx < frameworkOverview.length - 1 && (
                  <ArrowUpRight className="hidden h-3.5 w-3.5 shrink-0 text-green/40 lg:block" />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center gap-4 lg:mt-14">
            <Link
              to="/metodologia"
              className="group inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
            >
              Ver metodologia em detalhe
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Atividades, entregáveis e métricas por fase
            </p>
          </div>
        </div>

      </section>

      {/* DIFFERENTIATION MOAT */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
            Por que Buy Group
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Quatro razões pelas quais lideranças executivas{" "}
            <span className="text-green">nos escolhem</span> para negociações de alto impacto
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {moat.map((d) => (
            <div
              key={d.t}
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_22px_50px_-16px_oklch(0.21_0.06_264_/_0.12)] lg:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-green/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-green/10 bg-gradient-to-br from-green/20 to-green/5 text-navy shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_8px_20px_-8px_rgba(212,175,55,0.4)]">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{d.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS E POTENCIAL DE ECONOMIA */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
                Redução de custos
              </p>
              <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
                Onde encontramos economia.
                <span className="text-green">
                  {" "}
                  Quanto cada categoria pode contribuir para a margem.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-pretty text-muted-foreground">
                Telecomunicações, energia, logística, tecnologia, serviços corporativos, seguros,
                matérias-primas e outras categorias estratégicas.
              </p>
              <Link
                to="/reducao-de-custos"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Ver categorias e potencial de economia
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM CREDENTIALS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">
                Quem conduz
              </p>
              <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
                Condução por especialistas.
                <span className="text-green"> Experiência aplicada à negociação.</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
              {[
                {
                  icon: Building2,
                  t: "15+ anos",
                  d: "experiência média da equipe em compras e negociação",
                },
                { icon: TrendingUp, t: "100+", d: "projetos conduzidos em verticais críticas" },
                {
                  icon: Award,
                  t: "Vivência executiva",
                  d: "background dos sócios em projetos globais e indústria",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border bg-white p-6">
                  <c.icon className="h-5 w-5 text-green" />
                  <p className="mt-5 font-serif text-2xl text-navy">{c.t}</p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-green">
                BRIEFING EXECUTIVO · NÍVEL DIRETIVO · 20 MIN
              </p>
              <h2 className="mt-4 text-balance font-serif text-4xl md:text-5xl">
                Avalie o potencial de economia, os riscos e os próximos passos.
                <span className="text-white/55"> Sob NDA.</span>
              </h2>
              <p className="mt-5 max-w-lg text-white/75">
                Uma conversa executiva para entender o cenário de compras e identificar onde uma
                análise aprofundada pode gerar margem.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contato" hash="form"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
              >
                Falar com especialista
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
                <ShieldCheck className="h-3 w-3 text-green" />
                CONFIDENCIALIDADE · RESULTADO VALIDADO
              </p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
