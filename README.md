# Kommon Canvas

A premium creative-agency marketing site built with Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Lenis, and Radix-based UI primitives.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` — routes, root layout, global styles, SEO files (`robots.ts`, `sitemap.ts`, `opengraph-image.tsx`)
- `components/sections/` — one component per homepage section (Hero, About, Portfolio, Services, Statistics, Testimonials, Clients, Principles, Faq, Articles, Cta, Contact)
- `components/layout/` — Header, Footer
- `components/ui/` — Button, Input, Textarea, Badge, Accordion, and `artwork.tsx` (placeholder illustrations)
- `components/animations/` — RevealText, FadeIn/StaggerGroup, MagneticButton, Counter, Marquee, CustomCursor
- `components/providers/` — Lenis smooth-scroll provider (synced to GSAP's ticker)
- `hooks/` — `useLenis`, `useMediaQuery`/`useReducedMotion`/`useIsDesktop`, `useMouseParallax`, `useActiveSection`
- `lib/constants.ts` — all editable site copy (services, portfolio, testimonials, stats, FAQ, articles, nav)
- `types/` — shared TypeScript interfaces for the content above

## Swapping in real imagery

Every "photo" on the site (hero collage, portfolio grid, testimonial photos, article thumbnails) is currently an original, generated placeholder from `components/ui/artwork.tsx` (`<StillLife>` for product-style shots, `<Portrait>` for people). No third-party or stock photography is used anywhere in the codebase.

To swap in real photos:

1. Add your image files to `public/images/`.
2. In the relevant section component (e.g. `components/sections/portfolio.tsx`), replace `<StillLife theme={...} />` with `next/image`, e.g.:

   ```tsx
   import Image from "next/image";
   <Image src="/images/your-photo.jpg" alt="..." fill className="object-cover" />
   ```

3. Remove the now-unused `theme` field from the relevant entry in `lib/constants.ts` if you like, or keep it as a fallback.

## Editing copy

All homepage copy — services, portfolio project names, testimonials, stats, FAQ, articles, nav links, contact details — lives in `lib/constants.ts`. Update it there; the components read from it directly.

## Logo

No logo mark is included by design — the header/footer currently render a text wordmark (`Kommon Canvas`). Drop your logo file into `public/` and swap the text in `components/layout/header.tsx` / `footer.tsx` for an `<Image>` when ready.
