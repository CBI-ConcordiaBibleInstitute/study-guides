# StudyCast — Premium SaaS Redesign (Reference-Aligned)

## Color Palette (inspired by reference site)
- Primary: `#892334`
- Secondary: `#B55A70`
- Accent: `#C9A35F`
- Light Background: `#FAF6F7`
- Dark Background: `#171116`
- Surface Light/Dark: `#FFFFFF` / `#231921`
- Text Light/Dark: `#2A1D22` / `#F6E9ED`

## Color Variables (CSS)
Defined in `src/app/index.css` using `:root` + `.dark`:
- `--bg`, `--bg-soft`
- `--surface`, `--surface-elevated`
- `--text-primary`, `--text-secondary`
- `--primary`, `--primary-hover`, `--secondary`, `--brand`
- `--accent-soft`, `--border`, `--shadow-card`

## Tailwind Styling System
`tailwind.config.js` maps semantic tokens:
- Colors: `bg`, `surface`, `surface-elevated`, `primary`, `secondary`, `brand`, `text.primary`, `text.secondary`
- Border: `borderColor.skin`
- Shadow: `shadow.card`

## Functionality Flow
1. Home page shows podcasts in cards.
2. Clicking a podcast opens a dedicated episode page (vertical list).
3. Clicking an episode opens study guides.
4. First guide per podcast is free; all others are premium locked.

## Premium Lock UX
Locked guides include:
- blur treatment
- lock icon + premium label
- unlock CTA
- premium popup modal

## Motion & Interactions
- Page transitions (`AnimatePresence` + `PageTransition`)
- Scroll reveal (`FadeInView`)
- Card hover lift/scale + shadow
- Button ripple + gradient microinteraction
- Loading skeletons for better perceived performance

## Run
```bash
npm install
npm run dev
```

## Deployment Notes
- Uses `HashRouter` so deep links work on static hosts (GitHub Pages / PR previews).
- Vite `base` is set to `/study-guides/` only when `GITHUB_ACTIONS=true`, preventing broken asset paths in production deploys.
