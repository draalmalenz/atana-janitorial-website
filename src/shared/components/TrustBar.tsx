import { CLIENTS } from '@/shared/constants/site'

export function TrustBar() {
  return (
    <section className="bg-brand-ink py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Trusted by teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-end">
          {CLIENTS.map((client) => (
            <span key={client.name} className="text-sm font-semibold text-white/80 md:text-base">
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
