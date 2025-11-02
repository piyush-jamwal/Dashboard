import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { DashboardTable } from '../widgets/DashboardTable'
import markets from '../features/coins/api/fixtures/markets.json'
import type { SortKey, SortDir } from '../features/coins/lib/sort'

const meta: Meta<typeof DashboardTable> = {
  component: DashboardTable,
  title: 'Widgets/DashboardTable',
}
export default meta
type Story = StoryObj<typeof DashboardTable>

export const Interactive: Story = {
  render: (() => {
    const coins = markets as any
    const [key, setKey] = useState<SortKey>('market_cap_rank')
    const [dir, setDir] = useState<SortDir>('asc')
    const onSort = (k: SortKey) => {
      if (k === key) setDir((d) => (d === 'asc' ? 'desc' : 'asc'))
      else {
        setKey(k)
        setDir('asc')
      }
    }
    return (
      <DashboardTable
        coins={coins}
        query=""
        sortKey={key}
        sortDir={dir}
        onSort={onSort}
      />
    )
  }) as StoryFn,
}
