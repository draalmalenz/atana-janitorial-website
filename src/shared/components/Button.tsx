import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}

const BASE =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200'

const VARIANTS = {
  primary: 'bg-brand-accent text-brand-ink hover:bg-amber-400',
  outline: 'border border-white/70 text-white hover:bg-white/10',
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  )
}
