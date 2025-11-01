import { setupServer } from 'msw/node'
import { coinHandlers } from '../../src/mocks/handlers/coins'

export const server = setupServer(...coinHandlers)
