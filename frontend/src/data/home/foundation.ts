export interface FoundationTeaserContent {
  eyebrow: string
  heading: string
  body: string
  cta: { label: string; href: string }
}

export const foundationTeaser: FoundationTeaserContent = {
  eyebrow: 'WinVinaya Foundation',
  heading: 'Business With a Built-In Purpose',
  body: 'WinVinaya Foundation, our social-impact arm, provides free, industry-grade skill training and job placement support for persons with disabilities — in software development, testing, and more. Every engagement with WinVinaya InfoSystems helps sustain that mission.',
  cta: { label: 'Learn About the Foundation', href: '/about/winvinaya-foundation' },
}
