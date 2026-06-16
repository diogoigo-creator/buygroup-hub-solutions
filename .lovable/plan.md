# Plano de execução

Quatro etapas, na ordem solicitada. Todas as páginas novas seguirão o mesmo padrão visual de `/bpo-de-compras` (hero navy, sticky nav de seções, blocos alternando branco/secondary, CTA final em card arredondado).

## 1. Nova página `src/routes/cost-optimization.tsx` (`/cost-optimization`)

Estrutura de seções:
- **Hero** navy: eyebrow "Produto principal · CUT4MORE™"; H1 "Capturamos economia que sua empresa já deveria ter. Com governança e resultado validado."; subtítulo conforme briefing; CTAs "Agendar executive briefing" (`/contato?interesse=cost-optimization`) e "Conhecer a metodologia" (`#metodologia`); badge "SOB NDA · SENIOR-ONLY DELIVERY · NO SAVINGS, NO FEE".
- **Sticky nav** com âncoras: quando-faz-sentido, metodologia, incluido, para-quem, case, modelos, briefing.
- **Quando faz sentido** — 8 bullets em grid 2 colunas com check verde.
- **O que entregamos (`#metodologia`)** — 4 fases CUT4MORE™ em cards (ícone, título, descrição 2 linhas, prazo): Mapeamento de Oportunidades (30 dias), Estratégia de Compra (15 dias), Condução da Negociação (45 dias), Validação dos Savings (contínuo).
- **O que está incluído** — grid de 8 cards (Spend Intelligence 24m, Classificação UNSPSC, Baseline auditável, Estratégia por categoria, Condução de RFQ, Relatórios mensais, Validação third-party, Dashboard board-ready).
- **Para quem é indicado** — bullets conforme briefing.
- **Estudo de caso R$ 12MM** — reutilizar o componente/visual já presente na home (será extraído ou replicado com o mesmo markup).
- **Modelos de engajamento** — 3 cards (Projeto por categoria, Programa completo, Programa acelerado).
- **CTA final** em card arredondado: título, subtítulo, botão `/contato?interesse=cost-optimization`, badge "Aceitando 3 novos engajamentos neste trimestre".
- `head()` com title/description/og próprios.

## 2. Nova página `src/routes/spend-intelligence.tsx` (`/spend-intelligence`)

- **Hero** navy: eyebrow "Assessment · Entrada do programa"; H1 e subtítulo conforme briefing; CTA principal `/contato?interesse=spend-intelligence`; secundário `#entregaveis`; badges "SOB NDA · ENTREGA EM 30 DIAS · BASELINE AUDITÁVEL".
- **Sticky nav** seções.
- **Problema que resolvemos** — dois blocos lado a lado (Sem / Com Spend Intelligence) com listas check.
- **Entregáveis (`#entregaveis`)** — grid de 8 cards.
- **Como funciona** — 3 etapas horizontais com prazos (Coleta 5d, Classificação 20d, Entrega 5d).
- **Para quem é indicado** — bullets.
- **Relação com outros serviços** — bloco informativo com links internos para `/cost-optimization` e `/bpo-de-compras`.
- **CTA final** `/contato?interesse=spend-intelligence`.
- `head()` próprio.

## 3. Reformar `src/routes/servicos.tsx` como portfólio

Substituir conteúdo atual integralmente:
- **Hero** mais leve: H1 "Como a Buy Group atua. Escolha o ponto de entrada certo para o seu momento." + subtítulo.
- **Por onde começar** — 3 perfis (ícone, frase, link): "Não sei onde estou perdendo" → `/spend-intelligence`; "Sei onde estou perdendo, preciso executar" → `/cost-optimization`; "Preciso de operação contínua" → `/bpo-de-compras`.
- **Portfólio completo** — grid de 6 cards iguais com badge diferenciador:
  - Cost Optimization Program ("Produto principal") → `/cost-optimization`
  - BPO de Compras ("Operação contínua") → `/bpo-de-compras`
  - Spend Intelligence ("Ponto de entrada") → `/spend-intelligence`
  - Academy ("Capacitação") → `/cursos`
  - Supplier Risk & Governance ("Complementar") → `/contato?interesse=servicos-complementares`
  - Procurement Maturity Assessment ("Complementar") → `/contato?interesse=servicos-complementares`
  Cada card: título, 2 linhas descrição, 1 linha "Para quem", botão "Ver mais".
- Remover bullets detalhados antigos.
- **CTA final** "Não sabe qual produto é o certo…" → `/contato`.
- Atualizar `head()`.

## 4. Atualizar menu global e footer

`src/components/site/Header.tsx`:
- Substituir `nav` por: Sobre (`/sobre`), Serviços (`/servicos`), Onde Atuamos (`/reducao-de-custos`), Academy (`/cursos`).
- Remover BPO de Compras como item autônomo e remover "Início" (logo cumpre o papel).
- CTA "Executive briefing" (`/contato`) renderizado como botão destacado à direita, separado do array de nav (desktop e mobile).

`src/components/site/Footer.tsx`:
- Espelhar a mesma estrutura de navegação principal.
- Adicionar links para `/cost-optimization` e `/spend-intelligence` na seção de navegação.

## Notas técnicas

- Todas as rotas usam `createFileRoute("/...")` com path batendo com o filename (TanStack file-based routing).
- Search param `interesse` segue o padrão já existente em `/contato` (string opcional).
- Tipografia/cores via tokens já presentes (`navy`, `green`, `secondary`, `font-serif`), sem cores hardcoded.
- Sem novas dependências.

Ordem de execução: passos 1 → 2 → 3 → 4.
