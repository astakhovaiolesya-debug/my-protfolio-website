import { NavLink } from 'react-router-dom'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

const items = [
  { to: '/about', label: 'About' },
  { to: '/works', label: 'Works' },
]

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={[
        'pointer-events-none fixed inset-x-0 top-[88px] z-30 sm:hidden',
        open ? 'pointer-events-auto' : '',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto w-full max-w-[1440px] px-5 sm:px-8',
          'transition-all duration-300',
          open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
        ].join(' ')}
      >
        <div className="h-[400px] bg-paper px-0 pt-[30px]">
          <div className="flex flex-col gap-10">
            {items.map((item, idx) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    'editorial-kicker w-fit text-ink transition-colors duration-200',
                    idx === 0 ? 'text-accent' : '',
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
              className="editorial-kicker w-fit text-ink underline decoration-ink/60 decoration-1 underline-offset-2 transition-colors duration-200"
            >
              Resume
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="editorial-kicker w-fit text-ink transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={open ? 'fixed inset-0 top-[88px] -z-10 bg-transparent' : 'hidden'}
      />
    </div>
  )
}

