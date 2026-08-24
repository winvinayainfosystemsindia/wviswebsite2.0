export interface OrgApprovalItem {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  highlights: string[]
  statPill: string
}

export interface IaapCredentialItem {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  relevance: string
}

export interface StandardBenchmarkItem {
  id: string
  code: string
  name: string
  region: string
  scope: string
  description: string
  tag: string
}

export const approvalsCertificationsHeroData = {
  eyebrow: 'Formal Credentials • Verified On Record',
  headline: 'Credentials That Back Up',
  headlineHighlight: 'The Work',
  subheadline:
    'Anyone can claim expertise. Here’s what’s actually on record: legal registrations, professional credentials from the International Association of Accessibility Professionals (IAAP), and rigorous conformance to recognized international and national standards.',
  disclaimer:
    'Rigor & Distinction: Professional certification and standards conformance aren’t the same thing — we are precise about that distinction across all audits, consulting, and training engagements.',
  primaryCta: { label: 'See Our Standards in Action', href: '/services/accessibility-audit-testing' },
  secondaryCta: { label: 'Explore All Standards', href: '#standards-matrix' },
  stats: [
    { label: '80G Registered Trust', sublabel: 'WinVinaya Foundation' },
    { label: 'IAAP Certified Team', sublabel: 'CPACC & WAS Auditors' },
    { label: '8 Named Standards', sublabel: 'WCAG, GIGW, SEBI & Section 508' },
  ],
}

export const organizationalApprovalsData = {
  eyebrow: 'Legal & Tax Status',
  heading: 'Organizational Approvals & Formal Status',
  description:
    'Our social-impact arm is established under Indian charitable law, providing verifiable status for institutional partners, funders, and CSR contributors.',
  approvals: [
    {
      id: 'winvinaya-foundation-80g',
      title: 'WinVinaya Foundation — Registered Charitable Trust',
      subtitle: 'Approved under Section 80G of the Indian Income Tax Act',
      description:
        'Our social-impact arm is a registered charitable trust, formally approved under Section 80G — meaning contributions to the Foundation are eligible for tax deductions under Indian law. This isn’t a marketing claim; it’s a formal legal status backed by government recognition.',
      badge: 'Section 80G Approved',
      statPill: 'Tax Deductible Contributions • CSR Eligible',
      highlights: [
        'Registered Charitable Trust under Indian law',
        'Section 80G Income Tax Exemption certificate active',
        'Eligible for Corporate Social Responsibility (CSR) partnerships',
        'Transparent governance and audited operational reporting',
      ],
    },
  ] as OrgApprovalItem[],
}

export const iaapCertificationsData = {
  eyebrow: 'Professional Credentials',
  heading: 'IAAP-Certified Accessibility Professionals',
  description:
    'Our accessibility testing and remediation team includes practitioners certified by the International Association of Accessibility Professionals (IAAP) — the credential increasingly required by regulatory bodies worldwide.',
  quote:
    'IAAP certification is the gold standard required by regulators (including SEBI’s recent mandate for regulated entities in India’s securities market) for accessibility audits to count as formally compliant.',
  credentials: [
    {
      id: 'cpacc',
      title: 'CPACC Certified Auditors',
      subtitle: 'Certified Professional in Accessibility Core Competencies',
      description:
        'Foundational mastery of universal design, cross-disability assistive technologies, global legislation, and accessibility management strategy.',
      badge: 'Core Competency',
      relevance: 'Audits, strategy & organizational policy',
    },
    {
      id: 'was',
      title: 'WAS Technical Specialists',
      subtitle: 'Web Accessibility Specialist (IAAP)',
      description:
        'Deep technical expertise in DOM parsing, ARIA specifications, keyboard navigation models, and code-level remediation across modern web apps.',
      badge: 'Technical Mastery',
      relevance: 'Code fixes & automated pipeline audits',
    },
    {
      id: 'sebi-ready',
      title: 'SEBI Mandate Alignment',
      subtitle: 'Securities and Exchange Board of India',
      description:
        'Meets regulatory expectations requiring certified auditors and structured issue-closure reporting for capital market platforms and intermediaries.',
      badge: 'Regulatory Compliant',
      relevance: 'Fintech & market intermediary audits',
    },
  ] as IaapCredentialItem[],
}

