export interface AuditStandardItem {
  id: string
  title: string
  description: string
  badge?: string
}

export interface SebiRequirementItem {
  number: number
  title: string
  description: string
}

export interface ScopeItem {
  id: string
  title: string
  description: string
}

export interface ProcessItem {
  step: number
  title: string
  subtitle: string
  description: string
}

export interface DifferentiatorItem {
  id: string
  title: string
  description: string
}

export interface AudienceItem {
  id: string
  title: string
  description: string
}

export interface DeliverableItem {
  title: string
  description: string
}

export const auditHeroData = {
  eyebrow: 'Enterprise Accessibility Audit & Testing',
  headline: 'Compliance Isn’t Optional',
  headlineHighlight: 'Standards Are Specific',
  subheadline:
    'Automated scanners catch maybe a third of real accessibility issues. The rest only surface when someone actually navigates your product with a screen reader, keyboard, or assistive technology. We run the audit that satisfies compliance deadlines while ensuring real usability for Persons with Disabilities.',
  primaryCta: { label: 'Request an Accessibility Audit', href: '/contact-us' },
  secondaryCta: { label: 'Explore Audit Process', href: '#audit-process' },
  stats: [
    { label: '50+ Verified Checkpoints', sublabel: 'WCAG 2.1 & 2.2 Level AA / AAA' },
    { label: '50%+ PwD Auditors', sublabel: 'Authentic Lived Experience Testing' },
    { label: 'IAAP Accredited', sublabel: 'Regulatory Audit-Ready Reports' },
  ],
}

export const auditStandardsData = {
  eyebrow: 'Regulatory Benchmarks',
  heading: 'Standards We Audit Against',
  description:
    'Whether you face domestic regulatory deadlines or global digital accessibility standards, our IAAP-certified team audits your platforms against exact statutory requirements.',
  standards: [
    {
      id: 'wcag',
      title: 'WCAG 2.1 / 2.2 (Level AA & AAA)',
      description: 'The international benchmark for web and mobile digital accessibility.',
      badge: 'Global Benchmark',
    },
    {
      id: 'sebi',
      title: 'SEBI Digital Accessibility Mandate',
      description: 'Mandatory IAAP-accredited audit & PwD usability testing for all SEBI-regulated entities.',
      badge: 'SEBI Mandate',
    },
    {
      id: 'gigw',
      title: 'GIGW 3.0 (NIC / MeitY / STQC)',
      description: 'Mandatory standard for Central/State Government & PSU websites and mobile apps.',
      badge: 'Govt & PSU',
    },
    {
      id: 'is17802',
      title: 'IS 17802 (BIS Standard)',
      description: 'Indian Standard on Accessibility Requirements for ICT Products and Services.',
      badge: 'BIS Standard',
    },
    {
      id: 'rpwd',
      title: 'RPWD Act, 2016',
      description: "India's Rights of Persons with Disabilities Act statutory mandate.",
      badge: 'Statutory Act',
    },
    {
      id: 'section508',
      title: 'Section 508 (US Federal)',
      description: 'Compliance standard for US-facing digital products and federal contractors.',
      badge: 'US Federal',
    },
    {
      id: 'ada',
      title: 'ADA (Title III)',
      description: 'Americans with Disabilities Act digital accessibility expectations.',
      badge: 'US Statutory',
    },
  ] as AuditStandardItem[],
}

export const sebiMandateData = {
  eyebrow: 'SEBI Regulatory Requirement',
  heading: 'The SEBI Mandate: What Regulated Entities Need to Know',
  description:
    'SEBI requires every regulated entity — stock exchanges, brokers, depositories, mutual funds, listed companies, and market intermediaries — to conduct a comprehensive accessibility audit of their websites, portals, and mobile apps.',
  requirements: [
    {
      number: 1,
      title: 'IAAP-Accredited Professionals',
      description: 'Audits must be conducted by professionals accredited by the International Association of Accessibility Professionals (IAAP).',
    },
    {
      number: 2,
      title: 'Latest Benchmark Standards',
      description: 'Platforms must be benchmarked against the latest WCAG, GIGW 3.0, and the RPWD Act, 2016 guidelines.',
    },
    {
      number: 3,
      title: 'Usability Testing BY Persons with Disabilities',
      description: 'Usability testing conducted BY persons with disabilities — not tested on their behalf, but executed directly by them.',
    },
    {
      number: 4,
      title: 'Documented Remediation & Closure Evidence',
      description: 'Findings must produce a documented remediation plan with verification evidence that the entity can present to regulators.',
    },
  ] as SebiRequirementItem[],
  note: 'We audit stock market websites, trading and broking web applications, and companion mobile apps against exactly this mandate with IAAP-certified auditors and PwD testing specialists woven directly into the process.',
}

export const gigwData = {
  eyebrow: 'Government & PSU Compliance',
  heading: 'GIGW 3.0 Audits for Government & State Portals',
  description:
    'Issued by the National Informatics Centre (NIC) under MeitY with STQC involvement, GIGW 3.0 is the mandatory standard for Central/State Government websites and apps. Accessibility accounts for over half of its checkpoints.',
  highlights: [
    'Benchmarked on WCAG 2.1 AA and aligned with RPWD Act 2016',
    'Prepares departments for STQC Certified Quality Website evaluation',
    'Combines accessibility checkpoints with broader quality and usability criteria',
  ],
}

export const iaapTeamData = {
  eyebrow: 'Human Expertise',
  heading: 'IAAP-Certified Professionals, Not Just Automated Reports',
  description:
    'Anyone can run a site through a free automated scanner. What SEBI’s mandate — and genuinely useful accessibility work — actually requires is accredited professionals who know how to evaluate complex user journeys.',
  highlight:
    'Our testing team includes IAAP-certified accessibility specialists paired with testers who rely on native screen readers (NVDA, JAWS, VoiceOver, TalkBack) in their own daily lives.',
}

