## 1. Menu — renomear "Cursos" para "Academy"

`src/components/site/Header.tsx`
- Trocar `{ to: "/cursos", label: "Cursos" }` por `{ to: "/cursos", label: "Academy" }`
- Rota e arquivo `/cursos` permanecem (evita quebra de links/SEO). Apenas o rótulo muda.

`src/components/site/Footer.tsx`
- Atualizar o link de "Cursos" para "Academy" (mesmo destino `/cursos`).

`src/routes/cursos.tsx`
- Atualizar título da página/hero e meta tags: "Academy — capacitação para equipes de compras (Buy Group)".
- Trocar a expressão "Educação executiva" do eyebrow por "Buy Group Academy".

## 2. Mínimo de participantes — ajuste por nível

Pesquisa de mercado (Facio, IBEF, CR Basso, FDC, Insper in-company): programas operacionais/táticos rodam com turmas de 8 a 20; workshops e imersões executivas (C-level / diretoria) costumam aceitar turmas reduzidas de 4 a 8. Para refletir esse padrão na Buy Group Academy:

| Nível do programa | Mínimo de participantes |
|---|---|
| Iniciante / Intermediário | **8 participantes** |
| Avançado (executivo) | **4 participantes** |

Aplicação:
- Card de curso: substituir o texto fixo "A partir de 8 participantes" por valor derivado do `level` (`>= Avançado` → 4, demais → 8).
- Nota explícita abaixo da intro do catálogo: "Programas executivos (nível Avançado) a partir de 4 participantes. Demais programas, mínimo de 8."
- Formulário de solicitação (#solicitar): adicionar microcopy "Turmas a partir de 4 (executivo) ou 8 participantes, conforme o programa."

Único curso impactado pelo mínimo reduzido hoje: **Compras Estratégicas para Gestores** (Avançado). Outros podem ser promovidos a Avançado no futuro sem mudar a lógica.

## 3. Revisão de termos em inglês

Regra: manter siglas técnicas consagradas do mercado de compras (BATNA, ZOPA, TCO, RFI, RFQ, RFP, SLA, P2P, ESG, KPI). Traduzir/substituir produtos e jargões em inglês que têm equivalente claro em português.

Edições nos `topics` dos cursos:

- **IA Aplicada à Cadeia de Suprimentos**
  - "Ferramentas disponíveis hoje: ChatGPT, Copilot, Power BI com IA" → "Ferramentas de IA aplicadas a compras (assistentes generativos e painéis com IA)"
- **Compras Estratégicas para Gestores**
  - "Balanced Scorecard aplicado a compras" → "Painel estratégico de indicadores (BSC) aplicado a compras"
- **Gestão e Desenvolvimento de Fornecedores**
  - "Scorecard de avaliação de desempenho" → "Painel de avaliação de desempenho de fornecedores"
- **Cadeia de Suprimentos 4.0 — Tecnologia e Inovação**
  - "IoT aplicado à cadeia de suprimentos" → "Internet das Coisas aplicada à cadeia de suprimentos"
  - "Blockchain para rastreabilidade" → "Tecnologias de registro distribuído para rastreabilidade"

Mantidos (siglas consagradas): TCO, BATNA, ZOPA, RFI/RFQ/RFP, P2P, ESG, SLA.

## 4. Verificação

- `/` → header mostra "Academy".
- `/cursos` → hero "Buy Group Academy", nota de mínimo de participantes visível, card do curso Avançado mostrando "A partir de 4 participantes", demais "A partir de 8".
- Nenhum termo em inglês acima nos `topics`.
- Footer com "Academy" linkando para `/cursos`.
- Sem mudanças em outras rotas.
