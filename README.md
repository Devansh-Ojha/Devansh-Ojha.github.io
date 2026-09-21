# Welcome to my website

## Local development

```bash
npm install
npm run dev
```

## Deploying updates

Push changes to `main` and GitHub Actions will install dependencies, build the site, copy the SPA fallback page, and publish `dist` to `gh-pages` automatically. There is no need to build or commit `dist` locally.

```bash
git add .
git commit -m "Update website"
git push origin main
```
