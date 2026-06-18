import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cost-optimization")({
  beforeLoad: () => {
    throw redirect({ to: "/otimizacao-de-custos" });
  },
  head: () => ({
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/otimizacao-de-custos" }],
  }),
});
