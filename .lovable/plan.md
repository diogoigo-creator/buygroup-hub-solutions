## Plano de correções UX/UI — ordem de prioridade

Implementar os achados da auditoria em ondas, do mais crítico ao mais baixo. Cada onda é um commit lógico, verificável antes de seguir adiante.

### Onda 1 — Crítico (bloqueia publicação)

1. **Formulário de contato funcional** (`src/routes/contato.tsx`)
   - Habilitar Lovable Cloud.
   - Criar tabela `contact_submissions` (name, email, company, interest, message, created_at) com RLS: `INSERT` para `anon`, `SELECT` apenas `service_role`.
   - Substituir `setSent(true)` por insert via cliente Supabase; manter estado de loading/erro.
   - Mesma correção em `src/routes/cursos.tsx` (form de inscrição → tabela `course_signups`).

2. **`og:image` padrão** 
   - Gerar 1 imagem 1200×630 com a identidade Buy Group (logo + tagline em fundo escuro).
   - Adicionar `og:image` + `twitter:image` apenas nas rotas-folha (nunca em `__root.tsx`).

3. **Canonicals e `og:url` absolutos**
   - Trocar `/contato`, `/cursos`, etc. por `https://buygroup-hub-solutions.lovable.app/...` em todas as rotas-folha.

### Onda 2 — Alto

4. **Padronizar CTAs** — definir 2 rótulos canônicos ("Falar com especialista" primário, "Conhecer metodologia" secundário) e aplicar em todas as 6 páginas de serviço + home.
5. **`PageHero` aceita slot `cta?: ReactNode`** e usar nas 6 páginas de serviço (hoje não usam `PageHero`).
6. **Footer com colunas de navegação** (Serviços, Empresa, Contato) em `src/components/site/Footer.tsx`.
7. **Variável CSS `--header-h`** em `styles.css`; consumir em `scroll-mt`, `top-` do breadcrumb sticky e `scroll-padding-top`.
8. **Select "Interesse principal"** com `<option value="">Selecione...</option>` + `required`.
9. **Skip-to-main link** em `__root.tsx`.

### Onda 3 — Médio ✅

10. ✅ "Executive briefing" substituído por "Falar com especialista" no Header (desktop + drawer).
11. ✅ `autocomplete` (name/email/organization/organization-title/tel/off) nos forms de contato e cursos.
12. ✅ Title tags normalizadas para "{Página} — Buy Group" (em-dash) em 8 rotas.
13. ✅ Botão WhatsApp em `revisao-pre-fechamento` agora usa token `--whatsapp` (bg-whatsapp).
14. ✅ Placeholders elevados de `text-muted-foreground/70` → `text-muted-foreground` e `white/40` → `white/60`.
15. ✅ Breadcrumb em `reducao-de-custos`. (Sobre permanece sem breadcrumb: parent "Serviços" não se aplica.)
16. Pendente — padding intermediário no hero da home (impacto baixo, deixado para Onda 4).
17. ✅ Família tipográfica já unificada (Outfit para `--font-serif` e `--font-sans` em `styles.css`).


### Onda 4 — Baixo

18. `aria-hidden` em ícones decorativos.
19. `aria-label` em botões ícone-only.
20. Focus trap no drawer mobile.
21. Campo telefone opcional no form de contato.
22. Glossário/tooltip em jargões.
23. Fontes para stats numéricos.
24. Breadcrumb em `sobre.tsx` e `reducao-de-custos.tsx`.

### Verificação por onda
- Build limpo.
- Onda 1: testar submit do form (insert chega na tabela), inspecionar `<head>` de `/contato`, `/cursos`, `/sobre` no preview.
- Onda 2: comparar visualmente as 6 páginas de serviço; conferir scroll de âncoras.
- Ondas 3-4: lint visual + a11y rápido no preview.

### Detalhes técnicos
- Cloud: tabelas com `GRANT INSERT ON ... TO anon` + `GRANT ALL ... TO service_role`; RLS policy `INSERT WITH CHECK (true)` para captação pública.
- `og:image` apenas em rotas-folha (regra TanStack: root concatena em todas).
- `head()` retorna `meta` array (title dentro de `meta`, não top-level).
- Canonicals em `links` apenas nas folhas.

### Pergunta antes de começar
Posso habilitar **Lovable Cloud** agora para destravar os forms da Onda 1? (Sem ele, item 1 fica bloqueado e seguimos só com itens 2 e 3 do Crítico.)
