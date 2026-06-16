# Plano de implementação

Ordem de execução: 4 → 1 → 2 → 3.

## Prompt 4 — Correções globais de credibilidade

**Telefone/WhatsApp** — Você optou por não publicar telefone. Em vez de substituir, vamos **remover** todas as referências:
- Excluir o componente `src/components/site/WhatsAppFab.tsx` e todas as suas importações/usos (`/sobre`, `/contato`, `/servicos`, `/bpo-de-compras`, `/reducao-de-custos`, `/cursos`, `/index`).
- Em `src/routes/cursos.tsx`, remover a constante `WHATSAPP_URL` e o botão "Falar no WhatsApp" do formulário, mantendo apenas o CTA principal por e‑mail/contato.
- Remover o campo "Telefone" do formulário de `/contato` (já que não pediremos telefone do lead também não é coerente exibir).

**Localização → Santos · SP · Brasil**
- `src/components/site/Footer.tsx` linha 81: `Belo Horizonte · Brasil` → `Santos · SP · Brasil`.
- `src/routes/contato.tsx` linha 139: idem.

**Dados de credibilidade**
- Os valores divergentes (R$ 2.1Bi+ e 200+ engajamentos) **não existem mais no código** — foi feita varredura completa. Os únicos números públicos hoje são `R$ 1,4 bi+` e `23 grandes empresas atendidas` em `src/routes/index.tsx` (linhas 39–40). Nada a fazer aqui além de confirmar.

**Tradução "Currently accepting…"**
- A frase em inglês **não está presente** no código atual (varredura em todas as rotas). Nada a alterar. Se aparecer em algum lugar não óbvio que você esteja vendo na preview, me indique a página.

**Badge "Edit with Lovable"**
- Acionar `publish_settings--set_badge_visibility` com `hide_badge: true`. Requer plano Pro+ — se o plano atual não permitir, a chamada falha e te informo.

## Prompt 1 — Página /sobre: seção "Quem conduz os engajamentos"

Conforme sua resposta, **um único card** (não temos sócio), inserido logo após a grade "Quatro princípios que não negociamos" (após linha 130 do `sobre.tsx`).

Conteúdo do card:
- Avatar circular cinza com iniciais **DM** (placeholder, sem foto real).
- Nome: **Diogo Igor Silva Moraes**
- Cargo: **Head de Supply Chain**
- Setores: **Aviação · Construção · Mineração · Hospitalar · Indústria · Agronegócio**

Abaixo do card, faixa horizontal com três dados institucionais:
- **2013** — Ano de fundação
- **Santos · SP** — Sede
- **6 setores** — Setores atendidos (derivado da lista de setores do Diogo; se preferir outro número, ajustamos)

Layout: card centralizado (largura média), faixa de stats em 3 colunas com bordas finas no tom do site. Sem texto institucional genérico.

## Prompt 2 — Renomear "Redução de Custos" → "Onde Atuamos"

- `src/components/site/Header.tsx` linha 8: label do item do `nav` (rota `/reducao-de-custos` inalterada).
- `src/components/site/Footer.tsx` linha 49: trocar texto do link "Redução de custos" → "Onde atuamos".
- Nenhum outro texto da página `/reducao-de-custos` é alterado.

## Prompt 3 — Página /bpo-de-compras: sumário de navegação interna

- Inserir uma barra horizontal sticky-discreta logo abaixo do hero e antes da seção "Quando faz sentido", com âncoras para:
  - Quando faz sentido → `#quando-faz-sentido`
  - O que operamos → `#o-que-operamos`
  - Modelos de atuação → `#modelos-de-atuacao`
  - Modelos comerciais → `#modelos-comerciais`
  - Para quem é indicado → `#para-quem-e-indicado`
  - BPO vs. Buy Group → `#bpo-vs-buy-group`
- Adicionar `id` correspondente em cada `<section>` de destino no `bpo-de-compras.tsx`.
- Scroll suave via CSS (`scroll-behavior: smooth` já é padrão do projeto; caso contrário, garantir em `html`).
- Compensar a altura do header sticky com `scroll-margin-top` nas sections.
- Nenhum conteúdo das seções é alterado.

## Detalhes técnicos

- Arquivos editados: `Header.tsx`, `Footer.tsx`, `contato.tsx`, `sobre.tsx`, `bpo-de-compras.tsx`, `cursos.tsx`, `index.tsx`, `servicos.tsx`, `reducao-de-custos.tsx` (remoção de `WhatsAppFab`).
- Arquivo removido: `src/components/site/WhatsAppFab.tsx`.
- Sem mudanças de rota nem de schema/back-end.
- Após implementar: tirar screenshot das páginas afetadas para QA visual.
