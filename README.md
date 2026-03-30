# StudyCast Navigation + Access Model

## Implemented Flow
1. **PodcastList** on Home shows all podcasts as clickable cards.
2. Clicking a podcast opens **EpisodeListPage** (`/podcast/:podcastId`) with all episodes in a clean vertical list.
3. Clicking an episode opens **StudyGuidePage** (`/podcast/:podcastId/episode/:episodeId/study-guides`).
4. **Access rule:** only the first study guide in each podcast is free; all others are locked.

## Reusable Components
- `PodcastList` → `src/components/lists/PodcastList.jsx`
- `EpisodeList` → `src/components/lists/EpisodeList.jsx`
- `StudyGuideList` → `src/components/lists/StudyGuideList.jsx`
- `PremiumLockOverlay` → lock icon + blur + upgrade message

## Locked Content UX
Locked study guides now:
- show 🔒 lock overlay
- stay blurred/partially hidden
- show “Premium Content / Unlock to Access”
- trigger a premium popup when user clicks Unlock

## Data Shape (supported)
```json
{
  "podcast": "Genesis",
  "episodes": [
    {
      "title": "Episode 1",
      "studyGuides": [
        { "title": "Guide 1", "isFree": true },
        { "title": "Guide 2", "isFree": false }
      ]
    }
  ]
}
```

## Styling System
- Modern 2025 SaaS-inspired visuals
- CSS variable light/dark theme tokens
- Tailwind utilities for cards, spacing, typography, and transitions

## Structure
```text
src/
├─ components/
│  ├─ cards/
│  ├─ common/
│  ├─ layout/
│  ├─ lists/
│  └─ overlays/
├─ pages/
├─ layouts/
├─ hooks/
├─ data/
└─ app/
```
