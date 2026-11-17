import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components';
import type { TemplateEntry } from './registry';

interface Props {
  title?: string;
  subject?: string;
  subtitle?: string;
  rows?: Array<[string, string | null | undefined]>;
}

function FormNotification({ title = 'Novo contato recebido', subtitle = '', rows = [] }: Props) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>{title} — {subtitle}</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', margin: 0 }}>
        <Container style={{ maxWidth: '640px', padding: '24px 28px' }}>
          <Section style={{ backgroundColor: '#0a1f3d', padding: '24px', color: '#ffffff' }}>
            <Text>Buy Group · Site</Text>
            <Heading>{title}</Heading>
            <Text>{subtitle}</Text>
          </Section>
          {rows.filter(([, value]) => value && String(value).trim()).map(([label, value]) => (
            <Section key={label} style={{ borderBottom: '1px solid #e5e7eb', padding: '8px 0' }}>
              <Text style={{ color: '#475569', margin: '4px 0', fontSize: '13px' }}>{label}</Text>
              <Text style={{ color: '#0f172a', margin: '4px 0', whiteSpace: 'pre-wrap' }}>{value}</Text>
            </Section>
          ))}
          <Text style={{ color: '#64748b', fontSize: '12px' }}>
            Responda este e-mail para entrar em contato direto com a pessoa que preencheu o formulário.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: FormNotification,
  subject: (data) => data.subject || 'Novo contato site — Buy Group',
  displayName: 'Notificação de formulário',
  to: 'atendimento@buygroup.com.br',
  previewData: {
    title: 'Novo contato recebido',
    subtitle: 'Exemplo de contato',
    subject: 'Novo contato site — Empresa exemplo',
    rows: [['Nome', 'Contato exemplo'], ['Empresa', 'Empresa exemplo']],
  },
} satisfies TemplateEntry;