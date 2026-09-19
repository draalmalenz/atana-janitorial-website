import Link from 'next/link'
import { NAV_LINKS, SITE } from '@/shared/constants/site'

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold text-brand-primaryDark">{SITE.name}</p>
            <p className="mt-2 text-sm text-brand-muted">{SITE.serviceArea}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-ink">Navigation</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-muted hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-brand-ink">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              <li>
                <a href={`tel:${SITE.phone}`} className="hover:text-brand-primary">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-primary">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-brand-border pt-6 text-xs text-brand-muted">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
