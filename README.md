# StudyCast Frontend (React + Tailwind)

Modern, animation-rich study-guide platform using React, Tailwind, and Framer Motion.

## Recommended Production Folder Structure

```text
src/
├─ assets/                  # static images, icons, illustrations
├─ components/              # reusable UI building blocks
│  ├─ animations/           # fade/transition wrappers
│  ├─ cards/                # PodcastCard, EpisodeCard, StudyGuideCard
│  ├─ common/               # Button, SectionHeader, inputs, badges
│  ├─ feedback/             # Skeletons, empty states, toasts
│  └─ overlays/             # PremiumLockOverlay, modals
├─ layouts/                 # App layouts (MainLayout, AuthLayout)
├─ pages/                   # route-level pages
├─ hooks/                   # reusable hooks (useMockLoading, useAuth)
├─ utils/                   # pure helpers (formatters, classnames)
├─ services/                # API clients + data fetchers (axios/fetch wrappers)
├─ app/                     # router + providers + app bootstrap
└─ main.jsx                 # React entry
```

## Naming Conventions
- **Components:** `PascalCase.jsx` (`StudyGuideCard.jsx`)
- **Hooks:** `useSomething.js` (`useMockLoading.js`)
- **Utils:** `camelCase.js` (`formatDuration.js`, `cn.js`)
- **Routes/Pages:** `PascalCase.jsx` matching URL intent (`StudyGuidePage.jsx`)

## API Logic Placement
- Put remote calls in `src/services/` (e.g., `podcastService.js`, `guideService.js`).
- Keep components UI-only: pass data via props/hooks, avoid fetch calls directly in presentational components.
- Use hooks (`usePodcasts`, `useEpisodeGuides`) to bridge services and pages.

## What Was Added
- Card hover scale/lift effects.
- Fade-in on scroll wrappers.
- Smooth page transitions between routes.
- Button hover + ripple microinteraction.
- Skeleton loading placeholders for lists.

## Run
```bash
npm install
npm run dev
```
