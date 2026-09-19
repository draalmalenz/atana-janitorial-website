export function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold text-brand-primary md:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-brand-muted">{label}</p>
    </div>
  )
}
