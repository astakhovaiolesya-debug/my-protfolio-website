import { Container } from '../../components/Container'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'

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

      <section>
        <Container className="pb-8">
          <div className="grid gap-6 lg:grid-cols-[440px_1fr] lg:items-center">
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/colab-grid.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/colab-variations.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
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
                The logo reinterprets a coffee bean as an abstract symbol of community and collaboration. The identity
                draws from Bauhaus principles—not as a literal reference, but as a visual language instantly
                recognisable to creative people.
              </p>
            </div>

            <div className="overflow-hidden bg-warm/10">
              <img src="/images/colab-sticker.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-10 pt-2">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,904px)_minmax(0,1fr)] lg:items-start">
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/colab-posters.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/poster-mockup-2.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex justify-end py-8">
          <NextProjectLink to="/works/dad-awards-brief" />
        </Container>
      </section>
    </>
  )
}
