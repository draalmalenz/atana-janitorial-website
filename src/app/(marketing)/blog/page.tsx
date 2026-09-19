import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { BLOG_POSTS } from '@/shared/constants/blog'

export const metadata: Metadata = {
  title: 'Cleaning Tips Blog | Atana Janitorial Services, Kitchener-Waterloo',
  description:
    'Cleaning tips, checklists, and guides for Kitchener-Waterloo homes, offices, and Airbnb hosts — from deep cleaning schedules to move-out checklists.',
  keywords: 'cleaning tips Kitchener Waterloo, cleaning checklist, Waterloo Region cleaning blog',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-primaryDark to-brand-ink py-20">
        <div
          aria-hidden
          className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-brand-accent/20 blur-3xl animate-blob"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Blog"
            title="Cleaning tips for Kitchener-Waterloo homes & businesses"
            description="Practical checklists and guides from our team — for homeowners, renters, offices, and Airbnb hosts across the Waterloo Region."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-brand-border bg-white shadow-md shadow-brand-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-primary/15"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r from-brand-accent to-brand-primary" />
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  <span>{post.category}</span>
                  <span className="text-brand-muted">·</span>
                  <span className="text-brand-muted">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-brand-ink group-hover:text-brand-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{post.excerpt}</p>
                <p className="mt-4 text-xs text-brand-muted">{formatDate(post.publishedAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
