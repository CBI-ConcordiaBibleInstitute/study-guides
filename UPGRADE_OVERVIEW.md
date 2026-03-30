# StudyCast Complete Upgrade Overview

## Component Structure

```text
src/
├─ app/
│  ├─ App.jsx
│  └─ index.css
├─ layouts/
│  └─ MainLayout.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ EpisodeListPage.jsx
│  └─ StudyGuidePage.jsx
├─ components/
│  ├─ animations/
│  │  ├─ FadeInView.jsx
│  │  └─ PageTransition.jsx
│  ├─ cards/
│  │  ├─ PodcastCard.jsx
│  │  ├─ EpisodeCard.jsx
│  │  └─ StudyGuideCard.jsx
│  ├─ common/
│  │  ├─ Button.jsx
│  │  ├─ SectionHeader.jsx
│  │  └─ ThemeToggle.jsx
│  ├─ feedback/
│  │  └─ SkeletonCard.jsx
│  ├─ layout/
│  │  ├─ Navbar.jsx
│  │  ├─ Sidebar.jsx
│  │  └─ Footer.jsx
│  ├─ lists/
│  │  ├─ PodcastList.jsx
│  │  ├─ EpisodeList.jsx
│  │  └─ StudyGuideList.jsx
│  └─ overlays/
│     └─ PremiumLockOverlay.jsx
├─ hooks/
│  ├─ useTheme.js
│  └─ useMockLoading.js
└─ data/
   └─ content.js
```

## Styling System
- CSS variables in `src/app/index.css` define light + dark design tokens.
- Tailwind config maps semantic tokens (`primary`, `surface`, `text.primary`, etc.).
- Components consume variables for consistent branding and instant theme switching.

## Example UI Snippets

### Podcast List
```jsx
<PodcastList podcasts={getPodcastsByTag('trending')} />
```

### Episode List (vertical cards)
```jsx
<EpisodeList episodes={podcast.episodes} podcastId={podcast.id} />
```

### Study Guide Access Control
```jsx
<StudyGuideList podcast={podcast} episode={episode} />
```
- First guide per podcast is free.
- Remaining guides show lock overlay + blur + premium popup.

## Routing
- `/` → podcast discovery
- `/podcast/:podcastId` → all episodes for selected podcast
- `/podcast/:podcastId/episode/:episodeId/study-guides` → study guides for selected episode


## Styling Examples

### Primary Button
```jsx
<Button className="bg-gradient-to-r from-[var(--primary)] to-[var(--brand)]">Explore Guides</Button>
```

### Podcast Card Surface
```jsx
<article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]" />
```
