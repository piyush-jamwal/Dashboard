import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string }

export function SearchInput({ className, label = 'Search', ...props }: Props) {
	return (
		<label className={clsx('relative block', className)}>
			<span className="sr-only">{label}</span>
			<input
				type="search"
				className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-3 outline-none focus:ring-2 focus:ring-indigo-500"
				placeholder="Search coins..."
				{...props}
			/>
			<span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">🔎</span>
		</label>
	)
}


