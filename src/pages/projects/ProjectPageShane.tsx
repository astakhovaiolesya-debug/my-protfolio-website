import { Container } from '../../components/Container'
import { CaseStudyImage } from '../../components/CaseStudyImage'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'
import { getNextProjectHref } from '../../data/projects'

export function ProjectPageShane() {
  return (
    <>
      <ProjectHero
        title="Shane MacGowan Merchandise"
        caption="Vinyl design / Apparel / Print / Accessories"
        brief="Design a merchandise range for Shane MacGowan that honours his legacy and appeals to a younger audience."
        imageSrc="/images/shane-hero.jpg"
        wideTitle
        imageMaxHeight={647}
        imageMaxWidth={558}
      />

      <div className="flex flex-col gap-8">
        {/* Figma 150:545 — 701×410 + 651×410 */}
        <section aria-label="Product photography">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,701fr)_minmax(0,651fr)]">
              <CaseStudyImage src="/images/shane-product.jpg" aspectClassName="aspect-[701/410]" />
              <CaseStudyImage src="/images/shane-lighter.jpg" aspectClassName="aspect-[651/410]" />
            </div>
          </Container>
        </section>

        {/* Figma 150:549 — 570px text + 559×413 image */}
        <section>
          <Container className="py-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,559px)] lg:items-end lg:justify-between lg:gap-[30px]">
              <div className="space-y-2">
                <p className="editorial-subhead">MY APPROACH:</p>
                <p className="max-w-[439px] text-[14px] leading-normal text-ink/75">
                  Inspired by Bondage (a physical journal MacGowan created before his music career) the design process
                  mirrored his own. Collages were hand-built using mixed media, layered paper, textures, and found
                  materials, then scanned and refined in Adobe Photoshop.
                </p>
              </div>

              <CaseStudyImage
                src="/images/shane-poster.jpg"
                aspectClassName="aspect-[559/413]"
                className="lg:max-w-[559px] lg:justify-self-end"
              />
            </div>
          </Container>
        </section>

        {/* Figma 150:554 — 546×635 + 802×614 */}
        <section aria-label="Merchandise range">
          <Container className="pb-2">
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,546fr)_minmax(0,802fr)]">
              <CaseStudyImage src="/images/shane-vinyls.jpg" aspectClassName="aspect-[546/635]" />
              <CaseStudyImage src="/images/shane-shirt.jpg" aspectClassName="aspect-[802/614]" />
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex justify-end py-8">
            <NextProjectLink to={getNextProjectHref('/works/shane-macgowan-merchandise')} />
          </Container>
        </section>
      </div>
    </>
  )
}
