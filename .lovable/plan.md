Bora testar o fluxo de envio dos formulários. Vou rodar um teste automatizado que simula o preenchimento real dos formulários no preview.

### Passos do teste
1. **Formulário de contato** (`/contato#form`):
   - Abrir a página com Playwright.
   - Preencher os campos obrigatórios (Nome, Empresa, E-mail) + alguns opcionais (Telefone, Interesse, Mensagem).
   - Submeter o formulário.
   - Verificar que aparece a tela de confirmação ("Recebido. Obrigado!").
   - Capturar screenshots antes/depois.
2. **Formulário de cursos** (`/cursos#solicitar`):
   - Preencher os obrigatórios (Nome, Empresa, Cargo, E-mail, Telefone) + Curso de interesse.
   - Submeter e verificar a tela de sucesso.
3. **Verificar persistência no banco:** consultar as tabelas `contact_submissions` e `course_signups` para confirmar que o registro de teste foi gravado.
4. **Verificar envio do e-mail:** checar os logs da server function por erros do Resend e, se possível, confirmar com você se o e-mail chegou em `atendimento@buygroup.com.br`.

### Observações
- O e-mail vai chegar com remetente `Buy Group Site <onboarding@resend.dev>` (genérico do Resend), com **reply-to** apontando para o e-mail do remetente do formulário.
- Vou usar e-mail de teste tipo `teste-lovable@example.com` para você identificar e ignorar facilmente.

Posso prosseguir?
