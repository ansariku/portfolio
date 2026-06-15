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