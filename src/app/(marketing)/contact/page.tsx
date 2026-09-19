import type { Metadata } from 'next'
import { ContactForm } from '@/shared/components/ContactForm'
import { SITE } from '@/shared/constants/site'

export const metadata: Metadata = {
  title: 'Contact Us | Atana Janitorial Services, Kitchener-Waterloo',
  description:
    'Request a free estimate for residential, commercial, or Airbnb cleaning in Kitchener-Waterloo and the Waterloo Region.',
  keywords: 'contact Atana Janitorial, free cleaning estimate Kitchener Waterloo, book a cleaning',
}

export default function ContactPage() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-primaryDark to-brand-primary px-6 py-20 md:px-12">
        <div
          aria-hidden
          className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl animate-blob"
        />
        <div className="relative mx-auto max-w-md">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">Contact Us</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">Need a Cleaning Service Today?</h1>
          <p className="mt-5 text-white/80">
            Tell us about your space in Kitchener-Waterloo and we'll get back to you with a free estimate — usually
            within one business day.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Phone:</dt>
              <dd>
                <a href={`tel:${SITE.phone}`} className="text-brand-accent hover:underline">
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Email:</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-brand-accent hover:underline">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-white">Service area:</dt>
              <dd className="text-white/80">{SITE.serviceArea}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex items-center px-6 py-20 md:px-12">
        <div className="mx-auto w-full max-w-md rounded-2xl border border-brand-border bg-white p-8 shadow-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
