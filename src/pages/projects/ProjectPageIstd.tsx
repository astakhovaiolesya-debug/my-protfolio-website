import { Container } from '../../components/Container'
import { CaseStudyImage } from '../../components/CaseStudyImage'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'
import { getNextProjectHref } from '../../data/projects'

export function ProjectPageIstd() {
  return (
    <>
      <ProjectHero
        title="ISTD Typography submission"
        caption="Typography / Editorial Design / Print / Binding"
        brief="Choose a traditional craft or trade that has declined or disappeared and make a case for why it still matters today. Research its history, techniques and social role, then identify a unique insight and develop a creative design outcome in an appropriate format."
        imageSrc="/images/istd-hero.jpg"
        wideTitle
        imageMaxHeight={575}
        imageMaxWidth={558}
      />

      <div className="flex flex-col gap-8">
        {/* Figma 173:422 — 1378×775 project video */}
        <section aria-label="Project video">
          <Container>
            <div className="relative aspect-[1378/775] w-full overflow-hidden bg-warm/10">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/videos/OlesiaAstakhova_02_Thumbnail.jpg"
              >
                <source src="/videos/OlesiaAstakhova_02_Video.mp4" type="video/mp4" />
                Download the{' '}
                <a href="/videos/OlesiaAstakhova_02_Video.mp4" className="underline underline-offset-2">
                  video (MP4)
                </a>
                .
              </video>
            </div>
          </Container>
        </section>

        {/* Figma 173:425 — 570px text + 558×397 image */}
        <section>
          <Container className="py-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,558px)] lg:items-end lg:justify-between lg:gap-[30px]">
              <div className="space-y-2">
                <p className="editorial-subhead">MY APPROACH:</p>
                <p className="max-w-[570px] whitespace-pre-wrap text-[14px] leading-normal text-ink/75">
                  This project responds to the ISTD Trade Matters brief by focusing on pysanka, a traditional Ukrainian
                  craft of decorating eggs with symbolic patterns, historically rooted in ritual, heritage and community
                  life. Once a shared family practice connecting generations and belief systems, pysanka is increasingly
                  recognised but rarely practiced, particularly among younger and urban audiences.
                </p>
              </div>

              <CaseStudyImage
                src="/images/istd-approach.jpg"
                aspectClassName="aspect-[558/397]"
                className="lg:max-w-[558px] lg:justify-self-end"
              />
            </div>
          </Container>
        </section>

        {/* Figma 312:604 — 742×463 + 616×462 */}
        <section aria-label="Book spreads">
          <Container className="pb-2">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,742fr)_minmax(0,616fr)]">
              <CaseStudyImage src="/images/istd-spread-1.jpg" aspectClassName="aspect-[742/463]" />
              <CaseStudyImage src="/images/istd-spread-2.jpg" aspectClassName="aspect-[616/462]" />
            </div>
          </Container>
        </section>

        <section>
          <Container className="flex justify-end py-8">
            <NextProjectLink to={getNextProjectHref('/works/istd-typography-submission')} />
          </Container>
        </section>
      </div>
    </>
  )
}
