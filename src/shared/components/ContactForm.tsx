'use client'

import { useActionState } from 'react'
import { submitContactForm, type ContactFormState } from '@/app/(marketing)/contact/actions'
import { SERVICES } from '@/shared/constants/site'

const initialState: ContactFormState = { status: 'idle' }

const inputClass =
  'w-full rounded-lg border border-brand-border px-4 py-2.5 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-2xl border border-brand-primary/30 bg-brand-surface p-8 text-center">
        <p className="text-lg font-bold text-brand-primaryDark">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-ink">
            Full name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-ink">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@email.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-ink">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="(555) 123-4567" />
        </div>
        <div>
          <label htmlFor="service" className="mb-1 block text-sm font-medium text-brand-ink">
            Service needed
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClass}
          placeholder="Tell us about your space and what you need cleaned."
        />
      </div>

      {state.status === 'error' && <p className="text-sm text-red-600">{state.message}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primaryDark disabled:opacity-60"
      >
        {isPending ? 'Sending…' : 'Request Free Estimate'}
      </button>
    </form>
  )
}
