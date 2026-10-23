# Sree Satwik Cherukumudi — Interactive Portfolio

A dark, cinematic portfolio built with React, Vite, Three.js / React Three Fiber, Framer Motion, and Lucide icons.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Build for production
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy
### Netlify
1. Push this project to GitHub, or build locally with `npm run build`.
2. Import the repository into Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Import the GitHub repository into Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`

## Personalization
- Edit contact links and text in `src/main.jsx`.
- The About section currently uses an initials-based portrait placeholder. To add your real portrait, put a web-optimized image in `public/images/` and update the About section to render it.
- No resume download link or PDF is included, per the owner's preference.
- No backend or database is required for this static portfolio.

## Accuracy notes
Project statuses and descriptions should be updated to reflect the actual state of each build. The car surveillance system is marked in progress. The other projects are presented based on the supplied resume, but should be checked for current status before publication.
