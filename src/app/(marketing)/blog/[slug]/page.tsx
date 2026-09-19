import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CTASection } from '@/shared/components/CTASection'
import { BLOG_POSTS, getBlogPost } from '@/shared/constants/blog'
import { SITE } from '@/shared/constants/site'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Atana Janitorial Services`,
    description: post.excerpt,
    keywords: `${post.category}, Kitchener-Waterloo cleaning tips`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="relative overflow-hidden bg-brand-ink">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/85 to-brand-ink/50" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-accent">
            <span>{post.category}</span>
            <span className="text-white/50">·</span>
            <span className="text-white/70">{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm text-white/60">{formatDate(post.publishedAt)}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        {post.body.map((section) => (
          <div key={section.heading} className="mb-10">
            <h2 className="text-xl font-bold text-brand-ink md:text-2xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed text-brand-muted">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <div className="mt-12 rounded-2xl border border-brand-border bg-brand-surface p-8">
          <h3 className="text-lg font-bold text-brand-ink">Frequently asked questions</h3>
          <div className="mt-4 space-y-6">
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <p className="font-semibold text-brand-ink">{faq.question}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Need this handled by a professional team?"
        subtitle="Get a free estimate for your Kitchener-Waterloo home or business — we'll build a plan around what you actually need."
      />
    </article>
  )
}
