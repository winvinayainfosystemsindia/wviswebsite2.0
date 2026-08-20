export interface StoryJourneyContent {
  eyebrow: string
  heading: string
  paragraphs: string[]
  highlight: string
}

export const storyJourney: StoryJourneyContent = {
  eyebrow: 'Our Evolution',
  heading: 'From Testing Company to Inclusion-Led IT Partner',
  paragraphs: [
    'WinVinaya InfoSystems started in familiar territory: data analytics, Power BI, QlikView, and Tableau implementation and training, along with a full QA and testing practice — test strategy, automation, performance testing, and cloud advisory.',
    'Accessibility testing was part of that early service list too. But over time, it stopped being "one more service" and became the thing that best represented who we were — technically sound work, done by a team that understood accessibility from the inside, not just from a specification document.',
  ],
  highlight: 'That shift is what turned a software testing company into an accessibility-first IT partner.',
}
