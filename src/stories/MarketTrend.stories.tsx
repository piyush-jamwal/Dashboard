import type { Meta, StoryObj } from '@storybook/react'
import { MarketTrend } from '../widgets/MarketTrend'
import markets from '../features/coins/api/fixtures/markets.json'

const meta: Meta<typeof MarketTrend> = {
  component: MarketTrend,
  title: 'Widgets/MarketTrend',
}
export default meta
type Story = StoryObj<typeof MarketTrend>

export const Default: Story = { args: { coins: markets as any } }
