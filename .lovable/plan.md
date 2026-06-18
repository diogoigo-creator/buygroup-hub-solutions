## Problema

Todos os links/CTAs "Falar com especialista", "Solicitar diagnóstico", etc. apontam para `/contato` (raiz da página). Como `/contato` começa com o `PageHero` (banner), o usuário cai no topo e precisa rolar até o formulário.

## Solução

Usar âncora `#form` nos links para a página rolar direto até o formulário.

### Passo 1 — `src/routes/contato.tsx`
- Adicionar `id="form"` na `<section>` que contém o formulário (linha 129).
- Adicionar `scroll-mt-24` (Tailwind) para compensar o header fixo e não cortar o título do formulário.

### Passo 2 — Adicionar `hash="form"` em todos os `Link to="/contato"` do site

Arquivos a atualizar (todos os CTAs `<Link to="/contato" ...>`):

- `src/components/site/Header.tsx` (2 ocorrências — desktop + mobile CTA)
- `src/components/site/OutrosServicos.tsx`
- `src/routes/index.tsx` (3 ocorrências)
- `src/routes/sobre.tsx`
- `src/routes/servicos.tsx`
- `src/routes/metodologia.tsx` (2)
- `src/routes/reducao-de-custos.tsx`
- `src/routes/cursos.tsx`
- `src/routes/otimizacao-de-custos.tsx` (2)
- `src/routes/bpo-de-compras.tsx` (2)
- `src/routes/inteligencia-de-gastos.tsx` (2)
- `src/routes/revisao-pre-fechamento.tsx` (2)
- `src/routes/maturidade-em-compras.tsx` (2)
- `src/routes/gestao-de-fornecedores.tsx` (2)

Em cada um, adicionar a prop `hash="form"`:
```tsx
<Link to="/contato" hash="form" search={{ interesse: "..." }}>
```

Para os Links da home/header/CTAs sem `search`, fica:
```tsx
<Link to="/contato" hash="form">
```

### Resultado
Ao clicar em qualquer CTA "Falar com especialista", o navegador navega para `/contato#form` e rola automaticamente até o formulário, pulando o banner.

Nada mais será alterado — banner, layout e textos permanecem iguais.