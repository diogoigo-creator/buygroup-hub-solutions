I will adjust the layout of the methodology steps and index cards in `src/routes/metodologia.tsx` to prevent text from being truncated or cut off. Specifically, I will:

1. **Remove `truncate`** from the phase title in the Mini Index section (around line 203) and replace it with standard wrapping classes to ensure titles like "Mapeamento de Oportunidades" and "Condução da Negociação" display fully on all viewport sizes.
2. **Review alignment** of these cards so that when text wraps, the icon and text remain balanced and visually polished.

Let's implement this fix to ensure all text is fully visible without any AI-like truncation ellipses.