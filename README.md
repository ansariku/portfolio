# ANSARI USMAN — Portfolio

A clean, minimalist single-page portfolio website built with **React 18**, **Vite 5**, and **Tailwind CSS v4**. Designed with a monospace aesthetic, black/white/gray color scheme, animated gridline background, and full light/dark theme support.

---

## Features

| Feature | Details |
|---|---|
| **Animated background** | Moving radiant gridlines that smoothly shift direction every 5 seconds using velocity lerp |
| **Light / Dark mode** | Toggled via navbar switch, persisted in `localStorage`, no flash on refresh |
| **Loading screen** | Waits for `window load` event before revealing the site; minimum 2 s display with animated progress bar |
| **Sticky navbar** | Backdrop blur on scroll, active-section highlighting via Intersection Observer |
| **Mobile hamburger menu** | Slides in from the right; theme toggle and close button in the header |
| **Hero name scale** | Navbar name scales to 105% when the Hero section is in view; nav link active states are suppressed |
| **Scroll animations** | Each section fades up into view on first scroll (one-shot Intersection Observer) |
| **Project pagination** | Show More / Show Less with staggered enter and reverse-staggered exit card animations |
| **CV download** | Uses `import.meta.env.BASE_URL` to resolve the correct path in both dev and GitHub Pages |
| **Responsive** | Mobile-first; all sections reflow cleanly from 320 px upward |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS v4 (Vite plugin, no PostCSS) |
| Icons | Lucide React |
| Language | JavaScript ES6+ |
| Deployment | GitHub Pages via GitHub Actions |

---

## Project Structure

```
portfolio/
├── public/
│   └── ANSARI_USMAN_CV.pdf          # Updated CV / Resume
│
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions — auto-deploy on push to main
│
├── src/
│   ├── main.jsx                     # React entry point
│   ├── App.jsx                      # Root layout — wires all sections together
│   ├── index.css                    # Global styles, Tailwind import, keyframe animations
│   │
│   ├── context/
│   │   └── ThemeContext.jsx         # Light/dark mode state + localStorage persistence
│   │
│   ├── data/
│   │   └── portfolioData.js         # All portfolio website content lives here
│   │
│   ├── hooks/
│   │   └── useInView.js             # Intersection Observer hook for scroll animations
│   │
│   └── components/
│       ├── AnimatedBackground.jsx   # Moving grid + radial gradient overlay
│       ├── LoadingScreen.jsx        # Initial load screen with progress bar
│       ├── Navbar.jsx               # Sticky nav, active tracking, mobile menu
│       │
│       ├── ui/                      # Reusable UI primitives
│       │   ├── TechBadge.jsx        # Technology badge with icon + name
│       │   └── ProjectCard.jsx      # Project card with image, description, badges, link
│       │
│       └── sections/                # One file per page section
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── TechStack.jsx
│           ├── Experience.jsx
│           ├── Projects.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
│
├── index.html                    # HTML entry point; inline script prevents theme flash
├── vite.config.js                # Vite + React + Tailwind plugins
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18 or later — check with `node --version`
- **npm** 9 or later — check with `npm --version`
- **Git** — check with `git --version`

### Install

```bash
# Clone or extract the project, then:
npm install
```

### Development server

```bash
npm run dev
# → http://localhost:5173
```

### Production build

```bash
npm run build
# Output goes to /dist
```

### Preview production build locally

```bash
npm run preview
# → http://localhost:4173
```

---