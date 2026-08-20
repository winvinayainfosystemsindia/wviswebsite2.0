export interface SupportItem {
  id: string
  title: string
  description: string
}

export interface SupportContent {
  eyebrow: string
  heading: string
  items: SupportItem[]
}

export const support: SupportContent = {
  eyebrow: 'How Candidates Are Supported',
  heading: 'Support That Goes Beyond the Classroom',
  items: [
    {
      id: 'mentoring',
      title: 'Mentoring Program',
      description: 'Ongoing guidance from experienced trainers via calls, WhatsApp groups, and email.',
    },
    {
      id: 'educonnect',
      title: 'EduConnect',
      description:
        "Launched in 2021 to reach PWD students while they're still in school or college, closing the foundational skills gap earlier, in partnership with institutions including TEACH (Mumbai), NISH (Thiruvananthapuram), CDAP (Trichy), and Bishop Moore College (Kerala).",
    },
    {
      id: 'self-sustaining',
      title: 'Self-Sustaining Program',
      description: 'Building toward long-term independence beyond initial placement.',
    },
  ],
}
