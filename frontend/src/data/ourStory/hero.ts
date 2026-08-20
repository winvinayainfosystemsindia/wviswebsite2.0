export interface StoryMilestone {
  year: string
  label: string
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
  body: 'In 2013, WinVinaya InfoSystems was founded by Sivasankar "Shiva" Jayagopal, an alumnus of NIT Trichy with a background in enterprise software, quality assurance, and testing. The idea behind the company was straightforward but not common in IT consulting at the time: build a firm that could compete on technical rigor while creating real, sustained opportunities for people who are too often left out of the tech workforce.',
  milestones: [
    { year: '2013', label: 'Company founded' },
    { year: '2016', label: 'WinVinaya Foundation launched' },
    { year: 'Today', label: 'Expanding into agentic AI' },
  ],
}
