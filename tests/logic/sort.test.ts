// Use require to avoid ESM interop quirks in ts-jest for JSON modules
// eslint-disable-next-line @typescript-eslint/no-var-requires
const markets = require('../../src/features/coins/api/fixtures/markets.json')
import { sortCoins } from '../../src/features/coins/lib/sort'

describe('sortCoins', () => {
  it('sorts by market_cap_rank asc', () => {
    const sorted = sortCoins(markets as any[], 'market_cap_rank', 'asc')
    const ranks = sorted.map((c: any) => c.market_cap_rank)
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b))
  })

  it('sorts by name desc', () => {
    const sorted = sortCoins(markets as any[], 'name', 'desc')
    const names = sorted.map((c: any) => c.name)
    const expected = [...names].sort((a, b) => b.localeCompare(a))
    expect(names).toEqual(expected)
  })
})
