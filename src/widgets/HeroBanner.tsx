import { Card } from '../shared/components/Card'
import { Button } from '../shared/components/Button'
import type { FC } from 'react'

export const HeroBanner: FC = () => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 p-6 h-56 flex flex-col justify-between">
      <div className="max-w-md space-y-2">
        <p className="text-xs tracking-widest text-muted">ETHEREUM 2.0</p>
        <h2 className="text-2xl font-bold leading-tight">
          Your Gateway into Blockchain
        </h2>
        <p className="text-muted text-sm">
          Paronia is a blockchain platform. We make blockchain accessible.
        </p>
      </div>
      <div>
        <Button>Learn More</Button>
      </div>
      <div className="pointer-events-none absolute -right-10 -bottom-12 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-16 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
    </Card>
  )
}
