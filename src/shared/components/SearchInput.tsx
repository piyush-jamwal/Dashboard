import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string }

export function SearchInput({ className, label = 'Search', ...props }: Props) {
  return (
    <label className={clsx('relative block', className)}>
      <span className="sr-only">{label}</span>
      <input
        type="search"
        className="input pl-9"
        placeholder="Search coins..."
        {...props}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-weak">
        🔎
      </span>
    </label>
  )
}
