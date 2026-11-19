import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/second-opinion-comercial")({
  beforeLoad: () => {
    throw redirect({ to: "/revisao-pre-fechamento" });
  },
  head: () => ({
    links: [{ rel: "canonical", href: "https://buygroup.com.br/revisao-pre-fechamento" }],
  }),
});
