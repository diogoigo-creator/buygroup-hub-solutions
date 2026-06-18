## Summary of Changes
We will update the banner (hero section) of the About page (`src/routes/sobre.tsx`) to completely remove the old phrase "Consultoria em compras e negociação" and replace it with the new slogan: "Mais que comprar. É comprar bem.", matching the premium typography and style of the main caption.

## Proposed Steps
1. **Update `src/routes/sobre.tsx`**:
   - Change the `identity` property in the `PageHero` component from:
     ```tsx
     identity={{ kind: "lockup", caption: "Consultoria em compras e negociação", subCaption: "Mais que comprar. É comprar bem." }}
     ```
     to:
     ```tsx
     identity={{ kind: "lockup", caption: "Mais que comprar. É comprar bem." }}
     ```
   - This ensures the old caption is removed, and the new slogan takes its place with the exact same premium font family, letter spacing, and subtle fade-up animation.

## Technical Details
No other modifications are needed because `FullLockup` and `SiteLayout` are already built to dynamically render either/both/none of the caption and sub-caption. By passing only the new slogan as the `caption`, it automatically displays directly underneath the logo banner with correct alignment.