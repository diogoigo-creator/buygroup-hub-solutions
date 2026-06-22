# Migrar para e-mail nativo do Lovable

Hoje os formulários (Contato e Cursos) salvam no banco e tentam enviar pela Resend, mas a conta Resend só envia para o e-mail do dono enquanto o domínio não estiver verificado. Vamos trocar pelo sistema de e-mail nativo do Lovable, que não exige API key da Resend e usa um subdomínio delegado de `buygroup.com.br`.

## O que será feito

1. **Configurar domínio de envio do Lovable**
   - Abrir o setup de e-mail e provisionar um subdomínio (sugestão: `notify.buygroup.com.br`).
   - Você adiciona 2 registros NS no DNS do `buygroup.com.br` (o Lovable mostra exatamente quais).
   - A partir daí o Lovable gerencia SPF/DKIM/MX automaticamente.

2. **Provisionar a infraestrutura de e-mail**
   - Criar filas, tabelas de log, supressão e o processador de fila no backend.
   - Tudo automático, sem mexer em SQL.

3. **Criar 2 templates de notificação interna** (React Email, com a identidade Buy Group — navy/green, serif nos títulos):
   - `contact-notification` — novo contato do site.
   - `course-signup-notification` — nova solicitação da Academy.

4. **Criar rotas públicas de envio** (sem exigir login, já que o site é público):
   - `/api/public/contact-submit` — valida com Zod, insere em `contact_submissions`, dispara o e-mail para `atendimento@buygroup.com.br`.
   - `/api/public/course-signup` — idem para `course_signups`.

5. **Trocar os formulários** (`src/routes/contato.tsx` e `src/routes/cursos.tsx`) para chamar as novas rotas via `fetch` em vez do `submitContact`/`submitCourseSignup` atuais.

6. **Remover dependência da Resend**
   - Apagar `src/lib/contact.functions.ts` (substituído pelas rotas acima).
   - O secret `RESEND_API_KEY` pode ser removido depois que você confirmar que está tudo funcionando.

7. **Página de unsubscribe** — o Lovable exige uma página branded de unsubscribe. Vou criar uma rota simples seguindo a identidade do site (mesmo que estes e-mails sejam só notificações internas, a infra exige).

## Detalhes técnicos

- Subdomínio sugerido: `notify.buygroup.com.br`. From visível pode ser `Buy Group Site <site@buygroup.com.br>` (root domain como display).
- Destinatário: `atendimento@buygroup.com.br` (mantém o atual).
- Reply-To: o e-mail informado no formulário, para você responder direto.
- Idempotency key: hash do payload + timestamp, para evitar duplicatas em retry.
- A fila do Lovable faz retry automático (5 tentativas, TTL 60min) e registra tudo em `email_send_log`.

## O que você precisa fazer

- Aprovar este plano.
- Quando eu pedir, acessar o DNS do `buygroup.com.br` e adicionar os 2 registros NS que vou informar.
- Aguardar a propagação DNS (geralmente minutos, até 72h no pior caso).
