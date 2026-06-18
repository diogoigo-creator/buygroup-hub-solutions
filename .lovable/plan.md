## Correções restantes

Dos 6 itens enviados, 4 já estavam aplicados no código. Faltam apenas 2 ajustes pontuais.

### 1. Remover botão WhatsApp órfão em Revisão Pré-Fechamento

**Arquivo:** `src/routes/revisao-pre-fechamento.tsx` (linhas ~458–471)

Existe um botão "Falar pelo WhatsApp" apontando para `https://wa.me/` (link vazio). Como decidimos não exibir WhatsApp em nenhum lugar do site, esse botão inteiro será removido. O CTA "Falar com especialista" ao lado é mantido.

Também removerei a importação não utilizada de `MessageSquare` no topo do arquivo, se ela só era usada nesse botão.

### 2. Atualizar meta description da página /servicos

**Arquivo:** `src/routes/servicos.tsx` (linha ~23)

Substituir a `description` atual por exatamente:

> "Programas estruturados de redução de custos em compras indiretas, BPO, inteligência de gastos e governança financeira para grandes empresas."

Esse texto alimenta as tags `<meta name="description">`, `twitter:description` e o `description` do JSON-LD via a constante `description` já existente — uma única alteração propaga para todas.

### Itens já em conformidade (não serão tocados)

- Nenhuma ocorrência de `+55 11 4000-0000`, `wa.me/5511940000000`, "São Paulo", "By invitation", "Currently accepting", "Investment-grade", "Procurement Transformation Firm" ou "UNSPSC" no código.
- Header (`src/components/site/Header.tsx`) já idêntico em todas as páginas com a ordem e o CTA pedidos.
- Endereço de Belo Horizonte/Savassi/CEP 30130-138 já é o único endereço no site.

Nenhuma outra alteração de texto, layout, cor ou estrutura será feita.