type CaseStudyImageProps = {
  src: string
  aspectClassName: string
  className?: string
  objectPosition?: string
  alt?: string
}

export function CaseStudyImage({
  src,
  aspectClassName,
  className,
  objectPosition = 'center',
  alt = '',
}: CaseStudyImageProps) {
  return (
    <figure className={['w-full overflow-hidden bg-warm/10', aspectClassName, className].filter(Boolean).join(' ')}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}
