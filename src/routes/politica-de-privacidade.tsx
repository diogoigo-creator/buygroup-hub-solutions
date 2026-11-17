import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SITE_URL, SOCIAL_META, breadcrumbJsonLd } from "@/lib/seo";

const title = "Política de Privacidade | Buy Group";
const description =
  "Como a Buy Group coleta, usa e protege dados pessoais recebidos pelo site, e como exercer seus direitos previstos na LGPD.";
const url = `${SITE_URL}/politica-de-privacidade`;

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...SOCIAL_META,
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Política de Privacidade", path: "/politica-de-privacidade" },
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PolicySection({ title: heading, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-navy">{heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Buy Group" title="Política de Privacidade" />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-0 lg:py-20">
        <p className="text-sm text-muted-foreground">Última atualização: 17 de novembro de 2026.</p>

        <PolicySection title="1. Quem somos">
          <p>
            Esta política explica como a Buy Group Consultoria ("Buy Group") trata dados pessoais recebidos pelo site buygroup.com.br. A Buy Group, inscrita no CNPJ sob o nº 38.478.032/0001-70, é a controladora desses dados. Endereço: R. Rio Grande do Norte, 1436, Sala 813, Savassi, Belo Horizonte, MG, CEP 30130-138. Contato para assuntos de privacidade: atendimento@buygroup.com.br.
          </p>
        </PolicySection>

        <PolicySection title="2. Dados que coletamos">
          <ul className="list-disc space-y-3 pl-6">
            <li>Formulário de contato: nome, empresa, e-mail corporativo, telefone (opcional), interesse principal, volume aproximado de compras, quantidade de compradores, principal desafio e mensagem.</li>
            <li>Formulário da Academy: nome, empresa, cargo, e-mail corporativo, telefone ou WhatsApp, curso de interesse, tamanho da equipe, formato preferido e mensagem.</li>
            <li>WhatsApp e e-mail: quando você nos procura por esses canais, recebemos seu número ou endereço e o conteúdo das mensagens.</li>
            <li>Navegação: somente com o seu consentimento, coletamos dados estatísticos de uso do site, como páginas visitadas, origem do acesso e cliques nos botões de contato, por meio do Google Tag Manager e do Google Analytics. Esses registros não incluem nome, e-mail ou telefone.</li>
          </ul>
          <p>
            A Lovable também coleta dados de navegação para nós, sem cookies, sem armazenar nada no seu dispositivo, sem conservar endereços IP e sem identificar você. Esses registros incluem páginas visitadas, origem do acesso, país, navegador, sistema operacional, tipo de dispositivo, tempo de permanência, velocidade de carregamento das páginas, erros e cliques. Os dados detalhados ficam guardados por 90 dias e os resumos diários por um ano.
          </p>
          <p>
            A Lovable coleta esses dados para nós. A <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-navy underline underline-offset-4">política de privacidade da Lovable</a> explica como ela os trata.
          </p>
        </PolicySection>

        <PolicySection title="3. Para que usamos e com qual base legal">
          <ul className="list-disc space-y-3 pl-6">
            <li>Responder ao seu contato, entender a sua necessidade e preparar propostas: procedimentos preliminares a contrato, a seu pedido (LGPD, art. 7º, V), e legítimo interesse (art. 7º, IX).</li>
            <li>Medir o uso do site e melhorar o conteúdo: consentimento (art. 7º, I), dado no aviso de cookies e revogável a qualquer momento.</li>
            <li>Cumprir obrigações legais ou regulatórias: art. 7º, II.</li>
          </ul>
          <p>Não usamos seus dados para decisões automatizadas e não vendemos dados pessoais.</p>
        </PolicySection>

        <PolicySection title="4. Com quem compartilhamos">
          <p>
            Compartilhamos dados apenas com fornecedores que operam o site em nosso nome: hospedagem e banco de dados, envio de e-mails, e-mail corporativo e mensuração de audiência (Google). Esses fornecedores só podem usar os dados para prestar o serviço contratado. Alguns deles podem tratar dados fora do Brasil; nesses casos, adotamos as garantias previstas na LGPD (arts. 33 a 36). Não compartilhamos seus dados com fornecedores dos nossos clientes.
          </p>
          <p>
            O Google Tag Manager carrega as ferramentas de mensuração configuradas no site, e o Google Analytics pode usar cookies de medição depois da sua escolha. Os dados de audiência são recebidos pelo Google. A hospedagem, o banco de dados e o envio de e-mails são operados pela Lovable; as mensagens enviadas pelos formulários também chegam à nossa caixa de e-mail corporativo.
          </p>
        </PolicySection>

        <PolicySection title="5. Por quanto tempo guardamos">
          <p>
            Guardamos os dados de contato enquanto durar o relacionamento comercial e por até 24 meses após o último contato, salvo quando a lei exigir prazo maior ou você pedir a exclusão antes.
          </p>
        </PolicySection>

        <PolicySection title="6. Cookies">
          <p>
            Usamos armazenamento essencial para o funcionamento do site e para lembrar a sua escolha sobre cookies. Cookies de medição só são ativados se você aceitar. Você pode mudar a sua escolha a qualquer momento em "Preferências de cookies", no rodapé.
          </p>
          <p>
            Os cliques são registrados somente depois que você aceita a análise. Se o navegador enviar Global Privacy Control, os cliques não são registrados, mesmo depois de uma aceitação. A escolha fica salva no seu navegador por até 12 meses.
          </p>
          <p>
            As páginas visitadas, o tempo de permanência, a velocidade de carregamento e os erros são registrados pela Lovable para todo visitante, sem cookies e sem identificar ninguém.
          </p>
        </PolicySection>

        <PolicySection title="7. Seus direitos">
          <p>
            Você pode pedir confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre compartilhamento, revogação do consentimento e oposição ao tratamento (LGPD, art. 18). Envie o pedido para atendimento@buygroup.com.br. Respondemos em até 72 horas. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </PolicySection>

        <PolicySection title="8. Segurança">
          <p>
            Os dados trafegam com criptografia e ficam em ambiente com acesso restrito às pessoas que precisam deles para atender você.
          </p>
        </PolicySection>

        <PolicySection title="9. Crianças e adolescentes">
          <p>
            O site é voltado a empresas e não se destina a menores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes.
          </p>
        </PolicySection>

        <PolicySection title="10. Alterações">
          <p>Podemos atualizar esta política. A data no topo indica a versão em vigor.</p>
        </PolicySection>
      </div>
    </SiteLayout>
  );
}
