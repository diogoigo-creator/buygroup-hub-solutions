import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/procurement-maturity")({
  beforeLoad: () => {
    throw redirect({ to: "/maturidade-em-compras" });
  },
  head: () => ({
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/maturidade-em-compras" }],
    meta: [{ name: "robots", content: "noindex, follow" }],
  }),
});
