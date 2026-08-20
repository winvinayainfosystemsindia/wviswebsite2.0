export const FOUNDATION_SITE_URL = 'https://winvinayafoundation.org/'
export const FOUNDATION_DONATE_URL = 'https://winvinayafoundation.org/donate'

export interface FoundationHeroContent {
  eyebrow: string
  heading: string
  paragraphs: string[]
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export const foundationHero: FoundationHeroContent = {
  eyebrow: 'WinVinaya Foundation',
  heading: 'The Mission That Started It All',
  paragraphs: [
    'WinVinaya Foundation is our social-impact arm — a registered (80G-approved) charitable trust founded in 2016 to do one thing well: train persons with disabilities, women, and transgender individuals in industry-ready, future-facing skills, and get them placed in real jobs. Everything WinVinaya InfoSystems knows about accessibility starts here.',
    'The numbers behind it matter less than what they represent: in a country where, per a NASSCOM study, the private-sector employment rate for persons with disabilities sits at roughly 0.36%, the Foundation exists to move that number — one trained, placed candidate at a time.',
  ],
  primaryCta: { label: 'Visit WinVinaya Foundation', href: FOUNDATION_SITE_URL },
  secondaryCta: { label: 'Donate Now', href: FOUNDATION_DONATE_URL },
}
