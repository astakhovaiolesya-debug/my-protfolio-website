import { Container } from '../../components/Container'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'
import { getNextProjectHref } from '../../data/projects'

export function ProjectPageQuietGrowth() {
  return (
    <>
      <ProjectHero
        title={
          <>
            Quiet Growth <br className="hidden lg:block" />
            branding
          </>
        }
        caption="Logo Design / Brand Identity / Print"
        brief="Design a brand with a clear purpose and a product offer that connects emotionally with its audience, tells a compelling story, and is ready to be presented to Irish retailers and buyers at Showcase Ireland 2026."
        imageSrc="/images/quiet-mockup.jpg"
        imageMaxHeight={706}
        imageMaxWidth={673}
      />

      <section>
        <Container className="pb-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,566px)_minmax(0,1fr)] lg:items-center">
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/quiet-01.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/quiet-02.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="min-w-0 justify-end space-y-2 lg:py-2">
              <p className="editorial-subhead">MY APPROACH:</p>
              <p className="max-w-[44ch] whitespace-pre-wrap text-ink/75">
                Quiet Growth is a seeded journal designed for people who want to write, reflect, and let go. Each page
                created using recycled Irish paper embedded with wildflower seeds. When the pages are full, you can
                plant it. Written words become new life.

                The colour palette uses muted, natural tones, chosen specifically with the target audience in mind.
                Soft and understated colours create a sense of calm and safety. Organic shapes and forms are used
                throughout the visual identity to reflect sustainability at the core of the product.
              </p>
            </div>

            <div className="flex min-h-[min(40dvh,18rem)] min-w-0 items-center justify-center overflow-hidden bg-warm/10 lg:min-h-[min(70dvh,40rem)]">
              <img
                src="/images/quiet-stationery.jpg"
                alt=""
                className="h-auto w-full max-h-[min(70vh,640px)] object-contain object-center"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex justify-end py-8">
          <NextProjectLink to={getNextProjectHref('/works/quiet-growth-branding')} />
        </Container>
      </section>
    </>
  )
}
