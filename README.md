# Relient Solutions — website

Next.js (App Router) site for relient.solutions. Every page is pre-rendered to static HTML at build time, with metadata and Schema.org JSON-LD in the server output.

## Commands

```bash
npm run dev         # local dev server on http://localhost:3000
npm run build       # production build (static HTML for all routes)
npm run start       # serve the production build
npm run verify-seo  # check titles, descriptions, canonicals, JSON-LD and H1s in the build output
npm run server      # optional Express inquiries API (server.js)
```

## Layout

- `src/app/` — routes. Dynamic routes (`services/[slug]`, `industries/[slug]`) are generated from `src/lib/seoData.js`.
- `src/components/ui.jsx` — shared server components (hero, sections, cards, FAQ, plans, CTA).
- `src/components/Navbar.jsx`, `PricingTabs.jsx`, `ContactForm.jsx` — the only client components.
- `src/lib/seoData.js` — site content and structured data; `plans.js` — pricing; `visuals.js` — service names and images.
- `public/renders/` — pre-rendered metal objects used as page artwork.

## Environment

Copy `.env.example` to `.env.local`. Supabase keys use the `NEXT_PUBLIC_` prefix.
