import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { HomeHeroCinematic } from '../components/home/HomeHeroCinematic'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function HomePage() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HomeHeroCinematic />

        <section
          id="about"
          className="relative z-10 bg-paper section-y scroll-mt-[calc(5.5rem+1rem)] lg:scroll-mt-[calc(6.75rem+1rem)]"
        >
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

        <section className="relative z-10 bg-paper section-y">
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
                    className={p.cardClassName}
                    imageClassName={p.imageClassName}
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

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  )
}
