export interface WhoWeTrainFact {
  id: string
  label: string
  value: string
}

export interface WhoWeTrainContent {
  eyebrow: string
  heading: string
  body: string
  facts: WhoWeTrainFact[]
}

export const whoWeTrain: WhoWeTrainContent = {
  eyebrow: 'Who We Train',
  heading: 'Reach Across India and Beyond',
  body: 'The Foundation runs training centers in Bangalore and Tirupur, working with candidates across 18 of 21 officially recognized disability categories — Deaf, Hard of Hearing, Visually Impaired, and Locomotor Disabled learners among them — drawn from 24 states across India and Nepal.',
  facts: [
    { id: 'centers', label: 'Training Centers', value: 'Bangalore & Tirupur' },
    { id: 'categories', label: 'Disability Categories', value: '18 of 21' },
    { id: 'reach', label: 'Candidates From', value: '24 States + Nepal' },
  ],
}
