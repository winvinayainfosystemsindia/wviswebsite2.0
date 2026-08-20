export interface ImpactStat {
  id: string
  value: string
  label: string
}

export interface ImpactTestimonial {
  quote: string
  name: string
  organization: string
}

export interface ImpactContent {
  eyebrow: string
  heading: string
  /** Shown only while real figures are pending — remove once stats are verified. */
  placeholderNote: string
  stats: ImpactStat[]
  testimonial: ImpactTestimonial
  cta: { label: string; href: string }
}

/**
 * Figures and quote below are placeholders pending verified numbers — swap
 * in real stats once Impact > Success Stories content is finalized.
 */
export const impact: ImpactContent = {
  eyebrow: 'Our Impact',
  heading: 'Numbers Behind the Mission',
  placeholderNote: 'Figures below are placeholders pending verified stats from our Impact team.',
  stats: [
    { id: 'years', value: '—', label: 'Years in Operation' },
    { id: 'organizations', value: '—', label: 'Organizations Served' },
    { id: 'documents', value: '—', label: 'Documents Remediated' },
    { id: 'trained', value: '—', label: 'People Trained' },
  ],
  testimonial: {
    quote: 'Client testimonial quote — pull a strong one from Testimonials for the homepage teaser.',
    name: 'Name',
    organization: 'Organization',
  },
  cta: { label: 'Read Success Stories', href: '/impact/success-stories' },
}
