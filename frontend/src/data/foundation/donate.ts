import { FOUNDATION_DONATE_URL } from './hero'

export interface DonateContent {
  eyebrow: string
  heading: string
  body: string
  cta: { label: string; href: string }
}

export const donate: DonateContent = {
  eyebrow: 'Support the Mission',
  heading: 'Fuel the Next Placement',
  body: 'Every donation goes directly toward training, mentoring, and placing candidates who are ready to work — they just need the door opened. Your contribution is what keeps that door open.',
  cta: { label: 'Donate Now', href: FOUNDATION_DONATE_URL },
}
