# Architecture rules

- Keep shared contact link data in a browser-safe module so every contact entry uses the same destination.
- Keep best-effort form email delivery in a server-only helper and invoke it after saving the submission; transport failures must not invalidate saved leads.
- Send form notifications through the managed email template helper with a fixed recipient and submission-based idempotency; the platform owns delivery and suppression, so do not create email queues.
