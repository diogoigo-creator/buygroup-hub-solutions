## Problema

As logos atuais (`src/assets/buy-group-logo.webp` e `buy-group-logo-white.webp`) estão em **311×72 px**. Como são exibidas em até 380px de largura no banner e em telas Retina (2x/3x DPI) o navegador precisa de 760–1140 px reais, o resultado fica visivelmente serrilhado.

## O que vou fazer

1. **Gerar a versão em alta resolução** (1600×370, ~5x maior) da logo **Buy Group** com IA, recriando fielmente:
   - Símbolo: carrinho/sacola estilizado em laranja-âmbar (cor atual da marca)
   - Wordmark: "BUY GROUP" em sans-serif geométrica bold
   - Fundo transparente (PNG)
2. **Gerar a variante branca** (mesma logo em branco puro sobre fundo transparente) para uso em headers/footers escuros.
3. **Salvar como PNG transparente** em `src/assets/`:
   - `src/assets/buy-group-logo.png` (substitui a webp)
   - `src/assets/buy-group-logo-white.png` (substitui a webp)
4. **Atualizar os 3 imports** em:
   - `src/components/site/Header.tsx`
   - `src/components/site/Footer.tsx`
   - `src/components/site/hero-identities/FullLockup.tsx`
5. **Adicionar `loading="eager"` e `decoding="async"`** onde fizer sentido, e garantir que o `<img>` use a renderização nítida (sem upscale forçado além do natural).
6. **Remover os arquivos .webp antigos** após confirmação visual.

## Observação

A recriação por IA pode ter pequenas variações de detalhes finos em relação à logo original. Se notar qualquer divergência, o ideal a longo prazo é você me enviar o **arquivo vetorial original (SVG)** — aí a logo fica perfeita em qualquer tamanho sem nenhuma regeração. Posso seguir agora com a regeração?