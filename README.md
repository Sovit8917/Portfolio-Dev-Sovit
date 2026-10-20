# SOVIT Portfolio (Astro)

Clean white, editorial portfolio with an orange `#FF794A` accent. Instrument Serif + Inter Tight, self-hosted through Fontsource (no external font requests). Light theme only.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs /dist
```

## What's inside
- **Hero**: oversized SOVIT wordmark built from 13 stacked layers (real 3D depth, gradient fade to white), an angled browser mockup with layered sheets, glow and a floating chip. It follows the pointer, drifts gently when idle, and levels out as you scroll.
- **About**: statement, three working principles, stats and a tilt-on-hover profile card.
- **Skills**: keyboard-friendly tabs (arrow keys, Home, End). Each skill says what you use it for.
- **Projects**: live preview of each project in a browser frame (desktop and phone), tag filters, and a frame that levels out when you hover it.
- **Experience**: expandable roles with details.
- **Contact**: copy-email button and a form that opens your email app with the message filled in.

## Make it yours
Everything lives in **src/data/site.ts**: name, the hero wordmark (`wordmark`), email, socials, projects (`live` = your deployed URL), skills, experience, stats and theme (accent, ink, radius, width).
1. Put your resume at `public/resume.pdf` and optionally a photo at `public/me.jpg` (then set `avatar`).
2. Set `site` in `astro.config.mjs` to your domain.
3. Deploy `/dist` to Vercel, Netlify or Cloudflare Pages.

## Notes
- Animations respect `prefers-reduced-motion`.
- Breakpoints: 1023px (stacked hero, swipeable project list), 820px (menu), 640px (phone layout).
- Some sites refuse to be embedded in the project preview. The "Open live site" button always works.
