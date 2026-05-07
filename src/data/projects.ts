export type Project = {
  id: 'colab' | 'dad' | 'istd' | 'shane' | 'quiet'
  number: string
  title: string
  subtitle: string
  href: string
  coverImage: string
}

export const projects: Project[] = [
  {
    id: 'colab',
    number: '01',
    title: 'Colab Branding',
    subtitle: 'Logo Design / Brand Identity / Print',
    href: '/works/colab-branding',
    coverImage: '/images/poster-mockup-2.jpg',
  },
  {
    id: 'dad',
    number: '02',
    title: 'D&AD Awards Brief',
    subtitle: 'Motion Graphics / Social Media / Visual Storytelling',
    href: '/works/dad-awards-brief',
    coverImage: '/images/iphone-mockup-1.jpg',
  },
  {
    id: 'istd',
    number: '03',
    title: 'ISTD Typography Submission',
    subtitle: 'Typography / Editorial Design / Print / Binding',
    href: '/works/istd-typography-submission',
    coverImage: '/images/istd-hero.jpg',
  },
  {
    id: 'shane',
    number: '04',
    title: 'Shane MacGowan Merchandise',
    subtitle: 'Vinyl design / Apparel / Print / Accessories',
    href: '/works/shane-macgowan-merchandise',
    coverImage: '/images/shane-hero.jpg',
  },
  {
    id: 'quiet',
    number: '05',
    title: 'Quiet Growth Branding',
    subtitle: 'Logo Design / Brand Identity / Print',
    href: '/works/quiet-growth-branding',
    coverImage: '/images/quiet-mockup.jpg',
  },
]

