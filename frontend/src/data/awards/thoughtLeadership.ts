export interface ThoughtLeadershipItem {
  id: string
  title: string
  description: string
}

export interface ThoughtLeadershipContent {
  eyebrow: string
  heading: string
  body: string
  items: ThoughtLeadershipItem[]
}

export const thoughtLeadership: ThoughtLeadershipContent = {
  eyebrow: 'Thought Leadership',
  heading: 'Part of the Broader Conversation',
  body: "Our team regularly contributes to the broader conversation on disability inclusion and accessibility in India's tech industry:",
  items: [
    {
      id: 'speaking-engagements',
      title: 'Speaking Engagements',
      description: 'Industry conference talks, including STC (Software Testing Conference) and Step Auto.',
    },
    {
      id: 'policy-participation',
      title: 'Policy Participation',
      description:
        'National policy discussions on disability inclusion, including panels on employment and apprenticeship opportunities for persons with disabilities.',
    },
  ],
}
