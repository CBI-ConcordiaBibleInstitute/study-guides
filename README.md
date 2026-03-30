# StudyCast Frontend (React + Tailwind)

A premium, streaming-inspired study guide platform with modern dark UI aesthetics.

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
   │  │  ├─ Button.jsx
   │  │  └─ SectionHeader.jsx
   │  └─ layout/
   │     ├─ Layout.jsx
   │     └─ Navbar.jsx
   ├─ data/
   │  └─ content.js
   ├─ pages/
   │  ├─ EpisodeListPage.jsx
   │  ├─ Home.jsx
   │  ├─ PodcastPage.jsx
   │  └─ StudyGuidePage.jsx
   └─ main.jsx
```

## Page Flow
1. **Homepage** → sectioned discovery rows (`Trending`, `Popular`, `New`).
2. **Podcast Detail** → branded hero and show metadata.
3. **Episode List** → card-based episode library.
4. **Study Guide Page** → guide stack (first free, others premium-locked).

## UI Principles
- Dark theme + accent highlights.
- Sticky translucent navbar with blur.
- Rounded 2xl cards and soft glow shadows.
- Motion-based hover interactions (lift, scale).
- Mobile-first spacing and responsive grid hierarchy.

## Run
```bash
npm install
npm run dev
```
