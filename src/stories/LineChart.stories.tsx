import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from '../shared/components/LineChart'

const meta: Meta<typeof LineChart> = {
  component: LineChart,
  title: 'Shared/LineChart',
}
export default meta
type Story = StoryObj<typeof LineChart>

const data = Array.from({ length: 50 }).map((_, i) => ({
  x: i,
  y: Math.sin(i / 5) * 10 + 50,
}))

export const Compact: Story = { args: { data, compact: true } }
export const WithYAxis: Story = { args: { data, showYAxis: true } }
