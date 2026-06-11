import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Lock, Award, Sparkles, TrendingUp, Scale, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { FullLockup } from "@/components/site/hero-identities/FullLockup";
import heroImg from "@/assets/hero-boardroom.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Group — Procurement transformation for Fortune-class CFOs" },
      { name: "description", content: "The procurement transformation firm trusted by enterprise CFOs. Investment-grade savings, fully documented. No Savings, No Fee." },
      { property: "og:title", content: "Buy Group — Investment-grade procurement transformation" },
      { property: "og:description", content: "Documented enterprise savings with full risk reversal. Executive briefings by invitation." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const credibility = [
  { value: "R$ 2.1Bi+", label: "em savings documentados" },
  { value: "23", label: "clientes enterprise atendidos" },
  { value: "8.7x", label: "ROI médio por engajamento" },
  { value: "100%", label: "auditável · No Savings, No Fee" },
];


const framework = [
  { n: "01", t: "Spend Intelligence", d: "Auditoria forense de 24 meses de despesas. Baseline oficial, classificação UNSPSC, identificação de quick wins em 30 dias." },
  { n: "02", t: "Strategic Sourcing", d: "Should-cost modeling, TCO analysis e RFPs competitivas conduzidas por seniores ex-procurement de grandes corporações." },
  { n: "03", t: "Negotiation Lab", d: "Negociação executada por nossa equipe. Capturamos margem sem comprometer SLA, qualidade ou continuidade operacional." },
  { n: "04", t: "Value Assurance", d: "Auditoria trimestral do saving capturado. Reporting board-ready. Garantia contratual de resultado ou reembolso integral." },
];

const moat = [
  { icon: ShieldCheck, t: "Investment-grade guarantee", d: "Único modelo do mercado com garantia contratual de resultado. Sem savings auditados, sem fee — sem exceções." },
  { icon: Lock, t: "Confidencialidade absoluta", d: "NDA padrão antes do primeiro briefing. Cobertura de seguro corporativo em todos os engajamentos." },
  { icon: Award, t: "Senior-only delivery", d: "Zero juniores em projeto. Cada engajamento é conduzido por sócios e diretores com 15+ anos em procurement enterprise." },
  { icon: Scale, t: "Independência estrutural", d: "Zero relação comercial com fornecedores. Nosso único alinhamento é com o P&L do cliente." },
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
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/65 to-navy/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/40" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-green/10 blur-3xl" />
        <FullLockup slogan={{ primary: "Mais que comprar. É comprar", accent: "bem." }} />


        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-12 lg:pt-10">
          <div className="lg:col-span-9">
            <div className="inline-flex items-center gap-3 border-l-2 border-green px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/75">
              <Sparkles className="h-3.5 w-3.5 text-green" />
              By invitation · Procurement transformation
            </div>

            <h1 className="mt-8 max-w-4xl text-balance font-serif font-medium leading-[0.95] tracking-[-0.025em] text-white">
              <span className="block text-5xl md:text-6xl lg:text-6xl">
                R$ <span className="text-green">2.1</span> bilhões
              </span>
              <span className="mt-3 block text-2xl text-white/85 md:text-3xl lg:text-3xl">
                em savings auditados.
                <span className="text-white/55"> Zero risco à sua reputação.</span>
              </span>
            </h1>


            <p className="mt-6 max-w-2xl text-pretty text-base text-white/75 lg:text-lg">
              A firma de procurement transformation escolhida por
              <span className="text-white"> 23 CFOs de companhias enterprise</span>.
              Modelo <span className="text-green">No Savings, No Fee</span> com garantia contratual:
              resultados auditáveis ou reembolso integral.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
              >
                Agendar executive briefing · 20min
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:border-green/70 hover:text-green"
              >
                Conhecer o ProcureMax™ Framework
              </Link>
            </div>

            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45">
              <Lock className="h-3 w-3" />
              NDA padrão · Currently accepting 3 new clients this quarter
            </p>

          </div>
        </div>
      </section>

      {/* CREDIBILITY MATRIX */}
      <section className="border-y border-white/5 bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-white/10 lg:grid-cols-4">
          {credibility.map((m) => (
            <div key={m.label} className="bg-navy px-6 py-12 lg:px-10">
              <p className="font-serif text-4xl text-green lg:text-5xl">{m.value}</p>
              <p className="mt-3 text-sm leading-snug text-white/65">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Case study · Confidencial</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              R$ 47MM capturados em <span className="text-green">90 dias</span>.
            </h2>
            <p className="mt-6 text-pretty text-muted-foreground">
              Grupo industrial brasileiro, faturamento R$ 3.2Bi. Spend endereçável
              de R$ 380MM. Resultado auditado pela KPMG, validado pelo comitê de auditoria
              do board.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-green"
            >
              Solicitar case completo (sob NDA) <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {[
                { k: "Saving capturado", v: "12.4%", s: "sobre spend endereçável" },
                { k: "Payback", v: "< 90d", s: "do primeiro contrato renegociado" },
                { k: "ROI do projeto", v: "11.2x", s: "vs. fee Buy Group" },
              ].map((c) => (
                <div key={c.k} className="bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.k}</p>
                  <p className="mt-4 font-serif text-4xl text-navy">{c.v}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{c.s}</p>
                </div>
              ))}
            </div>

            <figure className="mt-6 rounded-2xl border border-border bg-secondary/40 p-8">
              <blockquote className="font-serif text-2xl leading-snug text-navy">
                "Em 90 dias entregaram o que três consultorias tier-1 não conseguiram em
                dois anos. O modelo de risco compartilhado mudou a equação."
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
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-green">ProcureMax™ Framework</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-white md:text-5xl">
              Metodologia proprietária. Quatro fases.
              <span className="text-white/55"> Um único KPI: saving auditado.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-white/70">
              Desenvolvida ao longo de 200+ engajamentos enterprise. ProcureMax™ é o
              único framework de procurement com garantia contratual de resultado e
              auditoria third-party em cada fase.
            </p>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {framework.map((step) => (
              <li key={step.n} className="bg-navy p-8 lg:p-10">
                <span className="font-serif text-4xl text-green">{step.n}</span>
                <p className="mt-6 font-serif text-xl text-white">{step.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DIFFERENTIATION MOAT */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Por que Buy Group</p>
          <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
            Quatro razões pelas quais boards de companhias enterprise
            <span className="text-green"> nos escolhem</span> sobre Big Four.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {moat.map((d) => (
            <div key={d.t} className="bg-white p-8 lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                <d.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-navy">{d.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIAS DE SPEND — TEASER */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Redução de custos</p>
              <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
                Onde encontramos saving.
                <span className="text-green"> Quanto cada categoria devolve ao P&amp;L.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-pretty text-muted-foreground">
                Telecom, energia, logística, TI, facilities, travel, seguros e mais 40+ verticais.
                Veja as faixas de saving observadas em 200+ engajamentos enterprise.
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
              <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Quem conduz</p>
              <h2 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
                Senior procurement.
                <span className="text-green"> Sem juniores.</span>
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
              {[
                { icon: Building2, t: "15+ anos", d: "experiência média da equipe sênior em procurement enterprise" },
                { icon: TrendingUp, t: "200+", d: "engajamentos conduzidos em verticais críticas" },
                { icon: Award, t: "Tier-1", d: "background dos sócios em consultorias globais e indústria" },
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
              <p className="text-xs uppercase tracking-[0.32em] text-green">Executive briefing · CFO-level · 20min</p>
              <h2 className="mt-4 text-balance font-serif text-4xl md:text-5xl">
                Uma conversa. Estimativa preliminar de saving.
                <span className="text-white/55"> Sob NDA.</span>
              </h2>
              <p className="mt-5 max-w-lg text-white/75">
                Aceitamos no máximo <span className="text-green">12 clientes por trimestre</span>
                para preservar o padrão de delivery. Currently accepting 3 new engagements.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
              >
                Agendar executive briefing
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55">
                <ShieldCheck className="h-3 w-3 text-green" />
                Full guarantee · Investment-grade results or full refund
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
