export interface HeroCta {
  label: string
  href: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

export const heroContent: HeroContent = {
  eyebrow: 'Empowering Innovation, Inclusion & Impact',
  headline: 'Technology Built Without Barriers',
  subheadline:
    'WinVinaya InfoSystems delivers accessibility, AI, and digital solutions — designed, tested, and delivered by a team that includes persons with disabilities. We help organizations meet compliance, build smarter systems, and become genuinely usable for everyone.',
  primaryCta: { label: 'Explore Our Services', href: '/services' },
  secondaryCta: { label: 'Talk to Our Team', href: '/contact-us' },
}
