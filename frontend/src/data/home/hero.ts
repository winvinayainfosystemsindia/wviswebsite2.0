export interface HeroCta {
  label: string
  href: string
}

export interface HeroBadge {
  label: string
  sublabel: string
}

export interface HeroStatCard {
  value: string
  label: string
  subtext: string
  iconType: 'compliance' | 'lived_experience' | 'audit'
}

export interface HeroContent {
  eyebrow: string
  headline: string
  headlineHighlight: string
  subheadline: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
  badges: HeroBadge[]
  stats: HeroStatCard[]
}

export const heroContent: HeroContent = {
  eyebrow: 'Empowering Innovation, Inclusion & Impact',
  headline: 'Digital Solutions Built',
  headlineHighlight: 'Without Barriers',
  subheadline:
    'WinVinaya InfoSystems delivers enterprise-grade accessibility auditing, document remediation, custom AI applications, and corporate skilling. Powered by a team including Persons with Disabilities (PwDs), we deliver authentic lived-experience validation alongside strict WCAG compliance.',
  primaryCta: { label: 'Explore Our Services', href: '/services' },
  secondaryCta: { label: 'Schedule a Consultation', href: '/contact-us' },
  badges: [
    { label: 'WCAG 2.1 & 2.2', sublabel: 'Level AA / AAA Standard' },
    { label: '50%+ PwD Testers', sublabel: 'Lived Experience Auditing' },
    { label: '100% Usable', sublabel: 'Beyond Checklist Compliance' },
  ],
  stats: [
    {
      value: 'WCAG 2.2',
      label: 'Level AA & AAA',
      subtext: '50+ Verified Checkpoints',
      iconType: 'compliance',
    },
    {
      value: '50%+',
      label: 'PwD Audit Team',
      subtext: 'Lived Experience Testing',
      iconType: 'lived_experience',
    },
    {
      value: '100+',
      label: 'Audits Delivered',
      subtext: 'Enterprise-Grade Security',
      iconType: 'audit',
    },
  ],
}
