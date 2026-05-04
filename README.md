# mikacreative.co

Marketing site for **MIKA creative** — Instagram coaching for food bloggers.

Built from a Claude.ai artifact handed off by Mika. The original was a single 1.4MB self-unpacking HTML file; this repo is the unbundled, production-shaped version: precompiled JSX, vendored React, and split-out static assets ready for Netlify.

## Local development

```bash
npm install
npm run build      # compile src/*.jsx -> js/app.js
npm run serve      # static server on http://localhost:5173
```

After editing any `src/*.jsx` file, run `npm run build` and reload the page. There is no watch mode — the build is fast (under a second), keep it intentional.

## Project layout

| Path | What |
|---|---|
| `index.html` | Static shell. Loads CSS, React, then the compiled app bundle |
| `css/styles.css` | All visual styling (colors, typography, layout) |
| `fonts/*.woff2` | Self-hosted Caprasimo, DM Mono, DM Sans |
| `js/react.production.min.js` | React 18.3.1 UMD (vendored from npm) |
| `js/react-dom.production.min.js` | ReactDOM 18.3.1 UMD |
| `js/app.js` | Compiled output of `src/*.jsx` — **don't edit by hand** |
| `src/app-1.jsx` | All visible components + content arrays (`SERVICES`, `EBOOKS`, `TESTIMONIALS`) — most copy edits live here |
| `src/app-2.jsx` | `BookingFlow` modal, calendar, fake payment form |
| `src/app-3.jsx` | React entry — mounts `<App />` into `#root` |
| `src/stubs.jsx` | No-op replacements for the dev `useTweaks` panel |
| `build.mjs` | Babel pipeline (run via `npm run build`) |
| `server.mjs` | Local static-file server (run via `npm run serve`) |

## Deploying

Pushing to `main` triggers a Netlify deploy automatically — the same setup as `fitmeals.app`.

`netlify.toml` declares no build command (everything is precompiled and committed). If Netlify ever asks for one, leave it empty; the publish directory is the repo root.

## Prototype-to-production checklist

The site shipped from Mika's draft is functional but contains placeholders. Before going fully live:

- [ ] Real testimonials in `src/app-1.jsx` `TESTIMONIALS` (currently has Lindsey's plus stand-ins)
- [ ] Real brand-partner list (currently removed in Mika's handoff)
- [ ] Real proof-bar stats (`ProofBar` component in `src/app-1.jsx`) — followers, monthly views, speaking count, podcast features
- [ ] Wire up real booking — replace `BookingFlow` in `src/app-2.jsx` with a Calendly or Cal.com embed
- [ ] Wire up real payments — `PaymentStep` is currently a fake form; swap for Stripe Checkout
- [ ] Wire up form handling — quiz / contact form submissions currently go nowhere; route to Formspree or a real backend
