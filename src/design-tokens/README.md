# PROLOG Cycling Crew — Design System (v1)

Small token/component reference for the "coming soon" direction. Built for a women's UCI cycling team site: light, airy, blue + white, straight-line accents, minimal ornamentation.

## Fidelity
These are **high-fidelity design references** (colors, type, spacing are final choices, not placeholders). Recreate them in your app's existing stack (React/Vue/etc.) using its component patterns — don't ship this CSS/HTML as-is in production.

## Direction locked
- **Primary display font: Anton** — bold, condensed, all-caps headline type (see the "SOMETHING NEW IS COMING" hero). Use it for hero headlines and any big statement type.
- **Palette: monochrome** — black, white, and a mid-gray for muted/hover states. No color accent; contrast and bold 2px black rules/borders carry the hierarchy instead (inspired by a fixed-header reference with a bordered logo box and animated hamburger icon).
- **Primary hero style**: bold layered type — Anton headline on a solid black field, one line rendered as an outline so imagery shows through, white header/footer bars with a 2px black rule.
- **Secondary style**: dreamy/light — Instrument Serif (italic display, quieter moments) + Inter (body/UI), thin straight rule lines instead of rounded/blob shapes.
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
| `--color-surface` | #F5F3ED | page background (warm off-white, not stark white) |
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
- Hero / headline display: **Anton** — the system default for big statement type.
- Body / UI: **Inter**.
- Secondary display (quieter moments, italic accents): **Instrument Serif**. Alt pairings explored: Cormorant Garamond (softer/classic), Bricolage Grotesque (modern sans, no serif).

Scale in `tokens.css` under `--text-*`.

## Spacing & shape
8px base spacing scale (`--space-1` = 4px … `--space-9` = 96px). Straight lines over rounding: default radius is 0–2px (`--radius-sm`); avoid large border-radius and soft blob shapes. Bold 2px black borders (`--color-border-strong`) box off key elements (logo, hero) instead of shadows or color.

## Source designs
See `Cycling Team Landing Concepts.dc.html` in the parent project for the full explored options (2A/2B/2C font pairings, 3A bold hero).
