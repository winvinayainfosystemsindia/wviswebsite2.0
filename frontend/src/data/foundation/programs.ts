export interface ProgramItem {
  id: string
  title: string
  topics: string[]
}

export interface ProgramsContent {
  eyebrow: string
  heading: string
  items: ProgramItem[]
  platformNote: string
}

export const programs: ProgramsContent = {
  eyebrow: 'What We Teach',
  heading: 'Two Industry-Aligned Programs',
  items: [
    {
      id: 'it-full-stack',
      title: 'IT Full Stack Program',
      topics: ['Java', 'SQL', 'HTML5', 'CSS3', 'Angular', 'Agile Methodology'],
    },
    {
      id: 'banking-bpa',
      title: 'Banking & Business Process Automation Program',
      topics: ['Core Banking Fundamentals', 'RPA', 'Tally', 'Zoho Books', 'Microsoft Power BI', 'Power Automate'],
    },
  ],
  platformNote:
    "All of it is delivered through WinVinaya Academy, India's first digital learning platform designed specifically for persons with disabilities — course content available in both Indian Sign Language and simple English, built around a blended model of self-paced learning plus mentoring from expert trainers.",
}
