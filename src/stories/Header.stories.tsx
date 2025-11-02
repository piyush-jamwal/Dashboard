import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Header } from '../widgets/Header'
import { ThemeProvider } from '../app/providers/ThemeProvider'

const meta: Meta<typeof Header> = { component: Header, title: 'Widgets/Header' }
export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: () => {
    const [q, setQ] = useState('')
    return (
      <ThemeProvider>
        <Header query={q} onQuery={setQ} />
      </ThemeProvider>
    )
  },
}
