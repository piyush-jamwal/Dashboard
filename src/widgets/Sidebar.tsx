import { PropsWithChildren } from 'react'

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col gap-4 w-56 p-4 border-r border-white/5">
      <div className="text-lg font-bold">💠 Crypto</div>
      <nav className="flex flex-col gap-2 text-white/80">
        <a className="hover:text-white" href="#">
          Home
        </a>
      </nav>
    </aside>
  )
}

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen grid md:grid-cols-[14rem_1fr]">
      <Sidebar />
      <main className="p-6">{children}</main>
    </div>
  )
}
