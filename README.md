# SBM Taxonomy Prototype (Interactive)

Interactive prototype for **Software Business Model (SBM) taxonomy v1** instantiation.

**Live demo:** https://igordalepiane.github.io/sbm-taxonomy-instantiation/

## Features

- Home with welcome, three pre-classified examples, and quick actions
- Guided wizard across six taxonomy dimensions
- Read-only example profiles (Adobe Creative Cloud, Notion, Stripe)
- Category assignment, evidence source, rationale, and secondary notes
- Export JSON (schema v1) and consolidated PDF report
- Import JSON for evaluator comparison (dissertation §6.7)

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- react-router-dom (HashRouter for GitHub Pages)
- jsPDF + jspdf-autotable

## Run locally

```bash
pnpm install
pnpm run dev
```

Open http://localhost:5173/#/

## Build

```bash
pnpm run build
pnpm run preview
```

Simulate GitHub Pages base path:

```bash
GITHUB_PAGES=true pnpm run build && pnpm run preview
```

## Deploy

Push to `main` — GitHub Actions deploys to GitHub Pages (see `.github/workflows/deploy-pages.yml`).

## Qualification guide

Step-by-step implementation and screenshot checklist:

[`docs/STEP_BY_STEP_PROTOTYPE_QUALIFICATION.md`](docs/STEP_BY_STEP_PROTOTYPE_QUALIFICATION.md)
