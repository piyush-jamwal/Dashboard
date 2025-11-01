import type { Coin } from '../../../entities/coin'

export type SortKey = 'market_cap_rank' | 'current_price' | 'price_change_percentage_24h' | 'name'
export type SortDir = 'asc' | 'desc'

export function sortCoins(coins: Coin[], key: SortKey, dir: SortDir): Coin[] {
	const factor = dir === 'asc' ? 1 : -1
	return [...coins].sort((a, b) => {
		const av = (a as any)[key]
		const bv = (b as any)[key]
		if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * factor
		return String(av).localeCompare(String(bv)) * factor
	})
}


