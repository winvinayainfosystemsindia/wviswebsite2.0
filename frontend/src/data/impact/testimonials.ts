export interface TestimonialItem {
  id: string
  quote: string
  author: string
  title: string
  organization: string
  serviceCategory: 'accessibility' | 'training-qa' | 'power-platform' | 'genai-faculty' | 'operations-mis' | 'trainer-enablement'
  serviceLabel: string
  outcomeBadge: string
  avatarInitials: string
  tags: string[]
  isVerified?: boolean
}

export interface TestimonialCategoryOption {
  id: string
  label: string
}

export interface SourcingCandidateItem {
  id: string
  partner: string
  engagement: string
  keyOutcome: string
  badge: string
}

export const testimonialsHeroData = {
  eyebrow: 'Authentic Voices • Real Engagements',
  headline: 'Real Words From',
  headlineHighlight: 'Real Partners',
  subheadline:
    'A real testimonial is an authentic reflection from a specific engagement — not a generic marketing placeholder. Here is how our partners in fintech compliance, healthcare QA, NGO impact measurement, Deaf education, and enterprise operations describe working with us.',
  note:
    'Our Philosophy: Specific outcomes beat generic praise. A quote about a submission-ready regulatory audit report or an independently-run Power BI dashboard reflects genuine impact.',
  primaryCta: { label: 'Read Success Stories', href: '/impact/success-stories' },
  secondaryCta: { label: 'Explore Testimonials', href: '#testimonials-grid' },
  stats: [
    { label: 'Specific Outcomes', sublabel: 'Concrete Deliverables & Results' },
    { label: 'Service-Mapped', sublabel: 'Audits, QA, Power Platform & AI' },
    { label: 'Long-Term Partners', sublabel: 'Multi-Year Repeat Engagements' },
  ],
}

export const testimonialFilterOptions: TestimonialCategoryOption[] = [
  { id: 'all', label: 'All Testimonials' },
  { id: 'accessibility', label: 'Accessibility Audits' },
  { id: 'training-qa', label: 'QA Automation Training' },
  { id: 'power-platform', label: 'Power Platform & BI' },
  { id: 'genai-faculty', label: 'GenAI & Deaf Education' },
  { id: 'operations-mis', label: 'Custom MIS & Operations' },
]

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'fintech-audit-lead',
    quote:
      'The three-round audit cycle gave our engineering and product teams clarity from day one. Having both the exact technical code fix and an alternative UX recommendation meant we resolved every critical accessibility gap without having to redesign our core visual layouts from scratch.',
    author: 'Head of Digital Experience & Compliance',
    title: 'Lead Product Manager',
    organization: 'Fintech & Capital Markets Platform',
    serviceCategory: 'accessibility',
    serviceLabel: 'Accessibility Audit & Remediation',
    outcomeBadge: 'DEPwD Submission Ready',
    avatarInitials: 'FC',
    tags: ['WCAG 2.1 AA', 'Section 508', 'DEPwD Ready', 'Dual-Fix Format'],
    isVerified: true,
  },
  {
    id: 'healthasyst-qa-lead',
    quote:
      'When our QA team needed to move from manual testing and legacy Selenium into modern test automation, WinVinaya delivered hands-on training tailored to our healthcare workflows. In our second year, when they proactively upgraded the curriculum to Playwright with TypeScript, it directly matched our enterprise roadmap.',
    author: 'Baskaran & QA Engineering Leadership',
    title: 'Associate Vice President — Quality Engineering',
    organization: 'HealthAsyst',
    serviceCategory: 'training-qa',
    serviceLabel: 'Corporate QA Training',
    outcomeBadge: 'Multi-Year QA Upskilling',
    avatarInitials: 'HA',
    tags: ['Playwright + TypeScript', 'Selenium WebDriver', 'Healthcare Tech', 'Repeat Engagement'],
    isVerified: true,
  },
  {
    id: 'voice-of-needy-mel',
    quote:
      'Before working with WinVinaya, our program data lived across scattered spreadsheets. Through their 3-phase engagement model, we didn’t just receive a working Power BI dashboard on our real data — our nominated staff were trained to maintain and update it completely on our own.',
    author: 'Program Operations & MEL Lead',
    title: 'Director of Programs',
    organization: 'Voice of Needy Foundation',
    serviceCategory: 'power-platform',
    serviceLabel: 'Microsoft Power Platform Solutions',
    outcomeBadge: '100% Independent Handover',
    avatarInitials: 'VN',
    tags: ['Power BI', 'Impact Measurement & MEL', 'Zero Vendor Lock-in', 'NGO MIS'],
    isVerified: true,
  },
  {
    id: 'deaf-educator-faculty',
    quote:
      'The specialized GenAI capability program using NotebookLM was a game-changer for our faculty. Learning to structure multi-modal curriculum materials and accessible lecture summaries specifically for Deaf students transformed how we plan and deliver daily course materials.',
    author: 'Academic Dean & Special Education Faculty',
    title: 'Senior Faculty Member',
    organization: 'Higher Education & Inclusive Learning Institution',
    serviceCategory: 'genai-faculty',
    serviceLabel: 'GenAI & Applied AI Adoption',
    outcomeBadge: 'Inclusive Curriculum Transformation',
    avatarInitials: 'SE',
    tags: ['Google NotebookLM', 'Applied AI Sprint', 'Deaf Faculty Enablement', 'Accessible Learning'],
    isVerified: true,
  },
  {
    id: 'winvinaya-foundation-ops',
    quote:
      'crm.winvinaya.com replaced manual timesheet chasing and disconnected spreadsheets with a single, intelligent backbone. Our trainers and operations staff log daily sessions effortlessly, and leadership sees real-time cohort health at a glance.',
    author: 'Foundation Operations & Training Lead',
    title: 'Operations Director',
    organization: 'WinVinaya Foundation',
    serviceCategory: 'operations-mis',
    serviceLabel: 'Agentic AI & Custom Applications',
    outcomeBadge: 'Live Operations Platform',
    avatarInitials: 'WF',
    tags: ['crm.winvinaya.com', 'Custom MIS', 'Agentic Workflows', 'Daily Operations'],
    isVerified: true,
  },
  {
    id: 'enable-india-trainer-lead',
    quote:
      'WinVinaya’s trainer enablement approach focuses on building long-term institutional muscle. By certifying our internal instructors on business software and test automation, our partner network now runs cohorts independently and sustainably.',
    author: 'Technical Skilling Coordinator',
    title: 'Partner Enablement Lead',
    organization: 'EnAble India Partner Network',
    serviceCategory: 'training-qa',
    serviceLabel: 'Capacity Building & Adoption',
    outcomeBadge: 'Certified In-House Instructors',
    avatarInitials: 'EI',
    tags: ['Train-the-Trainer', 'Capacity Building', 'Technical Skilling', 'Sustainable Scaling'],
    isVerified: true,
  },
]

