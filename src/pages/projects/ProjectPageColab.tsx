import { Container } from '../../components/Container'
import { CaseStudyImage } from '../../components/CaseStudyImage'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'
import { getNextProjectHref } from '../../data/projects'

export function ProjectPageColab() {
  return (
    <>
      <ProjectHero
        title="Colab branding"
        caption="Logo Design / Brand Identity / Print"
        brief="Design a visual identity for The CoLab, a hybrid coffee shop and co-working space for young creatives to meet, collaborate, and grow."
        imageSrc="/images/colab-sign.jpg"
        imageMaxHeight={761}
        imageMaxWidth={673}
      />

      <div className="flex flex-col gap-8">
        {/* Figma 139:273 — 440×286 + 910×286 */}
        <section aria-label="Logo grid and variations">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,440fr)_minmax(0,910fr)]">
              <CaseStudyImage src="/images/colab-grid.jpg" aspectClassName="aspect-[440/286]" />
              <CaseStudyImage src="/images/colab-variations.jpg" aspectClassName="aspect-[910/286]" />
            </div>
          </Container>
        </section>

        {/* Figma 139:326 — 570px text + 675×471 image */}
        <section>
          <Container className="py-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,675px)] lg:items-end lg:justify-between lg:gap-[30px]">
              <div className="space-y-2">
                <p className="editorial-subhead">MY APPROACH:</p>
                <p className="max-w-[439px] text-[14px] leading-normal text-ink/75">
                  The logo reinterprets a coffee bean as an abstract symbol of community and collaboration. The identity
                  draws from Bauhaus principles—not as a literal reference, but as a visual language instantly
                  recognisable to creative people.
                </p>
              </div>

              <CaseStudyImage
                src="/images/colab-sticker.jpg"
                aspectClassName="aspect-[675/471]"
                className="lg:max-w-[675px] lg:justify-self-end"
              />
            </div>
          </Container>
        </section>

        {/* Figma 139:315 — 904×481 + 436×589 */}
        <section aria-label="Poster applications">
          <Container className="pb-2">
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,904fr)_minmax(0,436fr)]">
              <CaseStudyImage src="/images/colab-posters.jpg" aspectClassName="aspect-[904/481]" />
              <CaseStudyImage src="/images/poster-mockup-2.jpg" aspectClassName="aspect-[436/589]" />
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex justify-end py-8">
            <NextProjectLink to={getNextProjectHref('/works/colab-branding')} />
          </Container>
        </section>
      </div>
    </>
  )
}
