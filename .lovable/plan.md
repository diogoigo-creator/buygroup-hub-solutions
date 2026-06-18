Adicionar uma nova seção **"Como funciona — CUT4MORE™ em detalhe"** logo após o bloco atual de fases (visão geral) na página inicial (`src/routes/index.tsx`).

## Estrutura da seção

Cabeçalho:
- Eyebrow: "Como funciona"
- Título: "CUT4MORE™ em detalhe. O que acontece em cada fase e o que esperar em métricas."
- Parágrafo curto contextualizando que cada fase tem entregáveis, atividades e indicadores próprios.

Conteúdo: 4 blocos verticais (um por fase), cada um com layout em 12 colunas no desktop e empilhado no mobile:

```text
┌──────────────────────────────────────────────────────────────┐
│ [01] Mapeamento de Oportunidades                             │
│ ─────────────────────────────────────────────────────────── │
│  Descrição detalhada      │  Atividades-chave  │  Métricas   │
│  (2-3 frases)             │  • bullet          │  KPI 1: x%  │
│                           │  • bullet          │  KPI 2: x   │
└──────────────────────────────────────────────────────────────┘
```

## Conteúdo proposto por fase

**01 · Mapeamento de Oportunidades**
- Descrição: Diagnóstico estruturado de despesas, contratos e fornecedores. Construímos um baseline financeiro auditável e priorizamos as categorias com maior potencial de captura no curto e médio prazo.
- Atividades: análise de spend (12 meses), revisão de contratos vigentes, entrevistas com stakeholders, benchmarking de preços, matriz de priorização por impacto x esforço.
- Métricas esperadas: 100% do spend endereçável mapeado · 5 a 12 categorias priorizadas · baseline aprovado em até 3 semanas.

**02 · Estratégia de Compra**
- Descrição: Decomposição da estrutura de custos por categoria e desenho de estratégia de fornecimento — competitiva, de parceria ou hibrída — alinhada ao risco operacional e ao apetite de margem do cliente.
- Atividades: should-cost analysis, mapeamento de fornecedores alternativos, definição de lotes, modelagem de cenários, RFI/RFP, validação técnica com áreas usuárias.
- Métricas esperadas: 3 a 8 fornecedores qualificados por categoria · 2 a 4 cenários de negociação por contrato · 30-50% de redução no tempo de ciclo do sourcing.

**03 · Condução da Negociação**
- Descrição: Negociação direta com fornecedores conduzida por especialistas seniores, preservando SLA, qualidade e continuidade. Atuamos como extensão da área de compras, sob NDA e sob autoridade definida com o cliente.
- Atividades: rodadas estruturadas, leilões reversos quando aplicável, contraproposta técnica, redação de adendos contratuais, governança de aprovação.
- Métricas esperadas: 8% a 22% de saving médio por categoria · 90% de fornecedores estratégicos preservados · contratos renegociados em < 60 dias.

**04 · Validação dos Savings**
- Descrição: Homologação financeira dos resultados frente ao baseline aprovado, com rastreabilidade contábil e validação pelo controller / auditoria do cliente. Remuneração da Buy Group vinculada ao saving validado.
- Atividades: reconciliação de notas fiscais x preços novos, dashboard de captura mensal, relatório executivo, validação pelo CFO/comitê, ajustes de carve-out.
- Métricas esperadas: 100% dos savings com lastro documental · ROI médio 8,7x · payback < 90 dias.

## Detalhes técnicos

- Arquivo: `src/routes/index.tsx`.
- Inserção: nova `<section>` imediatamente após `{/* PROCUREMAX FRAMEWORK */}` e antes de `{/* DIFFERENTIATION MOAT */}`.
- Fundo branco/`bg-background` para contraste com a seção navy anterior; tokens semânticos do design system existente (`text-navy`, `text-green`, `bg-secondary/40`, `border-border`).
- Ícones reaproveitam os 4 já importados (`Search`, `Compass`, `Handshake`, `CheckCircle2`).
- Componente nativo (sem novos arquivos), seguindo padrão dos outros blocos da home.
- Sem mudanças de rota, dados, SEO ou backend.
