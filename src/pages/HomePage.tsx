import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function HomePage() {
  return (
    <>
      {/*
        Hero: full viewport height, content anchored to the bottom (editorial negative space above).
        Desktop matches reference — title lower-left, description column to the right; copy remains text-left
        inside its measure so the right edge of the paragraph lines up with the nav column.
      */}
      <section className="flex min-h-viewport flex-col overflow-hidden overflow-x-clip">
        <Container className="flex min-h-0 w-full min-w-0 flex-1 flex-col justify-end pb-[max(4rem,env(safe-area-inset-bottom,0px))] pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="flex w-full min-w-0 flex-col gap-8 lg:flex-row lg:items-end lg:gap-12 xl:gap-16 2xl:gap-20">
            <h1 className="editorial-h1 max-w-[18ch] shrink-0 text-balance">
              Olesia Astakhova
            </h1>
            <div className="flex min-w-0 flex-1 flex-col lg:items-end">
              <p className="editorial-subhead w-full max-w-[40ch] text-left text-ink/90 text-pretty leading-[1.38] sm:max-w-[42ch] lg:max-w-[min(38ch,34rem)] xl:max-w-[min(40ch,36rem)]">
                A Dublin-based graphic communication designer specialising in branding and typography, from concept
                through to print and digital production.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,673px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="editorial-h1">About</h2>
                <div className="space-y-3">
                  <p className="editorial-subhead max-w-[34ch] text-ink/90">
                    A Dublin-based graphic communication designer specialising in branding and typography, from
                    concept through to print and digital production.
                  </p>
                  <p className="max-w-[60ch] text-ink/75">
                    Design, for me, starts long before any visual decision is made. Each project begins with a
                    question: what should this communicate, and to whom? My work is shaped by restraint, detail, and
                    intention.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 editorial-kicker text-ink transition-opacity duration-200 hover:opacity-80"
              >
                Get to know me
                <span className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>

            <div className="flex justify-start lg:justify-end">
              <div className="aspect-[448/676] w-full max-w-[420px] overflow-hidden bg-warm/10 lg:max-w-[448px]">
                <img src="/images/headshot.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="flex items-end justify-between gap-6 py-4">
              <h2 className="editorial-h1">Selected works</h2>
              <p className="editorial-subhead text-ink/70">2025-2026</p>
            </div>

            <div className="grid grid-cols-1 gap-12 sm:gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
              {projects.slice(0, 3).map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  imageClassName={[
                    p.id === 'colab' ? 'lg:h-[594px]' : '',
                    p.id === 'dad' ? 'lg:h-[488px]' : '',
                    p.id === 'istd' ? 'lg:h-[477px]' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                />
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/works"
                className="group inline-flex items-center gap-2 editorial-kicker text-ink transition-opacity duration-200 hover:opacity-80"
              >
                see all works
                <span className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

