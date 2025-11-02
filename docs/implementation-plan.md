# Crypto Dashboard – Implementation Plan (Updated)

## Overview

Vite + React + TypeScript + Tailwind. Redux Toolkit with RTK Query, React Router, Recharts for charts, Jest + Testing Library for tests, and Storybook for component previews. Dev uses MSW with fixtures; production can point to a real API via env.

## Key Decisions (as implemented)

- Data source
  - Dev: MSW serves fixtures under `/api` (worker generated to `public/mockServiceWorker.js`). Toggle via `VITE_USE_MOCKS=true|false`.
  - API base: `coingeckoApi` uses `(process.env as any).VITE_API_BASE_URL || '/api'` for test compatibility.
- Charts
  - Shared `LineChart` wrapper with props: `showYAxis`, `yAxisWidth`, `yDomain`, `compact`, `className`. Adds safe margins/padding to prevent tick clipping.
- Theming & Tailwind
  - CSS variables in `src/shared/styles/tailwind.css`: `--bg`, `--card`, `--text`, `--muted`, `--muted-weak`, `--border`, `--control-bg`, `--control-border`, `--accent` (+ light theme values).
  - Reusable utilities: `.card`, `.section-title`, `.input`, `.text-muted`, `.text-muted-weak`.
- Routing
  - Centralized in `src/routes/index.tsx` (`AppRoutes`) with `/` → `DashboardPage` and a catch-all redirect.
- Error handling
  - `ErrorBoundary` wraps `AppRoutes` to catch render errors and show a themed fallback.
- Testing
  - Jest + RTL with polyfills (`TextEncoder`, `TextDecoder`, `ResizeObserver`) in `src/setupTests.ts`.
  - API test uses a fetch mock (simpler than MSW in Node) to verify RTK Query.
  - Logic test for `sortCoins`. Component test for `DashboardTable` filter.
  - `tsconfig.json` enables `esModuleInterop`.
- Storybook
  - `src/stories/preview.ts` imports Tailwind. Stories added for shared and widget components.

## Current Folder Structure (relevant)

```
src/
  app/
    providers/ThemeProvider.tsx
    store/store.ts
    index.tsx                # App root with ErrorBoundary + Router
  routes/
    index.tsx                # AppRoutes (home + catch-all)
  entities/coin.ts
  features/coins/
    api/coingeckoApi.ts
    api/fixtures/markets.json
    hooks/useSorting.ts
    lib/sort.ts
    tests/sort.test.ts
  shared/components/
    Button.tsx Card.tsx Table.tsx SearchInput.tsx LineChart.tsx ErrorBoundary.tsx
  shared/styles/tailwind.css
  pages/DashboardPage.tsx
  widgets/
    Header.tsx Sidebar.tsx DashboardTable.tsx
    HeroBanner.tsx PairChart.tsx StatCard.tsx QuickTransfer.tsx MarketTrend.tsx
  stories/… (Button, Card, LineChart, SearchInput, Table, Header, Sidebar,
             DashboardTable, HeroBanner, PairChart, StatCard, QuickTransfer, MarketTrend)
  mocks/handlers/coins.ts (dev)
index.tsx
```

## Implemented UI

- Top row: `HeroBanner` + `PairChart` (pair select, 1D/1W/1M range).
- Stats row: `StatsRow` of `StatCard` mini-cards.
- Three-up row: `Market Overview` chart (with Y-axis) + `Quick Transfer` + `Market Trend`.
- Markets table: `DashboardTable` with sorting, search, and compact sparklines confined to the cell.

## Tailwind/Theming Optimizations

- Introduced theme tokens (CSS vars) and replaced repeated inline utilities with reusable classes (`.card`, `.section-title`, `.input`, `.text-muted(-weak)`).
- Borders and tooltip styling now use `var(--border)`/`var(--card)` for consistent theming.

## Testing

- API test: `tests/api/coingeckoApi.test.ts` – mocks `fetch` to return fixtures and asserts RTK Query data.
- Logic test: `tests/logic/sort.test.ts` – verifies `sortCoins` by rank and name.
- Component test: `tests/components/DashboardTable.test.tsx` – filters by query; JSDOM stubs `ResizeObserver`.
- Setup: `src/setupTests.ts` polyfills `TextEncoder`, `TextDecoder`, `ResizeObserver`.

## Storybook

- `preview.ts` loads Tailwind. Stories for all shared and widget components using fixture data; `Header` story wrapped in `ThemeProvider`.

## Environment & Scripts

- `.env` (optional): `VITE_USE_MOCKS=true`, `VITE_API_BASE_URL=https://api.example.com`.
- `npm run dev` (Vite), `npm run storybook`, `npm run test`, `npm run lint`, `npm run typecheck`.
- Dev note: if missing worker, run `npx msw init public --save` (already generated here).

## Error Handling

- `ErrorBoundary` around `<AppRoutes />` with friendly fallback and retry/reload actions.
- `useGetMarketsQuery` loading state handled before rendering table/content.

## Acceptance Criteria (updated)

- Home (`/`) shows hero, pair chart, stats row, market overview + right column, and markets table.
- Y-axis visible in Market Overview; chart labels not clipped.
- Tailwind utilities and theme variables centralize repeated styles.
- Stories render for Button, Card, LineChart, SearchInput, Table, Header, Sidebar, DashboardTable, HeroBanner, PairChart, StatCard, QuickTransfer, MarketTrend.
- Tests: API, logic, and component suites pass locally.

## Next Steps (optional)

- Add error state UI for RTK Query (`error` branch + retry).
- Re-enable `@typescript-eslint/no-explicit-any` and address remaining `any` usages.
- Add CI workflow (lint/typecheck/test/build/storybook) if not present.
