import { sendTemplateEmail } from './email-templates/send-email';

export async function sendFormNotification(params: {
  submissionId: string;
  subject: string;
  title: string;
  subtitle: string;
  rows: Array<[string, string | null | undefined]>;
  replyTo: string;
}) {
  try {
    const result = await sendTemplateEmail('form-notification', 'atendimento@buygroup.com.br', {
      idempotencyKey: `form-notification-${params.submissionId}`,
      replyTo: params.replyTo,
      templateData: {
        subject: params.subject,
        title: params.title,
        subtitle: params.subtitle,
        rows: params.rows,
      },
    });
    if (!result.sent) {
      console.error('[email] Form notification not sent', result.reason);
      return { ok: false as const, error: result.reason };
    }
    return { ok: true as const };
  } catch (error) {
    const reason = error && typeof error === 'object' && 'code' in error
      ? String(error.code)
      : error instanceof Error ? error.name : 'UnknownError';
    console.error('[email] Form notification failed', reason);
    return { ok: false as const, error: reason };
  }
}

