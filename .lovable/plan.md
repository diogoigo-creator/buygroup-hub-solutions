## Contexto

O site não tem um tema global escuro/claro alternável — tem **superfícies** com fundos diferentes na mesma página (Header claro, Footer/Hero escuros). Vou padronizar com **tokens semânticos** para que a logo escolha a cor sozinha conforme a superfície onde estiver.

## Mudanças

### 1. Tokens em `src/styles.css`

Adicionar dois tokens semânticos (entre o `@theme inline` e o `:root`):

```css
:root {
  /* Cor da logomarca por superfície. Default: superfície clara → preto. */
  --logo: oklch(0.15 0.02 256);   /* preto/quase-preto, casa com --foreground */
}

/* Qualquer superfície marcada como "escura" inverte automaticamente */
.surface-dark {
  --logo: oklch(1 0 0);            /* branco puro */
}
```

E registrar como cor Tailwind dentro do `@theme inline` existente:
```css
--color-logo: var(--logo);
```

Isso libera as utilities `text-logo`, `bg-logo`, etc.

### 2. Componente `BuyGroupLogo`

Trocar a cor passada pela página por uma cor herdada do token. O componente passa a renderizar com `text-logo` por padrão (ou aceita `className` se alguém quiser sobrescrever):

```tsx
<svg ... className={cn("text-logo", className)} fill="currentColor" ...>
```

### 3. Marcar as superfícies escuras

- `Footer.tsx` (`<footer class="bg-navy ...">`) → adicionar `surface-dark`
- `FullLockup.tsx` wrapper → o hero já vive sobre fundo escuro; adicionar `surface-dark` no `<div>` raiz do lockup
- `Header.tsx` → **não** recebe `surface-dark` (fica preto sobre branco automaticamente)

### 4. Limpeza nos usos

Remover `text-white` / `text-navy` específicos dos 3 call-sites — passa a ser automático:

```tsx
// Header
<BuyGroupLogo className="h-8 w-auto shrink-0 sm:h-9" />

// Footer (dentro de um wrapper com classe surface-dark)
<BuyGroupLogo className="h-7 w-auto" />

// FullLockup (wrapper raiz com surface-dark)
<BuyGroupLogo className="h-auto w-[220px] sm:w-[300px] lg:w-[380px] ..." />
```

### 5. Bônus — suporte futuro a tema escuro global

O `@custom-variant dark` já existe em `styles.css`. Adicionar também:
```css
.dark {
  --logo: oklch(1 0 0);
}
```

Assim, se um dia o site ganhar toggle dark/light global (classe `.dark` no `<html>`), a logo já acompanha sem mais nenhuma alteração.

## Arquivos afetados
- `src/styles.css` — adicionar tokens `--logo` + `--color-logo` + regra `.surface-dark` + regra `.dark`
- `src/components/site/BuyGroupLogo.tsx` — default `text-logo`
- `src/components/site/Header.tsx`, `Footer.tsx`, `hero-identities/FullLockup.tsx` — adicionar `surface-dark` nos wrappers escuros e remover `text-navy`/`text-white` da logo

Posso aplicar?