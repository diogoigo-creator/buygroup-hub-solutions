import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  currentLabel: string;
}

export function Breadcrumb({ currentLabel }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Trilha de navegação"
      className="border-b border-border/60 bg-secondary/40"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-[11px] uppercase tracking-[0.2em] lg:px-10">
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
      </div>
    </nav>
  );
}
