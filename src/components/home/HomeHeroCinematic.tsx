import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import { Container } from '../Container'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const GROW_SCROLL_PX = 500

export function HomeHeroCinematic() {
  const panelRef = useRef<HTMLElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const panel = panelRef.current
    const box = boxRef.current
    if (!panel || !box) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const smoother =
      ScrollSmoother.get() ??
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: false,
      })

    const ctx = gsap.context(() => {
      const applyCenteredStart = () => {
        const { width, height } = box.getBoundingClientRect()
        gsap.set(box, {
          position: 'fixed',
          left: '50%',
          top: '50%',
          width,
          height,
          xPercent: -50,
          yPercent: -50,
          zIndex: 90,
          margin: 0,
        })
        return { width, height }
      }

      const start = applyCenteredStart()

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel,
            markers: import.meta.env.DEV,
            start: 'center center',
            end: `+=${GROW_SCROLL_PX}px`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            onRefresh: (self) => {
              if (self.progress === 0) applyCenteredStart()
            },
          },
        })
        .fromTo(
          box,
          {
            width: start.width,
            height: start.height,
            xPercent: -50,
            yPercent: -50,
            immediateRender: false,
          },
          {
            width: '100vw',
            height: '100vh',
            xPercent: -50,
            yPercent: -50,
            zIndex: 90,
            ease: 'none',
          },
          0,
        )
    }, panel)

    queueMicrotask(() => ScrollTrigger.refresh())

    return () => {
      ctx.revert()
      smoother.kill()
    }
  }, [])

  return (
    <section
      ref={panelRef}
      className="panel relative z-0 min-h-viewport w-full overflow-hidden bg-paper"
      aria-label="Introduction"
    >
      <div
        ref={boxRef}
        className="box fixed left-1/2 top-1/2 z-[90] aspect-video w-[min(40vw,452px)] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-none bg-accent will-change-[width,height]"
      >
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Portfolio hero animation"
        >
          <source src="/videos/hero-section.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 8px below video — half of 16:9 height + gap */}
      <a
        href="#about"
        className="editorial-hero-subhead pointer-events-auto fixed left-1/2 z-[80] w-[min(40vw,452px)] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 top-[calc(50%+min(11.25vw,127.125px)+8px)] text-right text-ink transition-opacity duration-200 hover:opacity-80"
      >
        Scroll me
      </a>

      <Container className="pointer-events-none relative z-0 mx-auto flex min-h-viewport w-full max-w-[min(100vw,1440px)] flex-col justify-end px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">
        <div className="pointer-events-auto relative z-0 flex w-full min-w-0 flex-col gap-8 py-4 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="editorial-h1 max-w-[18ch] shrink-0 text-balance">Olesia Astakhova</h1>
          <div className="flex min-w-0 flex-1 flex-col lg:max-w-[561px] lg:items-end">
            <p className="editorial-hero-subhead max-w-[40ch] text-left text-pretty leading-[1.38] text-ink/90 lg:max-w-none lg:text-right lg:tracking-[-0.01em]">
              A Dublin-based graphic communication designer specialising in branding and typography, from concept
              through to print and digital production.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
