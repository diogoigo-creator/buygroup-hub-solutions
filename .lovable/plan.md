# Corrigir navegação: cada clique leva ao conteúdo exato

Sem criar serviços, cursos, páginas ou ofertas. Apenas adicionar IDs/âncoras, scroll suave com offset, e usar parâmetros nos links que já existem.

## 1. IDs nos cards de curso (`src/routes/cursos.tsx`)

- Em cada `<article>` do grid de cursos, adicionar `id={\`curso-${c.id}\`}` e `scroll-mt-24`.
- Adicionar `useEffect` que lê `window.location.hash`:
  - Se for `#solicitar` → rola para o formulário (já existe a seção `#solicitar`).
  - Se for `#curso-<id>` → força `setFilter("Todos")` para garantir que o card esteja visível, rola até o card com `behavior: "smooth"` e abre o modal `setDetail(course)`.
- Em `RequestSection`, também ler `?curso=<titulo>` via `Route.useSearch` (adicionar `validateSearch` no `createFileRoute`) e usar como `initialCourse` quando presente.

## 2. Mapa título → id de curso (`src/lib/services.ts`)

- Exportar um objeto `COURSE_ID_BY_TITLE: Record<string, string>` com os IDs dos cursos existentes em `cursos.tsx`. Usado por `OutrosServicos` para montar `#curso-<id>` a partir do título já listado em `cursosRelacionados`.
- Nenhum curso novo: o mapa apenas espelha os cursos atuais.

## 3. Chips de “Capacitação relacionada” (`src/components/site/OutrosServicos.tsx`)

- Para cada título em `cursosRelacionados`, trocar `<Link to="/cursos">` por `<Link to="/cursos" hash={\`curso-${COURSE_ID_BY_TITLE[title]}\`}>` — leva direto ao card.
- O botão geral “Ver Academy” continua sem hash (vai para o topo da Academy).
- Botão “Agendar executive briefing”: passar `search={{ interesse: <slug do serviço atual> }}` para a página de contato.

## 4. Links “serviços relacionados” caem em conteúdo útil

- Adicionar campo opcional `defaultAnchor?: string` em cada `Service` (`src/lib/services.ts`), apontando para a seção mais relevante já existente em cada página:
  - otimizacao-de-custos → `metodologia`
  - bpo-de-compras → `o-que-operamos`
  - inteligencia-de-gastos → `entregaveis`
  - revisao-pre-fechamento → `como-funciona`
  - gestao-de-fornecedores → `entregaveis`
  - maturidade-em-compras → `entregaveis`
- Em `OutrosServicos`, o `Link` do card vira `to={s.to} hash={s.defaultAnchor}`.

## 5. Pré-seleção de interesse no Contato (`src/routes/contato.tsx`)

- Expandir o `defaultInterest` para cobrir todos os valores já passados pelos botões “Agendar executive briefing” das páginas de serviço:
  - `cost-optimization` → “Otimização de Custos”
  - `spend-intelligence` → “Inteligência de Gastos”
  - `bpo` → “BPO de Compras”
  - `second-opinion` → “Revisão Pré-Fechamento”
  - `supplier-risk` → “Gestão de Fornecedores”
  - `procurement-maturity` → “Maturidade em Compras”
  - `academy` → “Academy — capacitação para a equipe”
- Garantir que o `<Select>` realmente respeita `defaultValue` (atributo já existe).

## 6. Scroll suave global e offset do header

- Em `src/styles.css`, adicionar `html { scroll-behavior: smooth; }` e `:target { scroll-margin-top: 6rem; }` como fallback.
- Confirmar `scroll-mt-32` nas seções âncora dos serviços (já existe) e `scroll-mt-24` nos cards da Academy. Funciona em desktop e mobile (header 64px + breadcrumb ~48px ≈ 112px < 128px).

## 7. Critério de validação manual

- `/otimizacao-de-custos` → chip “Negociação Avançada com Fornecedores” abre `/cursos#curso-negociacao-avancada` rolado no card e com modal aberto.
- Botão “Solicitar este curso” → rola até `#solicitar` com o curso já selecionado.
- `/bpo-de-compras` → chip “Inteligência de Gastos” em Outros serviços abre `/inteligencia-de-gastos#entregaveis`.
- “Agendar executive briefing” na página de BPO → `/contato` com “BPO de Compras” pré-selecionado.
- Botões internos (“Ver o que entregamos”, “Conhecer modelos de atuação”, etc.) seguem com `href="#..."` e agora rolam suavemente até a seção certa.

## Arquivos alterados

- `src/lib/services.ts` — `COURSE_ID_BY_TITLE`, `defaultAnchor` por serviço.
- `src/components/site/OutrosServicos.tsx` — `hash` nos chips de curso e nos cards de serviço; `interesse` no CTA de briefing.
- `src/routes/cursos.tsx` — IDs nos cards, `scroll-mt`, leitura de `hash`/`?curso=`, abertura automática do modal.
- `src/routes/contato.tsx` — `defaultInterest` expandido para todos os slugs já em uso.
- `src/styles.css` — `scroll-behavior: smooth` e `scroll-margin-top` fallback.

Nada de novo é criado: nenhum curso, serviço, página, oferta ou seção nova.
