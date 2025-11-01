import { LineChart } from '../shared/components/LineChart'
import type { Coin } from '../entities/coin'
import clsx from 'clsx'
import type { FC } from 'react'

type Props = { coin: Coin }

export const StatCard: FC<Props> = ({ coin }) => {
  const positive = coin.price_change_percentage_24h >= 0
  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <img src={coin.image} alt="" className="w-6 h-6 rounded-full" />
          <div>
            <div className="text-xs text-white/60">
              {coin.symbol.toUpperCase()} / USD
            </div>
            <div className="text-lg font-semibold">
              {coin.current_price.toLocaleString()}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'text-sm font-medium',
            positive ? 'text-emerald-400' : 'text-rose-400',
          )}
        >
          {positive ? '+' : '-'}{' '}
          {Math.abs(coin.price_change_percentage_24h).toFixed(1)}%
        </div>
      </div>
      <div className="h-16">
        <LineChart
          className="h-full"
          compact
          data={(coin.sparkline_in_7d?.price || []).map((y, i) => ({
            x: i,
            y,
          }))}
        />
      </div>
    </div>
  )
}

export const StatsRow: FC<{ coins: Coin[] }> = ({ coins }) => {
  const first = coins.slice(0, 5)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {first.map((c) => (
        <StatCard key={c.id} coin={c} />
      ))}
    </div>
  )
}
