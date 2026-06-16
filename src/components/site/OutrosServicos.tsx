import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Rocket } from "lucide-react";
import { getOutros, SERVICE_BY_SLUG, COURSE_ID_BY_TITLE, type ServiceSlug } from "@/lib/services";

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
  const cursos = SERVICE_BY_SLUG[currentSlug]?.cursosRelacionados ?? [];
  if (items.length === 0) return null;

  return (
    <section
      aria-label="Outros serviços"
      className="border-y border-border bg-secondary/25"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-navy/55">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-navy md:text-4xl">
            {title}
          </h2>
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
                hash={s.defaultAnchor}
                className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-navy/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy transition-colors group-hover:border-green group-hover:text-green"
                aria-label={`Conhecer ${s.label}`}
              >
                Conhecer
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>

        {cursos.length > 0 ? (
          <div className="mt-12 rounded-2xl border border-border bg-white/60 px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/15 text-navy">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-navy/55">
                    Capacitação relacionada
                  </p>
                  <p className="mt-1 text-sm text-navy/80">
                    Conheça na Academy os cursos que complementam este serviço.
                  </p>
                </div>
              </div>
              <Link
                to="/cursos"
                className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-green"
              >
                Ver Academy
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {cursos.map((title) => {
                const courseId = COURSE_ID_BY_TITLE[title];
                return (
                  <li key={title}>
                    <Link
                      to="/cursos"
                      hash={courseId ? `curso-${courseId}` : undefined}
                      className="inline-flex items-center rounded-full border border-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:border-green hover:text-green"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            to="/contato"
            search={SERVICE_BY_SLUG[currentSlug]?.interesseSlug ? { interesse: SERVICE_BY_SLUG[currentSlug].interesseSlug } : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-navy shadow-[var(--shadow-green)] transition-transform hover:-translate-y-0.5"
          >
            <Rocket className="h-4 w-4" />
            Agendar executive briefing
          </Link>
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-green hover:text-green"
          >
            Ver portfólio completo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
