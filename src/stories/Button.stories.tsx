import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../shared/components/Button'

const meta: Meta<typeof Button> = { component: Button, title: 'Shared/Button' }
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Click me' } }


