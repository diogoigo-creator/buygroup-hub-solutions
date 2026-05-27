import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingDown, Users, GraduationCap, ShieldCheck, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-boardroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Group — Mais que comprar. É comprar bem." },
      { name: "description", content: "Buy Group: consultoria de procurement que transforma despesas em margem de lucro com modelo 'No Savings, No Fee'. Auditoria gratuita." },
      { property: "og:title", content: "Buy Group — Mais que comprar. É comprar bem." },
      { property: "og:description", content: "Transformamos despesas em lucro com inteligência de compras e modelo sem risco financeiro." },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/5511940000000?text=Quero%20uma%20auditoria%20gratuita%20de%20custos";

const services = [
  {
    icon: TrendingDown,
    title: "Redução de custos recorrentes",
    body: "Otimizamos contratos de energia, telecom, facilities, logística, seguros e terceirizados — sem interromper a operação. Economia típica de 10% a 40%.",
  },
  {
    icon: Users,
    title: "Outsourcing de compras",
    body: "Terceirização parcial ou total da função de compras com governança, KPIs, SLAs e tecnologia. Estrutura escalável e independente.",
  },
  {
    icon: GraduationCap,
    title: "Compras spot e projetos de alto valor",
    body: "Aquisições pontuais de alto impacto — obras corporativas, equipamentos industriais e tecnologia — com TCO, should-cost e RFPs competitivas.",
  },
];

const metrics = [
  { value: "10–40%", label: "Economia média sobre o spend endereçável" },
  { value: "R$500k+", label: "Liberados no primeiro ano em caso ilustrativo" },
  { value: "3h", label: "De dedicação para a auditoria gratuita" },
  { value: "0", label: "Risco financeiro: No Savings, No Fee" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-green/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-28 pt-28 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-40 lg:pt-40">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 border-l-2 border-green px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/75">
              Consultoria de procurement
            </div>
            <h1 className="mt-10 text-balance font-serif text-5xl leading-[1.0] text-white md:text-7xl lg:text-[6rem]">
              Compre melhor.
              <br />
              <span className="italic text-white/55">Cresça mais.</span>
            </h1>
            <p className="mt-10 max-w-xl text-pretty text-lg text-white/75">
              A Buy Group transforma a área de compras em alavanca real de
              margem — com redução de custos, terceirização especializada e
              capacitação executiva.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar diagnóstico gratuito
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-white/70"
              >
                Conhecer serviços
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pt-32">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="font-serif text-2xl leading-snug text-white">
                "Quem domina o custo de aquisição, domina a margem."
              </p>
              <p className="mt-4 text-sm text-white/60">
                Princípio fundador da Buy Group, aplicado a cada projeto desde
                indústrias a serviços B2B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-white/5 bg-navy text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-white/10 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-navy px-6 py-12 lg:px-10">
              <p className="font-serif text-5xl text-green">{m.value}</p>
              <p className="mt-3 text-sm leading-snug text-white/65">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/60">O que fazemos</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-navy md:text-5xl">
              Três frentes, um único <span className="italic">objetivo</span>: margem.
            </h2>
          </div>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-green"
          >
            Ver todos os serviços <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-white p-8 transition-colors duration-300 hover:border-green/60"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 font-serif text-2xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              <Link
                to="/servicos"
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-navy/80 group-hover:text-green"
              >
                Saiba mais <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH - dark editorial */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/55">Nosso método</p>
            <h2 className="mt-4 text-balance font-serif text-4xl text-white md:text-5xl">
              Diagnóstico, execução e <span className="italic text-white/60">governança</span> — sem teoria solta.
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-white/70">
              Cada projeto começa com uma análise profunda do spend e termina com
              indicadores claros de saving auditado. Trabalhamos lado a lado com
              suas equipes, transferindo método e ferramentas.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-green" />
              Remuneração parcial atrelada a resultado
            </div>
          </div>
          <ol className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {[
              { n: "01", t: "Diagnóstico do spend", d: "Mapa completo de gastos por categoria, fornecedor e área." },
              { n: "02", t: "Plano de captura", d: "Iniciativas priorizadas por impacto, complexidade e prazo." },
              { n: "03", t: "Execução conjunta", d: "Negociação, RFPs, contratos e implantação de governança." },
              { n: "04", t: "Saving auditado", d: "Reporting mensal com baseline, captura e desvios." },
            ].map((step) => (
              <li key={step.n} className="flex gap-6 bg-navy p-6">
                <span className="font-serif text-3xl text-green">{step.n}</span>
                <div>
                  <p className="font-medium text-white">{step.t}</p>
                  <p className="mt-1 text-sm text-white/65">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white md:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance font-serif text-4xl md:text-5xl">
                Quanto a sua empresa pode economizar nos próximos 12 meses?
              </h2>
              <p className="mt-4 max-w-lg text-white/75">
                Em até 5 dias úteis entregamos uma estimativa preliminar de
                saving baseada em benchmarks reais do seu setor.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)]"
              >
                Solicitar diagnóstico gratuito
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/cursos" className="text-sm text-white/80 hover:text-green">
                Conhecer cursos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:-translate-y-1"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </SiteLayout>
  );
}
