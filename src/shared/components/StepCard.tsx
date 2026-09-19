export function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-primary text-sm font-bold text-white shadow-md shadow-brand-primary/30">
        {step}
      </span>
      <h3 className="mt-4 text-base font-bold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">{description}</p>
    </div>
  )
}
