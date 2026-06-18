## Padronizar alinhamento dos cards (homepage)

Aplicar centralização e alinhamento consistente em todos os blocos de cards de `src/routes/index.tsx`, mantendo o mesmo padrão já usado nos cards de credibilidade e do estudo de caso.

### Cards a ajustar

1. **Framework CUT4MORE™ (4 etapas — linhas 261-281)**
   - Hoje: ícone à esquerda + texto à direita (layout horizontal).
   - Mudar para: layout vertical centralizado — ícone no topo, número e título centralizados abaixo (`flex-col items-center text-center`), removendo a seta lateral.

2. **Moat / "Por que Buy Group" (4 cards — linhas 312-326)**
   - Hoje: ícone, título e descrição alinhados à esquerda.
   - Mudar para: ícone, título e descrição centralizados (`text-center`, ícone com `mx-auto`, conteúdo em `flex flex-col items-center`).

3. **Team Credentials (3 cards — linhas 388-394)**
   - Já estão centralizados; apenas garantir o ícone com `mx-auto` para alinhamento perfeito com texto.

4. **Credibility matrix e mini-cards do estudo de caso**
   - Já estão centralizados — nenhuma mudança.

### Resultado

Todos os grids de cards da home seguirão o mesmo padrão: ícone no topo centralizado, título centralizado, descrição centralizada — visual consistente em toda a página.