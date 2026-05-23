export type Project = {
  id: 'junk' | 'istd' | 'dad' | 'colab' | 'quiet' | 'shane'
  number: string
  title: string
  subtitle: string
  href: string
  coverImage: string
  imageClassName?: string
  cardClassName?: string
}

export const projects: Project[] = [
  {
    id: 'junk',
    number: '01',
    title: 'Junk Feed Campaign',
    subtitle: 'Logo Design / Brand Identity / Web Design / Social Media / Print design',
    href: '/works/junk-feed-campaign',
    coverImage: '/images/junk-feed-cover.jpg',
    imageClassName: 'lg:h-[558px]',
  },
  {
    id: 'istd',
    number: '02',
    title: 'ISTD Typography Submission',
    subtitle: 'Typography / Editorial Design / Print / Binding',
    href: '/works/istd-typography-submission',
    coverImage: '/images/istd-cover.jpg',
    imageClassName: 'lg:h-[477px]',
  },
  {
    id: 'dad',
    number: '03',
    title: 'D&AD Awards Brief',
    subtitle: 'Motion Graphics / Social Media / Visual Storytelling',
    href: '/works/dad-awards-brief',
    coverImage: '/images/iphone-mockup-1.jpg',
    imageClassName: 'lg:h-[433px]',
  },
  {
    id: 'colab',
    number: '04',
    title: 'Colab Branding',
    subtitle: 'Logo Design / Brand Identity / Print',
    href: '/works/colab-branding',
    coverImage: '/images/poster-mockup-2.jpg',
    imageClassName: 'lg:h-[594px]',
  },
  {
    id: 'quiet',
    number: '05',
    title: 'Quiet Growth Branding',
    subtitle: 'Logo Design / Brand Identity / Print',
    href: '/works/quiet-growth-branding',
    coverImage: '/images/quiet-mockup.jpg',
    imageClassName: 'lg:h-[664px]',
  },
  {
    id: 'shane',
    number: '06',
    title: 'Shane MacGowan Merchandise',
    subtitle: 'Vinyl design / Apparel / Print / Accessories',
    href: '/works/shane-macgowan-merchandise',
    coverImage: '/images/shane-hero.jpg',
    imageClassName: 'lg:h-[477px]',
  },
]

/** Ordered list for next-project navigation on case study pages. */
export const projectRoutes = projects.map((p) => p.href)

export function getNextProjectHref(currentHref: string): string {
  const index = projectRoutes.indexOf(currentHref)
  if (index === -1 || index === projectRoutes.length - 1) return '/works'
  return projectRoutes[index + 1]!
}
