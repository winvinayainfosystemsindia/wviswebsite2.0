export interface AwardItem {
  id: string
  title: string
  description: string
}

export interface AwardsContent {
  eyebrow: string
  heading: string
  items: AwardItem[]
}

export const awards: AwardsContent = {
  eyebrow: 'Awards',
  heading: 'Award-Winning Work',
  items: [
    {
      id: 'winvinaya-academy',
      title: 'WinVinaya Academy',
      description:
        'Recognized as an award-winning learning platform: the first online digital learning platform designed specifically for persons with disabilities, offered in both English and Indian Sign Language, launched in April 2020.',
    },
  ],
}
