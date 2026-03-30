# StudyCast Frontend (React + Tailwind)

A premium, streaming-inspired study guide platform with reusable React components.

## Component Structure

```text
src/
├─ app/
│  ├─ App.jsx
│  └─ index.css
├─ components/
│  ├─ cards/
│  │  ├─ PodcastCard.jsx
│  │  ├─ EpisodeCard.jsx
│  │  └─ StudyGuideCard.jsx
│  ├─ common/
│  │  ├─ Button.jsx
│  │  └─ SectionHeader.jsx
│  ├─ layout/
│  │  ├─ Navbar.jsx
│  │  ├─ Sidebar.jsx
│  │  ├─ Footer.jsx
│  │  └─ Layout.jsx
│  └─ overlays/
│     └─ PremiumLockOverlay.jsx
├─ data/
│  └─ content.js
└─ pages/
   ├─ Home.jsx
   ├─ PodcastPage.jsx
   ├─ EpisodeListPage.jsx
   └─ StudyGuidePage.jsx
```

## Sample Code (Reusable Components)

### Navbar
```jsx
<Navbar />
```
Sticky top navigation, brand area, quick section links, CTA.

### Sidebar (optional)
```jsx
<Sidebar podcastId={podcast.id} podcastTitle={podcast.title} episodeCount={podcast.episodes.length} />
```
Reusable context panel for podcast pages.

### PodcastCard
```jsx
<PodcastCard podcast={podcast} />
```
Used in listing grids; receives one `podcast` object via props.

### EpisodeCard
```jsx
<EpisodeCard episode={episode} podcastId={podcast.id} />
```
Displays episode metadata and links to study guides.

### StudyGuideCard
```jsx
<StudyGuideCard guide={guide} isPreview={index === 0} onOpen={handleOpenGuide} />
```
Shows free/premium state and optional callback.

### PremiumLockOverlay
```jsx
<PremiumLockOverlay label="Unlock this guide" cta="Go Premium" />
```
Composable lock state overlay; used by `StudyGuideCard`.

### Footer
```jsx
<Footer />
```
Shared app-wide footer for product messaging.


## Premium Access Logic
- `StudyGuideCard` receives `isPreview` (boolean) from page-level index checks.
- First item uses `isPreview={true}` and remains accessible.
- Remaining guides render with: blur preview, lock icon overlay, and an `Unlock` premium badge.

## Clean Coding Practices Applied
- Components are single-purpose and prop-driven.
- Shared UI patterns are extracted (`Button`, `SectionHeader`, `PremiumLockOverlay`).
- Duplication is minimized by reusing cards and layout primitives across pages.
- Data access uses helper selectors from `src/data/content.js`.
- Tailwind utility classes only (no plain CSS files).

## Run
```bash
npm install
npm run dev
```
