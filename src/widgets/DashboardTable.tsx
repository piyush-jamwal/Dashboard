import { Coin } from '../entities/coin'
import { Table, THead, TBody, Th, Td } from '../shared/components/Table'
import { LineChart } from '../shared/components/LineChart'
import { SortDir, SortKey } from '../features/coins/lib/sort'

type Props = {
  coins: Coin[]
  query: string
  sortKey: SortKey
  sortDir: SortDir
  onSort: (key: SortKey) => void
}

export function DashboardTable({
  coins,
  query,
  sortKey,
  sortDir,
  onSort,
}: Props) {
  const q = query.trim().toLowerCase()
  const visible = coins.filter(
    (c) =>
      c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q),
  )

  function header(label: string, key: SortKey) {
    const active = sortKey === key
    const arrow = !active ? '' : sortDir === 'asc' ? '↑' : '↓'
    return (
      <button
        className="inline-flex items-center gap-1"
        onClick={() => onSort(key)}
      >
        <span>{label}</span>
        <span className="text-white/40 text-[10px]">{arrow}</span>
      </button>
    )
  }

  return (
    <Table>
      <THead>
        <tr>
          <Th>{header('#', 'market_cap_rank')}</Th>
          <Th>{header('Coin', 'name')}</Th>
          <Th>{header('Price', 'current_price')}</Th>
          <Th>{header('24h', 'price_change_percentage_24h')}</Th>
          <Th>7d</Th>
        </tr>
      </THead>
      <TBody>
        {visible.map((c) => (
          <tr key={c.id}>
            <Td>{c.market_cap_rank}</Td>
            <Td className="flex items-center gap-2">
              <img src={c.image} alt="" className="w-5 h-5 rounded-full" />
              <span className="font-medium">{c.name}</span>
              <span className="text-white/50 uppercase">{c.symbol}</span>
            </Td>
            <Td>${c.current_price.toLocaleString()}</Td>
            <Td
              className={
                c.price_change_percentage_24h >= 0
                  ? 'text-emerald-400'
                  : 'text-rose-400'
              }
            >
              {c.price_change_percentage_24h.toFixed(2)}%
            </Td>
            <Td>
              <div className="h-8 w-28 overflow-hidden">
                <LineChart
                  compact
                  className="h-full"
                  data={(c.sparkline_in_7d?.price || []).map((y, i) => ({
                    x: i,
                    y,
                  }))}
                />
              </div>
            </Td>
          </tr>
        ))}
      </TBody>
    </Table>
  )
}
