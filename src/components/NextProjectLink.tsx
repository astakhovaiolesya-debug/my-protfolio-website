import { Link } from 'react-router-dom'

type NextProjectLinkProps = {
  to: string
  label?: string
  className?: string
}

export function NextProjectLink({ to, label = 'next project', className }: NextProjectLinkProps) {
  return (
    <div className={className}>
      <Link
        to={to}
        className="group inline-flex items-center justify-end gap-2 editorial-kicker text-ink transition-opacity duration-200 hover:opacity-80"
      >
        {label}
        <span className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </div>
  )
}

