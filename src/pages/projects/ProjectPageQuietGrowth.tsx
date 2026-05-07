import { Container } from '../../components/Container'
import { NextProjectLink } from '../../components/NextProjectLink'

export function ProjectPageQuietGrowth() {
  return (
    <>
      <section>
        <Container className="pb-10 pt-10 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,673px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="editorial-h1">
                  Quiet Growth <br className="hidden lg:block" />
                  branding
                </h1>
                <p className="editorial-caption">Logo Design / Brand Identity / Print</p>
              </div>

              <div className="space-y-2">
                <p className="editorial-subhead">THE BRIEF:</p>
                <p className="max-w-[60ch] text-ink/75">
                  Design a brand with a clear purpose and a product offer that connects emotionally with its audience,
                  tells a compelling story, and is ready to be presented to Irish retailers and buyers at Showcase
                  Ireland 2026.
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-warm/10">
              <img src="/images/quiet-mockup.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="space-y-2">
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

            <div className="overflow-hidden bg-warm/10 lg:rotate-[-90deg] lg:origin-center">
              <img src="/images/quiet-stationery.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex justify-end py-8">
          <NextProjectLink to="/works" label="back to works" />
        </Container>
      </section>
    </>
  )
}

