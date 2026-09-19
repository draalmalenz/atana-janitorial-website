import Image from 'next/image'
import type { Service } from '@/shared/constants/site'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-brand-border bg-white shadow-md shadow-brand-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/15">
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-brand-accent to-brand-primary" />
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-brand-ink">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{service.description}</p>
      </div>
    </div>
  )
}
