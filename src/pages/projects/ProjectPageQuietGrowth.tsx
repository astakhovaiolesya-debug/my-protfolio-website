import { Container } from '../../components/Container'
import { CaseStudyImage } from '../../components/CaseStudyImage'
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
        imageSrc="/images/quiet-hero.jpg"
        imageMaxHeight={706}
        imageMaxWidth={673}
        largeImage
      />

      <div className="flex flex-col gap-8">
        {/* Figma 177:558 — 566×422 + 786×422 */}
        <section aria-label="Brand applications">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,566fr)_minmax(0,786fr)]">
              <CaseStudyImage src="/images/quiet-01.jpg" aspectClassName="aspect-[566/422]" />
              <CaseStudyImage src="/images/quiet-02.jpg" aspectClassName="aspect-[786/422]" />
            </div>
          </Container>
        </section>

        {/* Figma 177:562 — 570px text + 673×449 image */}
        <section>
          <Container className="py-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,673px)] lg:items-end lg:justify-between lg:gap-[30px]">
              <div className="min-w-0 space-y-2">
                <p className="editorial-subhead">MY APPROACH:</p>
                <p className="max-w-[439px] whitespace-pre-wrap text-[14px] leading-normal text-ink/75">
                  Quiet Growth is a seeded journal designed for people who want to write, reflect, and let go. Each page
                  created using recycled Irish paper embedded with wildflower seeds. When the pages are full, you can
                  plant it. Written words become new life.

                  The colour palette uses muted, natural tones, chosen specifically with the target audience in mind.
                  Soft and understated colours create a sense of calm and safety. Organic shapes and forms are used
                  throughout the visual identity to reflect sustainability at the core of the product.
                </p>
              </div>

              <CaseStudyImage
                src="/images/quiet-stationery.jpg"
                aspectClassName="aspect-[673/449]"
                className="lg:max-w-[673px] lg:justify-self-end"
              />
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex justify-end py-8">
            <NextProjectLink to={getNextProjectHref('/works/quiet-growth-branding')} />
          </Container>
        </section>
      </div>
    </>
  )
}
