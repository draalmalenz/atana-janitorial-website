export type BlogFaq = { question: string; answer: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  image: string
  imageAlt: string
  body: { heading: string; paragraphs: string[] }[]
  faqs: BlogFaq[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-often-deep-clean-kitchener-waterloo-home',
    title: 'How Often Should You Deep Clean Your Kitchener-Waterloo Home? A Room-by-Room Guide',
    excerpt:
      'A room-by-room guide to deep cleaning frequency for Kitchener-Waterloo homes — kitchens, bathrooms, bedrooms, and living areas.',
    category: 'Residential Cleaning',
    readTime: '3 min read',
    publishedAt: '2026-08-04',
    image: '/images/atana/service-deep.jpg',
    imageAlt: 'Freshly deep-cleaned floor in a Kitchener-Waterloo home',
    body: [
      {
        heading: 'Why regular cleaning isn’t the same as a deep clean',
        paragraphs: [
          'A weekly wipe-down keeps a home looking tidy, but it doesn’t reach the buildup that collects behind appliances, inside grout lines, or along baseboards. A deep clean targets those overlooked surfaces — the ones that quietly accumulate dust, grease, and bacteria between regular visits.',
          'For most households in Kitchener-Waterloo, a seasonal deep clean (every 3 months) keeps a home in great shape without becoming a chore that eats your weekend.',
        ],
      },
      {
        heading: 'Room-by-room deep cleaning frequency',
        paragraphs: [
          'Kitchens benefit from monthly attention to grease buildup on the stove, range hood, and cabinet fronts — these surfaces attract residue faster than any other room. Bathrooms should get a deep disinfection every 2-4 weeks, focusing on grout, the underside of faucets, and exhaust fans.',
          'Bedrooms and living areas are more forgiving — a deep clean every 3 months (mattress rotation, baseboards, light fixtures, under furniture) is usually enough. Homes with pets or allergy sufferers should shorten that to every 6-8 weeks.',
        ],
      },
      {
        heading: 'When to bring in a professional team',
        paragraphs: [
          'If it’s been longer than 6 months since your last deep clean, or you’re preparing for a big event, moving, or recovering from renovation dust, a professional deep clean resets the space fast. Our team brings eco-friendly products and the equipment to handle grout, upholstery, and high surfaces safely.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a deep clean take for an average home?',
        answer:
          'For a typical 3-bedroom home in the Waterloo Region, a professional deep clean takes 3-5 hours depending on the last cleaning date and square footage.',
      },
      {
        question: 'Is deep cleaning worth it if I clean weekly?',
        answer:
          'Yes — weekly cleaning maintains surface tidiness, but deep cleaning reaches buildup in grout, behind appliances, and inside vents that regular cleaning routines skip.',
      },
    ],
  },
  {
    slug: 'move-in-move-out-cleaning-checklist-waterloo-region',
    title: 'The Ultimate Move-In / Move-Out Cleaning Checklist for Waterloo Region Renters',
    excerpt:
      'A practical move-in/move-out cleaning checklist for Waterloo Region renters and homeowners — get your full deposit back or hand over a spotless space.',
    category: 'Move-In / Move-Out',
    readTime: '3 min read',
    publishedAt: '2026-08-11',
    image: '/images/atana/service-kitchen.jpg',
    imageAlt: 'Kitchen counter cleaned during a move-out cleaning in Waterloo Region',
    body: [
      {
        heading: 'Why move-out cleaning matters more than you think',
        paragraphs: [
          'In the Waterloo Region’s competitive rental market, landlords and property managers hold move-out cleanliness to a high standard — it’s often the difference between getting your full damage deposit back or losing part of it to a "cleaning fee."',
          'For move-ins, starting in a genuinely clean space (not just visually tidy) matters for allergies, odours, and simply feeling at home from day one.',
        ],
      },
      {
        heading: 'The room-by-room checklist',
        paragraphs: [
          'Kitchen: inside and outside of the fridge, oven, and microwave; degreased range hood; wiped cabinet interiors and exteriors; sanitized counters and sink. Bathroom: descaled tub/shower, disinfected toilet base and hinges, cleaned exhaust fan, wiped mirrors and light fixtures.',
          'Living areas and bedrooms: baseboards, window sills and tracks, closet interiors, light switches, and door handles. Floors: vacuumed and mopped throughout, including under furniture that’s been moved out.',
        ],
      },
      {
        heading: 'Skip the stress — book a move cleaning',
        paragraphs: [
          'Move day is already full of logistics. A professional move-in/move-out cleaning crew can complete the full checklist in a few hours, timed around your possession or handover date, so you’re not scrubbing baseboards the night before keys change hands.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does move-out cleaning guarantee I get my deposit back?',
        answer:
          'A thorough move-out clean addresses the most common deposit deductions (kitchen grease, bathroom grime, floors), but final deposit decisions are up to your landlord’s inspection criteria.',
      },
      {
        question: 'Can you clean an apartment while furniture is still inside?',
        answer:
          'Yes, though a fully empty unit allows access to areas hidden by furniture. We recommend booking after your furniture is moved out for the most thorough result.',
      },
    ],
  },
  {
    slug: 'post-renovation-cleanup-professional-dust-removal',
    title: 'Post-Renovation Cleanup 101: Why Professional Dust Removal Matters',
    excerpt:
      'What actually happens to renovation dust in your home or office, and why professional post-construction cleaning in Kitchener-Waterloo matters for health and finish quality.',
    category: 'Post-Renovation',
    readTime: '3 min read',
    publishedAt: '2026-08-18',
    image: '/images/atana/service-construction.jpg',
    imageAlt: 'Renovated commercial space ready for post-construction cleaning in Kitchener-Waterloo',
    body: [
      {
        heading: 'Where renovation dust actually ends up',
        paragraphs: [
          'Drywall dust, sawdust, and fine construction debris don’t stay in the room being worked on — HVAC systems circulate fine particulate throughout the building, settling into vents, light fixtures, and even inside cabinets and drawers that were closed during the work.',
          'A surface wipe-down misses most of it. Within days, dust that settled in vents recirculates back into the air.',
        ],
      },
      {
        heading: 'Health and finish-quality reasons to clean professionally',
        paragraphs: [
          'Fine construction dust can aggravate allergies and respiratory sensitivity, especially in homes with children or older occupants. It also dulls new finishes — freshly painted walls and refinished floors show dust more visibly until fully cleaned.',
          'Professional post-renovation cleaning uses HEPA-filtered vacuums and the right sequence (top-down: ceiling fixtures, then walls and windows, then floors last) to avoid resettling dust into areas already cleaned.',
        ],
      },
      {
        heading: 'Getting your space usable again, faster',
        paragraphs: [
          'Whether it’s a kitchen remodel, office renovation, or a full-building retrofit, a professional cleanup crew can turn a construction zone into a move-in-ready space in a single visit — including windows, baseboards, and detailed dusting most general cleaners skip.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How soon after renovation should cleaning happen?',
        answer:
          'Ideally within 24-48 hours of the last trade finishing, before dust has time to resettle into HVAC systems and fixtures throughout the space.',
      },
      {
        question: 'Do you clean windows and light fixtures too?',
        answer:
          'Yes — post-renovation cleaning includes windows, sills, light fixtures, baseboards, and vents, not just floors and countertops.',
      },
    ],
  },
  {
    slug: 'signs-office-needs-commercial-cleaning-upgrade',
    title: '5 Signs Your Office Needs a Commercial Cleaning Upgrade in Kitchener-Waterloo',
    excerpt:
      'Five warning signs it’s time to upgrade your commercial cleaning contract — for Kitchener-Waterloo offices that want a healthier, more professional space.',
    category: 'Commercial Cleaning',
    readTime: '3 min read',
    publishedAt: '2026-08-25',
    image: '/images/atana/service-corporate.jpg',
    imageAlt: 'Office cubicle being cleaned as part of a commercial cleaning contract in Kitchener-Waterloo',
    body: [
      {
        heading: '1. Visitors notice before you do',
        paragraphs: [
          'If clients or candidates comment on dust, smudged glass, or a lobby that feels tired, your current cleaning schedule isn’t keeping pace with foot traffic. First impressions in reception areas carry more weight than most businesses realize.',
        ],
      },
      {
        heading: '2. Sick days are creeping up',
        paragraphs: [
          'Shared desks, kitchens, and washrooms are high-touch surfaces. A basic sweep-and-empty-bins routine doesn’t disinfect door handles, shared keyboards, or breakroom counters — the surfaces most responsible for spreading illness through an office.',
        ],
      },
      {
        heading: '3-5: Inconsistent quality, missed areas, and outdated scheduling',
        paragraphs: [
          'Inconsistent results from visit to visit, recurring missed spots (under desks, behind monitors, inside microwaves), and a cleaning schedule that hasn’t adjusted as your headcount or floor plan changed are all signs it’s time for a review.',
          'A commercial cleaning partner should adjust scope as your office evolves — more desks, a new meeting room, or a shift to hybrid schedules all change what "clean" should mean for your space.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should a Kitchener-Waterloo office be professionally cleaned?',
        answer:
          'Most offices benefit from cleaning 2-5 times per week depending on headcount and foot traffic, with daily service for high-traffic reception and washroom areas.',
      },
      {
        question: 'Can commercial cleaning be scheduled after hours?',
        answer:
          'Yes — most of our office and building cleaning contracts run evenings or early mornings so cleaning never disrupts your workday.',
      },
    ],
  },
  {
    slug: 'airbnb-turnover-cleaning-waterloo-region',
    title: 'Airbnb Turnover Cleaning: How to Impress Every Guest in Waterloo Region',
    excerpt:
      'How fast, consistent turnover cleaning protects your Airbnb rating in Waterloo Region — a checklist hosts can use between every guest.',
    category: 'Airbnb & Short-Stay',
    readTime: '3 min read',
    publishedAt: '2026-09-01',
    image: '/images/atana/service-carpet.jpg',
    imageAlt: 'Carpet being cleaned during an Airbnb turnover in Waterloo Region',
    body: [
      {
        heading: 'Why turnover cleaning is your rating’s first line of defense',
        paragraphs: [
          'Cleanliness is consistently the top-cited factor in short-stay reviews — ahead of location and amenities. A single review mentioning hair on the bathroom floor or a lingering odour can outweigh five glowing comments about the space itself.',
          'For Waterloo Region hosts juggling back-to-back bookings, the challenge isn’t knowing what to clean — it’s doing it thoroughly in a tight window between checkout and check-in.',
        ],
      },
      {
        heading: 'The non-negotiables for every turnover',
        paragraphs: [
          'Fresh linens and towels on every visit, restocked essentials (toilet paper, soap, coffee), sanitized high-touch points (remotes, light switches, door handles), and a full floor clean — vacuumed carpets and mopped hard surfaces — are the baseline guests expect at any price point.',
          'A quick staging pass matters too: straightened cushions, closed cabinet doors, and a neutral-smelling space (avoid heavy fragrance, which can read as masking odours rather than removing them).',
        ],
      },
      {
        heading: 'Building a turnover system that scales',
        paragraphs: [
          'As bookings pick up, a repeatable checklist and a reliable cleaning partner matter more than any single deep clean. Our short-stay cleaning service is built around same-day turnovers, so your calendar never has to leave a gap for cleaning time.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a typical Airbnb turnover take?',
        answer:
          'A standard 1-2 bedroom short-stay unit in the Waterloo Region typically takes 1.5-2.5 hours for a full turnover, including linens and restocking.',
      },
      {
        question: 'Can you handle same-day turnovers between back-to-back bookings?',
        answer:
          'Yes — our Airbnb & Short-Stay Cleaning service is built specifically for tight same-day windows between checkout and the next check-in.',
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
