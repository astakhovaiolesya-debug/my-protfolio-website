import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

const items = [
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
]

/** Matches sticky header: py-4 + 56px logo */
const MOBILE_NAV_TOP = 88

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <div
      className={[
        'fixed inset-x-0 bottom-0 z-[90] overflow-y-auto bg-paper sm:hidden',
        'transition-opacity duration-300',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      ].join(' ')}
      style={{ top: MOBILE_NAV_TOP }}
      aria-hidden={!open}
      onClick={onClose}
    >
      <div
        className={[
          'mx-auto w-full max-w-[1440px] px-5 pb-16 pt-12 sm:px-8',
          'transition-transform duration-300',
          open ? 'translate-y-0' : '-translate-y-2',
        ].join(' ')}
        onClick={(event) => event.stopPropagation()}
      >
        <nav className="flex flex-col gap-10" aria-label="Mobile">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }: { isActive: boolean }) =>
                [
                  'editorial-kicker w-max text-ink transition-colors duration-200',
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
            onClick={onClose}
            className="editorial-kicker w-max text-ink transition-colors duration-200"
          >
            Resume
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="editorial-kicker w-max text-ink transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
