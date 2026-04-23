# Rabt Films — The Art of Rabt

A cinematic Next.js 14 (App Router) site for a film production studio.
Dark maroon + gold palette, Benaya display type, Restrain Demo script,
Framer Motion page/scroll animations, and Lenis smooth scrolling.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom `maroon` + `gold` + `cream` palette)
- Framer Motion (word-by-word headline rise, scroll-triggered reveals, parallax)
- Lenis smooth scroll
- `next/font/local` (Benaya + Restrain Demo)
- `next/image` with Unsplash remote patterns

## Run it

The `node_modules/` folder in this project contains a **partial install** from the
sandbox build. Please remove it and install fresh on your machine:

```bash
rm -rf node_modules
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build && npm start
```

## Pages

- `/` — Hero + Marquee + About + Services + Portfolio (4) + Clients + Blog (3) + Contact
- `/about` — Page header + About section + Team grid
- `/services` — Page header + full Services grid + Contact
- `/portfolio` — Page header + full portfolio grid + Contact
- `/portfolio/[slug]` — Individual project with Next link
- `/blog` — Page header + all blog posts + Contact
- `/blog/[slug]` — Long-form article layout
- `/contact` — Page header + contact form

## Customising

- Brand assets: `public/brand/` (the 3000x3000 rendered logo lives here as `rabt-logo-full.png`, `rabt-logo.png`, and `rabt-mark.png` for navbar)
- Fonts: `public/fonts/` (wired up in `src/lib/fonts.ts`)
- Colours: `tailwind.config.ts` — `maroon`, `gold`, `cream`, `ink`
- Content: `src/lib/data.ts` — services, projects, blog posts, team, clients
- Nav + socials: `src/lib/nav.ts`

## Notes

- `node_modules` is already installed.
- The contact form is client-side demo only — wire it to an email API (Resend, Sendgrid) or a form service (Formspree) when ready.
- Swap placeholder Unsplash covers in `src/lib/data.ts` with real stills.
