export interface ImpactStat {
  id: string
  value: string
  label: string
  sublabel: string
}

export interface ImpactTestimonial {
  id: string
  sector: string
  quote: string
  name: string
  role: string
  organization: string
  outcomes: string[]
}

export interface ImpactContent {
  eyebrow: string
  badge: string
  heading: string
  subheading: string
  stats: ImpactStat[]
  testimonials: ImpactTestimonial[]
  cta: { label: string; href: string }
  ctaAudit: { label: string; href: string }
  trustBadges: string[]
}

export const impact: ImpactContent = {
  eyebrow: 'Our Impact & Track Record',
  badge: 'Proven Enterprise Performance & Social RoI',
  heading: 'Measurable Accessibility Compliance & Sustainable Social RoI',
  subheading:
    'From global enterprises mitigating regulatory compliance risks to thousands of careers created for Persons with Disabilities, explore the quantifiable impact we deliver every day.',
  stats: [
    {
      id: 'years',
      value: '10+',
      label: 'Years of Excellence',
      sublabel: 'Pioneering accessible IT & AI solutions globally',
    },
    {
      id: 'organizations',
      value: '150+',
      label: 'Enterprises & Clients',
      sublabel: 'Global Fortune 500s, fintechs & public institutions',
    },
    {
      id: 'documents',
      value: '50,000+',
      label: 'Documents Remediated',
      sublabel: 'High-volume PDF/UA & WCAG AAA certified files',
    },
    {
      id: 'trained',
      value: '5,000+',
      label: 'Engineers & PwDs Trained',
      sublabel: 'Upskilled in inclusive tech & placed in high-growth roles',
    },
  ],
  testimonials: [
    {
      id: 'fortune-500-tech',
      sector: 'Enterprise SaaS & FinTech',
      quote:
        'WinVinaya delivered a comprehensive WCAG 2.1 AA audit and remediation program for our customer digital platform. Their lived-experience testing provided breakthrough insights that automated scanners missed completely.',
      name: 'Senior Director of Digital Product',
      role: 'Global Product Engineering',
      organization: 'Fortune 500 Technology Leader',
      outcomes: ['100% WCAG 2.1 AA Certified', 'Zero Legal Escalations', 'Shipped 2 Weeks Early'],
    },
    {
      id: 'global-banking',
      sector: 'Banking & Financial Services',
      quote:
        'Remediating over 15,000 sensitive financial PDFs was a massive compliance challenge ahead of the European Accessibility Act deadline. WinVinaya handled the volume with flawless PDF/UA accuracy.',
      name: 'Head of Compliance & Digital Experience',
      role: 'Regulatory Operations',
      organization: 'Tier-1 International Bank',
      outcomes: ['15,000+ Documents Fixed', 'Full PDF/UA Compliance', 'EAA 2025 Audit Ready'],
    },
    {
      id: 'public-sector-education',
      sector: 'Public Sector & Higher Ed',
      quote:
        'Their corporate skilling workshops transformed how our engineering teams write frontend code. Accessibility is now baked into our sprint planning from Day 1 rather than treated as a late patch.',
      name: 'VP of Software Engineering',
      role: 'Engineering & Platform Strategy',
      organization: 'Public Education & Cloud Systems',
      outcomes: ['300+ Devs Trained', 'Integrated CI/CD Guardrails', 'Shift-Left Culture'],
    },
  ],
  trustBadges: [
    'WCAG 2.2 AA / AAA Certified',
    'Section 508 VPAT Compliant',
    'PDF/UA ISO 14289 Standard',
    'IAAP Recognized Professionals',
    'European Accessibility Act (EAA) Ready',
  ],
  cta: { label: 'Explore Success Stories & Case Studies', href: '/impact/success-stories' },
  ctaAudit: { label: 'Book Compliance Assessment', href: '/contact' },
}
