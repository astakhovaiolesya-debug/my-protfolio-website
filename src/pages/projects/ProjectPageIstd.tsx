import { Container } from '../../components/Container'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'

export function ProjectPageIstd() {
  return (
    <>
      <ProjectHero
        title="ISTD Typography submission"
        caption="Typography / Editorial Design / Print / Binding"
        brief="Choose a traditional craft or trade that has declined or disappeared and make a case for why it still matters today. Research its history, techniques and social role, then identify a unique insight and develop a creative design outcome in an appropriate format."
        imageSrc="/images/istd-hero.jpg"
        wideTitle
        imageMaxHeight={668}
        imageMaxWidth={558}
      />

      <section aria-label="Project video" className="pb-10">
        {/*
          Full-bleed cinematic video: escape max-width container so width follows the viewport,
          with a stable 16:9 frame and object-cover for an immersive edge-to-edge feel.
        */}
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip bg-warm/10">
          <div className="relative mx-auto aspect-video w-full max-h-[min(88svh,_980px)] min-h-[200px] sm:min-h-[min(42vw,_520px)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/videos/OlesiaAstakhova_02_Thumbnail.jpg"
            >
              <source src="/videos/OlesiaAstakhova_02_Video.mp4" type="video/mp4" />
              <source src="/videos/OlesiaAstakhova_02_Video.mov" type="video/quicktime" />
              Download the{' '}
              <a href="/videos/OlesiaAstakhova_02_Video.mp4" className="underline underline-offset-2">
                video (MP4)
              </a>
              .
            </video>
          </div>
        </div>
      </section>

      <section>
        <Container className="py-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,1fr)] lg:items-end lg:gap-[30px]">
            <div className="space-y-2">
              <p className="editorial-subhead">MY APPROACH:</p>
              <p className="max-w-[60ch] whitespace-pre-wrap text-ink/75">
                This project responds to the ISTD Trade Matters brief by focusing on pysanka, a traditional Ukrainian
                craft of decorating eggs with symbolic patterns, historically rooted in ritual, heritage and community
                life. Once a shared family practice connecting generations and belief systems, pysanka is increasingly
                recognised but rarely practiced, particularly among younger and urban audiences.
              </p>
            </div>

            <div className="overflow-hidden bg-warm/10">
              <img src="/images/istd-approach.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-10 pt-2">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,742px)_minmax(0,1fr)]">
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/istd-spread-1.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="overflow-hidden bg-warm/10">
              <img src="/images/istd-spread-2.jpg" alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex justify-end py-8">
          <NextProjectLink to="/works/shane-macgowan-merchandise" />
        </Container>
      </section>
    </>
  )
}
