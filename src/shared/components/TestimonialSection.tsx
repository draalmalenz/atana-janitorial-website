import { TESTIMONIALS } from '@/shared/constants/site'

export function TestimonialSection() {
  const testimonial = TESTIMONIALS[0]
  if (!testimonial) return null

  return (
    <section className="bg-brand-primaryDark py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-6xl font-serif leading-none text-brand-accent">&ldquo;</span>
        <p className="mt-2 text-xl font-medium leading-relaxed text-white md:text-2xl">{testimonial.quote}</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-accent">
          {testimonial.name} · {testimonial.source}
        </p>
      </div>
    </section>
  )
}
