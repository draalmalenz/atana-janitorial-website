# Atana Janitorial Services — Website

Marketing website for Atana Janitorial Services (Kitchener-Waterloo, Ontario) — Next.js 16 + React 19 + Tailwind CSS.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/blog` — Cleaning tips blog (5 posts)
- `/contact` — Contact form

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/(marketing)/   # Public pages (Home, About, Services, Blog, Contact)
├── shared/
│   ├── components/    # Reusable UI (Hero, ServiceCard, ContactForm, ...)
│   └── constants/      # Site copy, services list, blog posts (site.ts, blog.ts)
└── lib/supabase/       # Supabase client (used by the contact form)
```

Design tokens (colors, fonts) live in `tailwind.config.ts`. Brand direction is documented in `DESIGN.md`.

## Contact form

The contact form (`/contact`) tries to save leads to a Supabase `leads` table. Without Supabase credentials configured in `.env.local` (see `.env.local.example`), it still shows a success message to the visitor but doesn't persist the lead — add real credentials to enable storage.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a new deployment automatically.
