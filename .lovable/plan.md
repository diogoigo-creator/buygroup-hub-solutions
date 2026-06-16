Plano para tornar a navegação entre serviços e cursos mais fluida, usando apenas o que já existe no site. Nada novo será criado — apenas reorganização, conexão e destaque.

### Diagnóstico do estado atual

- As 6 páginas de serviço já têm `Breadcrumb` (topo) e `OutrosServicos` (antes do CTA), mas o usuário só consegue trocar de serviço chegando ao final da página ou voltando para `/servicos`.
- `/cursos` tem 10 cursos categorizados (Compras Estratégicas, Negociação, IA e Tecnologia, Gestão, ESG) — nenhum serviço aponta para cursos relacionados existentes.
- O header tem link "Academy", mas as páginas de serviço não conectam visualmente a oferta de capacitação.
- O sub-nav âncora ("Quando faz sentido / Metodologia / …") é sticky logo abaixo do hero e funciona bem; o Breadcrumb fica acima dele, sem permitir troca rápida de serviço.

### 1. Transformar o `Breadcrumb` em um trocador de serviço fluido

Arquivo: `src/components/site/Breadcrumb.tsx`

- Manter a trilha `Serviços › {currentLabel}` à esquerda.
- À direita, adicionar uma linha horizontal rolável (mobile) / pills (desktop) com os 6 serviços de `SERVICES` (de `src/lib/services.ts`), destacando o ativo (`bg-green/15 text-navy`) e linkando os demais com `<Link to={s.to}>`. Usa apenas os serviços já existentes.
- Não vira sticky (o sub-nav âncora já é sticky e não pode competir). Fica abaixo do header, antes do hero.
- Continua respeitando a identidade premium: tipografia uppercase tracking, sem ícones decorativos extras.

Benefício: o visitante alterna entre serviços com 1 clique, no topo de qualquer página de serviço, sem rolar nem voltar para `/servicos`.

### 2. Conectar serviços ↔ cursos existentes dentro do bloco `OutrosServicos`

Arquivos: `src/lib/services.ts`, `src/components/site/OutrosServicos.tsx`

- Em `SERVICES`, adicionar um campo opcional `cursosRelacionados: string[]` com os **títulos exatos** dos cursos que já existem em `src/routes/cursos.tsx`. Mapeamento (somente cursos existentes):
  - `otimizacao-de-custos` → "Estratégia de Compra e Análise de Gastos", "Redução de Custos Indiretos na Prática", "Negociação Avançada com Fornecedores"
  - `inteligencia-de-gastos` → "Estratégia de Compra e Análise de Gastos", "IA Aplicada à Cadeia de Suprimentos"
  - `bpo-de-compras` → "Gestão de Compras na Prática", "Gestão de Contratos para Compradores", "Negociação Avançada com Fornecedores"
  - `revisao-pre-fechamento` → "Negociação Avançada com Fornecedores", "Estratégia de Compra e Análise de Gastos"
  - `gestao-de-fornecedores` → "Gestão e Desenvolvimento de Fornecedores", "ESG Aplicado a Compras e à Cadeia de Suprimentos"
  - `maturidade-em-compras` → "Compras Estratégicas para Gestores", "Cadeia de Suprimentos 4.0 — Tecnologia e Inovação", "Gestão de Compras na Prática"
- Em `OutrosServicos`, adicionar uma faixa final discreta "Capacitação relacionada" com os títulos dos cursos vinculados, cada um como `<Link to="/cursos">` (a página `/cursos` já tem filtros e detalhes; deep-link de curso individual não existe e não será criado). Texto auxiliar: "Conheça na Academy".
- Visual: linha separada por `border-t border-border` dentro do mesmo container, sem novos cards pesados.

Benefício: ao final de cada serviço, o visitante encontra (a) outros serviços e (b) cursos relacionados — sem inventar conteúdo, apenas reutilizando o que já existe.

### 3. CTAs já existentes — melhor hierarquia no `OutrosServicos`

Arquivo: `src/components/site/OutrosServicos.tsx`

- Adicionar, ao final do bloco, uma linha única com dois CTAs já presentes no site:
  - Primário (verde): "Agendar executive briefing" → `/contato`
  - Secundário (outline): "Ver portfólio completo" → `/servicos` (já existe, apenas reposicionado para também aparecer no mobile, hoje está oculto em `sm:inline-flex`)
- Remover o link duplicado escondido no topo do bloco e centralizar os CTAs no rodapé do componente, para que o visitante tenha sempre a próxima ação visível no fim da leitura.

### 4. Mobile — header drawer já presente, pequenos ajustes

Arquivo: `src/components/site/Header.tsx`

- No drawer mobile, adicionar (logo abaixo do botão "Executive briefing", que já existe) um link secundário discreto para `/servicos` chamado "Ver todos os serviços", reaproveitando o estilo de `Link` já existente. É um link interno para uma página existente — não é nova oferta.
- Sem mudar a ordem dos itens principais nem adicionar novos destinos.

### 5. Página `/servicos` — pequeno realce de hierarquia

Arquivo: `src/routes/servicos.tsx`

- Reordenar a seção "Por onde começar" para ficar **acima** do hero secundário visual (já está), mas reduzir `pt-20`/`pt-24` para `pt-14`/`pt-16` para que os 3 perfis de entrada apareçam mais rápido no fold.
- Sem novos cards, sem novos textos.

### Detalhes técnicos

- Nenhum arquivo novo é criado.
- Nenhuma rota nova, nenhum curso novo, nenhum serviço novo.
- Tipos: estender `Service` em `src/lib/services.ts` com `cursosRelacionados?: string[]` (strings simples que correspondem a `title` em `courses` de `/cursos`).
- Acessibilidade: o switcher do breadcrumb usa `<nav aria-label="Trocar de serviço">`; o item ativo recebe `aria-current="page"`.
- Mobile: switcher rolável horizontalmente com `overflow-x-auto` + `snap-x`, sem barra de rolagem visível.
- Performance: zero novas dependências, zero imagens novas, zero animações adicionais.

### Critério de pronto

- Em qualquer página de serviço, dá para ir para outro serviço em 1 clique no topo.
- No final de qualquer serviço, aparecem (a) outros serviços e (b) cursos relacionados existentes + 2 CTAs já existentes.
- Mobile: o drawer leva direto para `/servicos` e `/contato`.
- Nenhum texto novo de oferta foi escrito — apenas labels de navegação ("Trocar de serviço", "Capacitação relacionada", "Ver todos os serviços", "Conheça na Academy").