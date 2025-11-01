import { useMemo, useState, type FC } from 'react'
import { Card } from '../shared/components/Card'
import { LineChart } from '../shared/components/LineChart'
import type { Coin } from '../entities/coin'

type Props = { coins: Coin[] }

export const PairChart: FC<Props> = ({ coins }) => {
  const [selectedId, setSelectedId] = useState<string>(coins?.[0]?.id || '')
  const [range, setRange] = useState<'1D' | '1W' | '1M'>('1D')

  const selected = useMemo(
    () => coins.find((c) => c.id === selectedId) || coins[0],
    [coins, selectedId],
  )
  const data = useMemo(() => {
    const pts = (selected?.sparkline_in_7d?.price || []).map((y, i) => ({
      x: i,
      y,
    }))
    if (range === '1D') return pts.slice(-24)
    if (range === '1W') return pts.slice(-24 * 7)
    return pts
  }, [selected, range])

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/70">PAIR</span>
          <select
            className="bg-white/5 border border-white/10 rounded-md px-2 py-1 text-sm"
            value={selected?.id}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            {coins.slice(0, 10).map((c) => (
              <option key={c.id} value={c.id}>
                {c.symbol.toUpperCase()}/USD
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          {(['1D', '1W', '1M'] as const).map((r) => (
            <button
              key={r}
              className={`px-2 py-1 rounded-md text-xs ${range === r ? 'bg-white/10' : 'hover:bg-white/5'}`}
              onClick={() => setRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <LineChart data={data} />
    </Card>
  )
}
