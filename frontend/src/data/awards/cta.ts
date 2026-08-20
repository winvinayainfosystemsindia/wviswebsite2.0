export interface AwardsCtaContent {
  heading: string
  body: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export const awardsCta: AwardsCtaContent = {
  heading: 'Work With a Team Others Already Trust',
  body: 'See how our accessibility, training, and inclusion expertise can support your organization.',
  primaryCta: { label: 'Contact Us', href: '/contact-us' },
  secondaryCta: { label: 'See Our Impact', href: '/impact/success-stories' },
}
