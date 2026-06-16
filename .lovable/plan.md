## Onda 4 — Baixo + ajustes residuais

Conjunto final de refinamentos de acessibilidade, microcópia e consistência tipográfica/espacial. Todos itens de baixo impacto isolado, mas que juntos elevam o padrão.

### A. Acessibilidade

1. **`aria-hidden` em ícones decorativos** acompanhados de texto: revisar `Footer` (já parcial), `Header` (logo, CTA), cards de serviços, página `sobre.tsx` (ShieldCheck, Award, Lock, Scale, Building2, MapPin, Layers, Quote), `index.tsx` (Sparkles, ArrowUpRight, Lock, TrendingUp etc.). Padrão: ícone Lucide ao lado de label → `aria-hidden="true"`.

2. **`aria-label` em botões/links ícone-only**: o botão WhatsApp em `revisao-pre-fechamento.tsx` já tem; auditar restante (botão de fechar dialog em `cursos`, ícones de social se existirem).

3. **Focus trap no drawer mobile** (`Header.tsx`): quando `open=true`, capturar Tab/Shift+Tab dentro do drawer, devolver foco ao botão hamburger ao fechar, e fechar com `Esc`.

### B. Conteúdo do form

4. **Campo "Telefone (opcional)"** em `contato.tsx`: novo `Field` com `type="tel"`, `autoComplete="tel"`, não obrigatório. Adicionar coluna `telefone TEXT` na tabela `contact_submissions` via migration.

5. **Remover "Executive briefing" em inglês** nos eyebrows restantes (otimizacao/bpo/maturidade/gestao/servicos/sobre/contato/index): substituir por "Conversa executiva · 20min" (PT consistente). Botão submit em `contato.tsx` linha 155: "Agendar executive briefing" → "Agendar conversa executiva".

### C. Tipografia e espaçamento

6. **Stats numéricos** (`index.tsx` credibility, `sobre.tsx`): aplicar `font-feature-settings: "tnum" 1, "lnum" 1` (tabular numbers) via classe utilitária `.font-tabular` em `styles.css`, garantindo alinhamento visual de "R$ 1,4 bi+", "23", "8,7x".

7. **Hero de páginas internas** (`PageHero` em `SiteLayout.tsx`): reduzir `pt-20` mobile → `pt-16` para combinar com Breadcrumb sticky e evitar excesso vertical.

8. **Padding intermediário no hero da home** (item 16 da Onda 3 pendente): seções subsequentes na home — credibility, framework — reduzir `py-20`/`py-24` mobile → `py-14 sm:py-20` para densidade adequada.

9. **`<address>` no Footer mobile**: ajustar `text-sm leading-relaxed` para evitar quebras estranhas em "atendimento@buygroup.com.br" (já é shrink-0 com gap-2.5, ok — mas adicionar `break-words` no link).

### D. Conteúdo complementar

10. **Glossário/tooltip em jargões** (NDA, BPO, RFI/RFQ/RFP, TCO, Kraljic, SLA): criar `src/components/site/Term.tsx` com Tooltip do shadcn que envolve a sigla. Aplicar pontualmente em pontos de primeira menção em `index.tsx`, `bpo-de-compras.tsx`, `cursos.tsx`. Não exagerar — só primeira aparição por página.

11. **Breadcrumb em `sobre.tsx`**: a Breadcrumb atual referencia "Serviços" como parent. Plano: parametrizar `Breadcrumb` para aceitar `parent={{ to, label }}` opcional, default mantendo Serviços. Para `sobre`, usar `parent={{ to: "/", label: "Início" }}`.

### Detalhes técnicos
- Focus trap: hook `useFocusTrap(ref, active)` em `src/hooks/use-focus-trap.ts`, KeyboardEvent listener para Tab/Shift+Tab + Esc.
- Coluna `telefone`: migration `ALTER TABLE public.contact_submissions ADD COLUMN telefone TEXT`. RLS/GRANTs herdados.
- Tooltip: usar `@/components/ui/tooltip` (Radix), wrap em `TooltipProvider` no `__root.tsx` se ainda não estiver.
- Tabular numbers: `.font-tabular { font-variant-numeric: tabular-nums lining-nums; }` em `@layer utilities`.

### Verificação
- Mobile (390×844): home, /contato, /sobre, /cursos, /reducao-de-custos, /bpo-de-compras.
- Drawer: abrir, navegar com Tab, pressionar Esc, conferir foco devolvido.
- Form contato: enviar com novo campo telefone preenchido e vazio.
- Lighthouse a11y rápido no preview.

### Fora de escopo (intencional)
- Refactor visual maior (já abordado nas Ondas 1–3).
- Mudança de paleta ou tipografia base.
- Cursos: glossário só na primeira menção; não vamos anotar toda ocorrência.
