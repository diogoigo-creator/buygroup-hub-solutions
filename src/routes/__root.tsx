import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { LINKEDIN_URL } from "@/lib/contact-details";
import { GTM_ID } from "@/lib/seo";
import { GA4_SCRIPT, GTM_SCRIPT } from "@/lib/gtm";
import { BG_CONSENT_DEFAULT, CONSENT_DEFAULTS } from "@/lib/consent-defaults";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro inesperado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Buy Group | Consultoria Estratégica em Compras e Redução de Custos" },
      {
        name: "description",
        content:
          "Consultoria executiva de compras e negociação para grandes empresas, com foco em margem, resultado validado e governança financeira.",
      },
      { name: "author", content: "Buy Group" },
      { property: "og:title", content: "Buy Group | Consultoria Estratégica em Compras e Redução de Custos" },
      {
        property: "og:description",
        content:
          "Economia em compras, negociação estratégica e resultado validado com governança financeira.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Buy Group" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)", href: "/favicon-dark-32x32.png" },
      { rel: "icon", type: "image/svg+xml", sizes: "any", href: "/favicon.svg" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://buygroup.com.br/#organization",
          name: "Buy Group",
          legalName: "Buy Group Consultoria",
          url: "https://buygroup.com.br",
          sameAs: [LINKEDIN_URL],
          logo: "https://buygroup.com.br/og-buygroup.jpg",
          description:
            "Consultoria executiva de compras e negociação para grandes empresas, com foco em margem e governança financeira.",
          slogan: "Mais que comprar. É comprar bem.",
          areaServed: "BR",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Rio Grande do Norte, 1436 - Sala 813 - Savassi",
            addressLocality: "Belo Horizonte",
            addressRegion: "MG",
            postalCode: "30130-138",
            addressCountry: "BR",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Atendimento executivo",
            telephone: "+55-31-99008-7887",
            email: "atendimento@buygroup.com.br",
            availableLanguage: ["Portuguese"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULTS }} />
        <script dangerouslySetInnerHTML={{ __html: BG_CONSENT_DEFAULT }} />
        <script dangerouslySetInnerHTML={{ __html: GA4_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
