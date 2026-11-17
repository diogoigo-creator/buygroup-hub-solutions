# Architecture rules

- Keep shared contact link data in a browser-safe module so every contact entry uses the same destination.
- Keep best-effort form email delivery in a server-only helper and invoke it after saving the submission; transport failures must not invalidate saved leads.
