import { Container } from '../../components/Container'
import { CaseStudyImage } from '../../components/CaseStudyImage'
import { NextProjectLink } from '../../components/NextProjectLink'
import { ProjectHero } from '../../components/ProjectHero'
import { getNextProjectHref } from '../../data/projects'

export function ProjectPageJunkFeed() {
  const nextHref = getNextProjectHref('/works/junk-feed-campaign')

  return (
    <>
      <ProjectHero
        title="Junk Feed Campaign"
        caption="Logo Design / Brand Identity / Web Design / Social Media / Print design"
        brief={
          <>
            <p>
              Misinformation spreads rapidly on short-form video platforms such as TikTok and Instagram. Users rarely
              take active steps to reduce its visibility, often unaware that passive interactions like watching,
              rewatching, liking, and commenting signal engagement to algorithms and increase the reach of misleading
              content.
            </p>
            <p>
              Find a design solution that genuinely changes how people interact with misleading content online. The
              solution should raise awareness of how user behaviour feeds algorithms, build practical skills for
              spotting disinformation, and encourage more conscious and responsible use of social media platforms.
            </p>
          </>
        }
        imageSrc="/images/junk-feed-hero.jpg"
        imageMaxHeight={706}
        imageMaxWidth={673}
      />

      <div className="flex flex-col gap-8">
        {/* Figma 304:529 — 679×475 + 679×475 */}
        <section aria-label="Campaign print and outdoor">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <CaseStudyImage src="/images/junk-feed-leaflet.jpg" aspectClassName="aspect-[679/475]" />
            <CaseStudyImage
              src="/images/junk-feed-bus-shelter.jpg"
              aspectClassName="aspect-[679/475]"
              objectPosition="center top"
            />
          </div>
        </section>

        {/* Figma 304:532 — 570px text + 675×409 image */}
        <section>
          <Container className="py-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,570px)_minmax(0,675px)] lg:items-end lg:justify-between lg:gap-[30px]">
              <div className="space-y-2">
                <p className="editorial-subhead">MY APPROACH:</p>
                <div className="max-w-[560px] space-y-3 text-[14px] leading-normal text-ink/75">
                  <p>
                    Junk Feed is an awareness campaign created to reduce the prevalence of disinformation in short-form
                    video platforms such as Instagram and TikTok. For this project I used a comparison between consuming
                    junk food and disinformation. This project also educates users on how to quickly spot misinformation
                    and learn what to do to reduce it. Junk Feed speaks to a broad audience across multiple age groups,
                    meeting users where they already are.
                  </p>
                  <p>
                    The visual identity of Junk Feed is built around the aesthetic of grocery stores, supermarkets, and
                    fast food environments. This parallel became the foundation for the entire visual system. The design
                    language draws directly from food retail: sale posters, price tags, warning labels, and product
                    stickers.
                  </p>
                  <p>
                    The campaign spans multiple touch points. Posters in public spaces are designed to stop people and
                    spark curiosity. Leaflets provide educational information to take away. Social media content meets
                    users directly on the platforms where misinformation spreads, teaching them how to recognise common
                    manipulation techniques and respond to them. The campaign website brings everything together through
                    an interactive quiz, where users can test their knowledge.
                  </p>
                </div>
              </div>

              <CaseStudyImage
                src="/images/junk-feed-phones.jpg"
                aspectClassName="aspect-[675/409]"
                className="lg:max-w-[675px] lg:justify-self-end"
              />
            </div>
          </Container>
        </section>

        {/* Figma 317:628 — 358×475 + 994×475 */}
        <section aria-label="Campaign social and print">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,358fr)_minmax(0,994fr)]">
            <CaseStudyImage src="/images/junk-feed-social-1.jpg" aspectClassName="aspect-[358/475]" />
            <CaseStudyImage src="/images/junk-feed-social-2.jpg" aspectClassName="aspect-[994/475]" />
          </div>
        </section>

        {/* Figma 317:635 — 1373×600 website mockup */}
        <section aria-label="Campaign website">
          <div className="mx-auto w-full max-w-[1373px]">
            <CaseStudyImage src="/images/junk-feed-website.jpg" aspectClassName="aspect-[1373/600]" />
          </div>
        </section>

        <section>
          <Container className="flex justify-end py-2">
            <NextProjectLink to={nextHref} />
          </Container>
        </section>
      </div>
    </>
  )
}
