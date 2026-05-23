import { type CSSProperties, type ReactNode } from 'react'
import { Container } from './Container'

type ProjectHeroProps = {
  title: ReactNode
  caption: string
  brief: ReactNode
  imageSrc: string
  imageAlt?: string
  /** Wider text track for long titles (ISTD, Shane). */
  wideTitle?: boolean
  /** Figma hero image caps — scale down fluidly below these on shorter viewports. */
  imageMaxHeight?: number
  imageMaxWidth?: number
  imageObjectPosition?: string
  /** Fixed-width image column + taller viewport scaling (Junk Feed). */
  largeImage?: boolean
}

export function ProjectHero({
  title,
  caption,
  brief,
  imageSrc,
  imageAlt = '',
  wideTitle = false,
  imageMaxHeight = 761,
  imageMaxWidth = 673,
  imageObjectPosition = 'center',
  largeImage = false,
}: ProjectHeroProps) {
  const mediaStyle = {
    '--hero-media-max-h': `${imageMaxHeight}px`,
    '--hero-media-max-w': `${imageMaxWidth}px`,
  } as CSSProperties

  const gridStyle = largeImage
    ? ({ gridTemplateColumns: `minmax(0, 1fr) minmax(0, ${imageMaxWidth}px)` } as CSSProperties)
    : undefined

  return (
    <section className="flex h-[100vh] flex-col overflow-hidden overflow-x-clip">
      <Container className="flex min-h-0 w-full min-w-0 flex-1 flex-col justify-end pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-10 sm:pb-12 sm:pt-14 lg:pb-16 lg:pt-16 xl:pb-20">
        <div
          className={[
            'grid min-h-0 w-full min-w-0 gap-10 sm:gap-12 lg:items-end lg:gap-[30px]',
            !largeImage &&
              (wideTitle
                ? 'lg:grid-cols-[minmax(0,788px)_minmax(0,1fr)]'
                : 'lg:grid-cols-[minmax(0,673px)_minmax(0,1fr)]'),
          ]
            .filter(Boolean)
            .join(' ')}
          style={gridStyle}
        >
          <div className="min-w-0 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h1 className="editorial-h1 text-balance">{title}</h1>
              <p className="editorial-caption">{caption}</p>
            </div>

            <div className="space-y-2">
              <p className="editorial-subhead">THE BRIEF:</p>
              <div className="max-w-[60ch] space-y-1 text-pretty text-ink/75 [&_p]:text-ink/75">{brief}</div>
            </div>
          </div>

          <div className="flex min-h-0 min-w-0 items-end justify-start lg:justify-end">
            <div
              className={[
                'casestudy-hero-media overflow-hidden bg-warm/10',
                largeImage ? 'casestudy-hero-media--large w-full' : 'w-full',
              ].join(' ')}
              style={mediaStyle}
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                style={{ objectPosition: imageObjectPosition }}
                loading="eager"
                decoding="async"
                sizes="(min-width: 1024px) 47vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
