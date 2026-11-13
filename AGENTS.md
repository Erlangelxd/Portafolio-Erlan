# AGENTS.md

Single-page portfolio (React 18 + Vite 6 + Tailwind CSS v4). No router, no backend; content is data hard-coded in `src/App.jsx`.

## Commands

- `npm start` — dev server pinned to port 3000 (`vite --port 3000`). The devcontainer also auto-runs this.
- `npm test` — Vitest in **watch mode**. For one-shot runs use `npm test -- --run`.
- `npx vitest run src/App.test.jsx` — run a single test file.
- `npm run build` — emits to `dist/` (the README's "build folder" wording is stale). `npm run preview` serves it.
- There is **no lint or typecheck script**: `eslintConfig` in `package.json` is a CRA leftover and ESLint is not installed. Verify with tests + build.

## Where changes go

- Entry flow: `index.html` → `src/index.jsx` → `src/App.jsx`. Sections render in this order: Header, About, Technologies, Experience, Projects, Contact.
- All ES/EN copy lives in the `translations` object in `src/App.jsx` and is passed down as `t`. Keep both locales in sync.
  - `t.projects.items` is **index-aligned** with `projectData` in `src/components/Projects.jsx`; adding a project means adding an entry to both locales at the same index.
  - `t.experience.items` is defined only in `App.jsx`; `Experience.jsx` just renders it.
  - Keys in `technologies` (frontend/backend/herramientas) must match `t.technologies.categories`.
- Static assets live in `public/` and are referenced as literal strings (`../assets/...`, `../documentos/...`), not ES imports. Add new images/PDFs under `public/` and mirror the string path.
- CV file is `public/documentos/CV2026ErlanACarrilloBautista.pdf`. `Header.jsx` links it correctly; `Contact.jsx` still points to the nonexistent `../documentos/Erlan2026CV.pdf`.
- Dark mode is Tailwind v4 with **no** `tailwind.config.js`. `src/index.css` declares `@custom-variant dark (&:where(.dark, .dark *))`; `App.jsx` toggles `.dark` on `<html>` and persists `theme` in localStorage. Do not switch to media-query dark mode — `src/theme-build.test.js` runs a real Vite build and asserts the class-based utilities are emitted.
- Language is persisted under localStorage `language` (default `es`), theme under `theme` (default `light`).

## Testing quirks

- `src/theme-build.test.js` executes a full production build with `write: false` (slow-ish, no `dist/` output).
- `src/setupTests.js` exists but is **not wired** into Vitest (`vite.config.js` has no `setupFiles`), so jest-dom matchers like `toBeInTheDocument` are unavailable.
- `src/App.test.jsx` queries buttons by exact labels (`Oscuro`, `Claro`) and asserts localStorage keys, so changing translations/defaults breaks tests.

## Repo notes

- `dist/` is gitignored even though it exists locally; never commit build output.
- No CI workflows or pre-commit hooks; verification is local.
