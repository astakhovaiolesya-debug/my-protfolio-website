import { Container } from '../../components/Container'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'
import { getNextProjectHref } from '../../data/projects'

export function ProjectPageDad() {
  return (
    <>
      <ProjectHero
        title={
          <>
            D&amp;AD <br className="hidden lg:block" />
            awards brief
          </>
        }
        caption="Motion Graphics / Social Media / Visual Storytelling"
        brief="Secret 7” is a charity project where musicians and artists collaborate to create unique vinyl records, raising funds for War Child. For its 10th anniversary, the brief invited a series of social media content (reels or stories) that captures the story."
        imageSrc="/images/iphone-mockup-1.jpg"
        imageMaxHeight={756}
        imageMaxWidth={673}
      />

      <section aria-label="Featured motion reel" className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip bg-paper py-8 sm:py-10 lg:py-12">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[min(100%,_min(92vw,_540px))] max-h-[min(92svh,_980px)] min-w-0 lg:max-h-[min(88svh,_1024px)]">
          <video
            className="absolute inset-0 h-full w-full bg-warm/[0.12] object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/animation.mp4" type="video/mp4" />
            Download the{' '}
            <a href="/videos/animation.mp4" className="underline underline-offset-2">
              video (MP4)
            </a>
            .
          </video>
        </div>
      </section>

      <section>
        <Container className="py-10 sm:py-12 lg:pb-14 lg:pt-6">
          <div className="max-w-[60ch] space-y-2">
            <p className="editorial-subhead">MY APPROACH:</p>
            <p className="text-ink/75">
              The concept focuses on transforming music into meaningful impact through visual storytelling. The
              animation begins with themes of global conflict and disconnection, transitioning into a narrative of
              creativity, collaboration, and collective action.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex justify-end py-8">
          <NextProjectLink to={getNextProjectHref('/works/dad-awards-brief')} />
        </Container>
      </section>
    </>
  )
}
