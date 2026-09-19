import Image from 'next/image'
import type { Metadata } from 'next'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { CTASection } from '@/shared/components/CTASection'
import { TestimonialSection } from '@/shared/components/TestimonialSection'
import { STRENGTHS } from '@/shared/constants/site'

export const metadata: Metadata = {
  title: 'About Us | Atana Janitorial Services, Kitchener-Waterloo',
  description:
    'Atana Janitorial Services is a locally trusted cleaning company serving Kitchener-Waterloo — trained, verified cleaners committed to eco-friendly, detail-oriented results.',
  keywords: 'about Atana Janitorial, cleaning company Kitchener Waterloo, local cleaning team Ontario',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-ink py-20">
        <div
          aria-hidden
          className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl animate-blob"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">About Us</p>
            <h1 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
              Kitchener-Waterloo's reliable, eco-friendly cleaning company
            </h1>
            <p className="mt-5 text-white/80">
              Atana Janitorial Services provides detail-oriented residential and commercial cleaning across
              Kitchener-Waterloo and the wider Waterloo Region. Our mission is simple: give clients back their time
              by keeping homes, offices, and short-stay rentals fresh, safe, and welcoming — without cutting
              corners.
            </p>
            <p className="mt-4 text-white/80">
              Every member of our team is trained on our cleaning protocols, background-checked, and held to the
              same standard we'd expect in our own homes.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl md:h-96">
            <Image
              src="/images/atana/about-team.jpg"
              alt="Atana Janitorial team member providing cleaning services in Kitchener-Waterloo"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Why Clients Choose Us" title="Four commitments we never break" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative order-2 h-80 overflow-hidden rounded-2xl shadow-xl md:order-1 md:h-96">
          <Image
            src="/images/atana/about-detail.jpg"
            alt="Detail cleaning of counters and surfaces by Atana Janitorial Services"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-extrabold text-brand-ink md:text-3xl">Detail is where trust is built</h2>
          <p className="mt-4 text-brand-muted">
            We don't just clean what's visible — sanitizing high-touch surfaces, dusting overlooked corners, and
            leaving every space guest-ready. It's the same attention to detail on cleaning #1 and cleaning #1,000,
            for homes, offices, and short-stay rentals across the Waterloo Region.
          </p>
        </div>
      </section>

      <TestimonialSection />

      <CTASection
        title="Want to see the difference for yourself?"
        subtitle="Get a free estimate and experience the Atana standard on your next cleaning."
      />
    </>
  )
}
