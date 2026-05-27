import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '../Container'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll distance while the hero panel is pinned (see GSAP forum grow + pin pattern).
 * https://gsap.com/community/forums/topic/44912-scrolltrigger-scrollsmoother-grow-an-element-to-full-screen-and-keep-it-fixed-as-a-background/
 */
const GROW_SCROLL_PX = 720

function startBoxSize(): { width: number; height: number } {
  const width = Math.min(window.innerWidth * 0.35, 452)
  const height = (width * 9) / 16
  return { width, height }
}

export function HomeHeroCinematic() {
  const panelRef = useRef<HTMLDivElement>(null)
  const videoShellRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLAnchorElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const textRowRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const panel = panelRef.current
    const box = videoShellRef.current
    const title = titleRef.current
    const bio = bioRef.current
    const cue = scrollCueRef.current
    const row = textRowRef.current
    if (!panel || !box || !title || !bio || !row) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const { width: startW, height: startH } = startBoxSize()

      gsap.set(box, {
        width: startW,
        height: startH,
        borderRadius: 0,
        position: 'relative',
        margin: 0,
      })

      if (reducedMotion) {
        gsap.set(box, {
          width: '100vw',
          height: '100vh',
          position: 'relative',
        })
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

      tl.to(
        box,
        {
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          xPercent: 0,
          yPercent: 0,
          ease: 'none',
        },
        0,
      )

      if (cue) {
        tl.to(cue, { opacity: 0, y: 12, ease: 'none' }, 0)
      }
      tl.to(title, { y: 40, opacity: 0.2, ease: 'none' }, 0)
      tl.to(bio, { y: 56, opacity: 0.2, ease: 'none' }, 0)
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
      className="relative z-0 flex min-h-viewport w-full flex-col bg-paper"
      aria-label="Introduction"
    >
      {/* Full-area stage for centered → fullscreen grow */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          <div
            ref={videoShellRef}
            className="overflow-hidden rounded-none bg-accent will-change-[width,height]"
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
            className="editorial-hero-subhead mr-1 text-right text-ink transition-opacity duration-200 hover:opacity-80"
          >
            Scroll me
          </a>
        </div>
      </div>

      <Container className="relative z-[2] mx-auto flex min-h-viewport w-full max-w-[min(100vw,1440px)] flex-col px-5 pb-[max(2.75rem,env(safe-area-inset-bottom))] pt-[calc(5.75rem+env(safe-area-inset-top))] sm:px-10 sm:pb-16 lg:px-14 lg:pb-20 lg:pt-[calc(7rem+env(safe-area-inset-top))]">
        <div className="flex-1" aria-hidden />

        <div
          ref={textRowRef}
          className="mt-auto flex w-full min-w-0 shrink-0 flex-col gap-12 py-10 sm:gap-14 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20 lg:py-16"
        >
          <h1 ref={titleRef} className="editorial-h1 max-w-[18ch] shrink-0 text-balance will-change-transform">
            Olesia Astakhova
          </h1>
          <div className="flex min-w-0 flex-1 flex-col lg:max-w-[min(561px,42vw)] lg:items-end">
            <p
              ref={bioRef}
              className="editorial-hero-subhead max-w-[40ch] text-left text-pretty leading-[1.45] text-ink/90 will-change-transform lg:max-w-none lg:text-right lg:tracking-[-0.01em]"
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
