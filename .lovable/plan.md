# Trocar a barra de pílulas por um dropdown discreto

Substituir o componente `Breadcrumb` atual (trilha + linha de pílulas com os 6 serviços) por uma versão enxuta: trilha "Serviços › {serviço atual}" à esquerda e um botão "Trocar serviço" à direita que abre um menu com os 6 serviços.

## Comportamento

- Barra continua sticky logo abaixo do header (top-[64px]), mas com altura reduzida (py-2.5) e tipografia menor.
- À esquerda: `Serviços › {label do serviço atual}`. O texto "Serviços" é Link para `/servicos`.
- À direita: botão `Trocar serviço ▾` (com chevron). Estado fechado mostra apenas o nome do serviço atual em destaque.
- Ao clicar: abre um menu suspenso ancorado ao botão com a lista dos 6 serviços (ordem do `SERVICES` em `src/lib/services.ts`). Item ativo marcado (check + cor accent), demais clicáveis.
- Fecha ao: clicar fora, pressionar Esc, ou selecionar um item.
- Usar o componente `DropdownMenu` do shadcn (já disponível em `src/components/ui/`), garantindo acessibilidade por padrão (foco, setas, aria).
- Mobile: o mesmo dropdown — não há mais rolagem horizontal de pílulas. Botão ocupa largura confortável (max-w) e o painel abre alinhado à direita.

## Visual

- Fundo `bg-background/85 backdrop-blur` para se integrar e não competir com o hero.
- Texto da trilha em `text-xs uppercase tracking-[0.18em] text-muted-foreground`, serviço atual em `text-navy font-medium`.
- Botão: `rounded-full border border-navy/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy hover:border-green hover:text-green`.
- Painel: card branco com sombra suave, itens com hover sutil e item ativo destacado em verde.

## Arquivos

- `src/components/site/Breadcrumb.tsx` — reescrever o markup conforme acima. Mantém a mesma assinatura (`currentLabel`, `currentSlug?`) para não tocar nas páginas de serviço.

Nada de novo conteúdo, serviço, página ou rota é criado.
