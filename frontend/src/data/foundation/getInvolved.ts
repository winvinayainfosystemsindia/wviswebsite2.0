import { FOUNDATION_DONATE_URL, FOUNDATION_SITE_URL } from './hero'

export interface GetInvolvedCta {
  id: string
  label: string
  href: string
  external?: boolean
}

export interface GetInvolvedContent {
  heading: string
  body: string
  ctas: GetInvolvedCta[]
}

export const getInvolved: GetInvolvedContent = {
  heading: 'Get Involved',
  body: "Whether you're hiring, training, or looking to support the mission directly, there's a way in.",
  ctas: [
    { id: 'visit', label: 'Visit WinVinaya Foundation', href: FOUNDATION_SITE_URL, external: true },
    { id: 'hire', label: 'Hire From Our Talent Pool', href: '/contact-us' },
    { id: 'donate', label: 'Support the Mission', href: FOUNDATION_DONATE_URL, external: true },
  ],
}