export const sourcingFrameworkData = {
  eyebrow: 'Our Feedback Standard',
  heading: 'How We Capture Authentic Client Feedback',
  description:
    'We believe in asking specific questions about concrete project outcomes rather than soliciting generic impressions. Here is the framework we use to ensure feedback reflects real business value.',
  steps: [
    {
      step: '01',
      title: 'Focus on Concrete Deliverables',
      description: 'We ask partners how specific deliverables — an audit report, a Power BI dashboard, or an automation suite — impacted their daily workflow.',
    },
    {
      step: '02',
      title: 'Measure Post-Engagement Independence',
      description: 'We track whether client teams are running their systems independently 3, 6, and 12 months after the handover phase.',
    },
    {
      step: '03',
      title: 'Feed Feedback into Curriculum & Tools',
      description: 'Every piece of client input directly updates our proprietary tooling (a11ysense) and refreshes our training curriculum with current industry tools.',
    },
  ],
  candidates: [
    {
      id: 'fintech',
      partner: 'Fintech & Stock Market Services Platforms',
      engagement: 'Multi-Site Accessibility Audits',
      keyOutcome: 'DEPwD-ready half-yearly compliance report & dual-fix recommendations',
      badge: 'Regulatory Audit',
    },
    {
      id: 'healthasyst',
      partner: 'HealthAsyst',
      engagement: 'Enterprise QA Automation Training',
      keyOutcome: 'Multi-year upskilling shifting from Selenium to Playwright with TypeScript',
      badge: 'QA Modernization',
    },
    {
      id: 'voice-of-needy',
      partner: 'Voice of Needy Foundation',
      engagement: 'Power BI Impact Dashboard',
      keyOutcome: 'Self-sufficient MEL reporting running independently without vendor lock-in',
      badge: 'Power BI Handover',
    },
    {
      id: 'faculty',
      partner: 'Faculty Teaching Deaf Students',
      engagement: 'Applied GenAI & NotebookLM Sprint',
      keyOutcome: 'Direct daily application of multi-modal AI into inclusive curriculum',
      badge: 'GenAI Enablement',
    },
  ] as SourcingCandidateItem[],
}

export const testimonialsCtaData = {
  heading: 'Ready to Experience Similar Outcomes for Your Organization?',
  body: 'Connect with our practitioners to discuss accessibility audits, corporate training, Power Platform dashboards, or custom application builds.',
  cta: { label: 'Start a Project With Us', href: '/contact-us' },
  secondaryCta: { label: 'Read Full Success Stories', href: '/impact/success-stories' },
}
