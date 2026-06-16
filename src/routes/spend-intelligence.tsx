import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/spend-intelligence")({
  beforeLoad: () => {
    throw redirect({ to: "/inteligencia-de-gastos" });
  },
  head: () => ({
    links: [{ rel: "canonical", href: "https://buygroup-hub-solutions.lovable.app/inteligencia-de-gastos" }],
    meta: [{ name: "robots", content: "noindex, follow" }],
  }),
});
