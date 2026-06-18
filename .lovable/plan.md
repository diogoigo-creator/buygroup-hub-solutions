## Objetivo

Logo SVG totalmente responsiva e que **herda a cor do contexto**: preta sobre fundos claros, branca sobre fundos escuros — sem manter dois arquivos coloridos.

## Mudanças

### 1. Novo componente `src/components/site/BuyGroupLogo.tsx`
Componente React que retorna o SVG **inline** com `fill="currentColor"`. Aceita `className` para tamanho e cor:

```tsx
export function BuyGroupLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="..." viewBox="0 0 1584 672" fill="currentColor" role="img" aria-label="Buy Group" className={className}>
      <g transform="...">...paths...</g>
    </svg>
  );
}
```

A cor passa a ser controlada via `text-*` no Tailwind (currentColor), o tamanho via `w-*` / `h-*`. Proporção preservada automaticamente pelo `viewBox`.

### 2. Substituir os 3 usos atuais

**`Header.tsx`** (fundo claro → preto, com fallback para quando rolado):
```tsx
<BuyGroupLogo className="h-7 w-auto text-foreground sm:h-8" />
```

**`Footer.tsx`** (fundo navy → branco):
```tsx
<BuyGroupLogo className="h-7 w-auto text-white" />
```

**`FullLockup.tsx`** (hero escuro → branco, com tamanhos responsivos atuais preservados):
```tsx
<BuyGroupLogo className="w-[220px] sm:w-[300px] lg:w-[380px] h-auto text-white animate-lockup-reveal select-none" />
```

### 3. Responsividade

- O SVG já é vetorial — não há perda em nenhuma DPI.
- Mantenho os breakpoints já existentes (`sm:` / `lg:`).
- `w-auto` + `h-*` (ou vice-versa) preserva a proporção 1584:672 do `viewBox` em todos os tamanhos.
- Adiciono `shrink-0` no Header para impedir distorção quando o menu mobile espreme o layout.

### 4. Limpeza
- Remover `src/assets/buy-group-logo.svg` e `src/assets/buy-group-logo-white.svg` (substituídos pelo componente inline — uma única fonte de verdade).

## Arquivos afetados
- **novo:** `src/components/site/BuyGroupLogo.tsx`
- **editar:** `src/components/site/Header.tsx`, `src/components/site/Footer.tsx`, `src/components/site/hero-identities/FullLockup.tsx`
- **remover:** `src/assets/buy-group-logo.svg`, `src/assets/buy-group-logo-white.svg`

Posso seguir?