export const SITE = {
  name: 'Atana Janitorial Services',
  phone: '(226) 220-6488',
  email: 'atanacleaning1@gmail.com',
  serviceArea: 'Kitchener-Waterloo & the Waterloo Region, Ontario',
  keywords:
    'cleaning company Kitchener Waterloo, commercial cleaning Waterloo Region, residential cleaning Kitchener, office cleaning Waterloo, Airbnb cleaning Kitchener-Waterloo, move out cleaning Waterloo Region, post construction cleaning Ontario, eco-friendly cleaning company',
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

export type Service = {
  slug: string
  title: string
  description: string
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: 'residential-cleaning',
    title: 'Residential Cleaning',
    description:
      'Weekly, bi-weekly, or monthly home cleaning across Kitchener-Waterloo — sweeping, mopping, dusting, and the details that get skipped when life gets busy.',
    image: '/images/atana/hero.jpg',
  },
  {
    slug: 'deep-clean',
    title: 'Deep Clean',
    description:
      'A one-time or recurring deep clean that disinfects bathrooms, kitchens, and the overlooked surfaces regular cleaning misses.',
    image: '/images/atana/service-deep.jpg',
  },
  {
    slug: 'move-in-move-out',
    title: 'Move-In / Move-Out Cleaning',
    description:
      'A spotless handover for Waterloo Region renters and homeowners — every cabinet, appliance, and corner ready for the next chapter.',
    image: '/images/atana/service-kitchen.jpg',
  },
  {
    slug: 'post-renovation',
    title: 'Post-Renovation Cleaning',
    description:
      'Construction dust and debris removal, including windows and baseboards, so your renovated space is safe to use from day one.',
    image: '/images/atana/service-construction.jpg',
  },
  {
    slug: 'airbnb-short-stay',
    title: 'Airbnb & Short-Stay Cleaning',
    description:
      'Fast, reliable turnovers between guests — fresh linens, restocked essentials, and a five-star-ready space every time.',
    image: '/images/atana/service-carpet.jpg',
  },
  {
    slug: 'apartment-condo',
    title: 'Apartment & Condo Cleaning',
    description:
      'Interiors, hallways, and common areas kept spotless across multi-unit buildings in Kitchener-Waterloo.',
    image: '/images/atana/service-window.jpg',
  },
  {
    slug: 'building-office',
    title: 'Building & Office Cleaning',
    description:
      'Scheduled commercial cleaning for offices and corporate spaces — desks, meeting rooms, and reception areas kept guest-ready.',
    image: '/images/atana/service-corporate.jpg',
  },
]

export type Client = { name: string }

export const CLIENTS: Client[] = [
  { name: 'Region of Waterloo' },
  { name: 'RE/MAX' },
  { name: 'Waterloo Electroplating & Metal Finishing Inc.' },
]

export type Testimonial = { name: string; source: string; quote: string }

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Craig Jasper',
    source: 'Google Review',
    quote:
      "Recommends Atana for the owner's work ethic and the team's thoroughness — bathrooms, appliances, windows, even vehicles — for both residential homes and medical offices.",
  },
]

export const STRENGTHS = [
  {
    title: 'Trained & Verified Cleaners',
    description: 'Every team member is background-checked and trained on our cleaning protocols.',
  },
  {
    title: 'Eco-Friendly Products',
    description: 'Safe for your family, pets, and coworkers — without compromising on results.',
  },
  {
    title: 'On-Time Service Guarantee',
    description: "We show up when we say we will, or your next cleaning is on us.",
  },
  {
    title: 'Affordable Pricing Plans',
    description: 'Transparent quotes with no hidden fees, tailored to your space and schedule.',
  },
]

export const HOW_IT_WORKS = [
  { step: '1', title: 'Book Your Cleaning', description: 'Request a free estimate online or by phone in under two minutes.' },
  { step: '2', title: 'Customize Your Service', description: 'Tell us what matters most — we build a plan around your space.' },
  { step: '3', title: 'We Arrive & Clean', description: 'Our verified team arrives on schedule with all supplies included.' },
  { step: '4', title: 'Relax & Enjoy the Results', description: "Walk into a spotless space — satisfaction guaranteed." },
]

export const STATS = [
  { value: '150+', label: 'Happy Clients' },
  { value: '5,000+', label: 'Cleanings Completed' },
  { value: '8+', label: 'Years of Experience' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

export const FAQS = [
  {
    question: 'What areas do you service?',
    answer: `We proudly serve Kitchener-Waterloo and the surrounding Waterloo Region, including residential and commercial clients throughout Ontario. Contact us to confirm coverage for your address.`,
  },
  {
    question: 'Do you bring your own cleaning supplies and equipment?',
    answer: 'Yes — our team arrives fully equipped with eco-friendly products and professional-grade equipment, so you don’t need to provide anything.',
  },
  {
    question: 'Are your cleaners insured and background-checked?',
    answer: 'Every cleaner on our team is trained, verified, and covered by insurance for your peace of mind.',
  },
  {
    question: 'How do I get a quote?',
    answer: 'Fill out the contact form or call us directly. We’ll ask a few questions about your space and provide a free, no-obligation estimate.',
  },
]
