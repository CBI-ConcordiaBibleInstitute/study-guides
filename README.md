# StudyCast Color System + Premium Theme

## Extracted Brand Direction (from logo)
The Concordia logo uses a deep maroon core (`#892334`). This palette derives from that tone for a premium Christian/academic SaaS experience.

## Full Palette (HEX)
- **Logo Primary / Brand Core:** `#892334`
- **Brand Dark Hover:** `#741C2B`
- **Brand Soft Tint:** `#BF6E81`
- **Background (main):** `#120F14`
- **Background (soft section):** `#19141D`
- **Card Surface:** `#1D1822`
- **Card Elevated:** `#241D2C`
- **Text Primary:** `#F6F1F4`
- **Text Secondary:** `#B9AEB6`
- **Accent (CTA):** `#D4B06A`
- **Accent Hover:** `#E4C78F`
- **Accent Deep:** `#BE9750`

## Where to Use Each Color
- **`bg` / `bg-soft`** → page backgrounds and large sections.
- **`card` / `card-elevated`** → podcast/episode/study-guide cards and sidebar blocks.
- **`text-primary`** → headings and critical labels.
- **`text-secondary`** → descriptions, metadata, supporting text.
- **`accent` colors** → buttons, links, active states, hover highlights.
- **`brand` colors** → identity moments (badges, logo chips, premium branding).

## Tailwind Config Colors
```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: { 200: '#d9a2ad', 300: '#bf6e81', 500: '#892334', 600: '#741c2b' },
        accent: { 300: '#e4c78f', 400: '#d4b06a', 500: '#be9750' },
        bg: { DEFAULT: '#120f14', soft: '#19141d' },
        card: { DEFAULT: '#1d1822', elevated: '#241d2c' },
        text: { primary: '#f6f1f4', secondary: '#b9aeb6' }
      }
    }
  }
}
```

## Sample Hero Section (React + Tailwind)
```jsx
<header className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 shadow-card sm:p-10">
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(137,35,52,0.2),transparent_55%)]" />
  <div className="relative space-y-4">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">Faith + Learning Platform</p>
    <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl">
      Grow in Scripture with podcast-style study guides built for modern discipleship.
    </h1>
    <p className="max-w-2xl text-text-secondary">
      Explore curated episodes, open guided notes, and unlock premium learning paths.
    </p>
    <div className="flex gap-3">
      <Button>Get Started</Button>
      <Button variant="ghost">Explore Guides</Button>
    </div>
  </div>
</header>
```

## Sample Components Using Palette
- `Navbar` uses translucent `bg-bg/80`, brand icon chip, and accent CTA.
- `PodcastCard` / `EpisodeCard` use `bg-card`, `text-primary`, `text-secondary`, and accent links.
- `StudyGuideCard` + `PremiumLockOverlay` use brand/accent contrast for locked premium state.

## Architecture (Scalable)
```text
src/
├─ assets/
├─ components/
│  ├─ animations/
│  ├─ cards/
│  ├─ common/
│  ├─ feedback/
│  ├─ layout/
│  └─ overlays/
├─ layouts/
├─ pages/
├─ hooks/
├─ utils/
├─ services/   # API logic
└─ app/
```
