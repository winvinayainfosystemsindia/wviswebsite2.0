export interface ImpactMetric {
  id: string
  value: string
  label: string
  sublabel: string
  trend: string
  category: string
}

export interface ImpactContent {
  eyebrow: string
  badge: string
  heading: string
  subheading: string
  metrics: ImpactMetric[]
  highlights: {
    title: string
    description: string
  }[]
  trustBadges: string[]
  cta: { label: string; href: string }
}

export const impact: ImpactContent = {
  eyebrow: 'Measurable Impact',
  badge: '10+ Years of Operating Excellence',
  heading: 'Quantifiable Enterprise ROI & Social Inclusion',
  subheading:
    'Our dual-impact approach bridges business value with human empowerment — delivering legal protection, frictionless digital accessibility, and life-changing IT careers.',
  metrics: [
    {
      id: 'years',
      value: '10+',
      label: 'Years of Excellence',
      sublabel: 'Delivering enterprise digital accessibility and AI solutions worldwide',
      trend: 'Since 2013',
      category: 'Track Record',
    },
    {
      id: 'organizations',
      value: '150+',
      label: 'Enterprises & Clients',
      sublabel: 'Global Fortune 500s, fintechs, healthcare, and government agencies',
      trend: '99.2% Retention',
      category: 'Client Reach',
    },
    {
      id: 'documents',
      value: '50,000+',
      label: 'Documents Remediated',
      sublabel: 'High-volume PDF/UA, Word, and PowerPoint files verified for screen readers',
      trend: 'Zero PDF/UA Errors',
      category: 'Remediation',
    },
    {
      id: 'trained',
      value: '5,000+',
      label: 'Individuals & Engineers Trained',
      sublabel: 'Corporate engineers skilling in WCAG + PwDs placed in high-tech roles',
      trend: '100% Inclusive',
      category: 'Social Impact',
    },
  ],
  highlights: [
    {
      title: '99.8% Compliance Accuracy',
      description: 'Lived-experience audits eliminate false positives and catch deep accessibility blockers.',
    },
    {
      title: '100% On-Time Delivery',
      description: 'Court-tested VPATs and remediated files delivered ahead of critical regulatory deadlines.',
    },
    {
      title: 'Zero Legal Escalations',
      description: 'Defending enterprise clients against ADA Title III and European Accessibility Act audits.',
    },
  ],
  trustBadges: [
    'WCAG 2.1 / 2.2 (AA & AAA)',
    'Section 508 VPAT Compliant',
    'PDF/UA ISO 14289 Standards',
    'IAAP-Certified Specialists',
    'European Accessibility Act (EAA 2025)',
  ],
  cta: { label: 'Explore Detailed Case Studies', href: '/about/our-story' },
}
