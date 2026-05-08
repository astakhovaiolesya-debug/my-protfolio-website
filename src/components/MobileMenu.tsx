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
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlTouch = document.documentElement.style.touchAction
    const previousBodyTouch = document.body.style.touchAction

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.documentElement.style.touchAction = 'none'
    document.body.style.touchAction = 'none'

    const timer = window.setTimeout(() => {
      firstLinkRef.current?.focus()
    })

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const root = panelRef.current
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null || el.getClientRects().length > 0)

      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (event.shiftKey) {
        if (active === first || !root.contains(active)) {
          event.preventDefault()
          last.focus()
        }
      } else if (active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.clearTimeout(timer)
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.touchAction = previousHtmlTouch
      document.body.style.touchAction = previousBodyTouch
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <div
      id="site-mobile-menu"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={[
        // Below sticky header (z-100) so the bar + burger stay interactive; above in-flow page content.
        'fixed inset-x-0 bottom-0 z-[99] sm:hidden',
        'overscroll-none bg-paper/[0.98] backdrop-blur-sm',
        'transition-opacity duration-200 ease-out motion-reduce:transition-none',
        'transition-[visibility] duration-200 ease-out motion-reduce:transition-none',
        open ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0',
      ].join(' ')}
      style={{ top: MOBILE_NAV_TOP }}
      aria-hidden={!open}
      tabIndex={-1}
    >
      {/* Dimmed tap-outside layer (does not cover header: starts below it) */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        className={[
          'fixed inset-x-0 bottom-0 z-0 bg-ink/[0.04] motion-reduce:transition-none',
          'transition-opacity duration-200 ease-out',
          open ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
        style={{ top: MOBILE_NAV_TOP }}
        onPointerDown={(e) => {
          if (!open) return
          e.preventDefault()
          onClose()
        }}
      />

      <div
        className={[
          'relative z-[1] mx-auto w-full max-w-[1440px] px-5 pb-28 pt-10 sm:px-8',
          'motion-reduce:transition-none',
          'transition-[transform,opacity] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-95',
        ].join(' ')}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <p id={titleId} className="sr-only">
          Site navigation
        </p>

        <nav className="flex flex-col gap-10" aria-label="Mobile navigation" onPointerDown={(e) => e.stopPropagation()}>
          {items.map((item, index) => (
            <NavLink
              key={item.to}
              {...(index === 0 ? { ref: firstLinkRef } : {})}
              to={item.to}
              onClick={onClose}
              className={({ isActive }: { isActive: boolean }) =>
                [
                  'editorial-kicker inline-flex touch-manipulation rounded-[3px] text-ink transition-colors duration-200 hover:text-accent/95 focus-visible:text-ink',
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
            className="editorial-kicker inline-flex w-fit touch-manipulation rounded-[3px] text-ink transition-colors duration-200 hover:text-accent/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Resume
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="editorial-kicker inline-flex w-fit touch-manipulation rounded-[3px] text-ink transition-colors duration-200 hover:text-accent/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
