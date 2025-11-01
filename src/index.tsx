import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { App } from './app/index'
import './shared/styles/tailwind.css'

async function enableMocksIfNeeded() {
	const flag = (import.meta as any).env?.VITE_USE_MOCKS
	if (flag === true || flag === 'true') {
		const { initMocks } = await import('./mocks')
		await initMocks()
	}
}

async function bootstrap() {
	await enableMocksIfNeeded()
	const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>,
	)
}

bootstrap()


