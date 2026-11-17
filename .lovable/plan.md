# Fazer os e-mails dos formulários chegarem em atendimento@buygroup.com.br

## Situação atual
- O site já está pronto: os formulários de Contato e da Academy enviam para atendimento@buygroup.com.br, com "responder para" o e-mail de quem preencheu. Os pedidos ficam salvos mesmo quando o e-mail falha.
- O que falta é a verificação do remetente notify.buygroup.com.br. O DNS do domínio está na Hostinger, que não aceita os registros NS de subdomínio exigidos (ns5.lovable.cloud e ns6.lovable.cloud).
- Nenhuma mudança no site resolve isso. A ação precisa ser feita no domínio.

## Escolha um caminho (feito pelo dono do domínio)
**Opção A: mover só o DNS para a Cloudflare (gratuito, recomendado)**
1. Crie uma conta na Cloudflare e adicione buygroup.com.br. Ela importa os registros atuais.
2. Confira se continuam lá: o A do site (185.158.133.1), o www, os MX da Hostinger (mx1/mx2) e o SPF. Assim, o site e a caixa atendimento@ continuam funcionando.
3. Adicione 2 registros NS com nome `notify`: ns5.lovable.cloud e ns6.lovable.cloud.
4. No painel do domínio, troque os nameservers principais pelos 2 informados pela Cloudflare. Se o domínio for .com.br, a troca é feita no Registro.br.
5. Volte ao Lovable em Mais → Emails e clique em "Check again". A propagação pode levar até 72 h.

**Opção B: transferir o domínio para o Lovable**
- Use Configurações do workspace → Workspace domains → Transfer in. Os registros do e-mail são criados automaticamente, mas os registros MX/SPF da Hostinger precisam ser recriados.

## Depois da verificação (eu faço)
- Envio um teste pelo formulário de Contato e confirmo, no registro de envios, que o e-mail foi aceito para atendimento@buygroup.com.br.
- Peço que você confirme o recebimento na caixa de entrada e no spam.
- Não há alteração de código prevista.
