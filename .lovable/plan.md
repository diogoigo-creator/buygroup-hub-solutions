# Plano: Aumentar o Círculo da Foto de Liderança

Como solicitado, manteremos o layout atual (com a foto circular ao lado do texto), apenas aumentando substancialmente o tamanho do círculo para destacar melhor a foto do Diogo.

## Detalhes das alterações:
1. **Aumento do tamanho da foto**:
   - Alterar as classes de tamanho da imagem de `h-16 w-16` (64px) para `h-28 w-28` (112px) ou `h-24 w-24` (96px).
   - Garantir que a foto continue perfeitamente circular (`rounded-full`) e com excelente enquadramento (`object-cover object-top`).
2. **Ajuste de Responsividade e Espaçamento**:
   - Ajustar o container flex (`flex-col sm:flex-row items-center sm:items-start gap-6`) para que em telas de celular a foto maior fique centralizada acima do texto, e em telas maiores (a partir de `sm`) fique alinhada perfeitamente à esquerda com excelente espaçamento.
