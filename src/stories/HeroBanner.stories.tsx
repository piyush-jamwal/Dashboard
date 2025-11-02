import type { Meta, StoryObj } from '@storybook/react'
import { HeroBanner } from '../widgets/HeroBanner'

const meta: Meta<typeof HeroBanner> = {
  component: HeroBanner,
  title: 'Widgets/HeroBanner',
}
export default meta
type Story = StoryObj<typeof HeroBanner>

export const Default: Story = {}
