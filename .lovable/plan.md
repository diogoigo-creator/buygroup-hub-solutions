## Objetivo
Elevar o acabamento do site Buy Group atacando os 4 pontos mais visíveis da avaliação: placeholders literais, hero vazio à direita, inconsistência visual entre seções e footer raso. Inclui também correções rápidas de SEO.

## Escopo

### 1. Eliminar placeholders em colchetes
Remover os `[...]` literais mantendo os números, e substituir contato/telefone placeholder por valores neutros.
- `[2.1] bilhões` → `R$ 2.1 bilhões` (idem nas métricas)
- `[23] CFOs`, `[200+] engajamentos`, `[40+] verticais`, `[15+] anos`, `[12] clientes`, `[3] new engagements`, `[47]MM`, `[380]MM`, `[3.2]Bi`, `[8.7]x`, `[11.2]x` → mesmos números sem colchetes
- Footer: telefone `+55 11 4000-0000` e e-mail `contato@buygroup.com.br` mantidos (são plausíveis) mas adicionar nota "Atendimento por agendamento" e remover se o usuário quiser depois
- Arquivos afetados: `src/routes/index.tsx`, `src/routes/servicos.tsx`, `src/routes/reducao-de-custos.tsx`, `src/routes/sobre.tsx`, `src/routes/cursos.tsx`, `src/components/site/Footer.tsx`

### 2. Reforçar hero da home
O lado direito do hero hoje só tem o "G" semi-transparente. Trocar para o lockup completo (como já é usado em `/servicos`) com a marca branca + slogan animado "Mais que comprar. É comprar bem.", reaproveitando o componente `FullLockup`.
- Arquivo: `src/routes/index.tsx` — trocar `identity={{ kind: "mark", ... }}` por `identity={{ kind: "lockup", slogan: {...} }}`

### 3. Padronizar tratamento dos cards
Aplicar o padrão dos cards de `/servicos` (gradiente verde no ícone, hover com elevação, border sutil) nas seções:
- **Case study** (3 métricas planas) — envolver em cards com borda
- **4 razões pelas quais boards escolhem** (`index.tsx`) — ícones em quadrado cinza ganham gradiente verde + hover lift
- **Framework ProcureMax** (cards 01-04 no navy) — leve hover com borda verde
- Arquivo: `src/routes/index.tsx`

### 4. Enriquecer footer
- Adicionar link LinkedIn (placeholder `#` com aria-label)
- Adicionar linha institucional: "Buy Group Consultoria Ltda. · São Paulo, Brasil"
- Reorganizar em 4 colunas: Marca/tagline · Navegação · Contato · Institucional
- Arquivo: `src/components/site/Footer.tsx`

### 5. SEO básico
- Adicionar JSON-LD Organization em `__root.tsx` via `scripts`
- Adicionar `og:site_name` e `og:type: website` no root (verificar se já existe)
- Arquivo: `src/routes/__root.tsx`

## Fora de escopo (sugestões para próxima rodada)
- Geração de `og:image` (requer aprovação para imagegen)
- Revisão mobile dedicada
- Substituição das métricas por números reais (precisa input do cliente)
- Newsletter no footer

## Verificação
Após as mudanças: screenshot full-page da home em 1336px para confirmar visual, e leitura rápida das outras rotas para garantir que os placeholders sumiram.