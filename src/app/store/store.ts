import { configureStore } from '@reduxjs/toolkit'
import { coingeckoApi } from '../../features/coins/api/coingeckoApi'

export const store = configureStore({
	reducer: {
		[coingeckoApi.reducerPath]: coingeckoApi.reducer,
	},
	middleware: (getDefault) => getDefault().concat(coingeckoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


