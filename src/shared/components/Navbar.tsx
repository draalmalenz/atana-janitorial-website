'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV_LINKS, SITE } from '@/shared/constants/site'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-brand-primaryDark">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                pathname === link.href ? 'text-brand-primary' : 'text-brand-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primaryDark"
          >
            Get Free Estimate
          </Link>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-border bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm font-medium text-brand-ink hover:bg-brand-surface"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get Free Estimate
          </Link>
        </nav>
      )}
    </header>
  )
}
