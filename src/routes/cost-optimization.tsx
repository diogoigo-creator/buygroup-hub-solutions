import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cost-optimization")({
  beforeLoad: () => {
    throw redirect({ to: "/otimizacao-de-custos" });
  },
  head: () => ({
    links: [{ rel: "canonical", href: "/otimizacao-de-custos" }],
    meta: [{ name: "robots", content: "noindex, follow" }],
  }),
});
