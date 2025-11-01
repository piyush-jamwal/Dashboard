import { PropsWithChildren } from 'react'
import clsx from 'clsx'

type Props = PropsWithChildren<{ className?: string }>

export function Card({ className, children }: Props) {
	return <div className={clsx('card p-4', className)}>{children}</div>
}


