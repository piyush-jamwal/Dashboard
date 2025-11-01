import { http, HttpResponse } from 'msw'
import markets from '../../features/coins/api/fixtures/markets.json'

const API = '/api'

export const coinHandlers = [
	http.get(`${API}/markets`, () => {
		return HttpResponse.json(markets)
	}),
]


