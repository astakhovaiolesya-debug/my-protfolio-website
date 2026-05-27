import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container } from '../Container'

gsap.registerPlugin(ScrollTrigger)

/** Tall scroll runway so the sticky viewport can scrub cinematic motion (~2 viewport heights). */
const SCROLL_EXTEND_VH = 215

export function HomeHeroCinematic() {
  const scrollRootRef = useRef<HTMLDivElement>(null)
  const videoShellRef = useRef<HTMLDivElement>(null)
  const scrollCueRef = useRef<HTMLAnchorElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const textRowRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = scrollRootRef.current
    const shell = videoShellRef.current
    const title = titleRef.current
    const bio = bioRef.current
    const cue = scrollCueRef.current
    const row = textRowRef.current
    if (!root || !shell || !title || !bio || !row) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(shell, { scale: 1, y: 0, borderRadius: '0px', clearProps: 'transform' })
      return
    }

    const ctx = gsap.context(() => {
      const trigger = root

      const scrollTriggerVideo = {
        trigger,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.35,
        invalidateOnRefresh: true,
      }
      const scrollTriggerText = {
        trigger,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      }

      gsap.fromTo(
        shell,
        {
          scale: 1.2,
          y: 64,
          borderRadius: '32px',
          transformOrigin: '50% 50%',
        },
        {
          scale: 1,
          y: -40,
          borderRadius: '0px',
          ease: 'none',
          immediateRender: false,
          scrollTrigger: scrollTriggerVideo,
        },
      )

      gsap.fromTo(title, { y: 0 }, { y: -76, ease: 'none', scrollTrigger: scrollTriggerText })
      gsap.fromTo(bio, { y: 0 }, { y: -120, ease: 'none', scrollTrigger: scrollTriggerText })
      gsap.fromTo(row, { y: 0 }, { y: -28, ease: 'none', scrollTrigger: scrollTriggerText })

      if (cue) {
        gsap.fromTo(cue, { y: 0 }, { y: -48, ease: 'none', scrollTrigger: scrollTriggerText })
      }

      queueMicrotask(() => ScrollTrigger.refresh())
    }, root)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('resize', refresh)

    return () => {
      window.removeEventListener('resize', refresh)
      ctx.revert()
    }
  }, [])

  return (
    <div ref={scrollRootRef} style={{ height: `${SCROLL_EXTEND_VH}vh` }} className="relative w-full">
      <div
        className="sticky top-0 z-0 flex min-h-viewport w-full flex-col overflow-x-clip bg-paper"
      >
        <Container className="mx-auto flex min-h-viewport w-full max-w-[min(100vw,1440px)] flex-col px-5 pb-[max(2.75rem,env(safe-area-inset-bottom))] pt-[calc(5.75rem+env(safe-area-inset-top))] sm:px-10 sm:pb-16 lg:px-14 lg:pb-20 lg:pt-[calc(7rem+env(safe-area-inset-top))]">
          <div className="flex min-h-0 flex-[1_1_auto] flex-col items-center justify-center py-10 sm:py-14 lg:py-16">
            <div className="relative flex w-full max-w-[1400px] flex-col gap-8">
              <div
                ref={videoShellRef}
                className="relative isolate mx-auto w-[min(94vw,calc(100vw-4rem))] max-w-[1200px] overflow-hidden rounded-[32px] bg-accent shadow-[0_48px_100px_-32px_rgba(17,15,15,0.35)] lg:w-[min(92vw,calc(100vw-6rem))] will-change-transform"
              >
                <div className="relative aspect-video w-full">
                  <video
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="Portfolio hero animation"
                  >
                    <source src="/videos/hero-section.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <a
                ref={scrollCueRef}
                href="#about"
                className="editorial-hero-subhead mr-1 block w-full max-w-[min(94vw,1200px)] self-end text-right text-ink transition-opacity duration-200 hover:opacity-80 will-change-transform"
              >
                Scroll me
              </a>
            </div>
          </div>

          <div
            ref={textRowRef}
            className="mt-auto flex w-full min-w-0 shrink-0 flex-col gap-12 py-10 sm:gap-14 sm:py-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20 lg:py-16 will-change-transform"
          >
            <h1
              ref={titleRef}
              className="editorial-h1 max-w-[18ch] shrink-0 text-balance will-change-transform"
            >
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
      </div>
    </div>
  )
}
