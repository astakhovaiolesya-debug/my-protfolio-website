import { useEffect, useId, useRef } from 'react'
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
  const titleId = useId()
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (!open) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => {
      firstLinkRef.current?.focus()
    })

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <div
      id="site-mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={[
        'fixed inset-x-0 bottom-0 z-[95] overflow-y-auto overscroll-none bg-paper/[0.98] backdrop-blur-sm sm:hidden',
        'motion-reduce:transition-none',
        'transition-[opacity,_visibility] duration-200 ease-out',
        open ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0 delay-150',
      ].join(' ')}
      style={{ top: MOBILE_NAV_TOP }}
      aria-hidden={!open}
      onMouseDown={() => open && onClose()}
      tabIndex={-1}
    >
      <div
        className={[
          'mx-auto w-full max-w-[1440px] px-5 pb-24 pt-10 sm:px-8',
          'motion-reduce:transition-none',
          'transition-[transform] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'delay-75 translate-y-0' : 'translate-y-1.5',
        ].join(' ')}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <p id={titleId} className="sr-only">
          Site navigation
        </p>

        <nav className="flex flex-col gap-10" aria-label="Mobile navigation" onMouseDown={(e) => e.stopPropagation()}>
          {items.map((item, index) => (
            <NavLink
              key={item.to}
              {...(index === 0 ? { ref: firstLinkRef } : {})}
              to={item.to}
              onClick={onClose}
              className={({ isActive }: { isActive: boolean }) =>
                [
                  'editorial-kicker inline-flex rounded-[3px] text-ink transition-colors duration-200 hover:text-accent/95 focus-visible:text-ink',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
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
            className="editorial-kicker inline-flex w-fit rounded-[3px] text-ink transition-colors duration-200 hover:text-accent/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Resume
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="editorial-kicker inline-flex w-fit rounded-[3px] text-ink transition-colors duration-200 hover:text-accent/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
