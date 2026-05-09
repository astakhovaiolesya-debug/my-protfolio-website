import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function RootLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex min-h-viewport min-w-0 flex-col overflow-x-clip bg-paper text-ink">
      <Navbar variant={isHome ? 'light' : 'light'} />
      <main className="min-h-0 min-w-0 flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

