export interface HeroCta {
  label: string
  href: string
}

export interface HeroBadge {
  label: string
  sublabel: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
  badges: HeroBadge[]
  trustPillars: string[]
}

export const heroContent: HeroContent = {
  eyebrow: 'Empowering Innovation, Inclusion & Impact',
  headline: 'Digital Solutions Built Without Barriers',
  subheadline:
    'WinVinaya InfoSystems delivers enterprise-grade accessibility auditing, document remediation, custom AI applications, and corporate skilling. Powered by a team including Persons with Disabilities (PwDs), we deliver authentic lived-experience validation alongside strict WCAG compliance.',
  primaryCta: { label: 'Explore Our Services', href: '/services' },
  secondaryCta: { label: 'Schedule a Consultation', href: '/contact-us' },
  badges: [
    { label: 'WCAG 2.1 & 2.2', sublabel: 'Level AA / AAA Standard' },
    { label: '50%+ PwD Testers', sublabel: 'Lived Experience Auditing' },
    { label: '100% Usable', sublabel: 'Beyond Checklist Compliance' },
  ],
  trustPillars: [
    'WCAG 2.1 & 2.2 AA Compliance',
    'Section 508 & ADA Auditing',
    'VPAT & ACR Documentation',
    'Lived Experience Verification',
  ],
}
