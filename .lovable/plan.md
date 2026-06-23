# Trocar remetente para o domínio buygroup.com.br

Hoje os e-mails dos formulários (Contato e Academy) são enviados via Resend com remetente `onboarding@resend.dev` (sandbox). Isso funciona, mas prejudica entregabilidade e não usa sua marca. Vamos trocar para um endereço como `no-reply@notify.buygroup.com.br`, mantendo `atendimento@buygroup.com.br` como destinatário e o e-mail do lead como `reply-to`.

## Caminho recomendado: Lovable Emails (nativo)

Infraestrutura de envio gerida pela Lovable, com fila, retries, supressão de bounces e painel em Cloud → Emails. Não precisa de Resend.

### Passos

1. **Configurar domínio de envio** — abrir o diálogo de setup e delegar um subdomínio (sugestão: `notify.buygroup.com.br`) via registros NS no seu provedor de DNS. A Lovable cuida de SPF/DKIM/MX automaticamente.
2. **Provisionar infraestrutura de e-mail** — cria filas, tabelas de log/supressão e o processador da fila no backend.
3. **Criar template "App email" de notificação interna** — um template React Email com a identidade Buy Group (navy/green, tipografia do site) que renderiza os campos enviados em formato de tabela, igual ao HTML atual.
4. **Substituir o envio nos formulários** — `submitContact` e `submitCourseSignup` em `src/lib/contact.functions.ts` deixam de chamar a API do Resend e passam a enfileirar um envio Lovable Emails, com:
   - destinatário: `atendimento@buygroup.com.br`
   - remetente: `Buy Group Site <no-reply@notify.buygroup.com.br>`
   - reply-to: e-mail do lead
   - `idempotencyKey` derivado do ID da submissão para evitar duplicidade em retries
5. **Manter persistência no banco** — `contact_submissions` e `course_signups` continuam recebendo o registro antes do envio (sem alteração).
6. **Limpeza** — depois de validado, o secret `RESEND_API_KEY` pode ser removido (faço isso só após sua confirmação).

### O que você precisa fazer

- Concluir o diálogo de setup do domínio (vou abrir aqui no chat).
- Adicionar 2 registros NS no painel do seu provedor de DNS apontando para `ns3.lovable.cloud` / `ns4.lovable.cloud` no subdomínio escolhido.
- Propagação de DNS pode levar até algumas horas. Os envios começam automaticamente assim que o domínio verifica.

### Observação importante

A delegação NS é feita num **subdomínio** (`notify.buygroup.com.br`). Seu site, e-mail principal `atendimento@buygroup.com.br` e qualquer outro serviço no domínio raiz continuam intactos.

## Alternativa: continuar no Resend

Se preferir manter o Resend (você já tem `RESEND_API_KEY` configurada), o caminho é:
1. Verificar `buygroup.com.br` (ou um subdomínio) no painel do Resend, adicionando os registros SPF/DKIM/DMARC que ele indicar.
2. Trocar a constante `FROM_EMAIL` em `src/lib/contact.functions.ts` para `Buy Group <no-reply@buygroup.com.br>`.

Mais simples no código, mas exige que você gerencie o domínio no Resend e perde o painel/fila/supressão da Lovable.

## Decisão necessária

Me confirme qual caminho seguir: **Lovable Emails (recomendado)** ou **manter Resend**. Se for Lovable Emails, também me diga se pode usar `notify.buygroup.com.br` como subdomínio de envio ou prefere outro nome.
