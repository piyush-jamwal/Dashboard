import { SearchInput } from '../shared/components/SearchInput'
import { Button } from '../shared/components/Button'
import { useTheme } from '../app/providers/ThemeProvider'

type Props = { query: string; onQuery: (v: string) => void }

export function Header({ query, onQuery }: Props) {
	const { theme, toggle } = useTheme()
	return (
		<header className="flex items-center justify-between gap-4">
			<h1 className="text-xl font-semibold">Dashboard</h1>
			<div className="flex items-center gap-3 w-full max-w-md ml-auto">
				<SearchInput value={query} onChange={(e) => onQuery(e.target.value)} />
				<Button variant="ghost" onClick={toggle}>{theme === 'dark' ? '🌙' : '☀️'}</Button>
			</div>
		</header>
	)
}


