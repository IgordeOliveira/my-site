## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Astro 6](https://astro.build) — static-first, zero JS by default |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` plugin |
| **Fonts** | [Inter Variable](https://fontsource.org/fonts/inter) (body) + [Space Grotesk Variable](https://fontsource.org/fonts/space-grotesk) (headlines) via Fontsource |
| **Icons** | [Lucide Astro](https://lucide.dev) — Moon/Sun theme toggle icons |
| **Language** | TypeScript (strict mode) |
| **Deploy** | GitHub Pages via GitHub Actions (`withastro/action`) |

## Features

- **Dark / Light theme** — toggle with smooth transition; preference saved in `localStorage`; anti-flash inline script prevents FOUC
- **PT / EN language switch** — toggle with sliding pill indicator; all text updates in real-time via custom `langchange` event
- **Dynamic GitHub avatar** — profile photo fetched automatically from `avatars.githubusercontent.com` based on the configured GitHub username
- **Animated hero** — rotating expertise phrases with CSS roll-in animation + pulsing ring around the avatar
- **Responsive navbar** — backdrop-blur header with hamburger menu on mobile; links to GitHub, LinkedIn, and Email


## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```