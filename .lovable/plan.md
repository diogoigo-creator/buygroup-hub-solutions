## Problema

A rota `/sobre` existe e funciona, mas o link não aparece na navegação principal (`src/components/site/Header.tsx`). Só está no footer.

## Mudança

Em `src/components/site/Header.tsx`, adicionar `{ to: "/sobre", label: "Sobre" }` ao array `nav` (linhas 6-12), posicionado antes de "Academy":

```ts
const nav = [
  { to: "/", label: "Início" },
  { to: "/reducao-de-custos", label: "Onde Atuamos" },
  { to: "/bpo-de-compras", label: "BPO de Compras" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cursos", label: "Academy" },
] as const;
```

Isso fará "Sobre" aparecer tanto no menu desktop quanto no drawer mobile (ambos iteram sobre o mesmo array).
