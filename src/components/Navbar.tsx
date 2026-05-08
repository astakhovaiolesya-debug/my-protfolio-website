import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'

type NavbarProps = {
  variant?: 'light'
}

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
]

export function Navbar({ variant = 'light' }: NavbarProps) {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const logoSrc = variant === 'light' ? '/images/logo.svg' : '/images/logo.svg'

  return (
    <header className="sticky top-0 z-[100] bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="relative z-[110] mx-auto w-full max-w-[1440px] px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="block size-[56px] sm:size-[60px] transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label="Go to homepage"
          >
            <img src={logoSrc} alt="" className="size-full" />
          </Link>

          <nav className="hidden items-center justify-end gap-10 sm:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    'editorial-kicker text-ink/90 transition-colors duration-200 hover:text-ink',
                    isActive ? 'text-accent' : '',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="https://drive.google.com/file/d/1qDHxu3d8LmdO2OtaCQ-BU-WnIfjSZX4d/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="editorial-kicker text-ink/90 transition-colors duration-200 hover:text-ink"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="editorial-kicker text-ink/90 transition-colors duration-200 hover:text-ink"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="group relative flex h-[22px] w-[40px] flex-col items-center justify-center gap-2 rounded-sm border-0 bg-transparent sm:hidden outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-1 w-[40px] bg-warm transition-transform duration-200 group-aria-expanded:translate-y-[12px] group-aria-expanded:rotate-45" />
            <span className="h-1 w-[40px] bg-warm transition-opacity duration-200 group-aria-expanded:opacity-0" />
            <span className="h-1 w-[40px] bg-warm transition-transform duration-200 group-aria-expanded:-translate-y-[12px] group-aria-expanded:-rotate-45" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

