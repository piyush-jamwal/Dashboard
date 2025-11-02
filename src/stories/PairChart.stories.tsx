import type { Meta, StoryObj } from '@storybook/react'
import { PairChart } from '../widgets/PairChart'
import markets from '../features/coins/api/fixtures/markets.json'

const meta: Meta<typeof PairChart> = {
  component: PairChart,
  title: 'Widgets/PairChart',
}
export default meta
type Story = StoryObj<typeof PairChart>

export const Default: Story = { args: { coins: markets as any } }
