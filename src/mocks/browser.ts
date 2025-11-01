import { setupWorker } from 'msw/browser'
import { coinHandlers } from './handlers/coins'

export const worker = setupWorker(...coinHandlers)


