import { Card } from '../shared/components/Card'
import { Button } from '../shared/components/Button'
import type { FC } from 'react'

export const QuickTransfer: FC = () => {
  return (
    <Card className="p-4">
      <h3 className="text-sm mb-3 text-white/70">Quick Transfer</h3>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex -space-x-2">
          <img
            className="w-8 h-8 rounded-full ring-2 ring-[color:var(--card)]"
            src="https://i.pravatar.cc/32?img=1"
            alt="A"
          />
          <img
            className="w-8 h-8 rounded-full ring-2 ring-[color:var(--card)]"
            src="https://i.pravatar.cc/32?img=2"
            alt="B"
          />
        </div>
        <button className="w-8 h-8 rounded-full border border-white/10 text-white/70">
          +
        </button>
      </div>
      <label className="text-xs text-white/60">Amount</label>
      <div className="text-3xl font-semibold mb-4">$ 3.25</div>
      <Button className="w-full">Transfer Now</Button>
    </Card>
  )
}
