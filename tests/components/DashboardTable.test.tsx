import { render, screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markets = require('../../src/features/coins/api/fixtures/markets.json')
import { DashboardTable } from '../../src/widgets/DashboardTable'
import type { SortKey, SortDir } from '../../src/features/coins/lib/sort'

describe('DashboardTable', () => {
  const coins = markets as any[]

  function renderTable(
    query: string,
    sortKey: SortKey = 'market_cap_rank',
    sortDir: SortDir = 'asc',
  ) {
    const noop = () => {}
    return render(
      <DashboardTable
        coins={coins}
        query={query}
        sortKey={sortKey}
        sortDir={sortDir}
        onSort={noop}
      />,
    )
  }

  it('filters by query text', () => {
    renderTable('eth')
    expect(screen.getByText(/Ethereum/i)).toBeInTheDocument()
    expect(screen.queryByText(/Bitcoin/i)).not.toBeInTheDocument()
  })
})
