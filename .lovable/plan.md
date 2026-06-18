## Análise — Página Academy e links dos cursos

Tudo verificado e **funcionando**. Resumo da auditoria:

### Página `/cursos` (`src/routes/cursos.tsx`)
- 10 cursos definidos (ids: `strategic-sourcing`, `gestao-compras-pratica`, `procurement-estrategico-gestores`, `negociacao-avancada`, `ia-supply-chain`, `gestao-fornecedores`, `esg-compras`, `gestao-contratos`, `supply-chain-4`, `custos-indiretos`).
- Cada card tem dois CTAs: **"Ver conteúdo"** abre modal com programa do curso; **"Solicitar este curso"** rola até o formulário e pré-seleciona o curso.
- `useEffect` (linhas 379–415) responde a:
  - `#solicitar` → rola até formulário.
  - `#curso-<id>` → rola até o card + abre o modal.
  - `?curso=<titulo>` / `?solicitar=<titulo>` → idem.
- Filtros por categoria, destaque para gestão e CTA "Falar sobre a capacitação" (`/contato#form`) — todos consistentes.

### Links externos para cursos (`src/components/site/OutrosServicos.tsx`)
- Cada serviço (`/otimizacao-de-custos`, `/inteligencia-de-gastos`, etc.) exibe pílulas dos cursos relacionados.
- Cada pílula é um `<Link to="/cursos" hash={"curso-" + id}>` que abre o curso correto via deep-link.
- O mapeamento `COURSE_ID_BY_TITLE` em `src/lib/services.ts` foi conferido linha a linha contra os ids reais em `cursos.tsx` — **100% consistente**, sem títulos órfãos.
- Header e Footer apontam para `/cursos` (label "Academy") corretamente.

### Conclusão
Não encontrei nada quebrado: a página Academy funciona, os deep-links dos cursos abrem o card e o modal certos, e o CTA do contato vai direto ao formulário.

Se você está vendo algo específico que não funciona (curso que não abre, link que volta ao topo, título errado), me diga **qual curso e a partir de qual página** — abro o caso pontual. Caso contrário, nada a alterar.