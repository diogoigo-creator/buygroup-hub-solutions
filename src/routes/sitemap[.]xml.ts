import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: substituir pelo domínio final quando publicado (ex.: https://www.buygroup.com.br)
const BASE_URL = "https://buygroup-hub-solutions.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sobre", changefreq: "monthly", priority: "0.8" },
          { path: "/servicos", changefreq: "monthly", priority: "0.9" },
          { path: "/otimizacao-de-custos", changefreq: "monthly", priority: "0.9" },
          { path: "/inteligencia-de-gastos", changefreq: "monthly", priority: "0.85" },
          { path: "/bpo-de-compras", changefreq: "monthly", priority: "0.9" },
          { path: "/revisao-pre-fechamento", changefreq: "monthly", priority: "0.85" },
          { path: "/gestao-de-fornecedores", changefreq: "monthly", priority: "0.8" },
          { path: "/maturidade-em-compras", changefreq: "monthly", priority: "0.8" },
          { path: "/reducao-de-custos", changefreq: "monthly", priority: "0.8" },
          { path: "/cursos", changefreq: "monthly", priority: "0.8" },
          { path: "/contato", changefreq: "monthly", priority: "0.7" },
        ];
        const urls = entries.map((e) =>
          `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
