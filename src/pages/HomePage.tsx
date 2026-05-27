import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function HomePage() {
  return (
    <>
      {/*
        Hero (Figma website-portfolio 2:2): 800px desktop column, textured 16:9 block + “Scroll me”,
        then name row with 160px gap. Animations: slow texture drift, scroll cue bounce, staged fade-up on copy.
      */}
      <section className="flex min-h-viewport flex-col overflow-hidden overflow-x-clip bg-paper lg:min-h-[800px]">
        <Container className="flex w-full flex-1 flex-col justify-end px-4 pb-10 pt-12 sm:px-8 lg:max-w-none lg:px-8 xl:max-w-none">
          <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-16 lg:gap-[160px]">
            <div className="flex w-full flex-col items-center lg:items-end">
              <div className="flex w-full max-w-[452px] flex-col gap-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-accent">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 motion-reduce:relative motion-reduce:inset-auto motion-reduce:left-auto motion-reduce:top-auto motion-reduce:h-full motion-reduce:w-full motion-reduce:translate-x-0 motion-reduce:translate-y-0">
                      <div className="size-full origin-center motion-safe:animate-hero-texture motion-reduce:animate-none">
                        <img
                          src="/images/hero-animation.png"
                          alt=""
                          className="pointer-events-none h-full w-full select-none object-cover object-center"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#about"
                  className="editorial-hero-subhead mr-1 block max-w-[14ch] text-right opacity-90 motion-safe:animate-hero-scroll-cue motion-reduce:animate-none"
                >
                  Scroll me
                </a>
              </div>
            </div>

            <div className="flex w-full min-w-0 flex-col gap-8 py-4 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="editorial-h1 max-w-[18ch] shrink-0 text-balance opacity-0 motion-safe:animate-hero-fade-up motion-reduce:animate-none motion-reduce:opacity-100 [animation-delay:120ms]">
                Olesia Astakhova
              </h1>
              <div className="flex min-w-0 flex-1 flex-col lg:max-w-[561px] lg:items-end">
                <p className="editorial-hero-subhead max-w-[40ch] text-left text-pretty leading-[1.38] lg:max-w-none lg:text-right lg:tracking-[-0.01em] opacity-0 motion-safe:animate-hero-fade-up motion-reduce:animate-none motion-reduce:opacity-100 [animation-delay:260ms]">
                  A Dublin-based graphic communication designer specialising in branding and typography, from concept
                  through to print and digital production.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="section-y scroll-mt-24">
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
    </>
  )
}

