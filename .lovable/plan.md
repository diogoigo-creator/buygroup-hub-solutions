## Diagnóstico

Hoje todos os heroes (home e `PageHero` das demais páginas) usam `lg:min-h-[calc(100svh-68px)]` — ou seja, ocupam **a tela inteira** no desktop. Isso foi feito para evitar cortes, mas ficou exagerado: a primeira dobra vira só banner, sem indicar que existe conteúdo abaixo.

## Recomendação

Reduzir o piso de altura para **~72vh** no desktop. Isso:
- mantém presença visual forte (hero ainda domina a primeira dobra),
- deixa visível uma "fatia" do conteúdo seguinte, criando convite à rolagem,
- preserva o requisito anterior de "não cortar elementos pela metade" — a logomarca animada, título, descrição e CTAs continuam 100% visíveis,
- reduz a tipografia gigante proporcionalmente para o hero respirar melhor.

## Mudanças

**`src/components/site/SiteLayout.tsx` (`PageHero` — usado em /sobre, /servicos, /cursos, /contato, /reducao-de-custos)**
- Trocar `lg:min-h-[calc(100svh-68px)]` por `lg:min-h-[72svh]`.
- Reduzir título de `lg:text-[4.5rem]` para `lg:text-[3.75rem]`.
- Reduzir logomarca de `lg:h-[400px]` para `lg:h-[340px]`.
- Ajustar paddings verticais (`lg:pt-16 lg:pb-20` → `lg:pt-14 lg:pb-16`).

**`src/routes/index.tsx` (hero da home)**
- Trocar `lg:min-h-[calc(100svh-68px)]` por `lg:min-h-[78svh]` (home pode ser um pouco maior por ser landing).
- Reduzir título principal de `lg:text-7xl` para `lg:text-6xl` e o subtítulo de `lg:text-[2.25rem]` para `lg:text-3xl`.
- Reduzir logomarca animada de `lg:h-[520px]` para `lg:h-[440px]`.
- Ajustar paddings (`lg:pb-16 lg:pt-12` → `lg:pb-12 lg:pt-10`).

## O que NÃO muda

- Estrutura, cores (navy + dourado), fontes, animações e layout.
- Comportamento mobile (continua usando rolagem natural).
- Conteúdo textual e CTAs.

Se preferir um corte mais agressivo (60vh) ou mais sutil (manter 100vh só ajustando tipografia), me diga antes de implementar.
