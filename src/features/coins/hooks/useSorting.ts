import { useMemo, useState } from 'react'
import type { Coin } from '../../../entities/coin'
import { sortCoins, SortDir, SortKey } from '../lib/sort'

export function useSorting(initialKey: SortKey = 'market_cap_rank', initialDir: SortDir = 'asc') {
	const [key, setKey] = useState<SortKey>(initialKey)
	const [dir, setDir] = useState<SortDir>(initialDir)

	function toggle(nextKey: SortKey) {
		if (key === nextKey) setDir((d) => (d === 'asc' ? 'desc' : 'asc'))
		else {
			setKey(nextKey)
			setDir('asc')
		}
	}

	function apply(data: Coin[]) {
		return useMemo(() => sortCoins(data, key, dir), [data, key, dir])
	}

	return { key, dir, toggle, apply }
}


