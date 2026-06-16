import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ServiceSlug } from "@/lib/services";

interface BreadcrumbProps {
  currentLabel: string;
  /** Mantido por compatibilidade com as páginas; não é mais usado. */
  currentSlug?: ServiceSlug;
}

export function Breadcrumb({ currentLabel }: BreadcrumbProps) {
  return (
    <div className="sticky top-[var(--header-h)] z-30 border-b border-border/60 bg-secondary/80 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-3 lg:px-10">
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
      </div>
    </div>
  );
}
