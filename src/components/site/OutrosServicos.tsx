import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getOutros, type ServiceSlug } from "@/lib/services";

interface OutrosServicosProps {
  currentSlug: ServiceSlug;
  /** Optional eyebrow text. Defaults to "Continue explorando". */
  eyebrow?: string;
  /** Optional title. Defaults to "Outros serviços". */
  title?: string;
}

export function OutrosServicos({
  currentSlug,
  eyebrow = "Continue explorando",
  title = "Outros serviços",
}: OutrosServicosProps) {
  const items = getOutros(currentSlug, 3);
  if (items.length === 0) return null;

  return (
    <section
      aria-label="Outros serviços"
      className="border-y border-border bg-secondary/25"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-navy/55">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              {title}
            </h2>
          </div>
          <Link
            to="/servicos"
            className="hidden items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-green sm:inline-flex"
          >
            Ver portfólio completo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.slug}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-green/50 hover:shadow-[var(--shadow-soft)]"
            >
              {s.isNew ? (
                <span className="absolute right-5 top-5 rounded-full bg-green px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-navy">
                  Novo
                </span>
              ) : null}
              <h3 className="font-serif text-xl leading-snug text-navy">
                {s.label}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.oneLiner}
              </p>
              <Link
                to={s.to}
                className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy transition-colors group-hover:border-green group-hover:text-green"
                aria-label={`Conhecer ${s.label}`}
              >
                Conhecer
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
