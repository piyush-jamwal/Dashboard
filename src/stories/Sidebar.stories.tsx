import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '../widgets/Sidebar'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Widgets/Sidebar',
}
export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}