export const auditScopeData = {
  eyebrow: 'Audit Coverage',
  heading: 'What We Audit',
  description: 'Comprehensive evaluation across your entire digital ecosystem.',
  items: [
    {
      id: 'web',
      title: 'Websites & Web Applications',
      description: 'Public-facing corporate sites, customer portals, e-commerce, and SaaS platforms.',
    },
    {
      id: 'mobile',
      title: 'Mobile Apps (iOS & Android)',
      description: 'Native and hybrid mobile applications evaluated with VoiceOver and TalkBack.',
    },
    {
      id: 'documents',
      title: 'Documents & Collateral',
      description: 'PDFs, Word documents, PowerPoint presentations, and annual reports.',
    },
    {
      id: 'dashboards',
      title: 'Dashboards & Internal Tools',
      description: 'Power BI dashboards, internal portals, and custom Microsoft Power Platform builds.',
    },
    {
      id: 'fintech',
      title: 'Trading & Broking Platforms',
      description: 'High-frequency stock market trading interfaces, broking web apps, and companion mobile tools.',
    },
  ] as ScopeItem[],
}

export const auditProcessData = {
  eyebrow: 'Audit Methodology',
  heading: 'Our 3-Round Audit Process',
  description: 'We run a structured, three-round cycle on every engagement — not a one-time report that gets filed away.',
  steps: [
    {
      step: 1,
      title: 'Initial Audit & Report',
      subtitle: 'Round 1 Evaluation',
      description: 'Full manual and assistive-technology testing against relevant standards (WCAG, GIGW, SEBI, Section 508), documented in our master tracker with severity ratings.',
    },
    {
      step: 2,
      title: 'Remediation Support',
      subtitle: 'Round 2 Guidance',
      description: 'Your development team fixes the reported issues; our IAAP specialists remain available to clarify findings, provide code snippets, and review fixes.',
    },
    {
      step: 3,
      title: 'Re-Test & Verification',
      subtitle: 'Round 3 Closure',
      description: 'We re-test every reported defect, confirm what is resolved, log any new edge cases, and issue a final regulatory-ready verification report.',
    },
  ] as ProcessItem[],
}

export const differentiatorsData = {
  eyebrow: 'Why WinVinaya Audits',
  heading: 'What Makes Our Audits Different',
  items: [
    {
      id: 'native-at',
      title: 'Native Assistive Tech Testers',
      description: 'We test with the technology your users actually use. IAAP-certified specialists paired with testers who rely on assistive technology daily ensure real usage insights.',
    },
    {
      id: 'two-paths',
      title: 'Two Paths to Every Fix',
      description: 'For every defect flagged, we provide both a technical code recommendation and an alternative-functionality suggestion — resolving gaps without redesigning from scratch.',
    },
    {
      id: 'regulatory-ready',
      title: 'Regulatory Submission Ready',
      description: 'Beyond the report, we support clients through consolidated accessibility reporting for bodies like India’s DEPwD and SEBI, getting you to audit closure.',
    },
  ] as DifferentiatorItem[],
}

export const audienceData = {
  eyebrow: 'Target Audience',
  heading: 'Who This Is For',
  items: [
    {
      id: 'sebi-entities',
      title: 'SEBI-Regulated Entities',
      description: 'Stock exchanges, brokers, depositories, mutual funds, and listed companies needing IAAP-accredited audits with PwD-led usability testing.',
    },
    {
      id: 'govt-psu',
      title: 'Government Departments & PSUs',
      description: 'Central and state portals, public sector undertakings, and municipal sites requiring GIGW 3.0 STQC certification readiness.',
    },
    {
      id: 'fintech',
      title: 'Fintech & Financial Services',
      description: 'Banking portals, insurance platforms, and financial apps preparing for statutory compliance audits or VPAT documentation.',
    },
    {
      id: 'enterprise',
      title: 'Enterprise & E-Commerce Platforms',
      description: 'Global platforms working toward WCAG 2.1/2.2 AA, ADA Title III, or Section 508 compliance.',
    },
  ] as AudienceItem[],
}

export const deliverablesData = {
  eyebrow: 'Tangible Outputs',
  heading: 'Engagement Deliverables',
  items: [
    {
      title: 'Detailed Audit Report',
      description: 'Mapped to WCAG 2.1/2.2, GIGW 3.0, Section 508, ADA, or SEBI mandate requirements.',
    },
    {
      title: 'Master Issue Tracker',
      description: 'Prioritized breakdown with severity, priority, impact ratings, and line-by-line defect details.',
    },
    {
      title: 'Technical & Alternative Guidance',
      description: 'Dual-path remediation guidance with exact code fixes and alternative interaction patterns.',
    },
    {
      title: 'PwD Usability Evidence',
      description: 'SEBI-mandate compliant usability testing evidence executed directly by Persons with Disabilities.',
    },
    {
      title: 'Re-Test Verification Report',
      description: 'Verification log confirming defect closure prior to final regulatory sign-off.',
    },
    {
      title: 'Regulatory Submission Package',
      description: 'Consolidated, submission-ready documentation for SEBI, DEPwD, or enterprise VPAT compliance.',
    },
  ] as DeliverableItem[],
}

export const auditCtaData = {
  heading: 'Ready to Validate Your Platform’s Accessibility?',
  body: 'Get an IAAP-accredited, PwD-led audit that satisfies regulatory mandates and ensures authentic usability for all users.',
  cta: { label: 'Request an Accessibility Audit', href: '/contact-us' },
}
