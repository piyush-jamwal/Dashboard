import type { Meta, StoryObj } from '@storybook/react'
import { Table, THead, TBody, Th, Td } from '../shared/components/Table'

const meta: Meta<typeof Table> = { component: Table, title: 'Shared/Table' }
export default meta
type Story = StoryObj<typeof Table>

export const Basic: Story = {
  render: () => (
    <Table>
      <THead>
        <tr>
          <Th>Name</Th>
          <Th>Value</Th>
        </tr>
      </THead>
      <TBody>
        <tr>
          <Td>Alpha</Td>
          <Td>123</Td>
        </tr>
        <tr>
          <Td>Beta</Td>
          <Td>456</Td>
        </tr>
      </TBody>
    </Table>
  ),
}
