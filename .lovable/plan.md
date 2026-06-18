## Verificação: todos os itens já estão aplicados

Investigando `src/routes/contato.tsx`, `src/routes/reducao-de-custos.tsx` e `src/components/site/Header.tsx`, confirmei que as 6 correções solicitadas **já estão no código**. Nada precisa ser alterado.

| # | Item | Status |
|---|---|---|
| 1 | Telefone/WhatsApp no /contato (aside + rodapé) | ✅ Já removidos. Aside mostra apenas e-mail + endereço; rodapé (Footer) não contém telefone nem `wa.me`. |
| 2 | Cidade no /contato | ✅ Já é "Savassi, Belo Horizonte — MG" no aside (linha 223) e no Footer (linha 83). Não há "São Paulo" no site. |
| 3 | "Currently accepting 3 new engagements…" | ✅ Não existe no /contato. |
| 4 | Números "R$ 2,1Bi+" / "200+ engagements" | ✅ Não existem no /contato. A página não tem bloco de credenciais com esses números. |
| 5 | `wa.me/5511940000000` em /reducao-de-custos | ✅ Não existe na página. |
| 6 | Menu Sobre / Serviços / Metodologia / Onde Atuamos / Academy + CTA "Falar com especialista" | ✅ Já é o conteúdo do `Header.tsx` global, usado por todas as páginas via `SiteLayout`. |

### Observação sobre o e-mail
O prompt menciona `contato@buygroup.com.br`, mas o site usa `atendimento@buygroup.com.br` (consistente em todas as páginas). Como você não pediu para trocar — apenas para "manter" — vou manter `atendimento@`. Se quiser padronizar para `contato@`, me confirme e altero em todo o site (contato, footer, JSON-LD).

### Próximo passo
Nada a alterar. Se quiser que eu force alguma mudança mesmo assim (ex.: trocar e-mail para `contato@`), me diga qual.