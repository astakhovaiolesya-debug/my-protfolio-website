import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function WorksPage() {
  return (
    <section className="section-y-tight">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 py-2 sm:py-4">
            <h1 className="editorial-h1">Selected works</h1>
            <p className="editorial-subhead shrink-0 text-ink/70">2025-2026</p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
            <ProjectCard project={projects[0]} imageClassName="lg:h-[594px]" />
            <ProjectCard project={projects[1]} imageClassName="lg:h-[488px]" className="lg:pt-[106px]" />
            <ProjectCard project={projects[2]} imageClassName="lg:h-[477px]" className="lg:pt-[117px]" />
          </div>

          {/*
            Two cards in the same 3-column track as row 1: they occupy columns 1–2 (left-aligned).
            The empty third column mirrors common editorial negative space on ultra-wide layouts.
          */}
          <div className="grid grid-cols-1 gap-12 sm:gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
            <ProjectCard project={projects[3]} imageClassName="lg:h-[477px]" />
            <ProjectCard project={projects[4]} imageClassName="lg:h-[400px]" />
          </div>
        </div>
      </Container>
    </section>
  )
}

