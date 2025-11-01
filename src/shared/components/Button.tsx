import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'ghost'
}

export function Button({ className, variant = 'primary', ...props }: Props) {
	return (
		<button
			className={clsx(
				'px-4 py-2 rounded-lg font-medium transition',
				variant === 'primary' && 'bg-indigo-600 hover:bg-indigo-500 text-white',
				variant === 'ghost' && 'bg-transparent hover:bg-white/5 text-inherit',
				className,
			)}
			{...props}
		/>
	)
}


