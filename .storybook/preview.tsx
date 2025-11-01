import type { Preview } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/app/store/store'
import { ThemeProvider } from '../src/app/providers/ThemeProvider'
import '../src/shared/styles/tailwind.css'

const preview: Preview = {
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Provider store={store}>
					<div className="p-6">
						<Story />
					</div>
				</Provider>
			</ThemeProvider>
		),
	],
}

export default preview


