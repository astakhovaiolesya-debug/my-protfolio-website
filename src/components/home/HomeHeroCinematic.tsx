import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '../Container'

gsap.registerPlugin(ScrollTrigger)

const GROW_SCROLL_PX = 720

export function HomeHeroCinematic() {
  const panelRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const videoShellRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLAnchorElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const textRowRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const panel = panelRef.current
    const center = centerRef.current
    const box = videoShellRef.current
    const title = titleRef.current
    const bio = bioRef.current
    const row = textRowRef.current
    if (!panel || !center || !box || !title || !bio || !row) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: 'top top',
          end: `+=${GROW_SCROLL_PX}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        center,
        {
          position: 'fixed',
          left: '50%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          width: 'min(40vw, 452px)',
          maxWidth: 'calc(100vw - 2.5rem)',
          immediateRender: false,
        },
        {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          ease: 'none',
        },
        0,
      )

      tl.fromTo(box, { height: 'auto' }, { height: '100%', ease: 'none' }, 0)
      tl.to(center, { opacity: 0, pointerEvents: 'none', ease: 'none' }, 0)
      tl.to(title, { y: 32, opacity: 0.15, ease: 'none' }, 0)
      tl.to(bio, { y: 48, opacity: 0.15, ease: 'none' }, 0)
      tl.to(row, { opacity: 0, ease: 'none' }, 0)

      queueMicrotask(() => ScrollTrigger.refresh())
    }, panel)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('resize', refresh)

    return () => {
      window.removeEventListener('resize', refresh)
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={panelRef}
      className="relative z-0 min-h-viewport w-full overflow-hidden bg-paper"
      aria-label="Introduction"
    >
      <div
        ref={centerRef}
        className="pointer-events-auto fixed left-1/2 top-1/2 z-[1] flex w-[min(40vw,452px)] max-w-[calc(100vw-2.5rem)] -translate-x-1/2 -translate-y-1/2 flex-col"
      >
        <div
          ref={videoShellRef}
          className="aspect-video w-full shrink-0 overflow-hidden rounded-none bg-accent will-change-[width,height]"
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
        <a
          ref={scrollCueRef}
          href="#about"
          className="editorial-hero-subhead mt-2 block w-full shrink-0 text-right text-ink transition-opacity duration-200 hover:opacity-80"
        >
          Scroll me
        </a>
      </div>

      <Container className="pointer-events-none relative z-[3] mx-auto flex min-h-viewport w-full max-w-[min(100vw,1440px)] flex-col justify-end px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">
        <div
          ref={textRowRef}
          className="pointer-events-auto flex w-full min-w-0 flex-col gap-8 py-4 sm:gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <h1 ref={titleRef} className="editorial-h1 max-w-[18ch] shrink-0 text-balance will-change-transform">
            Olesia Astakhova
          </h1>
          <div className="flex min-w-0 flex-1 flex-col lg:max-w-[561px] lg:items-end">
            <p
              ref={bioRef}
              className="editorial-hero-subhead max-w-[40ch] text-left text-pretty leading-[1.38] text-ink/90 will-change-transform lg:max-w-none lg:text-right lg:tracking-[-0.01em]"
            >
              A Dublin-based graphic communication designer specialising in branding and typography, from concept
              through to print and digital production.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
