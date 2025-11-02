import type { Meta, StoryObj } from '@storybook/react'
import { StatCard, StatsRow } from '../widgets/StatCard'
import markets from '../features/coins/api/fixtures/markets.json'

const coins = markets as any

const meta: Meta<typeof StatCard> = {
  component: StatCard,
  title: 'Widgets/StatCard',
}
export default meta
type Story = StoryObj<typeof StatCard>

export const Single: Story = { args: { coin: coins[0] } }

export const Row: StoryObj<typeof StatsRow> = {
  render: () => <StatsRow coins={coins} />,
}
