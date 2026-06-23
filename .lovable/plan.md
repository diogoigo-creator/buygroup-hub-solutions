## Objetivo
Trocar o remetente dos e-mails do site (formulário de Contato e Academy) de `onboarding@resend.dev` para um endereço do domínio `buygroup.com.br`, usando a infraestrutura nativa de e-mails do Lovable.

## Pré-requisito (ação sua)
Antes da implementação, preciso que você configure o subdomínio de envio pelo diálogo guiado. Sugestão: `notify.buygroup.com.br`.

Você receberá registros NS (`ns3.lovable.cloud` / `ns4.lovable.cloud`) para colar no seu provedor de DNS. SPF/DKIM/MX ficam por conta do Lovable automaticamente.

```
<presentation-actions>
<presentation-open-email-setup>Configurar domínio de e-mail</presentation-open-email-setup>
</presentation-actions>
```

## O que vou implementar depois que o domínio estiver configurado

1. **Provisionar infraestrutura de e-mails** (filas, supressão, processador de envio em background).
2. **Criar template React Email "Buy Group"** com a identidade do site (navy/verde, tipografia atual), renderizando os campos enviados em tabela limpa e profissional. Um template para Contato, outro para Academy.
3. **Substituir o envio via Resend** em `src/lib/contact.functions.ts`:
   - `submitContact` e `submitCourseSignup` deixam de chamar a API da Resend e passam a enfileirar e-mail pela infraestrutura do Lovable.
   - Destinatário: `atendimento@buygroup.com.br` (inalterado).
   - Remetente: `Buy Group Site <no-reply@notify.buygroup.com.br>`.
   - `reply-to`: e-mail do lead (resposta direta continua funcionando).
   - `idempotencyKey` baseado no ID da submissão para evitar duplicatas em retry.
4. **Persistência inalterada** — `contact_submissions` e `course_signups` continuam recebendo os registros normalmente.
5. **Remover `RESEND_API_KEY`** dos secrets após validar que tudo está chegando em `atendimento@buygroup.com.br`.

## Detalhes técnicos
- Templates ficam em `src/lib/email-templates/` (`.tsx` React Email) e são registrados em `registry.ts`.
- O envio passa a usar `/lovable/email/transactional/send` via helper interno; nada muda no frontend dos formulários.
- Enquanto o DNS propaga, os e-mails ficam enfileirados e começam a sair automaticamente assim que a verificação concluir (monitorável em Cloud → Emails).

Confirma o subdomínio sugerido `notify.buygroup.com.br` e abre o diálogo para começar?
