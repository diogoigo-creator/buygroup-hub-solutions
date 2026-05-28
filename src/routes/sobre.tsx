import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Quote, ArrowUpRight, ShieldCheck, Lock, Award, Scale } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Buy Group — The procurement transformation firm" },
      { name: "description", content: "A firma de procurement transformation escolhida por CFOs de companhias enterprise. Investment-grade results, garantia contratual." },
      { property: "og:title", content: "Sobre a Buy Group" },
      { property: "og:description", content: "Procurement como alavanca de margem. Sob NDA." },
    ],
  }),
  component: SobrePage,
});

const principles = [
  { icon: ShieldCheck, t: "No Savings, No Fee", d: "Garantia contratual de resultado. Sem savings auditados por third-party, sem fee. Sem exceções." },
  { icon: Award, t: "Senior-only delivery", d: "Zero juniores em engajamento. Todo projeto conduzido por sócios e diretores com 15+ anos em procurement enterprise." },
  { icon: Lock, t: "Confidencialidade institucional", d: "NDA padrão antes do primeiro briefing. Seguro corporativo em todos os engajamentos. Reporting board-ready." },
  { icon: Scale, t: "Independência estrutural", d: "Zero relação comercial com fornecedores. Único alinhamento de incentivo: o P&L do cliente." },
];

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="By invitation · Quem somos"
        title={<>A firma de procurement <span className="text-green">escolhida</span> por CFOs enterprise.</>}
        description="Buy Group é a procurement transformation firm para companhias com P&L de R$ [1]Bi+ que tratam compras como alavanca de margem — não como centro de custo."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Posicionamento</p>
          <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
            Por que existimos.
          </h2>
          <div className="mt-6 space-y-5 text-pretty text-muted-foreground">
            <p>
              Em companhias enterprise, cada decisão de procurement é uma decisão
              de board. Cada vendor selecionado expõe carreira. Cada negociação
              mal conduzida vira nota de rodapé no resultado trimestral.
            </p>
            <p>
              A Buy Group existe para retirar essa exposição. Operamos como
              extensão sênior da função de compras do cliente, com{" "}
              <span className="font-semibold text-navy">garantia contratual de resultado</span>{" "}
              e auditoria third-party em cada fase. O CFO assina o engajamento
              sabendo o piso de saving e o limite de risco — antes de começar.
            </p>
            <p>
              Nosso modelo <span className="font-semibold text-navy">No Savings, No Fee</span> não
              é desconto comercial: é a única forma de alinhar 100% nossos
              incentivos com a margem do cliente. Se não capturamos saving
              auditado, não há fee. Período.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
              <Quote className="h-6 w-6" />
            </div>
            <p className="mt-6 font-serif text-2xl leading-snug text-navy">
              "Em 90 dias entregaram o que três consultorias tier-1 não
              conseguiram em dois anos. O modelo de risco compartilhado mudou a
              equação."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              CFO · Grupo industrial · R$ [3.2]Bi
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-navy/55">Operating principles</p>
            <h2 className="mt-4 font-serif text-3xl text-navy md:text-4xl">
              Quatro princípios que <span className="text-green">não negociamos</span>.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {principles.map((v) => (
              <div key={v.t} className="bg-white p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                  <v.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 font-serif text-2xl text-navy">{v.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-navy p-10 text-white md:p-14">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-green">Executive briefing · 20min</p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl">
                Currently accepting <span className="text-green">[3]</span> new engagements.
              </h3>
              <p className="mt-3 max-w-xl text-white/75">
                Sob NDA. Estimativa preliminar de saving entregue em até 5 dias úteis após o briefing.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold tracking-wide text-navy shadow-[var(--shadow-green)]"
            >
              Agendar briefing <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
