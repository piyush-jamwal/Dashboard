import type { Meta, StoryObj } from '@storybook/react'
import { QuickTransfer } from '../widgets/QuickTransfer'

const meta: Meta<typeof QuickTransfer> = {
  component: QuickTransfer,
  title: 'Widgets/QuickTransfer',
}
export default meta
type Story = StoryObj<typeof QuickTransfer>

export const Default: Story = {}
