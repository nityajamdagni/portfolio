# Nitya Jamdagni — Portfolio

A dark, sci-fi/voyager-themed portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.
Includes a "PORTFOLIO.SYS" boot-loader intro, an animated neural-network starfield background,
and a light/dark theme toggle.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with:

```bash
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

(Netlify works the same way — build command `npm run build`, publish directory `dist`.)

## Editing your content

Everything text-based — bio, experience, projects, skills, achievements, social links — lives in
one place: `src/data/content.js`. Edit that file and the whole site updates; you shouldn't need to
touch component files for routine content changes.

To swap the "NJ" monogram in the About section for a real photo, drop an image into `public/` and
replace the monogram block in `src/components/About.jsx` with an `<img>` tag.

## Structure

```
src/
  components/    UI sections (Hero, About, Experience, Projects, Skills, Contact, etc.)
  context/       Theme (light/dark) provider
  data/          content.js — all your real content in one file
  index.css      Tailwind v4 theme tokens (colors, fonts) + global styles
public/
  Nitya_Jamdagni_Resume.pdf   Powers the "Download CV" button
```
