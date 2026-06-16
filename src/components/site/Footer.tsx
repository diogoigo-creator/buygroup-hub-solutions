import logo from "@/assets/buy-group-logo-white.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <img src={logo} alt="Buy Group" className="h-6 w-auto" />
        <div className="space-y-1 text-sm text-white/70 lg:text-right">
          <p>R. Rio Grande do Norte, 1436 — Sala 813 · Savassi, Belo Horizonte — MG · 30130-138</p>
          <p>
            <a
              href="mailto:atendimento@buygroup.com.br"
              className="text-white/85 hover:text-green"
            >
              atendimento@buygroup.com.br
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/50 lg:px-10">
          © {new Date().getFullYear()} Buy Group Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
