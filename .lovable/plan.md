# Plano

Criar duas novas páginas dedicadas seguindo o mesmo padrão visual de `/cost-optimization` e `/spend-intelligence` (hero navy, sticky nav, blocos alternando branco/secondary, CTA final em card arredondado).

## 1. `src/routes/supplier-risk.tsx` (`/supplier-risk`)

- **Hero**: eyebrow "Serviço complementar · Governança de fornecedores"; H1 "Seus fornecedores críticos sustentam sua operação. Quem sustenta seus fornecedores?"; subtítulo sobre homologação, risco, continuidade e ESG; CTAs "Falar com especialista" (`/contato?interesse=supplier-risk`) e "Ver o que entregamos" (`#entregaveis`); badges "SOB NDA · GOVERNANÇA · RISCO E CONTINUIDADE".
- **Sticky nav** com âncoras das seções.
- **Quando faz sentido** — bullets: base de fornecedores sem homologação formal · concentração em poucos fornecedores críticos · ausência de avaliação de desempenho · exigência ESG/compliance de board ou auditoria · histórico de falhas de fornecimento · M&A com consolidação de base.
- **O que entregamos (`#entregaveis`)** — grid de cards: matriz de criticidade · processo de homologação · critérios ESG e compliance · SLA e indicadores de desempenho · plano de mitigação de risco · dashboard de fornecedores críticos · governança documental · plano de desenvolvimento.
- **Como funciona** — 3 etapas (mapeamento, classificação de risco, governança contínua) com prazos.
- **Para quem é indicado** — bullets.
- **CTA final** → `/contato?interesse=supplier-risk`.
- `head()` próprio.

## 2. `src/routes/procurement-maturity.tsx` (`/procurement-maturity`)

- **Hero**: eyebrow "Serviço complementar · Diagnóstico"; H1 "Onde sua área de compras está hoje. E para onde precisa ir nos próximos 24 meses."; subtítulo sobre diagnóstico frente a referências de mercado e plano priorizado com justificativa financeira; CTAs "Solicitar diagnóstico" (`/contato?interesse=procurement-maturity`) e "Ver o que entregamos" (`#entregaveis`); badges "SOB NDA · BENCHMARK · PLANO 12-24 MESES".
- **Sticky nav**.
- **Dimensões avaliadas** — grid: pessoas, processos, tecnologia, governança, indicadores, fornecedores, categorias estratégicas, gestão de risco.
- **Entregáveis (`#entregaveis`)** — cards: scorecard de maturidade · benchmark setorial · gap analysis · plano de evolução 12-24 meses · business case por iniciativa · roadmap priorizado · apresentação para board · recomendação de quick wins.
- **Como funciona** — 3 etapas (entrevistas + coleta, análise + benchmark, apresentação executiva) com prazos.
- **Para quem é indicado** — bullets (CPOs/CFOs preparando plano, empresas em transformação, board exigindo evolução, M&A).
- **CTA final** → `/contato?interesse=procurement-maturity`.
- `head()` próprio.

## 3. Atualizar `src/routes/servicos.tsx`

No array `portfolio`, trocar os dois cards complementares:
- Supplier Risk & Governance → `to: "/supplier-risk"`, remover `interesse`.
- Procurement Maturity Assessment → `to: "/procurement-maturity"`, remover `interesse`.

## 4. Atualizar `src/components/site/Footer.tsx`

Adicionar dois links na seção Navegação:
- "Supplier Risk & Governance" → `/supplier-risk`
- "Procurement Maturity" → `/procurement-maturity`

## Notas técnicas

- Rotas TanStack file-based; `createFileRoute("/supplier-risk")` e `createFileRoute("/procurement-maturity")` batem com o nome do arquivo.
- Sem novas dependências; reusar `SiteLayout`, `Button` e tokens (`navy`, `green`, `secondary`).
- `EntryRoute` em `servicos.tsx` será expandido para incluir as duas novas rotas.
