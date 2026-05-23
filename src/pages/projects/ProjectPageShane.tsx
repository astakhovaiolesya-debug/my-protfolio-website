import { Container } from '../../components/Container'
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

      <section>
        <Container className="pb-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/shane-product.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/shane-lighter.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="space-y-2">
              <p className="editorial-subhead">MY APPROACH:</p>
              <p className="max-w-[44ch] text-ink/75">
                Inspired by Bondage (a physical journal MacGowan created before his music career) the design process
                mirrored his own. Collages were hand-built using mixed media, layered paper, textures, and found
                materials, then scanned and refined in Adobe Photoshop.
              </p>
            </div>

            <div className="overflow-hidden bg-warm/10">
              <img src="/images/shane-poster.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-10 pt-2">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,546px)_minmax(0,1fr)] lg:items-start">
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/shane-vinyls.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/shane-shirt.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex justify-end py-8">
          <NextProjectLink to={getNextProjectHref('/works/shane-macgowan-merchandise')} />
        </Container>
      </section>
    </>
  )
}
