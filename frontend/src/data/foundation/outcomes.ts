export interface OutcomeStat {
  id: string
  value: string
  label: string
}

export interface OutcomesContent {
  eyebrow: string
  heading: string
  description: string
  stats: OutcomeStat[]
}

export const outcomes: OutcomesContent = {
  eyebrow: 'Real Outcomes',
  heading: 'What the Training Adds Up To',
  description:
    "The numbers matter less than what they represent — every figure below is a person, not a metric.",
  stats: [
    { id: 'trained', value: '1,000+', label: 'Candidates Trained' },
    { id: 'placed', value: '400+', label: 'Candidates Placed in MNCs & MSMEs' },
    { id: 'salary', value: '~2x', label: 'Avg. Salary vs. Typical PWD Salary in India' },
    { id: 'workforce', value: '50%', label: "Of WinVinaya's Own Workforce Has a Disability" },
  ],
}
