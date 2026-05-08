import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function RootLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-dvh min-w-0 overflow-x-clip bg-paper text-ink">
      <Navbar variant={isHome ? 'light' : 'light'} />
      <main className="min-w-0">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

