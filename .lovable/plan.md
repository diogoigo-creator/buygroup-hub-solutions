O teste anterior travou porque o response handler não capturou a chamada da server function (URL diferente do esperado). Vamos por uma rota mais direta:

### Teste de envio simplificado
1. **Chamar a server function `submitContact` diretamente via HTTP** (`curl` no preview rodando em `localhost:8080`), com um payload de teste:
   - nome: "Teste Lovable"
   - empresa: "Lovable QA"
   - email: `teste-lovable@example.com`
   - + alguns campos opcionais
2. Confirmar resposta `{ ok: true, emailSent: true }`.
3. **Verificar no banco** (`contact_submissions`) que o registro de teste foi gravado.
4. **Verificar logs do servidor** para confirmar que o Resend respondeu 200 (ou capturar o erro real se houver).
5. Repetir o mesmo para `submitCourseSignup` (`course_signups`).
6. Te avisar para checar a caixa de `atendimento@buygroup.com.br` — o e-mail deve chegar de `Buy Group Site <onboarding@resend.dev>` com reply-to do remetente.

Posso executar?
