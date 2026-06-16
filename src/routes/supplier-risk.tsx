import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/supplier-risk")({
  beforeLoad: () => {
    throw redirect({ to: "/gestao-de-fornecedores" });
  },
  head: () => ({
    links: [{ rel: "canonical", href: "/gestao-de-fornecedores" }],
    meta: [{ name: "robots", content: "noindex, follow" }],
  }),
});
