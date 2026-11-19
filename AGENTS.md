# Architecture rules

- Do not mount viewport-positioned decorative watermarks in the shared layout or home case study; this prevents collisions across screen sizes.

- Compose social-sharing artwork from the official vector logo without generative redrawing, preserving brand geometry and legibility at thumbnail size.

- Derive browser icons from the existing official brand mark and declare a color-scheme-adaptive SVG plus PNG/ICO fallbacks in the root head; keep page titles in leaf heads so branding remains consistent and legible across browser themes without changing visible content.

- Keep GTM and direct GA4 initialization hostname-gated in the root head after consent defaults, with one GA4 config and no manual page views; forward allowlisted events through independently best-effort dataLayer and gtag transports to preserve flows and avoid duplicate views.
- Keep global denied consent defaults before GTM and require a valid explicit per-purpose grant in the shared browser-safe consent module, including after cross-tab deletion; regional or untimestamped legacy acceptance must not grant permission. The cookie notice owns choices and signals its visibility to the mobile contact bar.

- Keep shared contact link data in a browser-safe module so every contact entry uses the same destination.
- Keep local-business structured data in a browser-safe shared module so the root head and tests use the same official record.
- Apply the owner's published Lovable hostname policy in a shared helper, with server-rendered noindex and a root-head client redirect, so crawlers and browsers receive consistent treatment without changing authorization.
- Keep mobile contact-bar rendering in SiteLayout and its visibility rules in a browser-safe helper with tests, so route exclusions and viewport thresholds stay consistent.
- Keep best-effort form email delivery in a server-only helper and invoke it after saving the submission; transport failures must not invalidate saved leads.
- Send form notifications through the managed email template helper with a fixed recipient and submission-based idempotency; the platform owns delivery and suppression, so do not create email queues.
