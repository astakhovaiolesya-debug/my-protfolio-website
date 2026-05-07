import { Link } from 'react-router-dom'
import { type Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  className?: string
  imageClassName?: string
}

export function ProjectCard({ project, className, imageClassName }: ProjectCardProps) {
  return (
    <Link
      to={project.href}
      className={[
        'group block',
        'transition-[transform,opacity] duration-300 hover:-translate-y-0.5 active:translate-y-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={['relative overflow-hidden bg-warm/10', imageClassName].filter(Boolean).join(' ')}>
        <img
          src={project.coverImage}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-6 space-y-2">
        <p className="editorial-subhead text-ink">{`${project.number} ${project.title}`}</p>
        <p className="editorial-caption">{project.subtitle}</p>
      </div>
    </Link>
  )
}

