## Conceito

Hoje todas as páginas usam o mesmo "selo": a logomarca animada (mark) no canto direito do hero. Vou criar **3 variantes de identidade visual** e mapear cada uma a uma página segundo a narrativa, com animação nível 4 (reveal + parallax sutil + kinetic type).

## As 3 variantes

**Variante A — Mark Orbit (logo animada simbólica)**
O selo circular atual, mas turbinado:
- A logomarca pulsa devagar, os anéis giram em sentidos opostos (já existe).
- Adiciono partículas/pontos orbitando + leve parallax no mouse no desktop.
- Reveal: anéis desenham do centro pra fora ao carregar.

**Variante B — Full Lockup (logo completa)**
Logomarca completa (`buy-group-logo-white.png`) entra grande, centralizada à direita ou ao lado do título:
- Reveal por máscara (clip-path) — a logo "aparece" de cima pra baixo.
- Microsuspensão (float lento) depois que assenta.
- Linha dourada que desenha sob a logo como assinatura.

**Variante C — Kinetic Slogan ("Mais que comprar. É comprar bem.")**
Tipografia serif gigante como protagonista:
- "Mais que comprar." aparece com fade+slide; pausa.
- "É comprar bem." entra com a palavra **bem** em dourado, sublinhada por um traço que desenha sozinho.
- Mark pequena flutuando atrás, sutil, como marca d'água.

## Mapeamento por página (narrativa)

| Página | Variante | Por quê |
|---|---|---|
| **Home** (`/`) | A — Mark Orbit | Impacto institucional, presença simbólica forte na primeira dobra |
| **Sobre** (`/sobre`) | B — Full Lockup | Página de identidade: faz sentido mostrar a marca por extenso |
| **Serviços** (`/servicos`) | C — Kinetic Slogan | "Mais que comprar. É comprar bem." traduz exatamente a proposta de serviço |
| **Redução de Custos** (`/reducao-de-custos`) | A — Mark Orbit (variação cromática: dourado + halo mais intenso) | Reforça resultado/energia |
| **Cursos** (`/cursos`) | B — Full Lockup (variação: lockup menor + selo "Executive Education") | Posicionamento autoral/autoridade |
| **Contato** (`/contato`) | C — Kinetic Slogan (versão curta: só "É comprar bem.") | Convite, fecha o ciclo com a frase-chave |

Assim nenhuma página repete a mesma identificação visual da anterior na navegação típica, e cada variante reaparece exatamente uma vez para criar consistência sem monotonia.

## Implementação técnica

1. **Refatorar `PageHero`** em `src/components/site/SiteLayout.tsx` para aceitar uma prop `identity: "mark" | "lockup" | "slogan"` e renderizar o visual certo. Default continua `"mark"`.
2. **Criar 3 subcomponentes** em `src/components/site/hero-identities/`:
   - `MarkOrbit.tsx` — refina o que já existe + parallax mouse + partículas orbitando (CSS puro).
   - `FullLockup.tsx` — usa `buy-group-logo-white.png` com clip-path reveal + float + traço dourado animado.
   - `KineticSlogan.tsx` — recebe `lines: string[]` e `accent: string`, anima word-by-word com `animation-delay` escalonado.
3. **Adicionar keyframes** em `src/styles.css`: `mark-orbit-particle`, `lockup-reveal`, `lockup-underline-draw`, `slogan-word-in`, `slogan-accent-underline`.
4. **Atualizar cada rota** (`sobre`, `servicos`, `cursos`, `contato`, `reducao-de-custos`) passando `identity` correto. Home (`index.tsx`) usa o mark inline atual, refinado com os mesmos efeitos.
5. **Mobile**: parallax desativado (`lg:` only), kinetic slogan com tamanhos reduzidos, lockup encolhe — sem mudanças bruscas no comportamento mobile já validado.
6. **Performance**: tudo CSS/transform (sem lib de animação extra), `will-change` nos elementos animados, reveals só uma vez por carregamento.

## O que NÃO muda

- Cores (navy + dourado), tipografia, estrutura dos heroes, altura (72svh/78svh), conteúdo textual dos títulos.
- Header, footer, demais seções das páginas.
- Comportamento mobile já aprovado.

Se aprovar, implemento as 3 variantes + mapeamento numa única passada.
