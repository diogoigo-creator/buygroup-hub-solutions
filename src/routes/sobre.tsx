import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Quote, ArrowUpRight, MessageCircle } from "lucide-react";

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

const WHATSAPP_URL = "https://wa.me/5511940000000?text=Quero%20um%20diagn%C3%B3stico%20gratuito";

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

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Quem somos</h2>
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
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
              <Quote className="h-6 w-6" />
            </div>
            <p className="mt-6 font-serif text-2xl leading-snug text-navy">
              "Não vendemos relatórios. Entregamos saving auditado, com baseline
              claro e responsabilidade compartilhada."
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Diretoria · Buy Group
            </p>
          </div>
        </aside>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <h2 className="font-serif text-3xl text-navy md:text-4xl">Valores que orientam o nosso trabalho</h2>
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
