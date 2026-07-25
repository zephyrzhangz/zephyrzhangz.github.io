# zephyrzhang.com

Personal website - [zephyrzhang.com](https://zephyrzhang.com)

## Develop

```bash
npm install
npm start        # local dev server
npm run build    # production build -> build/
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow, which builds the site and
publishes it to the `gh-pages` branch (custom domain `zephyrzhang.com`).
