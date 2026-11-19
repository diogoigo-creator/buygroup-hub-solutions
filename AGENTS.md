# Architecture rules

- Compose social-sharing artwork from the official vector logo without generative redrawing, preserving brand geometry and legibility at thumbnail size.

- Derive browser icons from the existing official brand mark and declare them in the root head; keep page titles in leaf heads so branding remains consistent without changing visible content.

- Keep GTM and direct GA4 initialization hostname-gated in the root head after consent defaults, with one GA4 config and no manual page views; forward allowlisted events through independently best-effort dataLayer and gtag transports to preserve flows and avoid duplicate views.
- Keep global denied consent defaults before GTM and require a valid explicit per-purpose grant in the shared browser-safe consent module, including after cross-tab deletion; regional or untimestamped legacy acceptance must not grant permission. The cookie notice owns choices and signals its visibility to the mobile contact bar.

- Keep shared contact link data in a browser-safe module so every contact entry uses the same destination.
- Keep mobile contact-bar rendering in SiteLayout and its visibility rules in a browser-safe helper with tests, so route exclusions and viewport thresholds stay consistent.
- Keep best-effort form email delivery in a server-only helper and invoke it after saving the submission; transport failures must not invalidate saved leads.
- Send form notifications through the managed email template helper with a fixed recipient and submission-based idempotency; the platform owns delivery and suppression, so do not create email queues.
