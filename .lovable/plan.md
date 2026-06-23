Ajustar o tamanho e enquadramento da foto no card de Diogo Igor Silva Moraes em `src/routes/sobre.tsx` para disfarçar a baixa resolução:

- Reduzir um pouco o tamanho visual do avatar (por exemplo, de `h-20 w-20` para `h-16 w-16`) para que a densidade de pixels aumente e pareça mais nítido em telas de alta densidade (Retina).
- Aplicar um leve filtro de nitidez (`contrast-[1.02] saturate-[1.02] brightness-[1.01]`) ou borda suave para integrar melhor a imagem ao fundo branco e disfarçar eventuais artefatos de compressão.
- Garantir que o enquadramento continue correto com `object-cover object-top`.

Sem alterações em outras páginas, componentes ou dados.
