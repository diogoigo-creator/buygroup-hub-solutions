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
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <p className="font-sans text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">{description}</p>
        )}
      </div>
    </section>
  );
}
