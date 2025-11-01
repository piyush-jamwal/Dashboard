import { sortCoins } from '../../coins/lib/sort'
import type { Coin } from '../../../entities/coin'

const sample: Coin[] = [
	{ id: 'a', symbol: 'a', name: 'Alpha', image: '', current_price: 2, price_change_percentage_24h: 1, market_cap_rank: 2 },
	{ id: 'b', symbol: 'b', name: 'Beta', image: '', current_price: 1, price_change_percentage_24h: -1, market_cap_rank: 1 },
]

test('sort by current_price asc/desc', () => {
	const asc = sortCoins(sample, 'current_price', 'asc')
	expect(asc[0].current_price).toBe(1)
	const desc = sortCoins(sample, 'current_price', 'desc')
	expect(desc[0].current_price).toBe(2)
})


