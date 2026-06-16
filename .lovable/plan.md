## Objetivo

Reformular o `Footer.tsx` no padrão BR Supply: faixa escura corporativa, com a logo em destaque e blocos institucionais alinhados em colunas (endereço, contato), seguida de uma barra inferior com CNPJ/copyright. Sem menu de navegação, sem links de páginas.

## Estrutura proposta

```text
┌──────────────────────────────────────────────────────────────┐
│  [LOGO BUY GROUP]                                            │
│                                                              │
│  ENDEREÇO              CONTATO              ATENDIMENTO      │
│  R. Rio Grande do      atendimento@         Seg a Sex        │
│  Norte, 1436 — Sl 813  buygroup.com.br      09h às 18h       │
│  Savassi, BH/MG                                              │
│  CEP 30130-138                                               │
├──────────────────────────────────────────────────────────────┤
│  © 2026 Buy Group Consultoria · CNPJ 00.000.000/0001-00      │
└──────────────────────────────────────────────────────────────┘
```

- Faixa principal `bg-navy`, texto claro.
- Logo grande (h-8/10) no topo, à esquerda.
- 3 colunas com micro-label em uppercase dourado (`text-green`/accent) + conteúdo em branco/70.
- Barra inferior fina (`border-t border-white/10`) com copyright + CNPJ centralizado/esquerda.
- Sem links de navegação, sem redes sociais, sem newsletter.
- Responsivo: colunas empilham no mobile.

## Arquivo afetado

- `src/components/site/Footer.tsx` — reescrita do layout mantendo logo e dados já presentes (endereço e e-mail).

## Observação

CNPJ exibido como placeholder (`00.000.000/0001-00`) — basta me passar o número real depois para substituir.
