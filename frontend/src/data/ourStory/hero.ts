export interface StoryMilestone {
  year: string
  label: string
  description?: string
}

export interface StoryHeroContent {
  eyebrow: string
  heading: string
  body: string
  milestones: StoryMilestone[]
}

export const storyHero: StoryHeroContent = {
  eyebrow: 'Our Story',
  heading: 'Where It Began',
  body: 'In 2013, WinVinaya InfoSystems was founded by Sivasankar "Shiva" Jayagopal, an alumnus of NIT Trichy with a background in enterprise software, quality assurance, and testing. The idea behind the company was straightforward: build an IT consulting firm that competes on technical rigor while creating sustained tech opportunities for Persons with Disabilities (PwDs).',
  milestones: [
    {
      year: '2013',
      label: 'Company Founded',
      description: 'Pioneered inclusive IT QA & software testing with native assistive tech specialists.',
    },
    {
      year: '2016',
      label: 'WinVinaya Foundation',
      description: 'Launched non-profit arm to skill and place PwDs in tech & software careers.',
    },
    {
      year: 'Today',
      label: 'Agentic AI & WCAG 2.2',
      description: 'Delivering enterprise AI solutions, document remediation, and accessibility audits.',
    },
  ],
}
