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
        'group block min-w-0',
        'transition-[transform] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={[
          'relative isolate w-full min-w-0 overflow-hidden rounded-[1px] bg-warm/10',
          // Uniform mobile/tablet thumbnails; heights from `imageClassName` apply at `lg`.
          'aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-0',
          imageClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <img
          src={project.coverImage}
          alt=""
          decoding="async"
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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

