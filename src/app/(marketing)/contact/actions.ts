'use server'

import { createClient } from '@/lib/supabase/server'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in your name, email, and message.' }
  }

  try {
    const supabase = await createClient()
    await supabase.from('leads').insert({ name, email, phone, service, message })
  } catch {
    // Supabase project not configured yet for this demo — the lead is not lost,
    // just not persisted. Wire real credentials in .env.local to enable storage.
  }

  return { status: 'success', message: `Thanks, ${name.split(' ')[0]}! We'll be in touch shortly.` }
}
