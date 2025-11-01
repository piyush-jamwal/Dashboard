import { Card } from '../shared/components/Card'
import { LineChart } from '../shared/components/LineChart'
import { useGetMarketsQuery } from '../features/coins/api/coingeckoApi'
import { Header } from '../widgets/Header'
import { DashboardTable } from '../widgets/DashboardTable'
import { PageShell } from '../widgets/Sidebar'
import { useSorting } from '../features/coins/hooks/useSorting'
import type { SortKey } from '../features/coins/lib/sort'
import { useState } from 'react'
import { HeroBanner } from '../widgets/HeroBanner'
import { PairChart } from '../widgets/PairChart'
import { StatsRow } from '../widgets/StatCard'
import { QuickTransfer } from '../widgets/QuickTransfer'
import { MarketTrend } from '../widgets/MarketTrend'

export function DashboardPage() {
  const { data: coins = [], isLoading } = useGetMarketsQuery({
    vs_currency: 'usd',
  })
  const { key, dir, toggle, apply } = useSorting('market_cap_rank', 'asc')
  const [query, setQuery] = useState('')

  const sorted = apply(coins)

  return (
    <PageShell>
      <div className="space-y-6">
        <Header query={query} onQuery={setQuery} />
        {/* Top row: hero + pair chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HeroBanner />
          </div>
          <div className="lg:col-span-1">
            <PairChart coins={sorted} />
          </div>
        </div>

        {/* Stats strip */}
        {!isLoading && <StatsRow coins={sorted} />}

        {/* Bottom row: overview + right column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <h2 className="text-sm mb-3 text-white/70">Market Overview</h2>
            <LineChart
              data={(sorted?.[0]?.sparkline_in_7d?.price || []).map((y, i) => ({
                x: i,
                y,
              }))}
            />
          </Card>
          <div className="space-y-6">
            <QuickTransfer />
            <MarketTrend coins={sorted} />
          </div>
        </div>

        {/* Markets table */}
        <Card>
          <h2 className="text-sm mb-3 text-white/70">Markets</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <DashboardTable
              coins={sorted}
              query={query}
              sortKey={key as SortKey}
              sortDir={dir}
              onSort={(k) => toggle(k)}
            />
          )}
        </Card>
      </div>
    </PageShell>
  )
}
