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

      <div className="flex flex-col gap-8">
        {/* Figma 150:447 — motion reel, left-aligned, 323×575 frame */}
        <section aria-label="Featured motion reel">
          <Container className="py-6">
            <div className="relative aspect-[323/575] w-full max-w-[323px] min-w-0">
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
          </Container>
        </section>

        {/* Figma 150:448 — approach copy, 570px measure */}
        <section>
          <Container className="py-6">
            <div className="max-w-[570px] space-y-2">
              <p className="editorial-subhead">MY APPROACH:</p>
              <p className="max-w-[439px] text-[14px] leading-normal text-ink/75">
                The concept focuses on transforming music into meaningful impact through visual storytelling. The
                animation begins with themes of global conflict and disconnection, transitioning into a narrative of
                creativity, collaboration, and collective action. Using a mixed media approach, the animation combines
                contrasting styles to create an emotional progression. Key metaphors, such as the transformation of a
                vinyl record into a coin, highlight how art and music can generate real world support.
              </p>
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex justify-end py-8">
            <NextProjectLink to={getNextProjectHref('/works/dad-awards-brief')} />
          </Container>
        </section>
      </div>
    </>
  )
}
