## Mudanças

### 1. Marca d'água em seções escuras
- Atualizar `src/components/site/SectionWatermark.tsx` para aceitar prop `tone: "dark" | "light"` (default `dark` mantém comportamento atual).
- Em `SiteLayout`, adicionar 3 camadas extras com `tone="light"` (mark branca, opacidade ~0.05) nas mesmas posições das atuais, para aparecerem sutilmente nas seções escuras (hero, ProcureMax, CTA executivo).

### 2. Hero foto mais clara em `src/routes/index.tsx`
- `<img>` da boardroom: `opacity-40` → `opacity-60`
- Gradiente lateral: `from-navy via-navy/90 to-navy/40` → `from-navy/85 via-navy/65 to-navy/15`
- Gradiente vertical: `from-navy via-transparent to-navy/60` → `from-navy/70 via-transparent to-navy/40`

Mantém legibilidade do texto branco e contraste dos CTAs.
