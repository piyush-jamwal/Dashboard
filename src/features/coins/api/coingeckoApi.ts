import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Coin } from '../../../entities/coin'

const baseUrl = (import.meta as any).env?.VITE_API_BASE_URL || '/api'

export const coingeckoApi = createApi({
	reducerPath: 'coingeckoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getMarkets: builder.query<Coin[], { vs_currency: string } | void>({
			query: (args) => {
				const vs = args?.vs_currency ?? 'usd'
				return `markets?vs_currency=${vs}`
			},
		}),
	}),
})

export const { useGetMarketsQuery } = coingeckoApi


