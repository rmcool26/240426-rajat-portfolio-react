# Rajat Mishra — Portfolio (React + Vite)

Modern portfolio built with React 18, Vite, Tailwind CSS, Framer Motion, Lenis smooth scroll.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:8080
npm run build    # production build → dist/
npm run preview  # preview built site
```

## Deploy on Netlify (Git, recommended)

1. Push this folder to a GitHub repo
2. Netlify → Add new site → Import from Git → pick the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Deploy on Netlify (drag & drop)

```bash
npm install
npm run build
```
Then drag the generated `dist/` folder into Netlify.

## Edit content

All copy, projects, stats, links → `src/content.ts`. One file. Change values, save, done.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (semantic tokens in `src/index.css` + `tailwind.config.ts`)
- Framer Motion (animations)
- Lenis (smooth scroll)
- shadcn/ui primitives
- Embla Carousel (project preview slider)
- React Router (case study route)

## Folder structure

```
src/
  components/portfolio/   # all portfolio sections
  components/ui/          # shadcn primitives
  pages/                  # Index, CaseStudy, NotFound
  content.ts              # ⭐ edit all content here
  index.css               # design tokens
```
