export interface PartnershipItem {
  id: string
  org: string
  description: string
}

export interface PartnershipsContent {
  eyebrow: string
  heading: string
  body: string
  items: PartnershipItem[]
}

export const partnerships: PartnershipsContent = {
  eyebrow: 'Recognized Through Partnership',
  heading: 'Trusted to Work Alongside',
  body: "Some of our strongest validation has come through who we've been trusted to work alongside:",
  items: [
    {
      id: 'jpmorgan-chase',
      org: 'JPMorgan Chase — Force For Good',
      description:
        'WinVinaya Foundation collaborated with JPMorgan Chase volunteers to develop a prototype learning platform enabling visually impaired learners to study coding experientially.',
    },
    {
      id: 'svp-bengaluru',
      org: 'SVP Bengaluru',
      description:
        "Delivered AI capacity-building programs for NGO professionals in partnership with SVP India, including a Train-the-Trainer program with VAANI Deaf Children's Foundation.",
    },
    {
      id: 'nit-trichy',
      org: 'NIT Trichy',
      description: 'Our founder has been recognized by his alma mater as a Distinguished Alumnus for his work in disability inclusion.',
    },
  ],
}
