import { Link } from "@tanstack/react-router";
import { Check, ChevronDown, ChevronRight } from "lucide-react";
import { SERVICES, type ServiceSlug } from "@/lib/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BreadcrumbProps {
  currentLabel: string;
  /** Slug do serviço atual — quando informado, renderiza o trocador rápido de serviço. */
  currentSlug?: ServiceSlug;
}

export function Breadcrumb({ currentLabel, currentSlug }: BreadcrumbProps) {
  return (
    <div className="sticky top-[64px] z-30 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-2.5 lg:px-10">
        <nav
          aria-label="Trilha de navegação"
          className="flex min-w-0 items-center gap-1.5 text-[11px] uppercase tracking-[0.18em]"
        >
          <Link
            to="/servicos"
            className="shrink-0 font-medium text-muted-foreground transition-colors hover:text-green"
          >
            Serviços
          </Link>
          <ChevronRight className="h-3 w-3 shrink-0 text-navy/30" aria-hidden />
          <span aria-current="page" className="truncate text-navy">
            {currentLabel}
          </span>
        </nav>

        {currentSlug ? (
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Trocar de serviço"
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-navy/15 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-green hover:text-green focus:outline-none focus-visible:border-green data-[state=open]:border-green data-[state=open]:text-green"
            >
              <span className="hidden sm:inline">Trocar serviço</span>
              <span className="sm:hidden">Serviços</span>
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-72 rounded-xl border-border bg-white p-1.5 shadow-[var(--shadow-soft)]"
            >
              <DropdownMenuLabel className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Portfólio de serviços
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-1" />
              {SERVICES.map((s) => {
                const active = s.slug === currentSlug;
                return (
                  <DropdownMenuItem key={s.slug} asChild className="rounded-lg p-0 focus:bg-transparent">
                    <Link
                      to={s.to}
                      className={
                        active
                          ? "flex w-full items-center justify-between gap-3 rounded-lg bg-green/10 px-2.5 py-2 text-sm font-medium text-navy"
                          : "flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-sm font-medium text-navy transition-colors hover:bg-secondary"
                      }
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="truncate">{s.label}</span>
                      {active ? (
                        <Check className="h-4 w-4 shrink-0 text-green" aria-hidden />
                      ) : null}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : null}
      </div>
    </div>
  );
}
