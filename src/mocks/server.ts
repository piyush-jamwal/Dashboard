import { setupServer } from 'msw/node'
import { coinHandlers } from './handlers/coins'

export const server = setupServer(...coinHandlers)


