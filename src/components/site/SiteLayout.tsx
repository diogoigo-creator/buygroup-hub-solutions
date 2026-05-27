import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 to-white">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-green" />
          <p className="font-sans text-xs uppercase tracking-[0.24em] text-navy/70">{eyebrow}</p>
        </div>
        <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] text-navy md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
