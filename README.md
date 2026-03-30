# StudyCast Frontend (React + Tailwind)

A modernized, component-driven study guide platform inspired by SaaS, podcast, and streaming UI patterns.

## Tech Stack
- React + functional components
- Vite
- React Router
- Tailwind CSS (utility-only styling, no plain CSS)
- Framer Motion for micro-interactions

## Project Structure

```text
study-guides/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ images/
└─ src/
   ├─ app/
   │  ├─ App.jsx
   │  └─ index.css
   ├─ components/
   │  ├─ cards/
   │  │  ├─ EpisodeCard.jsx
   │  │  ├─ GuideCard.jsx
   │  │  └─ PodcastCard.jsx
   │  ├─ common/
   │  │  └─ Button.jsx
   │  └─ layout/
   │     ├─ Layout.jsx
   │     └─ Navbar.jsx
   ├─ data/
   │  └─ content.js
   ├─ pages/
   │  ├─ EpisodePage.jsx
   │  ├─ Home.jsx
   │  └─ PodcastPage.jsx
   └─ main.jsx
```

## UX Notes
- Mobile-first responsive layout.
- Card grids that scale from 1 → 2 → 3 columns.
- Netflix/Spotify-like browsing flow:
  1. Home = podcasts
  2. Podcast detail = episodes
  3. Episode detail = guides with premium lock state
- First guide is free; remaining guides can show premium lock CTA.
- Smooth transitions, hover lift, subtle shadows, and gradient dark theme.

## Run
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run preview
```
