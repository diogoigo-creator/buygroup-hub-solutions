// SEO helpers — centraliza domínio, og:image padrão e geração de JSON-LD.
// Quando o domínio final for definido, alterar SITE_URL aqui e em sitemap[.]xml.ts.

export const SITE_URL = "https://buygroup-hub-solutions.lovable.app";
export const OG_IMAGE = `${SITE_URL}/og-buygroup.jpg`;
export const OG_IMAGE_ALT =
  "Buy Group — Consultoria executiva de compras e negociação";

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
  { property: "og:image", content: OG_IMAGE },
  { property: "og:image:alt", content: OG_IMAGE_ALT },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { name: "twitter:image", content: OG_IMAGE },
  { name: "twitter:image:alt", content: OG_IMAGE_ALT },
];
