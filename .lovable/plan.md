I will update the About page (sobre) to display the slogan "Mais que comprar. É comprar bem." below the existing caption "Consultoria em compras e negociação" using the same elegant, uppercase sans-serif styling with wide letter spacing.

### Proposed Changes

1. **Update `src/components/site/SiteLayout.tsx`**:
   - Extend the `Identity` type for the `lockup` kind to accept an optional `subCaption?: string` property.
   - Pass `subCaption` down to the `<FullLockup />` component inside `PageHero`.

2. **Update `src/components/site/hero-identities/FullLockup.tsx`**:
   - Add the `subCaption` prop.
   - If present, render the `subCaption` below the existing `caption` with the same uppercase, tracking-widest, premium styling.

3. **Update `src/routes/sobre.tsx`**:
   - Pass `subCaption: "Mais que comprar. É comprar bem."` in the `identity` prop of `PageHero`.

### Technical Details

The new text will share the exact same style class:
`animate-fade-up text-[10px] uppercase tracking-[0.32em] text-white/55`
We will set an appropriate `animationDelay` (e.g. `animate-delay-500`) on the subCaption so that it animates smoothly right after the main caption, maintaining the premium, polished feel of the site.