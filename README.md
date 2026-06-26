# Hacking Tribunal SGX3

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploying to GitHub Pages

The site is hosted at [https://josiahj25.github.io/hacking-tribunal-sgx3-2026/](https://josiahj25.github.io/hacking-tribunal-sgx3-2026/).

### Automatic (recommended)

Every push to `main` triggers the GitHub Actions workflow at `.github/workflows/deploy.yml`, which builds and publishes the site automatically.

Make sure GitHub Pages is configured to deploy from the `gh-pages` branch:
**Settings → Pages → Source → Deploy from branch → `gh-pages`**

### Manual

```bash
npm run build
npm run deploy
```

This builds the site and pushes the `dist/` folder to the `gh-pages` branch.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
