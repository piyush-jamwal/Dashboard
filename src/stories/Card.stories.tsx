import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../shared/components/Card'

const meta: Meta<typeof Card> = { component: Card, title: 'Shared/Card' }
export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  render: () => (
    <Card>
      <div className="space-y-2">
        <h3 className="section-title">Card Title</h3>
        <p className="text-muted">
          This is a reusable card with theme variables.
        </p>
      </div>
    </Card>
  ),
}
