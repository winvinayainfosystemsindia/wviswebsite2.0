export interface ImpactStat {
  id: string
  value: string
  label: string
}

export interface ImpactTestimonial {
  quote: string
  name: string
  role: string
  organization: string
}

export interface ImpactContent {
  eyebrow: string
  heading: string
  subheading: string
  stats: ImpactStat[]
  testimonial: ImpactTestimonial
  cta: { label: string; href: string }
}

export const impact: ImpactContent = {
  eyebrow: 'Our Impact & Track Record',
  heading: 'Proven Enterprise Performance',
  subheading: 'Delivering measurable accessibility compliance, digital empowerment, and social inclusion.',
  stats: [
    { id: 'years', value: '10+', label: 'Years of Operating Excellence' },
    { id: 'organizations', value: '150+', label: 'Enterprises & Clients Served' },
    { id: 'documents', value: '50,000+', label: 'Documents Remediated' },
    { id: 'trained', value: '5,000+', label: 'Individuals & Engineers Trained' },
  ],
  testimonial: {
    quote:
      'WinVinaya delivered a comprehensive WCAG 2.1 AA audit and remediation program for our digital platform. Their lived-experience testing gave us insights that automated tools could never reveal. Outstanding expertise!',
    name: 'Senior Director of Digital Product',
    role: 'Global Enterprise Solutions',
    organization: 'Fortune 500 Technology Partner',
  },
  cta: { label: 'Explore Our Success Stories', href: '/impact/success-stories' },
}
