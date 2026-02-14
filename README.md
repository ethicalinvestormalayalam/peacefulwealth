# Peaceful Wealth (POC) — GitHub-ready static site

This repo is a **static HTML/CSS/JS** proof of concept that can be deployed on:
- **Netlify** (recommended)
- **GitHub Pages**
- **Cloudflare Pages**

## Structure
- `index.html` — homepage
- `assets/css/styles.css` — styling
- `assets/js/app.js` — basic interactions
- `pages/` — placeholder pages wired to nav
- `data/products.json` — sample data (to wire into a screener next)

## Deploy: Netlify (no build)
1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Choose your repo
4. Build command: *(leave empty)*
5. Publish directory: `/` (root)

## Deploy: GitHub Pages
1. Repo **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main`, folder: `/ (root)`

## Next build steps
- Implement a real screener on `pages/screeners.html` pulling from `data/products.json`
- Add a `media.json` list + RSS ingestion (later)
- Add product detail pages: `pages/product.html?id=...`
