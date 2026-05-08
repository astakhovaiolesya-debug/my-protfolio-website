import { Container } from '../components/Container'

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    body: 'Logo design, visual systems, typography, and brand guidelines.',
  },
  {
    number: '02',
    title: 'Motion Design & Video Editing',
    body: 'Animated graphics, motion content, and video editing with sound production',
  },
  {
    number: '03',
    title: 'UX/UI design',
    body:
      'Digital interface design focused on clear, intuitive user experiences across web and mobile. Delivered using Figma, Squarespace, and Framer, with working knowledge of Vibe coding, HTML, and CSS.',
  },
  {
    number: '04',
    title: 'Advertisement & Creative Campaigns',
    body:
      'Creative campaigns across print and digital, including social media content (animated or static) and printed materials. Designed to boost engagement and brand awareness.',
  },
  {
    number: '05',
    title: 'Print Production',
    body: 'Editorial layout, posters, packaging, and merchandise designed with attention to detail and production quality.',
  },
  {
    number: '06',
    title: 'Photography & Editing',
    body: 'Directed portrait and conceptual photography, with full post-production editing and retouching.',
  },
]

export function AboutPage() {
  return (
    <>
      <section>
        <Container className="pb-14 pt-10 sm:pb-16 sm:pt-16">
          <div className="grid min-h-0 gap-12 lg:grid-cols-[minmax(0,_640px)_minmax(0,_1fr)] lg:items-end lg:gap-[30px]">
            <div className="min-w-0 space-y-8">
              <h1 className="editorial-h1">About</h1>
              <div className="space-y-4">
                <p className="editorial-subhead max-w-[34ch] text-ink/90">
                  A Dublin-based graphic communication designer specialising in branding and typography, from concept
                  through to print and digital production.
                </p>
                <p className="max-w-[60ch] text-ink/75">
                  Design, for me, starts long before any visual decision is made. Each project begins with a question:
                  what should this communicate, and to whom? My work is shaped by restraint, detail, and intention.
                  Inspiration comes from unexpected places—art, architecture, or simply the texture of everyday life.
                </p>
              </div>
            </div>

            <div className="flex min-w-0 justify-start lg:justify-end lg:self-end">
              <div className="aspect-[448/676] w-full max-w-[420px] overflow-hidden bg-warm/10 lg:max-w-[448px]">
                <img
                  src="/images/headshot.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 448px, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="pb-16 pt-12 sm:pb-20">
          <div className="space-y-10">
            <h2 className="editorial-h1">Services</h2>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-20">
              {services.map((s) => (
                <div key={s.number} className="space-y-2">
                  <p className="editorial-subhead">{`${s.number}  ${s.title}`}</p>
                  <p className="text-ink/75">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

