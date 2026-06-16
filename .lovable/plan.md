## Diagnóstico (rotas públicas)

Auditei `__root.tsx` + todas as 12 rotas indexáveis (home, sobre, servicos, 7 serviços, cursos, contato) e as 5 rotas em inglês (todas redirect 301 + noindex, OK).

**O que já está correto**
- Title + description únicos por rota
- `og:title` / `og:description` / `og:url` / `og:image` por leaf
- `canonical` por leaf
- `og:type=website`, `og:site_name`, `og:locale=pt_BR`, `twitter:card=summary_large_image` no root
- Organization JSON-LD no root
- Sitemap.xml dinâmico cobrindo as 12 rotas

**Lacunas a corrigir**
1. **`twitter:image` ausente** em quase todas as rotas (só `index.tsx` tem). Twitter não herda `og:image` quando há card.
2. **Sem JSON-LD por página** — falta Service nos 7 serviços, Course/ItemList em `/cursos`, ContactPage em `/contato`, AboutPage em `/sobre`, WebSite (com SearchAction não — sem busca) ou WebPage no root.
3. **Sem `BreadcrumbList` JSON-LD** nas rotas internas (já existe breadcrumb visual via `Breadcrumb.tsx`).
4. **Títulos longos demais (>60 chars)** em:
   - `cursos.tsx` — "Academy — capacitação para equipes de compras — Buy Group" (62)
   - `reducao-de-custos.tsx` — "Redução de Custos — Categorias e potencial de economia — Buy Group" (66)
   - `revisao-pre-fechamento.tsx` — "Revisão Pré-Fechamento de Propostas — Buy Group" (47, OK) ✅
5. **`og:type` por leaf** — todas herdam "website" do root (correto p/ páginas institucionais), nada a mudar.
6. **`og:image:alt` ausente** — acessibilidade do preview social.
7. **Root carrega `og:title`/`og:description` duplicando o da home** — pode permanecer como fallback, sem ação.

## Plano de ajustes

### A. Padronizar metadados por rota (12 arquivos)
Para cada leaf (`index`, `sobre`, `servicos`, `bpo-de-compras`, `otimizacao-de-custos`, `inteligencia-de-gastos`, `gestao-de-fornecedores`, `maturidade-em-compras`, `revisao-pre-fechamento`, `reducao-de-custos`, `cursos`, `contato`) garantir o conjunto completo:
- `title` (≤60), `description` (≤160)
- `og:title`, `og:description`, `og:url`, `og:image`, `og:image:alt`
- `twitter:title`, `twitter:description`, `twitter:image`
- `link rel=canonical`

Encurtar os 2 títulos acima:
- Cursos → "Buy Group Academy — capacitação para compras" (≈48)
- Redução de Custos → "Redução de Custos em Compras — Buy Group" (≈42)

### B. JSON-LD por rota
Adicionar em `scripts: [{ type: "application/ld+json", children: ... }]`:

- **`/` (home)**: `WebSite` (name, url, inLanguage pt-BR) + `ProfessionalService` resumido.
- **`/sobre`**: `AboutPage` + `Organization` referenciada.
- **`/servicos`**: `CollectionPage` com `hasPart` listando os 7 serviços.
- **7 páginas de serviço**: `Service` (`serviceType`, `provider: Organization`, `areaServed: BR`, `name`, `description`, `url`).
- **`/cursos`**: `ItemList` de `Course` (10 cursos do array `courses`, com `name`, `description`, `provider: Buy Group`).
- **`/contato`**: `ContactPage` + `ContactPoint` (email + telefone se houver).
- **Todas as rotas internas (não-home)**: `BreadcrumbList` refletindo a hierarquia já mostrada no breadcrumb visual.

### C. Sitemap
Sem mudança estrutural — já cobre as 12 rotas. Apenas confirmar que nenhum redirect (cost-optimization etc.) está listado (já não está).

### D. Robots / preview cache
Após mudanças, lembrar o usuário que crawlers (LinkedIn/WhatsApp/Twitter) usam cache do preview anterior e precisam ser revalidados nos respectivos debuggers para refletir as novas tags.

## Verificação
- `bun run build` (automático)
- Inspeção de `view-source:` de 3 rotas-amostra (home, um serviço, contato) no preview para confirmar tags e JSON-LD válido.
- Validar JSON-LD em https://validator.schema.org (manual — apontar para o usuário).

## Fora de escopo
- Não vou trocar o domínio canônico (`buygroup-hub-solutions.lovable.app`) — quando o domínio final for definido, atualizar `BASE_URL`/canonicals em uma passada única.
- Não vou gerar `og:image` específico por rota (custo de imagegen alto; a imagem genérica atual está OK).
- Não vou adicionar `hreflang` (site é só pt-BR; rotas em inglês são redirects).
