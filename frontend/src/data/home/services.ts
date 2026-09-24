export interface ServiceDetail {
  id: string
  title: string
  category: 'accessibility' | 'engineering' | 'training'
  categoryLabel: string
  href: string
  description: string
  deliverables: string[]
  badge?: string
  statBadge?: string
}

export interface ServicesTeaserContent {
  eyebrow: string
  badge: string
  heading: string
  subheading: string
  cta: { label: string; href: string }
  ctaAudit: { label: string; href: string }
  items: ServiceDetail[]
}

export const servicesTeaser: ServicesTeaserContent = {
  eyebrow: 'Our Core Service Lines',
  badge: 'Enterprise Accessibility & Next-Gen AI Solutions',
  heading: 'Comprehensive Digital Accessibility & AI Engineering Services',
  subheading:
    'From full-scope WCAG 2.2 compliance audits and document remediation to custom enterprise AI agents and accessible Power Platform applications — built for global scale and bulletproof compliance.',
  cta: { label: 'Explore All Service Lines', href: '/services' },
  ctaAudit: { label: 'Request Accessibility Audit', href: '/services/accessibility-audit-testing' },
  items: [
    {
      id: 'accessibility-audit-testing',
      title: 'Accessibility Audits & Lived-Experience QA',
      category: 'accessibility',
      categoryLabel: 'Accessibility & Compliance',
      href: '/services/accessibility-audit-testing',
      description:
        'Comprehensive manual and assistive-technology testing against WCAG 2.1/2.2 AA & AAA, Section 508, and ADA Title III. Validated by certified PwD engineers using NVDA, JAWS & VoiceOver.',
      deliverables: ['VPAT / ACR Reports', 'Native Assistive Tech QA', 'Prioritized Code Fixes'],
      badge: 'Most Requested',
      statBadge: '99.8% Accuracy',
    },
    {
      id: 'document-accessibility-remediation',
      title: 'High-Volume Document Remediation',
      category: 'accessibility',
      categoryLabel: 'Accessibility & Compliance',
      href: '/services/document-accessibility-remediation',
      description:
        'Full-scale PDF, Word, Excel, and PowerPoint document remediation ensuring strict PDF/UA and WCAG conformance with flawless reading order, logical tagging, and descriptive alt text.',
      deliverables: ['PDF/UA Conformance', 'Screen Reader Tag Tree', 'Enterprise Bulk Batches'],
      statBadge: '50K+ Files Fixed',
    },
    {
      id: 'corporate-training',
      title: 'Corporate Accessibility Skilling & Enablement',
      category: 'training',
      categoryLabel: 'Training & Enablement',
      href: '/services/corporate-training',
      description:
        'Role-tailored masterclasses and practical workshops for software engineers, UX/UI designers, product managers, and leadership to embed inclusive design into development lifecycles.',
      deliverables: ['Dev & Design Tracks', 'Live Assistive Tech Demos', 'WCAG Certification Prep'],
      statBadge: '5,000+ Trained',
    },
    {
      id: 'microsoft-power-platform-solutions',
      title: 'Accessible Power Platform & Power BI',
      category: 'engineering',
      categoryLabel: 'AI & Enterprise Tech',
      href: '/services/microsoft-power-platform-solutions',
      description:
        'Certified accessible Power BI executive dashboards, automated Power Apps workflows, and Power Automate integrations built to strict universal design and corporate security standards.',
      deliverables: ['Accessible Dashboards', 'Power Apps UX Architecture', 'Automated Workflows'],
      badge: 'Enterprise Choice',
      statBadge: 'Microsoft Aligned',
    },
    {
      id: 'agentic-ai-custom-application-development',
      title: 'Agentic AI & Custom Digital Engineering',
      category: 'engineering',
      categoryLabel: 'AI & Enterprise Tech',
      href: '/services/agentic-ai-custom-application-development',
      description:
        'Intelligent multi-agent AI systems, scalable full-stack web platforms, and cloud applications engineered with native accessibility, modern security, and seamless API integrations.',
      deliverables: ['Autonomous AI Agents', 'Inclusive Cloud & Web Apps', 'Secure API Architecture'],
      badge: 'Next-Gen AI',
      statBadge: 'Zero Tech Debt',
    },
    {
      id: 'capacity-building-adoption',
      title: 'Digital Inclusion Governance & Policy',
      category: 'training',
      categoryLabel: 'Training & Enablement',
      href: '/services/capacity-building-adoption',
      description:
        'Strategic advisory, corporate DEI governance frameworks, and continuous accessibility monitoring to ensure sustainable organizational adoption and ongoing legal protection.',
      deliverables: ['Compliance Governance', 'Continuous Monitoring', 'EAA 2025 Roadmaps'],
      statBadge: 'Risk Mitigation',
    },
  ],
}
