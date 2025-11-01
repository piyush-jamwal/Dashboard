import { PropsWithChildren } from 'react'
import clsx from 'clsx'

export function Table({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <table className={clsx('w-full text-sm', className)}>{children}</table>
}

export function THead({ children }: PropsWithChildren) {
  return (
    <thead className="text-left text-xs uppercase text-white/60">
      {children}
    </thead>
  )
}

export function TBody({ children }: PropsWithChildren) {
  return <tbody className="divide-y divide-white/5">{children}</tbody>
}

export function Th({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <th className={clsx('py-2 px-3 font-medium', className)}>{children}</th>
  )
}

export function Td({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <td className={clsx('py-2 px-3', className)}>{children}</td>
}
