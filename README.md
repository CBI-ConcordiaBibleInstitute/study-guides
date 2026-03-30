# StudyCast UI Refresh (2025 SaaS Style)

## Before vs After Palette

### Before (outdated/dim)
- Background: very dark maroon-heavy tones
- Accent: low-contrast red shades
- Text hierarchy: weaker contrast and muted separation

### After (modern, accessible)
- **Light mode base:** `#F6F8FC`
- **Dark mode base:** `#0B1020`
- **Surface/Card (light):** `#FFFFFF`
- **Surface/Card (dark):** `#121A2F`
- **Text Primary (light/dark):** `#0F172A` / `#E6EBFF`
- **Text Secondary (light/dark):** `#475569` / `#A8B3D4`
- **Primary Accent (indigo):** `#4F46E5`
- **Primary Hover:** `#4338CA`
- **Secondary Accent (teal):** `#14B8A6`

## CSS Variable Theme System
Defined in `src/app/index.css` using `:root` (light) and `.dark` (dark):
- `--bg`, `--bg-soft`
- `--surface`, `--surface-elevated`
- `--text-primary`, `--text-secondary`
- `--primary`, `--primary-hover`, `--secondary`
- `--accent-soft`, `--border`, `--shadow-card`

## UI/UX Improvements Applied
- Sticky minimal navbar with blur and theme toggle.
- Modern button system (primary + secondary/ghost) with subtle ripple and elevation.
- Card-based layout with larger whitespace, softer shadows, and rounded corners.
- Improved typography hierarchy (Inter, stronger heading contrast, cleaner body text).
- Hero section with subtle gradient texture and clearer CTA hierarchy.
- Accessible link/hover states using primary accent.

## Tailwind + CSS Variables Approach
All styling is Tailwind utility classes using CSS variables:
- `bg-[var(--bg)]`
- `text-[var(--text-primary)]`
- `border-[var(--border)]`
- `shadow-[var(--shadow-card)]`

This keeps theming centralized and easy to scale.

## Scalable Project Structure
```text
src/
├─ app/
├─ components/
├─ layouts/
├─ pages/
├─ hooks/
├─ utils/
├─ assets/
└─ services/   # API logic
```

## Theme Toggle
`Navbar` uses `useTheme` hook:
- stores preference in `localStorage`
- applies/removes `.dark` on `<html>`
- respects system preference on first load
