# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Remparia OS  
**Updated:** 2026-08-26  
**Category:** AI-native operating system for modern organizations  
**Pattern:** Dark · Intelligent · Governed · Scalable  
**Balance:** ~90% black/white · ~10% lime accent  
**Live lab:** `/fr/design-system` (noindex)  
**Legacy bridge:** `src/app/ds-legacy-bridge.css` (loaded after `landing.css`)

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

### Semantic (UI states — not brand)

| State | Hex | Token |
|-------|-----|-------|
| Success | `#39FF14` | `--success` |
| Warning | `#FFDA00` | `--warning` |
| Error | `#FF3B30` | `--danger` |
| Info | `#3B82F6` | `--info` |

**Info blue is semantic only.** Never use blue as a brand / marketing accent.

**Anti-patterns:** no purple AI glow, no emoji icons, no heavy neon fill fields, no playful illustration, no hardcoding hex outside tokens.

---

## Typography

| Role | Family | Token |
|------|--------|-------|
| Display / headings | **Inter Tight** | `--font-display` |
| Body / UI | **Inter** | `--font-ui` |
| Data / mini labels | **IBM Plex Mono** | `--font-mono` |

### Type scale

| Style | Desktop ≥1280 | Mobile ≤768 | Weight | Tracking |
|-------|---------------|-------------|--------|----------|
| Display 1 | 72 / 88 | 40 / 48 | 700 | −1% / −0.5% |
| Display 2 | 56 / 64 | 32 / 40 | 700 | −1% / −0.5% |
| H1 | 40 / 48 | 28 / 36 | 700 | −0.5% / −0.25% |
| H2 | 32 / 40 | 22 / 32 | 600 | −0.25% / 0 |
| H3 | 24 / 32 | 18 / 28 | 600 | 0 |
| H4 | 20 / 28 | 16 / 24 | 600 | 0 |
| Eyebrow | 12 / 16 | 11 / 16 | 600 | 0.12em |
| Body Large | 18 / 28 | 16 / 24 | 400 | 0 |
| Body | 16 / 24 | 14 / 20 | 400 | 0 |
| Small | 14 / 20 | 12 / 18 | 400 | 0 |
| Caption | 12 / 16 | 11 / 16 | 400 | 0 |
| Mini / Labels | 11 / 16 | 10 / 14 | 400 | 0 · mono |
| Data / Mono | 12 / 16 | 11 / 14 | 400 | 0 · mono |

CSS clamps: `--type-display-1` … `--type-h4`, `--font-body`, `--font-eyebrow`, `--font-data`.

---

## Spacing (8px base)

`8 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`  
Tokens: `--space-2` … `--space-32`.

Section vertical rhythm: ~88–132px (premium home).

---

## Components

### Buttons

| Variant | Class | Spec |
|---------|-------|------|
| Primary | `.btn-primary` | Lime fill `#CCFC41`, black text, radius 6px, optional → |
| Secondary | `.btn-secondary` | Black fill, white border, white text |
| Ghost | `.btn-ghost` | Transparent, lime text |
| Disabled | `:disabled` | Slate fill, muted text |

Hover: brightness / border only — **no large scale/translate**. Focus: `--focus-ring`.

### Stat / metric cards

- Background `--graphite` (`#111111`)
- Hairline border `--border-strong`
- Large white metric + lime icon accent

### Cards (interactive only)

- Prefer no decorative cards on marketing heroes
- When needed: `--surface` + `--border-strong`, hover border → lime soft

### Links

- Default / `.text-link`: lime; hover brighter / underline offset

---

## Motion

- Micro: **150–250ms**, `--ease-out`
- Prefer opacity / border / filter
- Respect `prefers-reduced-motion`

---

## Messaging tone (examples)

- “AI shouldn't be another tool. It should transform how your company operates.”
- “Human intelligence. Artificial scale.”
- “Dark. Intelligent. Governed. Scalable.”

---

## Pre-delivery checklist

- [ ] Tokens only (no stray `#c8ff00` / old green gradient)
- [ ] Inter Tight headings · Inter body · Plex Mono data
- [ ] Lime ≤ ~10% of the viewport
- [ ] No brand blue
- [ ] Contrast body ≥ 4.5:1
- [ ] Focus visible
- [ ] `prefers-reduced-motion`
- [ ] Responsive 375 / 768 / 1024 / 1440
