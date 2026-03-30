# StudyCast — Modern SaaS Upgrade

## What was upgraded
- Podcast → Episode → Study Guide routed flow.
- Only first study guide per podcast is free.
- Remaining guides are premium-locked with blur + lock + popup.
- Modern light/dark theme, card-based layout, spacing, rounded UI, subtle motion.

## Color Variables
Defined in `src/app/index.css`:
- `--bg`, `--bg-soft`
- `--surface`, `--surface-elevated`
- `--text-primary`, `--text-secondary`
- `--primary`, `--primary-hover`, `--secondary`, `--brand`
- `--accent-soft`, `--border`, `--shadow-card`

## Tailwind Theme Tokens
`tailwind.config.js` exposes semantic tokens:
- `bg`, `surface`, `surface-elevated`
- `primary`, `secondary`, `brand`
- `text.primary`, `text.secondary`
- `borderColor.skin`, `shadow.card`

## Functional Flow
1. Home shows podcasts (`PodcastList`).
2. Click podcast → episode page (`EpisodeListPage`).
3. Click episode → study guides (`StudyGuidePage`).
4. `StudyGuideList` enforces free/premium gating.

## Core Reusable Components
- Lists: `PodcastList`, `EpisodeList`, `StudyGuideList`
- Cards: `PodcastCard`, `EpisodeCard`, `StudyGuideCard`
- Layout: `Navbar`, `Sidebar`, `Footer`, `MainLayout`
- Common: `Button`, `ThemeToggle`, `SectionHeader`
- Overlay: `PremiumLockOverlay`

## Run
```bash
npm install
npm run dev
```
