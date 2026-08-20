export interface StoryProofItem {
  id: string
  title: string
  description: string
}

export interface StoryProofContent {
  eyebrow: string
  heading: string
  items: StoryProofItem[]
}

export const storyProof: StoryProofContent = {
  eyebrow: 'Proof in Practice',
  heading: 'What This Looks Like',
  items: [
    {
      id: 'namm-academy',
      title: 'NammAcademy',
      description:
        'An inclusive learning platform we built offering life skills, digital skills, and entrepreneurship courses for persons with disabilities.',
    },
    {
      id: 'ai-capacity-building',
      title: 'AI Capacity-Building With NGOs',
      description:
        "In partnership with SVP Bengaluru, we've delivered hands-on AI training programs for NGO educators and professionals, including a Train-the-Trainer program with VAANI Deaf Children's Foundation.",
    },
    {
      id: 'force-for-good',
      title: 'Force For Good With JPMorgan Chase',
      description:
        'Working alongside JPMorgan Chase volunteers, WinVinaya Foundation helped develop a prototype learning platform that lets visually impaired learners study coding experientially.',
    },
  ],
}
