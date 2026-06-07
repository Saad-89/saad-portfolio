---
name: portfolio-design-direction
description: Design/architecture decisions for Saad's portfolio (aesthetic, routing, case studies, screenshots)
metadata:
  type: project
---

Saad Yaqoob's React/Vite portfolio (base path `/saad-portfolio/`). Redesigned 2026-06-06.

**Positioning (IMPORTANT):** Do NOT label Saad "mobile & web app developer" or lead with framework names — non-technical clients don't parse that. He is a **"Software Engineer"** who **builds software that helps businesses grow**. Lead with business outcomes in plain language; AI is a headline capability (assistants, chatbots, **AI agents, Claude Code, MCP connectors, Claude Skills**, automation). Real tech (Flutter/React/etc.) is kept only as a small "Under the hood" line for technical readers, not front-and-center.

**Aesthetic — deliberately NOT "AI template".** User rejected gradient text, pulsing dots, glow blobs, and round-number stat strips. Editorial/hand-built: big confident type, whitespace, **monospace eyebrows/labels** (`--font-mono` = JetBrains Mono) with numbered sections (`01 — About`, `02 — Selected work`, `03 — Experience`, `04 — What I do`, `05 — Contact`), **ink-black primary buttons** with the accent used sparingly. Fonts: **Inter** (primary) + **JetBrains Mono** (labels), both via Google Fonts in index.html — the old Discord "GGSans" was removed. Accent: **refined royal blue `#1f49c7`** (was bright indigo `#4f46e5`, felt too generic/AI). Keep it this way — don't reintroduce the tropes or the jargon-forward framing.

**Routing:** `App.jsx` uses BrowserRouter `basename={import.meta.env.BASE_URL}`. Routes: `/` → Portfolio (one-pager), `/work/:slug` → `CaseStudyPage`. Slugs are derived from title in `ProjectModel`. 404.html/index.html SPA redirect already handles GH Pages deep links.

**Case studies are subpages** (not a modal — the old `ProjectVideoDialog` was deleted). Each is a landing-page layout: hero (category/year/title/tagline/meta), a **browser-framed real screenshot of the live site**, then numbered Overview/Challenge/Approach/What-I-built, demo `<video>`, tech, CTA (mailto), and a "next case study" link. Content is qualitative (no invented metrics) in `portfolioData.js`.

**Live-site screenshots:** captured with `scripts/capture-screenshots.mjs` (puppeteer-core driving installed Google Chrome — no bundled browser). Output: `src/assets/screenshots/<id>.jpg`, resized to 1600px / JPEG q82 (~200KB each). Looked up via `src/data/screenshots.js` (`getScreenshot(id)`), falls back to thumbnail. Re-run the script to refresh; sites with persistent connections need `waitUntil: 'domcontentloaded'` + a long sleep (heydividend, hubavet).

**Hero & About layout:** The portrait lives in the **Hero** (two-column: text + framed `saad-hero.jpg`, optimized ~286KB from the 1024² `saad.png`; stacks portrait-on-top on mobile, with an "Available for new projects" badge). The **About** section has NO image — its right column is a "snapshot" quick-facts panel (Experience/Based in/Focus/Industries/Engagements + availability) so the layout stays full/balanced. "What I help with" is now **"How I can help"** — client-focused, benefit-led service cards (Turn your idea into a product / Websites that pull their weight / Mobile apps people keep / AI & automation) each with deliverable tags.

**Experience:** 5+ years — the 2020 Techorphic entry was re-enabled in `experienceData.js` so the timeline spans 2020→present.

**"What I do" section** (`SkillsSection`, was "Toolbox"/logo-grid): now a static, plain-language capabilities list defined in the component — Websites & apps / AI & automation / Backend & integrations / Product & delivery — plus a small "Under the hood" mono tech line. `skillsData.js`/`SkillModel` and the `public/techIcons` are no longer used by it.

**Case-study video fix:** videos live in `/public/videos`; a relative `./videos/x.mp4` breaks on `/work/:slug` routes. `CaseStudyPage` resolves them via `publicAsset(p)` → `import.meta.env.BASE_URL + p.replace(/^\.?\//,'')`. Uses a plain native `<video controls poster>`.

Keep authentic: no fake testimonials/metrics. Pre-existing lint errors (ContactSection regex/`result`, CustomButton unused vars) left untouched — out of scope.
