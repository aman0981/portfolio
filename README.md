# Aman Nikumb — Portfolio

A dark, premium, tastefully-3D portfolio for **Aman Nikumb — Software Engineer (Data)**.
Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React Three Fiber · Framer Motion**.

- Hero with a GPU-friendly **React Three Fiber** particle field (one draw call; lazy-loaded, paused off-screen, disabled on mobile / `prefers-reduced-motion`).
- Two flagship case studies with **code-verified** metrics — **XBRL Intelligence Engine** and **HireBeacon** — including live-demo frames and real product screenshots.
- Design system synthesized from Linear's tokens + craft rules: near-black canvas, Inter + JetBrains Mono, single teal/emerald accent.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

> Node 20+ required. Fonts (Inter, JetBrains Mono) load via `next/font/google`.

## Project structure

```
src/
  app/                 layout, page, /projects/[slug], /api/contact, sitemap, robots, opengraph-image
  components/
    sections/          Hero, About, Skills, Projects, Experience, CodingProfiles, Contact
    hero/              Hero3DBackground (CSS + lazy R3F), HeroParticles (Canvas)
    projects/          LiveDemoFrame
    ui/                Section, SectionHeading, Reveal, Button, Chip, SocialIcon, BrandIcons
  lib/content.ts       <- SINGLE SOURCE OF TRUTH for all copy, metrics, links
public/
  aman-nikumb.png      headshot
  Aman_Nikumb_Resume.pdf
  screenshots/         optimized product screenshots
scripts/               capture-screenshots / recapture-xbrl / optimize-images / build-resume / verify
```

## Editing content

All text, metrics, projects, and links live in [`src/lib/content.ts`](src/lib/content.ts). Edit there — every section reads from it.

## Regenerating assets

```bash
node scripts/capture-screenshots.mjs   # screenshots of the live apps (needs them running)
node scripts/optimize-images.mjs       # resize/compress screenshots
node scripts/build-resume.mjs          # scripts/resume.html -> public/Aman_Nikumb_Resume.pdf
```

## Live demos

Case-study "Live demo" links currently point to **localhost** (`:8000` XBRL, `:3000` HireBeacon).
After the apps are deployed publicly, update `demoUrl` for each project in `src/lib/content.ts`.

## Contact form

`/api/contact` validates input and, if `RESEND_API_KEY` is set, sends email via Resend (see [`.env.example`](.env.example)). Without a key it accepts and logs submissions; the form also offers a direct `mailto:` link.

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel (framework auto-detected).
2. Set `site.url` in `src/lib/content.ts` to the final domain.
3. (Optional) add `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` env vars.
