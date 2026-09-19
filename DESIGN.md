# DESIGN.md — Atana Janitorial Services

## Brand
Professional residential & commercial cleaning company serving Canada. Trustworthy, hygienic, efficient — not corporate-cold, not budget-sloppy.

## Palette
- `--brand-primary`: `#0E7C7B` (deep teal — clean, trustworthy, distinct from generic blue-SaaS)
- `--brand-primary-dark`: `#095857`
- `--brand-accent`: `#F2A93B` (warm amber — CTAs, highlights)
- `--brand-ink`: `#0B1B1E` (near-black text)
- `--brand-muted`: `#5B6B6A` (secondary text)
- `--brand-surface`: `#F6F9F8` (section backgrounds)
- `--brand-surface-alt`: `#FFFFFF`
- `--brand-border`: `#E1E9E8`

No purple/blue gradient hero. No stock-photo-of-diverse-team-pointing-at-laptop clichés.

## Typography
- Font: Inter (via `next/font/google`), weights 400/500/600/700/800.
- Headlines: tight tracking, 700-800 weight.
- Body: 400-500 weight, 1.6 line-height.

## Motion (Hero)
- On load: fade-in + scale from 1.04 → 1.0 over 900ms, ease-out. No bounce.
- Continuous: very slow (24s) Ken Burns pan (scale 1.0 → 1.06 → 1.0), respects `prefers-reduced-motion`.
- Implemented with plain CSS `@keyframes` (no animation library) to keep the build dependency-free for the live demo.

## Imagery
Real photos come from the client's Drive folder and are dropped into `public/images/atana/` with fixed filenames (see `src/shared/components/SmartImage.tsx`). Until a file exists, the component shows a branded placeholder (teal gradient + filename hint) instead of a broken image icon.

## Tone of copy
English (Canada). Confident, specific, no empty superlatives ("world-class", "unmatched") — instead concrete facts (years of experience, guarantee terms, service area).
