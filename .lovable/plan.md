I will adjust the services page hero visual structure to show the full, uncropped Buy Group logo instead of the overlapping slogan text.

### Proposed Changes

1. **Modify `src/routes/servicos.tsx`**:
   - Change the `identity` prop on the `PageHero` component from:
     ```tsx
     identity={{
       kind: "slogan",
       lines: [[{ text: "É comprar" }, { text: " bem.", accent: true }]],
     }}
     ```
     to:
     ```tsx
     identity={{
       kind: "lockup",
     }}
     ```
   - This switches the hero rendering mode to show the complete `buy-group-logo-white.png` logo cleanly on the right side on desktop (and integrated on mobile), fully preserving original branding and sizing.

No other components are affected, ensuring a safe, targeted refinement.