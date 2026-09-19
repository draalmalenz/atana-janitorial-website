import { Button } from '@/shared/components/Button'

export function CTASection({
  title,
  subtitle,
  ctaLabel = 'Get Free Estimate',
}: {
  title: string
  subtitle: string
  ctaLabel?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primaryDark to-brand-ink">
      <div
        aria-hidden
        className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-accent/20 blur-3xl animate-blob"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-2xl font-extrabold text-white md:text-4xl">{title}</h2>
        <p className="max-w-xl text-white/85">{subtitle}</p>
        <Button href="/contact" className="shadow-lg shadow-brand-accent/30 hover:scale-105">
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}
