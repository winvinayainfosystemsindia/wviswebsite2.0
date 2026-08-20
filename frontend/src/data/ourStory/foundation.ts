export interface StoryFoundationContent {
  eyebrow: string
  heading: string
  paragraphs: string[]
  cta: { label: string; href: string }
}

export const storyFoundation: StoryFoundationContent = {
  eyebrow: 'The Foundation That Shapes Everything',
  heading: 'A Registered Charitable Trust, Built Into How We Work',
  paragraphs: [
    'WinVinaya Foundation, co-founded alongside the company by Akila Sankar, is a registered (80G) charitable trust that has provided free, industry-grade skill training and job placement support for persons with disabilities since 2016 — in software development, testing, BFSI skills, and more.',
    "The two organizations aren't run separately in spirit, even where the work is. People trained through the Foundation bring lived experience with assistive technology into WinVinaya InfoSystems' accessibility and testing work — which is a large part of why our audits and remediation catch what automated tools and generic checklists miss.",
  ],
  cta: { label: 'Learn About WinVinaya Foundation', href: '/about/winvinaya-foundation' },
}
