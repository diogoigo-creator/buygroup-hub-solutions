# Plano

Remover a seção "Estudo de caso" (R$ 12MM) da página `/cost-optimization`.

## Mudanças em `src/routes/cost-optimization.tsx`

1. Apagar a `<section id="case">` inteira (bloco "ESTUDO DE CASO · CONFIDENCIAL" com os 3 KPIs e a citação do CFO).
2. Remover o item `["case", "Estudo de caso"]` da lista do sticky nav.

Nenhuma outra página é afetada. O case continua aparecendo apenas na home (`/`).
