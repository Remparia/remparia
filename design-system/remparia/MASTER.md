# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Remparia OS  
**Updated:** 2026-09-12  
**Category:** AI-native operating system for modern organizations  
**Pattern:** Dark · Intelligent · Governed · Scalable  
**Balance:** ~90% black/white · ~10% lime accent  
**Live lab:** `/fr/design-system` (noindex)  
**Canonical shell:** premium `ph-*` (`PremiumShell` + `premium-home.css`)  
**Legacy bridge:** `src/app/ds-legacy-bridge.css` (nav/footer leftovers only — do not add new page styles here)

---

## Brand direction (locked)

| Role | Hex | Token |
|------|-----|-------|
| Black | `#0A0A0A` | `--black` / `--background` |
| Graphite | `#111111` | `--graphite` / `--surface` |
| Slate | `#1A1A1A` | `--slate` / `--surface-2` |
| Steel | `#262626` | `--steel` |
| White | `#FFFFFF` | `--white` / `--text` |
| Mist | `#E6E6E6` | `--mist` |
| **Lime** | `#CCFC41` | `--lime` / `--accent` |
| Lime 80–20% | opacity scale | `--lime-80` … `--lime-20` |

### Text on surfaces

| Surface | Token |
|---------|-------|
| Dark band body | `--text` / `--text-muted` / `--text-soft` |
| Light band (`ph-section--light`) | `--text-on-light` / `--text-on-light-muted` / `--text-on-light-soft` |
| Lime CTA band | `--text-on-lime` / `--text-on-lime-muted` |

Never put `--text-soft` (white) on light or lime backgrounds.

### Semantic (UI states — not brand)

| State | Hex | Token |
|-------|-----|-------|
| Success | `#39FF14` | `--success` |
| Warning | `#FFDA00` | `--warning` |
| Error | `#FF3B30` | `--danger` |
| Info | `#3B82F6` | `--info` |

**Info blue is semantic only.** Never use blue as a brand / marketing accent.

**Anti-patterns:** no purple AI glow, no emoji icons, no heavy neon fill fields, no playful illustration, no hardcoding hex outside tokens. **No new page-specific CSS** except SIGNAL / OS / commerce already present.

---

## Page shell (canonical)

All marketing / vertical / pack pages use:

| Component | Class / file | Role |
|-----------|--------------|------|
| `PremiumPageShell` | `page--premium page--premium-inner` | Page wrapper |
| `PremiumHero` | `ph-page-hero` | Crumbs, eyebrow, title, sub, actions; optional media split |
| `PremiumSection` | `ph-section` / `ph-section--light` | One job per section |
| `PremiumCard` | `ph-agent-card` | Interactive / content cards only |
| `PremiumCtaBand` | `ph-cta-band` | Lime final CTA (replaces legacy `.cta`) |
| `AgentFicheGrid` | `agent-fiche` | Agent cards |

Source: `src/components/premium/PremiumShell.tsx`.

**Bands:** alternate dark → light → dark. Final CTA is always lime.

**Deprecated:** `PageHero`, raw `.section` / `.section--alt`, legacy `.cta` markup (`CtaBand` now wraps `PremiumCtaBand`).

SIGNAL (`page--signal`) and OS (`page--solution`) keep custom layouts but must reuse tokens, gutters (`--page-gutter`), and lime CTA contrast rules.

---

## Typography

| Role | Family | Token |
|------|--------|-------|
| Display / headings | **Inter Tight** | `--font-display` |
| Body / UI | **Inter** | `--font-ui` |
| Data / mini labels | **IBM Plex Mono** | `--font-mono` |

CSS clamps: `--type-display-1` … `--type-h4`, `--font-body`, `--font-eyebrow`, `--font-data`.

---

## Spacing (8px base)

Tokens: `--space-2` … `--space-32`. Gutters: `--page-gutter`, max `--page-max`.

---

## Components

### Buttons

| Variant | Class | Spec |
|---------|-------|------|
| Primary | `.btn-primary` | Lime fill, black text, pill (`--btn-radius: 999px`) |
| Secondary | `.btn-secondary` | Black fill, white border, pill |
| Ghost | `.btn-ghost` | Transparent, lime text, pill |
| Nav | `.nav__cta` / `.nav__hiring` | Same pill radius |
| CTA on lime | `.ph-cta-band__btn` | Black fill, lime text, pill |

### Cards

Prefer `PremiumCard` / `.ph-agent-card`. No decorative cards in heroes.

### Links

`.text-link`: lime; hover brighter.

---

## Motion

Micro: **150–250ms**, `--ease-out`. Respect `prefers-reduced-motion`.

---

## Pre-delivery checklist

- [ ] Tokens only
- [ ] Inter Tight / Inter / Plex Mono
- [ ] Lime ≤ ~10%
- [ ] Contrast via `--text-on-light` / `--text-on-lime` on light/lime
- [ ] Shell = `Premium*` components
- [ ] Focus visible + reduced motion
- [ ] Responsive 375 / 768 / 1024 / 1440
