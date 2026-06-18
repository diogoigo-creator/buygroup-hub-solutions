## Diagnóstico

Confirmei no código atual de `src/routes/index.tsx`:

- **Linha 127**: `Encontramos oportunidades que os líderes{" "}` — com espaço, e os dois `<span>` são `block` (cada um em sua linha).
- **Linha 395**: `BRIEFING EXECUTIVO · NÍVEL DIRETIVO · 20 MIN` — já em português.

Ou seja, as duas correções **estão no código-fonte**. O que você está vendo na tela é provavelmente:

1. Cache do navegador / preview não atualizado, ou
2. Você está olhando para a versão **publicada** (publish anterior), e não para o preview atual.

## Plano

1. Rodar o Playwright contra o preview local (`http://localhost:8080`) e tirar screenshots do H1 e da seção de briefing, para provar o que está sendo de fato renderizado pelo build atual.
2. Se as screenshots mostrarem o texto correto → é cache; recomendo Ctrl+Shift+R no preview e, em seguida, republicar o site para propagar.
3. Se as screenshots mostrarem o texto colado / em inglês → investigar outro componente / CSS que esteja sobrescrevendo (improvável, mas vou checar `text-balance`, animações e qualquer regra global que possa afetar o `display: block`).

Nada será alterado até confirmarmos o estado real do render.