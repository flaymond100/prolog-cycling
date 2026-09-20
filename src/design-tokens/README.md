# PROLOG Cycling Crew — Design System (v1)

Small token/component reference for the "coming soon" direction. Built for a women's UCI cycling team site: light, airy, blue + white, straight-line accents, minimal ornamentation.

## Fidelity
These are **high-fidelity design references** (colors, type, spacing are final choices, not placeholders). Recreate them in your app's existing stack (React/Vue/etc.) using its component patterns — don't ship this CSS/HTML as-is in production.

## Direction locked
- **Two typefaces**: **PP Monument Extended** for the logo lockup, headlines, and italic display moments (`--font-hero`, `--font-display`) — bold, extended, all-caps-style headline type. Self-hosted (`public/fonts/`, `@font-face` in `tokens.css`) — not a Google Font. Only Light (300), Regular (400), and Black (900) weights exist (each with an italic), so any token asking for an in-between weight (e.g. 500, 600) resolves to the nearest of those. **Archivo** for body/UI copy (`--font-body`) — Monument reads too heavy across large blocks of running text; Archivo is a Google Font, loaded via `<link>` in `index.html`.
- **Palette: monochrome** — black, white, and a mid-gray for muted/hover states. No color accent; contrast and bold 2px black rules/borders carry the hierarchy instead (inspired by a fixed-header reference with a bordered logo box and animated hamburger icon).
- **Primary hero style**: bold layered type — PP Monument Extended headline on a solid black field, one line rendered as an outline so imagery shows through, white header/footer bars with a 2px black rule.
- **Header**: fixed to the top of the viewport, bordered logo box (2px solid black), animated hamburger → X toggle for the mobile nav.

## Files
- `tokens.css` — CSS custom properties (colors, type, spacing, radius)
- `tokens.json` — same tokens as JSON, for non-CSS tooling
- `components.css` — small set of core component styles (nav, button, input, section rule)
- `reference.html` — live page showing every token and component together

## Colors
| Token | Hex | Use |
|---|---|---|
| `--color-white` | #FFFFFF | base surface |
| `--color-black` | #000000 | raw black, bold rules/borders |
| `--color-surface` | #F6F1E7 | page background (Cream) |
| `--color-surface-alt` | #EBE7DA | secondary panels |
| `--color-border` | #DBD6C8 | hairline rules, dividers |
| `--color-border-strong` | #000000 | bordered boxes (logo, inputs), focus rules |
| `--color-ink` | #000000 | headlines, primary text |
| `--color-ink-muted` | #555555 | body copy, secondary labels |
| `--color-primary` | #000000 | links, CTAs |
| `--color-primary-deep` | #4D4D4D | link/nav hover |
| `--color-bold-bg` | #000000 | bold hero background (alternate style) |

Palette stays to these values — don't introduce color accents; use opacity/gray mixes of `--color-ink` if an in-between tint is ever needed.

## Typography
- Hero, headings, italic display moments: **PP Monument Extended** (`--font-hero`, `--font-display`).
- Body copy and UI text: **Archivo** (`--font-body`) — regular/500/600 weights plus italic are loaded; anything heavier falls back to the nearest loaded weight.
- Previously explored but no longer used: Inter (body/UI), Instrument Serif (italic display), Anton (headline). Alt pairings explored at the time: Cormorant Garamond (softer/classic), Bricolage Grotesque (modern sans, no serif).

Scale in `tokens.css` under `--text-*`.

## Spacing & shape
8px base spacing scale (`--space-1` = 4px … `--space-9` = 96px). Straight lines over rounding: default radius is 0–2px (`--radius-sm`); avoid large border-radius and soft blob shapes. Bold 2px black borders (`--color-border-strong`) box off key elements (logo, hero) instead of shadows or color.

## Source designs
See `Cycling Team Landing Concepts.dc.html` in the parent project for the full explored options (2A/2B/2C font pairings, 3A bold hero).
