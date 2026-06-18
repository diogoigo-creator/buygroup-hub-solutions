## Correções na home (`src/routes/index.tsx`)

**1. Espaço no H1 (linha 126)**
A frase está dividida em dois `<span className="block">`. Embora cada um seja bloco, vou garantir o espaçamento textual adicionando um espaço final em "líderes " — corrige qualquer junção visual em renderizações que recolham os blocos.

**2. Label do briefing executivo (linha 393)**
Trocar `EXECUTIVE BRIEFING · NÍVEL DIRETIVO · 20MIN` por `BRIEFING EXECUTIVO · NÍVEL DIRETIVO · 20 MIN`. Mantém classes e estilo.

**3. Marca d'água na seção do estudo de caso (linhas 175–221)**
Adicionar o componente já existente `SectionWatermark` (de `@/components/site/SectionWatermark`) dentro da seção que contém R$ 12MM, 12,4% e 9,3x, posicionado à direita com opacidade baixa.

Observação importante: no código atual, essa seção tem **fundo claro** (não escuro como mencionado). Para respeitar o padrão visual coerente com o fundo, vou usar `tone="dark"` (marca escura sutil sobre fundo claro, opacidade ~4%, igual às demais seções claras). Se a intenção for realmente usar a marca branca (`buy-group-mark-white`), me avise e troco para `tone="light"`.

Mudanças:
- Tornar a `<section>` `relative overflow-hidden` para conter a marca d'água absoluta.
- Inserir `<SectionWatermark variant="right" tone="dark" />` como primeiro filho da section.

Nada mais será alterado.