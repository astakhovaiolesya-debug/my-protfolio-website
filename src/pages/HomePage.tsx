import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function HomePage() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pb-14 pt-10 sm:pt-16">
          <div className="flex flex-col gap-14 lg:gap-[120px]">
            <div className="flex flex-col items-end gap-2">
              <div className="h-[220px] w-full max-w-[670px] bg-warm/70 sm:h-[300px] lg:h-[366px]" />
              <p className="editorial-kicker text-warm">scroll me</p>
            </div>

            <div className="flex flex-col gap-6 pb-4 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="editorial-h1 max-w-[18ch]">Olesia Astakhova</h1>
              <p className="editorial-subhead max-w-[38ch] text-ink/90 lg:text-right">
                A Dublin-based graphic communication designer specialising in branding and typography, from concept
                through to print and digital production.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-[60px]">
          <div className="h-[420px] w-full bg-warm/70 sm:h-[520px] lg:h-[752px]" />
        </Container>
      </section>

      <section>
        <Container className="pb-14 pt-8 sm:pb-20 lg:pt-14">
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

      <section>
        <Container className="pb-16 pt-10 sm:pb-20">
          <div className="flex flex-col gap-10">
            <div className="flex items-end justify-between gap-6 py-4">
              <h2 className="editorial-h1">Selected works</h2>
              <p className="editorial-subhead text-ink/70">2025-2026</p>
            </div>

            <div className="grid gap-10 lg:grid-cols-3 lg:items-end lg:gap-8">
              {projects.slice(0, 3).map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  imageClassName={[
                    'w-full',
                    p.id === 'colab' ? 'h-[520px] lg:h-[594px]' : '',
                    p.id === 'dad' ? 'h-[420px] lg:h-[488px]' : '',
                    p.id === 'istd' ? 'h-[420px] lg:h-[477px]' : '',
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

