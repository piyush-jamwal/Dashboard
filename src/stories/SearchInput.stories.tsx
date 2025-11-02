import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SearchInput } from '../shared/components/SearchInput'

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
  title: 'Shared/SearchInput',
}
export default meta
type Story = StoryObj<typeof SearchInput>

export const Controlled: Story = {
  render: () => {
    const [q, setQ] = useState('')
    return <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
  },
}
