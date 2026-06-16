import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SERVICES, type ServiceSlug } from "@/lib/services";

interface BreadcrumbProps {
  currentLabel: string;
  /** Slug do serviço atual — quando informado, renderiza o trocador rápido de serviço. */
  currentSlug?: ServiceSlug;
}

export function Breadcrumb({ currentLabel, currentSlug }: BreadcrumbProps) {
  return (
    <div className="sticky top-[64px] z-30 border-b border-border/60 bg-secondary/80 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-10">
        <nav
          aria-label="Trilha de navegação"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]"
        >
          <Link
            to="/servicos"
            className="font-medium text-navy/70 transition-colors hover:text-green"
          >
            Serviços
          </Link>
          <ChevronRight className="h-3 w-3 text-navy/35" aria-hidden />
          <span aria-current="page" className="text-navy/55">
            {currentLabel}
          </span>
        </nav>

        {currentSlug ? (
          <nav
            aria-label="Trocar de serviço"
            className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0"
          >
            <ul className="flex min-w-max items-center gap-1.5 lg:justify-end">
              {SERVICES.map((s) => {
                const active = s.slug === currentSlug;
                return (
                  <li key={s.slug} className="snap-start">
                    {active ? (
                      <span
                        aria-current="page"
                        className="inline-flex items-center rounded-full bg-green/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy"
                      >
                        {s.label}
                      </span>
                    ) : (
                      <Link
                        to={s.to}
                        className="inline-flex items-center rounded-full border border-transparent px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-navy/60 transition-colors hover:border-navy/15 hover:bg-white hover:text-navy"
                      >
                        {s.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
