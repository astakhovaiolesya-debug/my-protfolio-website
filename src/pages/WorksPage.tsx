import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function WorksPage() {
  return (
    <section>
      <Container className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="flex flex-col gap-10">
          <div className="flex items-end justify-between gap-6 py-4">
            <h1 className="editorial-h1">Selected works</h1>
            <p className="editorial-subhead text-ink/70">2025-2026</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
            <ProjectCard project={projects[0]} imageClassName="h-[520px] lg:h-[594px]" />
            <ProjectCard project={projects[1]} imageClassName="h-[420px] lg:h-[488px]" className="lg:pt-[106px]" />
            <ProjectCard project={projects[2]} imageClassName="h-[420px] lg:h-[477px]" className="lg:pt-[117px]" />
          </div>

          <div className="justify-end grid gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
            <ProjectCard project={projects[3]} imageClassName="h-[420px] lg:h-[477px]" />
            <ProjectCard project={projects[4]} imageClassName="h-[340px] lg:h-[400px]" />
          </div>
        </div>
      </Container>
    </section>
  )
}

