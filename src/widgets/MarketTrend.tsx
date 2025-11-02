import { Card } from '../shared/components/Card'
import type { Coin } from '../entities/coin'
import type { FC } from 'react'

export const MarketTrend: FC<{ coins: Coin[]; className?: string }> = ({
  coins,
  className,
}) => {
  const top = coins.slice(0, 6)
  return (
    <Card className={`p-4 ${className ?? ''}`}>
      <h3 className="section-title">Market Trend</h3>
      <div className="text-xs grid grid-cols-[1.5fr_1fr_1fr] gap-x-2 text-muted-weak mb-2">
        <div>Name</div>
        <div className="text-right">Last Price</div>
        <div className="text-right">24h Change</div>
      </div>
      <div className="divide-y divide-white/5">
        {top.map((c) => (
          <div
            key={c.id}
            className="py-2 grid grid-cols-[1.5fr_1fr_1fr] gap-x-2 items-center"
          >
            <div className="flex items-center gap-2">
              <img src={c.image} alt="" className="w-5 h-5 rounded-full" />
              <span className="text-sm">{c.name}</span>
            </div>
            <div className="text-right">{c.current_price.toLocaleString()}</div>
            <div
              className={`text-right ${c.price_change_percentage_24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}
            >
              {c.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
