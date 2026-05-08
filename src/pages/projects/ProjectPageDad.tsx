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

      <section>
        <Container className="py-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,1fr)] lg:items-end lg:gap-[130px]">
            <div className="space-y-2">
              <p className="editorial-subhead">MY APPROACH:</p>
              <p className="max-w-[44ch] text-ink/75">
                The concept focuses on transforming music into meaningful impact through visual storytelling. The
                animation begins with themes of global conflict and disconnection, transitioning into a narrative of
                creativity, collaboration, and collective action.
              </p>
            </div>

            <div className="min-w-0 w-[min(100%,323px)] justify-self-end overflow-hidden bg-warm/10 aspect-[323/575]">
              <video
                className="block h-full w-full object-cover"
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

