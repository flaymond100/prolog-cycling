# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Business context

`STRATEGY.md` (gitignored — local only, not in the public repo) summarizes the team's sponsor pitch deck: positioning, roadmap through 2032, partnership tiers/pricing, and the people involved. Read it before writing site copy or anything that should reflect the team's actual stage and strategy rather than generic placeholder content. `src/pages/Partners.tsx` is the public version of this pitch — exact sponsorship pricing was deliberately left out of it (tiers/benefits only, pricing via "enquire") even though `STRATEGY.md` has the real numbers.

## What this is

Marketing/landing site for **Prolog Cycling**, a women's competitive UCI cycling team. Single-page-app style site (React Router, client-side only, no backend) deployed to GitHub Pages at the custom domain `prolog-cycling.com`. The site is currently in a "coming soon" / recruiting stage — copy on `Home` is explicitly placeholder in places (team section) and the primary CTA everywhere is a Google Form to join the team.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc -b (typecheck, no emit) + vite build -> dist/
npm run preview   # serve the built dist/ locally
npm run lint       # oxlint
```

There is no test suite/runner configured in this repo.

## Architecture

- **Routing**: `src/App.tsx` defines all routes under a single `RootLayout` (`/`, `/partners`, `/contacts`, `*` -> `NotFound`). Add new pages by adding a route here and a file under `src/pages/`.
- **Scroll-reveal / count-up**: `src/hooks/useInView.ts` is a generic IntersectionObserver hook (fires once, doesn't reset). `src/pages/Partners.tsx` builds local `Reveal` and `Counter` components on top of it — reuse that pattern rather than adding an animation library if another page needs scroll-triggered effects.
- **Layout**: `src/layouts/RootLayout.tsx` is the persistent shell — fixed header with logo, animated hamburger, full-screen nav overlay, footer. It also resets scroll on route change and locks body scroll while the mobile nav is open. Nav links (including the external "Join the Team" Google Form link) are hardcoded here.
- **SEO**: `src/components/Seo.tsx` is a per-page component (no `<Seo>` render output — it just mutates `document.head` via `useEffect`) that sets title/description/canonical/robots/OG tags. Every page component renders one. Because this is CSR with no SSR, `index.html` also carries static site-wide OG/Twitter/JSON-LD tags as a fallback for crawlers that don't execute JS (`Seo.tsx`'s tags only reach crawlers that do, like Googlebot).
- **GitHub Pages SPA routing hack**: `public/404.html` + the inline script at the top of `index.html` implement the [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect trick, since GitHub Pages has no server-side rewrites. `vite.config.ts` sets `base: '/'` because the custom domain (`public/CNAME`) serves from root, not a `/prolog-cycling/` subpath.
- **Deploy**: `.github/workflows/pages.yml` builds and deploys `dist/` to GitHub Pages on every push to `main`. No preview/staging environment.
- **Path alias**: `@` -> `src/` (configured in `vite.config.ts`).

## Design tokens

`src/design-tokens/` is the source of truth for the visual system, documented in `src/design-tokens/README.md`:
- `tokens.css` — CSS custom properties (imported once, at the top of `src/index.css`) for color, type, spacing, radius.
- `tokens.json` — same tokens as JSON for non-CSS tooling.
- `components.css`, `reference.html` — component reference/preview, not wired into the app; recreate patterns as actual React components instead of using this CSS as-is.

Locked visual direction (see the design-tokens README for full rationale): **PP Monument Extended** is the only typeface, used for every text role — `--font-hero`, `--font-body`, and `--font-display` all resolve to it (self-hosted — `public/fonts/*.woff2` + `@font-face` in `tokens.css`; only weights 300/400/900 exist, each with an italic, so tokens asking for an in-between weight resolve to the nearest one); straight-line accents (near-zero border radius, 2px solid borders for emphasis) instead of rounded/soft shapes; 8px base spacing scale (`--space-1` … `--space-9`).

**Brand palette**:

| Name | Hex | Used as |
|---|---|---|
| Champagne Gold | `#E2BB7A` | `--color-gold` — accent on dark/pitch-style sections (Partners page) |
| Cream | `#F6F1E7` | `--color-surface` (page background) |
| Deep Blue | `#00284D` | `--color-deep-blue` — used sparingly for a contrasting callout (Partners page) |
| Espresso | `#241A12` | `--color-espresso` — dark section backgrounds (Partners page) |

`--color-surface-alt`/`--color-border` (`#EBE7DA`/`#DBD6C8`) still derive from the old off-white surface and haven't been reconciled against Cream — revisit if they start to clash. The main site (Home, Contacts, the nav shell) stays monochrome black/white — gold/deep-blue/espresso are only used on the Partners page's dark bands, not blended into the everyday UI. When touching the palette, update `tokens.css` and `tokens.json` together (and `design-tokens/README.md`'s color table) so they stay in sync.

Per-page CSS lives next to its page (`Home.css` next to `Home.tsx`); `RootLayout.css` covers the shared shell. Both rely entirely on the custom properties from `tokens.css` rather than hardcoded values.
