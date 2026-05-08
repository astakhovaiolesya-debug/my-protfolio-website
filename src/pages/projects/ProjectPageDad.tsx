import { Container } from '../../components/Container'
import { NextProjectLink } from '../../components/NextProjectLink'

export function ProjectPageDad() {
  return (
    <>
      <section>
        <Container className="pb-10 pt-10 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,673px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="editorial-h1">
                  D&amp;AD <br className="hidden lg:block" />
                  awards brief
                </h1>
                <p className="editorial-caption">Motion Graphics / Social Media / Visual Storytelling</p>
              </div>

              <div className="space-y-2">
                <p className="editorial-subhead">THE BRIEF:</p>
                <p className="max-w-[60ch] text-ink/75">
                  Secret 7” is a charity project where musicians and artists collaborate to create unique vinyl
                  records, raising funds for War Child. For its 10th anniversary, the brief invited a series of social
                  media content (reels or stories) that captures the story.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-warm/10">
              <img src="/images/iphone-mockup-1.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section aria-label="Featured motion reel" className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip bg-paper py-8 sm:py-10 lg:py-12">
        <div className="relative mx-auto aspect-[323/575] max-h-[min(92svh,_980px)] w-full min-w-0 lg:max-h-[min(88svh,_1024px)] lg:max-w-[min(92vw,_900px)]">
          <video
            className="absolute inset-0 h-full w-full bg-warm/[0.12] object-cover"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/animation_sound_effects.mp4" type="video/mp4" />
            <source src="/videos/animation_sound_effects.mov" type="video/quicktime" />
            Download the{' '}
            <a href="/videos/animation_sound_effects.mp4" className="underline underline-offset-2">
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
          <NextProjectLink to="/works/istd-typography-submission" />
        </Container>
      </section>
    </>
  )
}

