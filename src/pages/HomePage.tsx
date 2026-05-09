import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function HomePage() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col overflow-hidden overflow-x-clip lg:min-h-[min(92vh,_840px)]">
        <Container className="flex w-full flex-1 flex-col justify-end pb-14 pt-10 sm:pt-16">
          {/*
            Desktop: editorial block sits on the RIGHT (ml-auto), copy stays LEFT-aligned inside the block.
            Tagline max-width is tuned so the line breaks read as ~3 lines at lg–2xl within the 1440px frame.
          */}
          <div className="flex w-full min-w-0 flex-col pb-4 lg:items-end">
            <div className="flex w-full max-w-full flex-col gap-6 text-left lg:ml-auto lg:gap-8 lg:max-w-[min(44ch,520px)] xl:max-w-[min(42ch,500px)] 2xl:max-w-[min(40ch,480px)]">
              <h1 className="editorial-h1 max-w-[18ch] text-balance lg:max-w-none">Olesia Astakhova</h1>
              <p className="editorial-subhead max-w-[38ch] text-ink/90 text-pretty leading-[1.38] sm:max-w-[40ch] lg:max-w-[44ch] lg:leading-[1.34] xl:max-w-[42ch] 2xl:max-w-[38ch] 2xl:leading-[1.32]">
                A Dublin-based graphic communication designer specialising in branding and typography, from concept
                through to print and digital production.
              </p>
            </div>
          </div>
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

