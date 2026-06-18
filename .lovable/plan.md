## Diagnóstico

Cinco rotas de serviço estão marcadas com `<meta name="robots" content="noindex, follow">`, bloqueando a indexação pelos buscadores:

- `src/routes/cost-optimization.tsx`
- `src/routes/procurement-maturity.tsx`
- `src/routes/spend-intelligence.tsx`
- `src/routes/second-opinion-comercial.tsx`
- `src/routes/supplier-risk.tsx`

O `public/robots.txt` está correto (`Allow: /`) e o `__root.tsx` não tem noindex global. O problema está apenas nessas 5 páginas.

> Observação: a URL `preview--*.lovable.app` exige login do Lovable e não é indexável por design. Para testar SEO real, é preciso publicar (gera `*.lovable.app` público) ou conectar domínio próprio.

## Alteração

Remover a linha `meta: [{ name: "robots", content: "noindex, follow" }],` do `head()` de cada uma das 5 rotas acima, preservando todo o restante (title, description, og:*, canonical, JSON-LD).

## Resultado esperado

Após publicar, as 5 páginas de serviço passam a ser indexáveis pelo Google e demais buscadores.