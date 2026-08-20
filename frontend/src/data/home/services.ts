export interface ServicesTeaserContent {
  eyebrow: string
  heading: string
  subheading: string
  cta: { label: string; href: string }
}

export const servicesTeaser: ServicesTeaserContent = {
  eyebrow: 'What We Do',
  heading: 'End-to-End Expertise, From Audit to Adoption',
  subheading:
    'Six service lines, one accountable partner — whether you need a single accessibility audit or a full transformation program.',
  cta: { label: 'See All Services', href: '/services' },
}
