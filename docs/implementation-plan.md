# Crypto Dashboard – Implementation Plan

## Overview

Build `crypto-dashboard` using Vite + React + TypeScript, Tailwind CSS, Redux Toolkit (including RTK Query), React Router, Recharts for charts, Jest + React Testing Library, Storybook, and GitHub Actions CI. For data, we will ship with dummy data backed by MSW (Mock Service Worker) to simulate the Coin API at development/test time, with an environment toggle to switch to a real API later without code changes.

## Key Decisions

- Data source: MSW serves fixture JSON for RTK Query endpoints in dev/test; production can call a real API when enabled via env.
  - Env flag: `VITE_USE_MOCKS=true|false` (default true)
  - Base URL: `VITE_API_BASE_URL` reserved for future real API
- Charts: Recharts with a thin shared wrapper component for consistent theming and defaults.
- State: Redux Toolkit slices for UI prefs (theme), coin filters/sorting; RTK Query for remote data.
- Routing: React Router with a single `DashboardPage` route (`/`) to start; structure ready to grow.
- Theming: Tailwind dark-first, CSS variables for theme tokens; `ThemeProvider` to persist and toggle.
- Testing: Jest + RTL with MSW in `setupTests.ts`.
- Storybook: Vite builder, global decorators for theme and store providers, stories for shared and feature components.
- CI: GitHub Actions workflow running lint, typecheck, tests, and build on PR and main.

## Folder Structure

```
crypto-dashboard/
├── src/
│  ├── app/
│  │  ├── providers/              # StoreProvider, ThemeProvider, RouterProvider
│  │  ├── routes/                 # Route elements
│  │  ├── store/                  # Redux store setup
│  │  └── index.tsx               # App root
│  ├── entities/                  # Domain types (Coin, Market, etc.)
│  ├── features/
│  │  └── coins/
│  │     ├── api/                 # RTK Query service, fixtures, types
│  │     ├── components/          # CoinRow, CoinCard, Filters, CoinTable
│  │     ├── hooks/               # useCoins, useSorting
│  │     ├── lib/                 # sort/filter utilities
│  │     └── tests/               # Unit tests
│  ├── shared/
│  │  ├── components/             # Button, Card, Table, SearchInput, Badge, Skeleton, Select
│  │  ├── ui/                     # Tailwind primitives (Flex, Stack, Text)
│  │  ├── icons/                  # SVG icons
│  │  ├── styles/                 # Tailwind and globals
│  │  ├── utils/                  # helpers, clsx wrapper
│  │  └── config/                 # constants, env
│  ├── theme/                     # Theme context & logic
│  ├── widgets/                   # Header, Sidebar, DashboardTable
│  ├── pages/                     # DashboardPage
│  ├── stories/                   # Storybook stories
│  ├── mocks/                     # MSW handlers and server (dev/test)
│  └── index.tsx
├── docs/
│  └── implementation-plan.md     # this plan
└── README.md
```

## Scaffolding Steps

1. Initialize Vite React-TS app and Git.
2. Add Tailwind CSS (+ postcss, autoprefixer); configure `tailwind.config.ts`, `src/shared/styles/tailwind.css` and include in root.
3. Install runtime deps: `react-router-dom`, `@reduxjs/toolkit`, `react-redux`, `recharts`, `clsx`, `zod` (for schema guards), `@tanstack/react-virtual` (optional for large tables).
4. Dev/test deps: `msw`, `jest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `ts-jest` (or `babel-jest`), `jest-environment-jsdom`, `@types/jest`.
5. Lint/format deps: `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-config-prettier`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `prettier`.
6. Storybook with Vite builder: `storybook@next` CLI init; set up decorators for providers and tailwind.
7. Create Redux store and provider composition under `src/app/providers` and `src/app/store`.
8. Implement RTK Query service `coingeckoApi` with endpoints: `getMarkets`, `getTrending`, `getCoinById`. Wire to MSW handlers reading fixtures from `src/features/coins/api/fixtures/`.
9. Set up MSW: browser worker for dev, server for Jest; driven by `VITE_USE_MOCKS`.
10. Build shared UI primitives/components; add Storybook stories.
11. Implement `features/coins` (lib, hooks, components) and `widgets/DashboardTable`.
12. Add `DashboardPage` with layout (Header + Sidebar + main content) and charts using Recharts wrapper.
13. Configure Jest, RTL and example tests; run in CI.
14. Configure ESLint + Prettier with TS strict; add scripts.
15. Add GitHub Actions workflow: install, lint, typecheck, test, build.
16. Write `docs/implementation-plan.md` with this content.

## Component & Module Breakdown (MVP)

- `src/app/store/store.ts`: configure store with `coins` slice, `coingeckoApi.reducer`, and middleware.
- `src/app/providers/StoreProvider.tsx`: wraps `Provider`.
- `src/app/providers/ThemeProvider.tsx`: context + localStorage persistence; toggles `data-theme` on `<html>`.
- `src/app/routes/AppRoutes.tsx`: `createBrowserRouter` with `/` → `DashboardPage`.
- `src/features/coins/api/coingeckoApi.ts`: RTK Query endpoints (types from `entities`).
- `src/mocks/handlers/coins.ts`: MSW handlers matching RTK endpoints; read from `fixtures` JSON.
- `src/shared/components`: `Button`, `Card`, `Table` (head/body/cell), `SearchInput`, `Badge`, `Select`, `Skeleton`, `LineChart` (Recharts wrapper).
- `src/widgets/DashboardTable`: table with sorting, filtering, and small sparkline chart cells.
- `src/pages/DashboardPage`: summary cards, markets table, top movers list, line charts.

## Environment & Scripts

- `.env`: `VITE_USE_MOCKS=true`, `VITE_API_BASE_URL="https://api.example.com"` (placeholder)
- NPM scripts (examples):
  - `dev`: start Vite with MSW auto-start if `VITE_USE_MOCKS=true`
  - `dev:api`: `VITE_USE_MOCKS=false vite`
  - `test`: `jest`
  - `lint`: `eslint . --ext .ts,.tsx`
  - `typecheck`: `tsc --noEmit`
  - `build`: `vite build`
  - `storybook` / `build-storybook`

## Testing Strategy

- Unit: sort/filter utilities and selectors.
- Component: `CoinTable`, `Filters`, `SearchInput` with RTL; mock network via MSW server.
- Contract: Zod schemas validating fixture/response shape; narrow types at the boundary.

## Accessibility & Performance

- Semantic elements, focus outlines, keyboard navigation.
- Virtualized table rows for large lists once needed.
- Lazy-load Recharts-based components; Suspense + skeletons.
- Memoize row renders and pure selectors.

## CI/CD

- GitHub Actions: Node 20; cache npm; run lint, typecheck, test (with MSW), build, and Storybook build.
- Upload build artifacts for preview.

## Acceptance Criteria (MVP)

- App boots to `/` showing mock market data table and a Recharts line chart.
- Switching `VITE_USE_MOCKS=false` swaps MSW off without code changes (endpoints remain stable).
- Lint, typecheck, test, and build succeed locally and in CI.
- Storybook shows shared components and `CoinCard`/`CoinRow`.
- `docs/implementation-plan.md` exists with this content.

