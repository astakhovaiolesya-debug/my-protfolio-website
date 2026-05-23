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
        largeImage
      />

      <div className="flex flex-col gap-8">
        {/* Figma 150:447 — 439px approach + 323×575 video, gap 260px, px 32 */}
        <section aria-label="My approach and motion reel">
          <Container className="!px-[32px] py-6">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-[260px]">
              <div className="max-w-[439px] shrink-0 space-y-2">
                <p className="editorial-subhead">MY APPROACH:</p>
                <div className="space-y-3 text-[14px] leading-normal text-ink/75">
                  <p>
                    The concept focuses on transforming music into meaningful impact through visual storytelling. The
                    animation begins with themes of global conflict and disconnection, transitioning into a narrative of
                    creativity, collaboration, and collective action.
                  </p>
                  <p>
                    Using a mixed media approach, the animation combines contrasting styles to create an emotional
                    progression. Key metaphors, such as the transformation of a vinyl record into a coin, highlight how
                    art and music can generate real world support.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[323/575] w-full max-w-[323px] shrink-0 overflow-hidden bg-warm/[0.12]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
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
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex justify-end !px-[32px] py-2">
            <NextProjectLink to={getNextProjectHref('/works/dad-awards-brief')} />
          </Container>
        </section>
      </div>
    </>
  )
}
