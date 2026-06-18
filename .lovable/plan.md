## Remoção do Slogan no PageHero do Contato

O usuário decidiu remover o slogan em vez de corrigi-lo.

### Plano

Na página `/contato` (`src/routes/contato.tsx`), alterar o `PageHero` para usar `identity={{ kind: "mark" }}` (a marca d'água rotacionada discreta padrão das outras páginas) em vez do slogan.

```tsx
// src/routes/contato.tsx
identity={{
  kind: "mark",
}}
```

Nenhum outro texto ou estrutura será alterado.