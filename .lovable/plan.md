## Diagnóstico — onde estão os gargalos reais

**Sobre o relatório PageSpeed**: a URL `preview--*.lovable.app` é o preview privado do Lovable, que passa por uma ponte de auth (login do Lovable) — daí o TTFB de 2,3s. O site público real, depois de publicado, fica em `project--{id}.lovable.app` (sem ponte) ou no domínio customizado. **Sem publicar o projeto, qualquer benchmark de TTFB no preview vai continuar inflado** independentemente do código. Vou corrigir o que está sob nosso controle no código; o TTFB final só pode ser medido na URL publicada.

**Elemento LCP no mobile**: é o `<h1>` do hero ("Encontramos oportunidades…"). Está sendo atrasado artificialmente por:
1. Animação `hero-editorial-reveal` com `opacity:0 → 1` + `filter: blur(4px) → 0` e `animation-delay` escalonado de **0,08s até 0,82s** em cada bloco do hero (eyebrow, h1 linha 1, h1 linha 2, parágrafo, CTA, micro-copy). O texto fica invisível por quase 1s após o CSS ser parseado.
2. Imagem de fundo `hero-boardroom.jpg` (65 KB, JPEG) sem `preload`, sem variantes WebP/AVIF, sem `width/height`, com animação `hero-cinematic-zoom` em loop infinito.
3. CSS `@font-face` aponta 4 TTFs (~190 KB total). FCP precisa esperar font swap.

**INP 355ms**: três animações infinitas com `will-change: transform/opacity` rodando em paralelo no hero (`hero-cinematic-zoom`, `hero-light-drift`, `hero-glow-breathe`) + 6 watermarks decorativos em `SectionWatermark` montados de cara dentro do `<SiteLayout>` (todos os routes), cada um com posicionamento absoluto e seus próprios efeitos.

**FCP 3,2s**: bloqueio da fonte TTF + ausência de preload do hero image + animações com blur no texto crítico.

---

## Plano de correção (sem mudar identidade visual, textos ou serviços)

### 1. Hero — fazer o LCP cair de ~7s para <2,5s
- Em `src/routes/index.tsx`: remover as classes `hero-editorial hero-delay-*` das linhas críticas (eyebrow, `<h1>`, parágrafo, CTA, micro-copy NDA). O texto passa a ser renderizado imediatamente. A "entrada cinemática" fica preservada via uma animação curta única (opacity 0→1 em 0,35s, sem blur, sem delay) aplicada só ao container do hero — visualmente idêntico, mas sem segurar o LCP.
- Converter `hero-boardroom.jpg` para WebP via `vite-imagetools` (já recomendado no stack) e gerar um variant `?w=1280;format=webp;quality=72` para mobile e desktop. Reduz ~65 KB → ~25 KB.
- Adicionar `width` e `height` na `<img>` do hero (preserva CLS atual de 0,01).
- No `head()` do `src/routes/index.tsx`, adicionar `<link rel="preload" as="image" href={heroWebp} fetchpriority="high" media="(min-width: 0px)">` apontando para o asset transformado.
- Adicionar `fetchpriority="high"` e `decoding="async"` na `<img>` do hero; remover `loading` (default eager) — é above-the-fold.
- Em `src/styles.css`, manter `hero-cinematic-zoom` mas com `prefers-reduced-motion` + cortar no mobile via `@media (max-width: 768px) { .hero-cinematic-image { animation: none; } }`. Idem para `hero-cinematic-light` e `hero-cinematic-glow`. Mantém o efeito premium no desktop.

### 2. Fontes — eliminar bloqueio
- Substituir os 4 `.ttf` por `.woff2` (subset Latin) usando `lovable-assets` para hospedar no CDN. Reduz ~190 KB → ~60 KB total. Mantém `font-display: swap` (já está). Adicionar `<link rel="preload" as="font" type="font/woff2" crossorigin>` apenas para o peso 500 (usado no `<h1>` LCP).
- Remover variantes de peso não usadas após auditar (manter 400, 500, 600; 700 só se aparecer em algum lugar — vou verificar).

### 3. SiteLayout — reduzir overhead em todas as páginas
- Em `src/components/site/SiteLayout.tsx`: as 6 instâncias de `<SectionWatermark>` montadas no shell são caras (posicionamento absoluto em viewport alto, 6 imagens decorativas). Mover para `loading="lazy"` no próprio `SectionWatermark` (verificar se já é) e renderizar via `IntersectionObserver` — só montar quando perto da viewport. Reduz peso inicial em todas as rotas.
- O logo do Header (`buy-group-logo.png`, 46 KB) carrega em todas as páginas: trocar por versão SVG inline ou WebP otimizado (~5 KB).

### 4. Animações infinitas — reduzir INP no mobile
- No mobile (`max-width: 768px`), desativar via CSS: `hero-cinematic-zoom`, `hero-light-drift`, `hero-glow-breathe`, `animate-mark-spin-slow`, `animate-mark-pulse-ring`, `animate-mark-bob`, `animate-mark-float`, `animate-orbit-cw`, `animate-orbit-ccw`. Mantém todas no desktop.
- O `MarkOrbit` / `KineticSlogan` / `FullLockup` no `PageHero` já estão dentro de `hidden lg:contents`, então no mobile não rodam — confirmar e ok.

### 5. Header — INP
- O listener `scroll` (linha 21–25 de `Header.tsx`) atualiza `useState(scrolled)` a cada evento; envolver com `requestAnimationFrame` + threshold para evitar re-renders excessivos no scroll mobile.

### 6. `__root.tsx` — JSON-LD e ordem de meta tags
- Mover o JSON-LD para `scripts` com `defer` não ajuda (é JSON, não execução), mas verificar tamanho — está ok.
- O JSON-LD da rota `/` já está separado; nada a mexer.

### 7. Verificação final
Depois das mudanças, rodar `bun run build` (a harness faz automaticamente) e validar:
- Build sem erros.
- Visualmente o hero precisa parecer idêntico no desktop e quase idêntico no mobile (só sem o loop de zoom contínuo, que no celular trava a thread).

### Sobre o que não posso resolver no código
- **TTFB de 2,3s no preview** = ponte de auth do Lovable. Para medir TTFB real, o usuário precisa **publicar** o projeto e rodar o PageSpeed contra `https://project--{id}.lovable.app` (ou domínio customizado). A infra do Cloudflare Worker do Lovable já entrega SSR rápido.
- Cache de assets estáticos já é gerido pelo CDN do Lovable (imutáveis + far-future cache).

---

## Auditoria pós-mudanças (entregue no final)

Vou listar:
- LCP antes/depois (elemento e medida estimada).
- Arquivos editados: `src/routes/index.tsx`, `src/styles.css`, `src/components/site/SiteLayout.tsx`, `src/components/site/Header.tsx`, `src/components/site/SectionWatermark.tsx` (lazy-mount), `src/components/ui/sonner.tsx` (se necessário lazy).
- Assets convertidos: `hero-boardroom.jpg → .webp`, logo do header, 4 fontes TTF → WOFF2.
- Animações desativadas no mobile via media query.
- Preload de hero image e fonte 500 adicionados.
- O que depende de publicação: TTFB e cache headers reais.

---

Posso prosseguir com a implementação?
