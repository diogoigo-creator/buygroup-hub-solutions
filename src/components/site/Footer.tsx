import logo from "@/assets/buy-group-logo-white.png";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-14">
        <img src={logo} alt="Buy Group" className="h-8 w-auto" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Endereço
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              R. Rio Grande do Norte, 1436 — Sala 813
              <br />
              Savassi, Belo Horizonte — MG
              <br />
              CEP 30130-138
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Contato
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              <a
                href="mailto:atendimento@buygroup.com.br"
                className="text-white/85 transition hover:text-green"
              >
                atendimento@buygroup.com.br
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-green">
              Atendimento
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Segunda a sexta
              <br />
              09h às 18h
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Buy Group Consultoria. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
