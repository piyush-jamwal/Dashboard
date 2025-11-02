import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import { AppRoutes } from '../routes'
import { ErrorBoundary } from '../shared/components/ErrorBoundary'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
                <ErrorBoundary>
                    <AppRoutes />
                </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  )
}
