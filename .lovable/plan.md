Substituir o avatar com iniciais "DM" no card de Diogo Igor Silva Moraes (página /sobre, seção "Quem conduz os engajamentos") pela foto enviada.

## Passos

1. Subir a imagem como Lovable Asset (`src/assets/diogo-moraes.jpg.asset.json`).
2. Em `src/routes/sobre.tsx`, trocar o `<div>` circular com "DM" por um `<img>` redondo (h-20 w-20, object-cover, rounded-full) usando a URL do asset, com `alt="Diogo Igor Silva Moraes"`.
3. Manter o restante do card (nome, cargo, descrição, tags de setores) intacto.