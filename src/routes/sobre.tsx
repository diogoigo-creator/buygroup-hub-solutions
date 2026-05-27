import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import markEmber from "@/assets/buy-group-mark-ember.png";

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
  { t: "Resultado antes de retórica", d: "Métrica única: saving auditado e sustentável." },
  { t: "Método aberto", d: "Transferimos ferramentas e processo — o cliente fica autônomo." },
  { t: "Conflito controlado", d: "Independência total em relação a fornecedores." },
  { t: "Sigilo absoluto", d: "Tratamos spend como informação financeira sensível." },
];

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sobre"
        title={<>Procurement como <span className="italic">vantagem competitiva</span>.</>}
        description="A Buy Group nasceu da convicção de que compras é, antes de qualquer coisa, um centro de lucro — e não de despesa."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl md:text-4xl">Quem somos</h2>
          <div className="mt-6 space-y-5 text-pretty text-muted-foreground">
            <p>
              Somos um time multidisciplinar formado por executivos de procurement,
              engenheiros e analistas financeiros com passagens por indústrias,
              varejo, serviços e setor financeiro. Nossa metodologia combina
              análise quantitativa de spend, expertise setorial e negociação de
              alto desempenho.
            </p>
            <p>
              Atendemos da média empresa ao grupo multinacional, sempre com o
              mesmo princípio: comprar melhor é uma decisão estratégica, não
              tática. Cada real economizado entra direto na margem.
            </p>
            <p>
              Mais de 200 projetos entregues e um índice de retenção acima de 95%
              confirmam o que nos move: clientes que voltam porque viram resultado.
            </p>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8">
            <img
              src={markEmber}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 opacity-20"
            />
            <div className="relative">
              <img src={markEmber} alt="" aria-hidden="true" className="h-10 w-10" />
              <p className="mt-6 font-serif text-2xl leading-snug">
                "Não vendemos relatórios. Entregamos saving auditado, com baseline
                claro e responsabilidade compartilhada."
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Diretoria · Buy Group
              </p>
            </div>
          </div>
        </aside>

      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <h2 className="font-serif text-3xl md:text-4xl">Valores que orientam o nosso trabalho</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="bg-background p-8">
                <p className="font-serif text-2xl text-primary">{v.t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
