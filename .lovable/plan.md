# Plano para ajustar o Second Opinion Comercial

Ajustar a proposta de valor, o modelo comercial e as etapas da rota `/second-opinion-comercial` (e referências em `/servicos`) para refletir que:
1. Não há taxa fixa ou upfront fee.
2. A remuneração é estritamente **50% da economia gerada (saving)**.
3. A **Buy Group é quem assume e conduz a negociação** para capturar o saving residual.

## Detalhes técnicos

### 1. Atualizar `src/routes/second-opinion-comercial.tsx`
* **Etapa 4 (Steps)**: Alterar o título para "Negociação pela Buy Group" (ou similar) e reescrever o texto para deixar claro que a Buy Group assume a rodada de negociação direta com o fornecedor para extrair os 50% residuais identificados.
* **Modelo Comercial (Commercial Cards)**:
  * Alterar o primeiro card para "50% da economia gerada", detalhando que não há taxa fixa/upfront e a remuneração é de 50% de todo o saving adicional extraído pela Buy Group.
  * Ajustar as menções a "fee apenas se houver" para "50% da economia gerada".
* **Estudo de Caso**: Ajustar a legenda final de "Fee calculado..." para "Remuneração de 50% sobre os R$ 280k capturados".
* **CTAs e Subtítulos**: Mudar referências de "Fee apenas sobre saving" para "Remuneração de 50% da economia gerada. Negociação pela Buy Group."

### 2. Atualizar `src/routes/servicos.tsx`
* Ajustar a descrição do card de "Second Opinion Comercial" de:
  `"Revisão independente de propostas já negociadas pelo seu time. Fee apenas sobre saving capturado. Retorno em 48h."`
  para:
  `"Revisão independente de propostas comerciais com negociação direta pela Buy Group. Remuneração de 50% sobre a economia gerada."`
