import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function WorksPage() {
  const [rowOne, rowTwo] = [projects.slice(0, 3), projects.slice(3)]

  return (
    <section className="section-y-tight">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 py-2 sm:py-4">
            <h1 className="editorial-h1">Selected works</h1>
            <p className="editorial-subhead shrink-0 text-ink/70">2025-2026</p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
            {rowOne.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={project.cardClassName}
                imageClassName={project.imageClassName}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 sm:gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
            {rowTwo.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={project.cardClassName}
                imageClassName={project.imageClassName}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
