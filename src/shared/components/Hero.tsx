import Image from 'next/image'
import { Button } from '@/shared/components/Button'
import { STATS } from '@/shared/constants/site'

type HeroProps = {
  eyebrow: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
}

export function Hero({ eyebrow, title, subtitle, image, imageAlt, primaryCta, secondaryCta }: HeroProps) {
  const words = title.split(' ')

  return (
    <section className="relative overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-ken-burns">
          <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/80 to-brand-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primaryDark/70 via-transparent to-transparent" />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-brand-accent/25 blur-3xl animate-glow-pulse"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-20 md:pb-36 md:pt-28">
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent [animation-delay:0ms]">
          {eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[1.05] text-white md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block animate-fade-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${150 + i * 90}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-lg text-white/85 opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: '900ms' }}
        >
          {subtitle}
        </p>

        <div
          className="mt-9 flex animate-fade-up flex-wrap gap-4 opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: '1050ms' }}
        >
          <Button href={primaryCta.href} className="scale-100 shadow-lg shadow-brand-accent/20 hover:scale-105">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" className="hover:scale-105">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>

      <div
        className="relative z-10 mx-auto -mt-14 max-w-5xl animate-fade-up px-6 opacity-0 [animation-fill-mode:forwards] md:-mt-16"
        style={{ animationDelay: '1200ms' }}
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-md md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-brand-ink/60 px-4 py-6 text-center">
              <p className="text-2xl font-extrabold text-brand-accent md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
