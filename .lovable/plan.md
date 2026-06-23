### Passo a passo para configurar o DNS:

1. **Acesse o seu provedor de DNS:** Acesse o painel onde você gerencia o domínio `buygroup.com.br` (ex: Registro.br, Cloudflare, GoDaddy, HostGator, etc.).
2. **Crie dois novos registros do tipo NS:**
   - **Registro 1:**
     - **Tipo:** `NS`
     - **Nome/Host:** `notify` (ou `notify.buygroup.com.br`, dependendo do painel)
     - **Valor/Servidor de nomes:** `ns3.lovable.cloud`
   - **Registro 2:**
     - **Tipo:** `NS`
     - **Nome/Host:** `notify` (ou `notify.buygroup.com.br`)
     - **Valor/Servidor de nomes:** `ns4.lovable.cloud`
3. **Salve as alterações** e aguarde a propagação (geralmente leva alguns minutos).

---

### Plano de Implementação (após a configuração do DNS):

1. **Ativar infraestrutura de e-mail:** Assim que o DNS estiver configurado, ativaremos as filas e tabelas de e-mail na nuvem.
2. **Substituir o Resend no código:** Migrar as funções em `src/lib/contact.functions.ts` de Resend para o serviço nativo de e-mails, enviando a partir de `no-reply@notify.buygroup.com.br` para `atendimento@buygroup.com.br`, mantendo o e-mail do lead no `reply-to` para que você possa respondê-los diretamente.
3. **Testar os fluxos:** Validar que os formulários continuam registrando os dados no banco de dados e enviando os e-mails com sucesso.