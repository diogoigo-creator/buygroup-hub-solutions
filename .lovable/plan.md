# Plano — Padronização das páginas de serviço

Concordo com as duas observações:
- **Breadcrumb em vez de "Voltar aos serviços"** — implementado como navegação contextual no topo, não como ação de retorno.
- **"Second Opinion Comercial" → "Revisão Pré-Fechamento"** — adoto o termo em português conforme solicitado, mantendo o subtítulo/h1 como está (que já carrega a explicação).

---

## 1. Mapa de renomeação (nome + rota)

| Antes | Depois (label) | Rota nova |
|---|---|---|
| Cost Optimization Program | Otimização de Custos | `/otimizacao-de-custos` |
| Spend Intelligence | Inteligência de Gastos | `/inteligencia-de-gastos` |
| BPO de Compras | BPO de Compras | `/bpo-de-compras` (mantém) |
| Second Opinion Comercial | Revisão Pré-Fechamento | `/revisao-pre-fechamento` |
| Supplier Risk & Governance | Gestão de Fornecedores | `/gestao-de-fornecedores` |
| Procurement Maturity Assessment | Maturidade em Compras | `/maturidade-em-compras` |
| Executive Education / Academy | Academy | `/cursos` (mantém) |

## 2. Arquivos de rota

**Renomear** (mv) preservando todo o conteúdo interno, atualizando apenas a string de `createFileRoute(...)`, `head()` (title/description/canonical/OG) e cópia que mencione o nome em inglês:

- `src/routes/cost-optimization.tsx` → `src/routes/otimizacao-de-custos.tsx`
- `src/routes/spend-intelligence.tsx` → `src/routes/inteligencia-de-gastos.tsx`
- `src/routes/second-opinion-comercial.tsx` → `src/routes/revisao-pre-fechamento.tsx`
- `src/routes/supplier-risk.tsx` → `src/routes/gestao-de-fornecedores.tsx`
- `src/routes/procurement-maturity.tsx` → `src/routes/maturidade-em-compras.tsx`

**Redirects das rotas antigas** (para não quebrar links externos / SEO): criar arquivos enxutos nas rotas antigas que fazem `throw redirect({ to: '/nova-rota' })` no `beforeLoad`, com `head()` definindo canonical para a nova URL. Um arquivo por rota antiga (5 arquivos).

`src/routes/reducao-de-custos.tsx` já existe — checar se também é redirect; se for alias antigo de cost-optimization, manter apontando para `/otimizacao-de-custos`.

## 3. Breadcrumb (componente novo)

Criar `src/components/site/Breadcrumb.tsx`:

- Faixa fina logo abaixo do Header, acima do hero.
- Fundo `bg-muted/40` com `border-b border-border/60`, padding vertical compacto (`py-3`), container central, texto `text-xs uppercase tracking-wide text-muted-foreground`.
- Conteúdo: `<Link to="/servicos">Serviços</Link> › <span aria-current="page">{currentLabel}</span>`.
- Separator `›` discreto, com `text-border`.
- Props: `currentLabel: string`.

Inserir `<Breadcrumb currentLabel="..." />` no topo (acima do hero) das 6 páginas de serviço.

## 4. Bloco "Outros serviços" (componente novo)

Criar `src/components/site/OutrosServicos.tsx`:

- Fonte única da verdade — array `SERVICES` exportado de `src/lib/services.ts` com `{ slug, to, label, oneLiner, complementares: string[] }` para os 6 serviços principais (Academy fica fora do rotacionador por ser produto diferente — confirmar se quer incluir).
- Props: `currentSlug: string`.
- Filtra o atual, escolhe até 3 baseados em `complementares` (lista priorizada por slug). Fallback: os primeiros 3 restantes na ordem do array.
- Layout: seção com título "Outros serviços" (mesma tipografia das demais section headings da página), grid de 3 cards horizontais responsivos (md:grid-cols-3), cada card: nome (h3), 1 linha descrição, botão "Conhecer →" estilo outline alinhado ao final do card. Sem ícones — manter o tom editorial atual.
- Posicionado **imediatamente antes** da seção de CTA final em cada uma das 6 páginas.

Sugestão de `complementares` (3 mais relevantes para cada):
- Otimização de Custos → Revisão Pré-Fechamento, BPO de Compras, Inteligência de Gastos
- Inteligência de Gastos → Otimização de Custos, Maturidade em Compras, Gestão de Fornecedores
- BPO de Compras → Otimização de Custos, Gestão de Fornecedores, Inteligência de Gastos
- Revisão Pré-Fechamento → Otimização de Custos, BPO de Compras, Gestão de Fornecedores
- Gestão de Fornecedores → BPO de Compras, Maturidade em Compras, Inteligência de Gastos
- Maturidade em Compras → Inteligência de Gastos, Gestão de Fornecedores, Otimização de Custos

## 5. Atualizar referências em todo o site

- `src/components/site/Header.tsx` — dropdown de Serviços: novos labels + novas rotas + manter badge "Novo" em Revisão Pré-Fechamento.
- `src/components/site/Footer.tsx` — seção de navegação: novos labels e rotas, mesma ordem definida.
- `src/routes/servicos.tsx` — cards do portfólio: títulos, descrições e `to` apontando para as novas rotas; manter badge "Novo".
- `src/routes/index.tsx` e demais — `rg -n` em busca de strings antigas (Cost Optimization, Spend Intelligence, Supplier Risk, Procurement Maturity, Second Opinion) e links `/cost-optimization|/spend-intelligence|/supplier-risk|/procurement-maturity|/second-opinion-comercial`; substituir.
- `src/routes/sitemap[.]xml.ts` — atualizar URLs.

## 6. Detalhes técnicos

- TanStack Router gera `routeTree.gen.ts` automaticamente — não editar à mão.
- Cada redirect antigo:
  ```tsx
  export const Route = createFileRoute('/cost-optimization')({
    beforeLoad: () => { throw redirect({ to: '/otimizacao-de-custos' }) },
  })
  ```
- `head()` de cada página renomeada: atualizar `title`, `description`, `og:title`, `og:description`, `canonical` para a nova URL e o nome em português.
- `<Link>` sempre com `to` literal (type-safe) — não interpolar strings.

## 7. Ordem de execução

1. Criar `src/lib/services.ts` (fonte única).
2. Criar componentes `Breadcrumb` e `OutrosServicos`.
3. Renomear os 5 arquivos de rota + atualizar `createFileRoute`, `head()` e textos internos.
4. Criar 5 arquivos de redirect nas rotas antigas.
5. Inserir Breadcrumb e OutrosServicos nas 6 páginas (incluindo `/bpo-de-compras`).
6. Atualizar Header, Footer, `/servicos`, `index`, sitemap.
7. Verificar no preview as 6 páginas + dropdown + footer + redirects.

## Pendência de confirmação

- **Academy entra no rotacionador "Outros serviços"?** Meu default é **não** (produto educacional, audiência diferente dos serviços de consultoria). Se quiser incluir, sinaliza.
