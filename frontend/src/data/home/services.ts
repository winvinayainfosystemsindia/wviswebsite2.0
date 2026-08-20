export interface ServiceDetail {
  id: string
  title: string
  href: string
  description: string
  deliverables: string[]
}

export interface ServicesTeaserContent {
  eyebrow: string
  heading: string
  subheading: string
  cta: { label: string; href: string }
  items: ServiceDetail[]
}

export const servicesTeaser: ServicesTeaserContent = {
  eyebrow: 'Our Core Expertise',
  heading: 'End-to-End Digital Accessibility & AI Solutions',
  subheading:
    'Six comprehensive service lines designed to ensure legal compliance, deliver flawless user experiences, and empower inclusive teams.',
  cta: { label: 'Explore All Service Lines', href: '/services' },
  items: [
    {
      id: 'accessibility-audit-testing',
      title: 'Accessibility Audit & Testing',
      href: '/services/accessibility-audit-testing',
      description:
        'Comprehensive manual & assistive tech audits against WCAG 2.1/2.2, Section 508 & ADA. Verified by real screen-reader users.',
      deliverables: ['VPAT / ACR Reports', 'Assistive Tech Testing', 'Code Fix Guidelines'],
    },
    {
      id: 'document-accessibility-remediation',
      title: 'Document Remediation',
      href: '/services/document-accessibility-remediation',
      description:
        'Full PDF, Word & PowerPoint remediation with proper reading orders, heading structures, alt text, and tag tree validation.',
      deliverables: ['PDF/UA Compliance', 'Screen Reader Tagging', 'Bulk Document Batches'],
    },
    {
      id: 'corporate-training',
      title: 'Corporate Accessibility Skilling',
      href: '/services/corporate-training',
      description:
        'Practical awareness and technical training for developers, designers, product managers, and QA engineers to build accessible first.',
      deliverables: ['Role-Based Skilling', 'Hands-on Workshops', 'WCAG Best Practices'],
    },
    {
      id: 'microsoft-power-platform-solutions',
      title: 'Power Platform Solutions',
      href: '/services/microsoft-power-platform-solutions',
      description:
        'Accessible Power BI dashboards, Power Apps, and Power Automate workflows engineered with inclusive design principles.',
      deliverables: ['Accessible Dashboards', 'Power Apps UX', 'Process Automation'],
    },
    {
      id: 'agentic-ai-custom-application-development',
      title: 'Agentic AI & Custom Apps',
      href: '/services/agentic-ai-custom-application-development',
      description:
        'Custom web, mobile, and autonomous AI agent solutions built natively accessible, scalable, and secure from day one.',
      deliverables: ['Custom AI Agents', 'Inclusive Web & Mobile', 'Enterprise Architecture'],
    },
    {
      id: 'capacity-building-adoption',
      title: 'Capacity Building & Adoption',
      href: '/services/capacity-building-adoption',
      description:
        'Sustainable organizational change programs, digital inclusion policy frameworks, and continuous monitoring support.',
      deliverables: ['Inclusion Governance', 'Change Management', 'Sustained Skilling'],
    },
  ],
}
