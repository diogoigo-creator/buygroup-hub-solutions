# Plano — BPO de Compras Buy Group

## 1. Reorganizar a navegação institucional
- Atualizar o menu desktop e mobile para: **Início, Redução de Custos, BPO de Compras, Serviços, Cases e Executive Briefing**.
- Manter **Executive Briefing** como CTA destacado apontando para `/contato`.
- Remover **Cursos** do menu principal, preservando a rota `/cursos` e seu acesso pelo rodapé.
- Manter **Sobre** acessível pelo rodapé, sem ocupar o menu principal.
- Exibir **Cases** como item futuro, sem criar rota ou direcionamento enganoso nesta etapa; aplicar estado não interativo com indicação discreta de “em breve”.
- Ajustar densidade, espaçamento e comportamento responsivo para acomodar a nova hierarquia sem comprometer o visual premium.

## 2. Criar a página `/bpo-de-compras`
- Criar uma rota completa, responsiva e com metadados próprios de SEO para BPO de Compras.
- Construir a hero com:
  - título, subtítulo e microcopy fornecidos;
  - CTA principal para `/contato`, levando o contexto de interesse em BPO;
  - CTA secundário para navegação interna até “Modelos de atuação”;
  - linguagem visual navy/dourado, tipografia editorial e identidade gráfica já usadas pela Buy Group.
- Evitar qualquer associação com terceirização barata ou mera alocação de profissionais; apresentar a oferta como **célula externa de compras**, extensão estratégica e orientada a resultado financeiro.

## 3. Estruturar a narrativa comercial da página BPO
Implementar as seções solicitadas na sequência:
1. **Quando o BPO de Compras faz sentido** — contexto executivo e oito sinais operacionais.
2. **O que podemos operar pelo cliente** — oito frentes de serviço em uma grade clara e escaneável.
3. **BPO com mentalidade de performance** — bloco editorial de diferenciação, com destaque para margem e saving.
4. **Modelos de atuação** — BPO Operacional, Squad Estratégico e Compras por Projeto/CAPEX.
5. **Modelos comerciais flexíveis** — fee mensal, fee + success fee e projeto fechado.
6. **Para quem é indicado** — perfil de empresa e situações de maior aderência.
7. **BPO tradicional vs. BPO Buy Group** — comparação semântica e responsiva, legível também em telas pequenas.
8. **CTA executivo final** — mensagem, botão e microcopy exatamente alinhados ao briefing.

## 4. Atualizar a página Serviços
- Substituir **Gestão de Compras** por **Outsourcing e BPO de Compras**.
- Aplicar o novo texto e os seis bullets fornecidos.
- Adicionar o botão **Conhecer BPO de Compras**, apontando para `/bpo-de-compras`, sem alterar o restante do portfólio.
- Adaptar o card para comportar o CTA sem quebrar a consistência visual da grade.

## 5. Atualizar o formulário de contato
- Substituir as opções de “Interesse principal” pela nova lista estratégica, incluindo BPO, performance, CAPEX, diagnóstico e educação executiva.
- Adicionar os campos:
  - volume anual aproximado de compras;
  - quantidade aproximada de compradores internos;
  - principal desafio atual em compras.
- Quando o contato vier da página BPO, pré-selecionar **BPO de Compras / Outsourcing** por parâmetro de busca, mantendo o formulário utilizável em acessos diretos.
- Preservar a estrutura atual de envio local e a linguagem de confidencialidade, sem adicionar backend não solicitado.

## 6. Ajustar rodapé e acessos secundários
- Adicionar **BPO de Compras** à navegação do rodapé.
- Manter **Cursos para empresas** no rodapé como acesso secundário.
- Preservar Sobre, Redução de Custos, Serviços e Contato.

## 7. Validação
- Verificar a nova rota, links, âncoras e pré-seleção do formulário.
- Validar menu, hero, grids, tabela comparativa e formulário em desktop e mobile.
- Confirmar hierarquia de títulos, metadados, contraste, foco de teclado e ausência de overflow.

## Direção técnica
- Reutilizar `SiteLayout`, componentes de botão, tokens semânticos e padrões já existentes.
- Criar a rota antes de adicionar links tipados para ela.
- Usar dados estruturados em arrays para cards e comparações, mantendo o arquivo organizado.
- Não criar banco de dados, autenticação ou nova lógica de envio nesta etapa.