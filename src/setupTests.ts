import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { TextEncoder, TextDecoder } from 'util'
// Polyfills must be defined before importing the server (MSW uses TextEncoder)
;(global as any).TextEncoder = TextEncoder
;(global as any).TextDecoder = TextDecoder as any
;(global as any).ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// MSW server is initialized per-test where needed to avoid heavy polyfills across all suites.
