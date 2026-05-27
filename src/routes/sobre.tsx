import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Quote, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Buy Group — Procurement com obsessão por resultado" },
      { name: "description", content: "Conheça a Buy Group: consultoria brasileira de procurement focada em redução de custos, outsourcing e formação de compradores." },
      { property: "og:title", content: "Sobre a Buy Group" },
      { property: "og:description", content: "Procurement com obsessão por resultado." },
    ],
  }),
  component: SobrePage,
});



const values = [
  { t: "No Savings, No Fee", d: "Cliente só paga se houver economia comprovada. Sem custos iniciais, sem risco." },
  { t: "Metodologia comprovada", d: "Práticas globais adaptadas à realidade brasileira — TCO, should-cost, RFPs competitivas." },
  { t: "Transparência total", d: "Relatórios auditáveis com baseline oficial. Cada economia documentada e validada." },
  { t: "Independência", d: "Zero conflito de interesse com fornecedores — foco exclusivo no resultado do cliente." },
];

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem somos"
        title={<>Mais que comprar. <span className="text-white/60">É comprar bem.</span></>}
        description="A Buy Group é referência em negociação estratégica e otimização de custos corporativos — transformamos o setor de compras em uma alavanca de lucro, sem interromper operações ou exigir investimentos iniciais."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Nosso propósito</h2>
          <div className="mt-6 space-y-5 text-pretty text-muted-foreground">
            <p>
              Atuamos como parceiros estratégicos, oferecendo inteligência de
              mercado e poder de negociação para maximizar resultados. Nosso
              propósito é garantir que cada real investido seja um investimento
              inteligente, otimizando despesas e impulsionando o crescimento.
            </p>
            <p>
              Combinamos análise quantitativa de spend, expertise setorial e
              negociação de alto desempenho. Atendemos da média empresa ao grupo
              multinacional, sempre com o mesmo princípio: comprar melhor é uma
              decisão estratégica — cada real economizado entra direto na margem.
            </p>
            <p>
              Nosso modelo <span className="font-semibold text-navy">No Savings, No Fee</span> elimina
              o risco financeiro do cliente e alinha nossos interesses: só
              ganhamos quando o cliente ganha — e ganhamos juntos.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
              <Quote className="h-6 w-6" />
            </div>
            <p className="mt-6 font-serif text-2xl leading-snug text-navy">
              "Transformamos despesas em margem de lucro sustentada, com
              estratégias inteligentes de compras e resultados tangíveis."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Buy Group · Supply Chain
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Diferenciais que sustentam nossos resultados</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="bg-white p-8">
                <p className="font-serif text-2xl text-navy">{v.t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-navy p-10 text-white md:p-14">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl">Pronto para tratar compras como margem?</h3>
              <p className="mt-3 max-w-xl text-white/75">
                Em uma conversa de 45 minutos entendemos seu contexto e propomos um diagnóstico gratuito.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)]"
            >
              Falar com a Buy Group <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
