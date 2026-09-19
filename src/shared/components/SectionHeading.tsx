type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-extrabold text-brand-ink md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-brand-muted">{description}</p>}
    </div>
  )
}
