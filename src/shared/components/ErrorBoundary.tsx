import { Component, PropsWithChildren, ReactNode } from 'react'
import { Card } from './Card'
import { Button } from './Button'

type State = { hasError: boolean; error?: unknown }

export class ErrorBoundary extends Component<
  PropsWithChildren<{ fallback?: ReactNode }>,
  State
> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: unknown): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Hook for logging to external service if needed
    // console.error('ErrorBoundary caught', error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return <>{this.props.fallback}</>
      return (
        <div className="p-6">
          <Card className="p-6">
            <h2 className="section-title">Something went wrong</h2>
            <p className="text-muted-weak mb-4">
              Try again, or reload the page.
            </p>
            <div className="flex gap-3">
              <Button onClick={this.handleRetry}>Try again</Button>
              <Button variant="ghost" onClick={() => window.location.reload()}>
                Reload
              </Button>
            </div>
          </Card>
        </div>
      )
    }
    return this.props.children
  }
}
