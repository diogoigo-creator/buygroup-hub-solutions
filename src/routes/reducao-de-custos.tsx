import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Wifi, Zap, Truck, Printer, Laptop, Wrench, Package, Plane, Shield, Banknote, Boxes, Recycle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/reducao-de-custos")({
  head: () => ({
    meta: [
      { title: "Redução de Custos — Categorias e potencial de economia | Buy Group" },
      { name: "description", content: "Categorias endereçáveis de spend e faixas de saving observadas em 200+ engajamentos enterprise. Telecom, energia, logística, TI, facilities e mais." },
      { property: "og:title", content: "Redução de Custos · Categorias endereçáveis" },
      { property: "og:description", content: "Onde encontramos saving e quanto cada categoria devolve ao P&L." },
    ],
  }),
  component: ReducaoDeCustosPage,
});

const categorias = [
  { icon: Wifi, t: "Telecom & Conectividade", r: "18–32%", d: "Voz, dados, mobile, links dedicados e cloud connectivity." },
  { icon: Zap, t: "Energia & Utilities", r: "12–25%", d: "Mercado livre, gestão tarifária, gás natural e eficiência energética." },
  { icon: Truck, t: "Logística & Frete", r: "10–22%", d: "Transporte rodoviário, last-mile, armazenagem e cabotagem." },
  { icon: Printer, t: "Outsourcing de Impressão", r: "20–40%", d: "Frota, outsourcing, gestão documental e print-on-demand." },
  { icon: Laptop, t: "Tecnologia & SaaS", r: "15–30%", d: "Licenciamento, hardware, cloud (AWS/Azure/GCP) e contratos de software." },
  { icon: Wrench, t: "Facilities & Manutenção", r: "14–28%", d: "Limpeza, segurança patrimonial, manutenção predial e jardinagem." },
  { icon: Package, t: "Embalagens & Suprimentos", r: "8–20%", d: "Caixas, filmes, paletes, escritório e MRO indiretos." },
  { icon: Plane, t: "Travel & Eventos Corporativos", r: "15–35%", d: "Aéreo, hospedagem, locação de veículos, TMC e eventos." },
  { icon: Shield, t: "Seguros Corporativos", r: "10–25%", d: "Patrimonial, frota, vida em grupo, D&O e responsabilidade civil." },
  { icon: Banknote, t: "Serviços Financeiros & Bancários", r: "12–28%", d: "Tarifas bancárias, cartões corporativos, adquirência e câmbio." },
  { icon: Boxes, t: "Matéria-prima & Insumos", r: "6–18%", d: "Strategic sourcing, should-cost modeling e leilões reversos." },
  { icon: Recycle, t: "Resíduos & Sustentabilidade", r: "15–30%", d: "Gestão de resíduos, reciclagem, água e efluentes industriais." },
];

function ReducaoDeCustosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Redução de custos"
        title={
          <>
            Onde encontramos saving.{" "}
            <span className="text-green">Quanto cada categoria devolve ao P&amp;L.</span>
          </>
        }
        description="Faixas observadas em [200+] engajamentos enterprise sobre o spend endereçável de cada categoria. O potencial real é confirmado após Spend Intelligence — sem custo até a aprovação do business case."
      />

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c) => (
              <article key={c.t} className="group flex flex-col bg-white p-8 transition-colors hover:bg-secondary/40">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-navy">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Saving potencial</p>
                    <p className="font-serif text-2xl text-green">{c.r}</p>
                  </div>
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-white p-8 md:flex-row md:items-center md:p-10">
            <div>
              <p className="font-serif text-2xl text-navy">
                Não vê sua categoria? <span className="text-green">Trabalhamos com [40+] verticais.</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Spend Intelligence em 30 dias mapeia 90% do gasto e dimensiona o potencial real por categoria.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Solicitar diagnóstico de spend
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppFab />
    </SiteLayout>
  );
}
