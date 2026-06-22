Vamos com **envio direto**, sem precisar configurar DNS do seu domínio agora. O e-mail será enviado automaticamente para `atendimento@buygroup.com.br` toda vez que alguém preencher o formulário.

### Como vai funcionar
- O remetente exibido será um endereço genérico de envio (ex.: `Buy Group Site <onboarding@resend.dev>`), pois o domínio próprio ainda não está verificado.
- O campo **Responder para (reply-to)** será o e-mail de quem preencheu o formulário, então ao clicar em "Responder" no Gmail/Outlook, vai direto para o contato.
- Os dados também continuam sendo salvos no banco (como já fazem hoje), garantindo que nada se perca.
- Quando quiser, depois é só configurar o domínio próprio para o remetente passar a ser `contato@buygroup.com.br`.

### O que precisa de você
Vou usar o **Resend** para o envio. Você precisa:
1. Criar uma conta gratuita em https://resend.com (plano free envia até 3.000 e-mails/mês).
2. Gerar uma API Key em **API Keys → Create API Key**.
3. Me informar quando estiver pronto — vou pedir a chave de forma segura via o cofre de secrets da plataforma (`RESEND_API_KEY`), ela nunca fica exposta no código.

### Plano técnico
1. **Conectar Resend** via secret `RESEND_API_KEY`.
2. **Criar server function** em `src/lib/contact.functions.ts`:
   - Valida payload com Zod (mesmos campos do formulário).
   - Insere em `contact_submissions` (mantém o registro no banco).
   - Envia e-mail HTML para `atendimento@buygroup.com.br` com todos os campos (nome, empresa, e-mail, telefone, interesse, volume, compradores, desafio, mensagem).
   - Assunto: `Novo contato site — {empresa ou nome}`.
   - Reply-To: e-mail do contato.
3. **Atualizar `src/routes/contato.tsx`** para chamar a server function via `useServerFn` em vez do `supabase.from(...).insert(...)` direto. Mantém os toasts e o estado `sent`.
4. Aplicar o mesmo fluxo no formulário de cursos (`course_signups`), já que você mencionou "os formulários" no plural — confirme se inclui esse também.

Posso seguir assim?
