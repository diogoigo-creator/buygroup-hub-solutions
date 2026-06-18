Hoje a home tem duas seções tratando da CUT4MORE™ em sequência:

1. **Bloco overview** — badge "Metodologia proprietária", título e 4 cards curtos (ícone + nº + título + descrição curta).
2. **Bloco "Como funciona"** — eyebrow, título, intro e 4 cards detalhados (cabeçalho com ícone/nº/título/descrição + atividades-chave + métricas).

Os 4 títulos de fases, ícones e descrições curtas se repetem entre os dois blocos.

## Proposta: fundir em uma única seção

Manter **um único bloco** "Metodologia CUT4MORE™" combinando o melhor dos dois, sem duplicação:

- **Cabeçalho (vindo do overview, fundo navy)**:
  - Badge "Metodologia proprietária CUT4MORE™"
  - Título: "Uma metodologia estruturada em quatro fases. Da análise ao resultado validado."
  - Parágrafo introdutório existente.

- **Mini-índice das 4 fases (novo, enxuto)**: tira horizontal com `01 → 02 → 03 → 04`, cada item com ícone + título curto, servindo como visão geral rápida e âncora visual. Sem descrição curta (que era redundante com a longa).

- **Blocos detalhados (vindos de "Como funciona")**: os 4 cards atuais com descrição completa, atividades-chave e métricas esperadas — fundo claro para contraste, como já está.

- **Rodapé da seção**: disclaimer das faixas de métricas (já existe).

A seção "Como funciona" deixa de existir como bloco separado; vira a parte detalhada da seção CUT4MORE™.

## O que é removido

- A lista de 4 cards curtos do overview (linha conectora, watermark do número, descrição curta) — substituída pela tira horizontal enxuta e pelos cards detalhados que já entregam essa informação melhor.
- O heading e a intro duplicada do bloco "Como funciona" (mantemos apenas o do overview, no topo).

## Detalhes técnicos

- Arquivo: `src/routes/index.tsx`.
- Remover o `<ol>` de cards curtos atual dentro do bloco navy `{/* PROCUREMAX FRAMEWORK */}`, substituindo-o pela tira horizontal compacta (ícone + nº + título).
- Eliminar o cabeçalho da seção `{/* COMO FUNCIONA — CUT4MORE EM DETALHE */}` (eyebrow + h2 + parágrafo) e renomear o comentário para `{/* CUT4MORE — DETALHE POR FASE */}`. Manter os 4 `<article>` detalhados e o disclaimer.
- O dataset `framework` deixa de ser usado e pode ser removido; manter apenas `frameworkDetail`. A tira horizontal lê de `frameworkDetail` (já tem ícone, nº e título).
- Sem mudanças em rotas, SEO, dados ou backend.
