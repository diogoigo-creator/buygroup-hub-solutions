## Footer simplificado

Remover toda a navegação e blocos de marca/contato. Manter apenas:

- Logo Buy Group (pequeno, à esquerda)
- Endereço: R. Rio Grande do Norte, 1436 — Sala 813 · Savassi, Belo Horizonte — MG · 30130-138
- E-mail: atendimento@buygroup.com.br
- Linha divisória + copyright © {ano} Buy Group Consultoria

### Layout
Uma única faixa enxuta no `bg-navy`, padding vertical reduzido (`py-10`), grid de 2 colunas em desktop (logo à esquerda, endereço/e-mail à direita), empilhado no mobile. Tipografia discreta, sem ícones grandes, sem mark decorativo de fundo.

### Arquivo afetado
- `src/components/site/Footer.tsx` — reescrever removendo as colunas "Navegação" e o bloco "Mais que comprar..."

Sem mudanças em outros componentes.