export const standardsMatrixData = {
  eyebrow: 'Named Standards Matrix',
  heading: 'Standards We Deliver Against',
  description:
    'Certification and standards conformance aren’t the same thing, and we’re precise about that distinction — but every engagement we run is benchmarked against recognized, named standards, not an internal or informal checklist:',
  standards: [
    {
      id: 'wcag-21-22',
      code: 'WCAG 2.1 / 2.2 (Level AA)',
      name: 'Web Content Accessibility Guidelines',
      region: 'International',
      scope: 'Web & Mobile Applications',
      description:
        'The global benchmark for digital accessibility covering perceivable, operable, understandable, and robust user interface criteria.',
      tag: 'Global Standard • Level AA',
    },
    {
      id: 'section-508',
      code: 'Section 508',
      name: 'U.S. Rehabilitation Act Section 508',
      region: 'United States',
      scope: 'Federal ICT & Procurement',
      description:
        'Federal requirement for all electronic and information technology procured, developed, maintained, or used by US federal agencies.',
      tag: 'US Federal Standard',
    },
    {
      id: 'ada',
      code: 'ADA Compliance',
      name: 'Americans with Disabilities Act',
      region: 'United States',
      scope: 'Public Accommodations & Digital Portals',
      description:
        'Digital accessibility expectations ensuring websites and online services do not discriminate against individuals with disabilities.',
      tag: 'Legal Compliance',
    },
    {
      id: 'gigw-30',
      code: 'GIGW 3.0',
      name: 'Guidelines for Indian Government Websites and Apps',
      region: 'India',
      scope: 'Government & Public Sector Portals',
      description:
        'Mandatory Indian government quality framework ensuring accessibility, cybersecurity, and seamless mobile-first public service delivery.',
      tag: 'National Government Mandate',
    },
    {
      id: 'pdf-ua',
      code: 'PDF/UA (ISO 14289-1)',
      name: 'PDF Universal Accessibility Standard',
      region: 'International (ISO)',
      scope: 'Electronic Documents & Courseware',
      description:
        'International standard for accessible PDF documents, requiring complete semantic tagging, correct reading order, and assistive tech support.',
      tag: 'ISO Standard for Documents',
    },
    {
      id: 'is-17802',
      code: 'IS 17802',
      name: 'Indian Standard for ICT Accessibility',
      region: 'India (BIS)',
      scope: 'Information & Communications Technology',
      description:
        'Bureau of Indian Standards specification for accessible ICT products and services, harmonized with global EN 301 549 specifications.',
      tag: 'Bureau of Indian Standards',
    },
    {
      id: 'rpwd-act',
      code: 'RPWD Act, 2016',
      name: 'Rights of Persons with Disabilities Act',
      region: 'India',
      scope: 'Public & Private Sector Services',
      description:
        'Statutory mandate under Indian law requiring all service providers (government and private) to ensure accessible digital and physical environments.',
      tag: 'Statutory Indian Mandate',
    },
    {
      id: 'sebi-mandate',
      code: 'SEBI Digital Accessibility Mandate',
      name: 'Securities and Exchange Board of India Circulars',
      region: 'India (Financial Regulators)',
      scope: 'Securities Market Regulated Entities',
      description:
        'Regulatory directive mandating accessibility audits, certified auditor verification, and closed-loop reporting for financial market entities.',
      tag: 'Financial Regulator Mandate',
    },
  ] as StandardBenchmarkItem[],
}

export const approvalsCertificationsCtaData = {
  heading: 'Ready to Benchmark Your Platforms Against Recognized Standards?',
  body: 'Work with IAAP-certified accessibility auditors and engineers who deliver verified compliance across WCAG, GIGW, SEBI, and Section 508.',
  primaryCta: { label: 'See Our Standards in Action', href: '/services/accessibility-audit-testing' },
  secondaryCta: { label: 'Contact Our Certified Team', href: '/contact-us' },
}
