import { store } from '../../src/app/store/store'
import { coingeckoApi } from '../../src/features/coins/api/coingeckoApi'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markets = require('../../src/features/coins/api/fixtures/markets.json')

describe('coingeckoApi.getMarkets', () => {
  it('returns markets using fetch mock', async () => {
    const originalFetch = global.fetch as any
    ;(global as any).fetch = jest.fn(async (input: RequestInfo | URL) => {
      return new Response(JSON.stringify(markets), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }) as any
    })

    const result = await store.dispatch(
      coingeckoApi.endpoints.getMarkets.initiate({ vs_currency: 'usd' }),
    )
    // The RTK Query initiate returns a subscription; unwrap the data from the action.
    const data = (result as any).data
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).toHaveProperty('id')
    ;(global as any).fetch = originalFetch
  })
})
