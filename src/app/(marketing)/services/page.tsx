import type { Metadata } from 'next'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { ServiceCard } from '@/shared/components/ServiceCard'
import { CTASection } from '@/shared/components/CTASection'
import { FAQS, SERVICES } from '@/shared/constants/site'

export const metadata: Metadata = {
  title: 'Cleaning Services in Kitchener-Waterloo | Atana Janitorial',
  description:
    'Residential, deep clean, move-in/move-out, post-renovation, Airbnb, condo, and office cleaning across Kitchener-Waterloo and the Waterloo Region.',
  keywords:
    'residential cleaning Kitchener, deep clean Waterloo, move out cleaning Waterloo Region, post construction cleaning, Airbnb cleaning Kitchener-Waterloo, condo cleaning, office cleaning Waterloo',
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-primaryDark to-brand-ink py-20">
        <div
          aria-hidden
          className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl animate-blob"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Services"
            title="Cleaning services for every space in Kitchener-Waterloo"
            description="Pick a service below or contact us for a custom plan that combines what you need — homes, offices, condos, and short-stay rentals across the Waterloo Region."
          />
        </div>
      </section>

      <section className="bg-brand-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="mt-8 divide-y divide-brand-border rounded-2xl border border-brand-border bg-white">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="cursor-pointer list-none font-semibold text-brand-ink marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-brand-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Tell us about your space and we'll recommend the right plan — no pressure, no obligation."
      />
    </>
  )
}
