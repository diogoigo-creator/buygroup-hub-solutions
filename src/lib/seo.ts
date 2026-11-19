// SEO helpers — centraliza domínio, og:image padrão e geração de JSON-LD.
// Origem canônica compartilhada pelos metadados e dados estruturados.

export const SITE_URL = "https://buygroup.com.br";
export const GTM_ID = "GTM-WDCJPM6Z";
export const GA4_ID = "G-T0K88B24JZ";
export const OG_IMAGE = `${SITE_URL}/og-buygroup.jpg`;
export const OG_IMAGE_ALT =
  "Buy Group — Mais que comprar. É comprar bem.";

export const ORG_REF = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Buy Group",
  url: SITE_URL,
};

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd(params: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    serviceType: params.serviceType,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    areaServed: { "@type": "Country", name: "Brasil" },
    provider: ORG_REF,
  };
}

export const SOCIAL_META = [
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { property: "og:image", content: OG_IMAGE },
  { property: "og:image:alt", content: OG_IMAGE_ALT },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { name: "twitter:image", content: OG_IMAGE },
  { name: "twitter:image:alt", content: OG_IMAGE_ALT },
];
