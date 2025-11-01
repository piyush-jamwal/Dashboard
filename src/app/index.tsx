import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage'
import { ThemeProvider } from './providers/ThemeProvider'

export function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}


