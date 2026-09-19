import Link from 'next/link'
import type { Metadata } from 'next'
import { Hero } from '@/shared/components/Hero'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { ServiceCard } from '@/shared/components/ServiceCard'
import { StepCard } from '@/shared/components/StepCard'
import { CTASection } from '@/shared/components/CTASection'
import { TrustBar } from '@/shared/components/TrustBar'
import { TestimonialSection } from '@/shared/components/TestimonialSection'
import { HOW_IT_WORKS, SERVICES, STRENGTHS } from '@/shared/constants/site'

export const metadata: Metadata = {
  title: 'Atana Janitorial Services | Cleaning Company in Kitchener-Waterloo',
  description:
    'Residential, commercial, and Airbnb cleaning across Kitchener-Waterloo and the Waterloo Region. Trained, verified cleaners, eco-friendly products, and a satisfaction guarantee. Get a free estimate today.',
  keywords:
    'cleaning company Kitchener Waterloo, commercial cleaning Waterloo Region, residential cleaning Kitchener, office cleaning Waterloo, Airbnb cleaning',
}

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Kitchener-Waterloo's Trusted Cleaning Team"
        title="A Spotless Space Is One Call Away"
        subtitle="Residential, commercial, and Airbnb cleaning across the Waterloo Region — trained and verified cleaners, eco-friendly products, and a satisfaction guarantee on every visit."
        image="/images/atana/service-residential.jpg"
        imageAlt="Atana Janitorial cleaner in action, mopping a floor in Kitchener-Waterloo"
        primaryCta={{ href: '/contact', label: 'Get Your Free Estimate' }}
        secondaryCta={{ href: '/services', label: 'Explore Services' }}
      />

      <TrustBar />

      <section className="relative overflow-hidden bg-brand-surface py-20">
        <div
          aria-hidden
          className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-primary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Cleaning Services"
            title="Cleaning services built for Kitchener-Waterloo"
            description="From weekly home cleaning to full commercial contracts, our team handles the details so you get your time — and your space — back."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-sm font-semibold text-brand-primary hover:underline">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="How It Works" title="Booking a cleaning is simple" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <StepCard key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-ink py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Why Kitchener-Waterloo Chooses Atana"
            title="Four commitments we never break"
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRENGTHS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CTASection
        title="Ready for a spotless space?"
        subtitle="Get a free, no-obligation estimate in minutes — we'll tailor a plan to your Kitchener-Waterloo home or business."
      />
    </>
  )
}
