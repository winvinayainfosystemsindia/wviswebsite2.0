export interface SuccessStoryItem {
  id: string
  title: string
  clientType: string
  sector: string
  category: 'accessibility' | 'power-platform' | 'training-ai' | 'document-remediation' | 'agentic-ai'
  challenge: string
  approach: string
  outcome: string
  tags: string[]
  metrics?: { label: string; value: string }[]
  link?: { label: string; href: string }
  isNamed?: boolean
}

export interface CategoryFilterOption {
  id: string
  label: string
}

export const successStoriesHeroData = {
  eyebrow: 'Verified Case Studies • Real Engagements',
  headline: 'Real Engagements,',
  headlineHighlight: 'Real Outcomes',
  subheadline:
    'Every story below comes from an actual engagement — the details are drawn from real project work, not composite or illustrative examples. We measure success by whether solutions hold up under regulatory review, stick in daily practice, and run independently.',
  disclaimer:
    'Note: Most client names are kept confidential in accordance with enterprise nondisclosure policies and marketing clearances, with fully verified technical and operational data.',
  primaryCta: { label: 'Start Your Own Success Story', href: '/contact-us' },
  secondaryCta: { label: 'Browse Case Studies', href: '#case-studies-grid' },
  stats: [
    { label: '100% Real Deliverables', sublabel: 'Zero Illustrative Composites' },
    { label: 'Regulatory-Grade Rigor', sublabel: 'WCAG, DEPwD, Section 508 Verified' },
    { label: 'Independent Handover', sublabel: 'Long-Term In-House Ownership' },
  ],
}

export const successStoriesFilterOptions: CategoryFilterOption[] = [
  { id: 'all', label: 'All Success Stories' },
  { id: 'accessibility', label: 'Accessibility Audits' },
  { id: 'power-platform', label: 'Power Platform & MIS' },
  { id: 'training-ai', label: 'Corporate Training & GenAI' },
  { id: 'document-remediation', label: 'Document Remediation' },
  { id: 'agentic-ai', label: 'Agentic AI & Custom Apps' },
]

export const successStoriesData: SuccessStoryItem[] = [
  {
    id: 'financial-services-compliance',
    title: 'Multi-Site Accessibility Compliance for Financial Services Platforms',
    clientType: 'Group of Fintech & Stock Market Platforms',
    sector: 'Fintech & Capital Markets',
    category: 'accessibility',
    challenge:
      'A group of fintech and stock market services platforms needed to bring multiple web properties and user journeys into WCAG 2.1 and Section 508 compliance, with results that would hold up under formal regulatory scrutiny.',
    approach:
      'We ran our standard three-round audit cycle across all sites — initial audit and report, client remediation support, then re-testing and final verification — with every issue documented alongside both a technical code fix and an alternative-functionality recommendation, so design teams could resolve gaps without reworking existing visual layouts from scratch.',
    outcome:
      'A consolidated, half-yearly accessibility report covering all platforms, built to a format suitable for submission to India’s Department of Empowerment of Persons with Disabilities (DEPwD) — verified issue closure across every site audited.',
    tags: ['WCAG 2.1 AA', 'Section 508', 'DEPwD Submission', 'Fintech', 'Three-Round Audit'],
    metrics: [
      { label: 'Audit Rounds', value: '3 Rounds' },
      { label: 'Verified Closure', value: '100% Target Issues' },
      { label: 'Regulatory Format', value: 'DEPwD Ready' },
    ],
  },
  {
    id: 'ngo-impact-dashboard',
    title: 'An Accessible Impact Dashboard an NGO Now Runs Independently',
    clientType: 'National Non-Profit Organization',
    sector: 'Non-Profit & Social Development',
    category: 'power-platform',
    challenge:
      'An NGO’s program reporting lived across scattered spreadsheets — creating data silos and leaving leadership with no consistent way to demonstrate to funders and board members what their social programs were actually achieving.',
    approach:
      'A three-phase engagement: an awareness workshop building foundational Power BI fluency, a consultation phase where we built the organization’s real dashboard alongside their nominated staff using their own program data, and a handover phase training their team to maintain and extend it.',
    outcome:
      'The organization now owns and runs its own impact-measurement dashboard independently, tracking beneficiary reach and program outcomes without depending on an external vendor for routine updates.',
    tags: ['Power BI', 'Impact Measurement & MEL', '3-Phase Handover', 'NGO Reporting', 'Spreadsheet Migration'],
    metrics: [
      { label: 'Engagement Model', value: '3 Phases' },
      { label: 'Data Source', value: 'Live Program Data' },
      { label: 'Ongoing Vendor Dependency', value: 'Zero' },
    ],
  },
  {
    id: 'healthcare-qa-modernization',
    title: 'Modernizing QA Automation for a Healthcare Technology Team',
    clientType: 'Healthcare Technology Enterprise',
    sector: 'Healthcare & Life Sciences',
    category: 'training-ai',
    challenge:
      'A healthcare technology company’s QA team was working on largely manual and legacy Selenium-based testing, falling behind modern web testing architectures and rapid delivery cycles.',
    approach:
      'A structured training program covering Java, Selenium, and BDD with Cucumber — and when the engagement returned for a second year, the curriculum shifted with the industry, moving to Playwright with TypeScript to match current hiring and tooling standards.',
    outcome:
      'A repeat, multi-year training relationship, with the client’s QA team building sustained in-house automation capability, reduced regression test cycles, and modern TypeScript test suites rather than a one-time skills bump.',
    tags: ['Playwright + TypeScript', 'Selenium WebDriver', 'BDD Cucumber', 'Healthcare QA', 'Multi-Year Upskilling'],
    metrics: [
      { label: 'Relationship', value: 'Multi-Year Repeat' },
      { label: 'Framework Transition', value: 'Playwright + TS' },
      { label: 'Automation Coverage', value: 'End-to-End BDD' },
    ],
  },
  {
    id: 'genai-social-sector',
    title: 'Building Practical GenAI Fluency for Social-Sector Teams',
    clientType: 'Nonprofit & Higher Education Institutions',
    sector: 'Education & Social Sector',
    category: 'training-ai',
    challenge:
      'Multiple nonprofit and education organizations needed their teams to move from "aware of AI" to actually using it in daily work — without a technical computer science background to lean on.',
    approach:
      'GenAI Capability Programs combining an initial hands-on workshop with a longer Applied AI Adoption Sprint, plus a specialized track using Google’s NotebookLM for university faculty — including faculty teaching Deaf students — focused on practical, everyday curriculum use cases.',
    outcome:
      'Multiple organizations adopted the extended workshop-plus-sprint model rather than stopping at a single session, with faculty and staff applying GenAI tools directly to their own coursework, administrative workflows, and accessible lesson planning.',
    tags: ['Generative AI', 'Applied AI Adoption Sprint', 'NotebookLM', 'Faculty Enablement', 'Deaf Education'],
    metrics: [
      { label: 'Format', value: 'Workshop + Sprint' },
      { label: 'Specialized Track', value: 'NotebookLM' },
      { label: 'Staff Adoption', value: 'Daily Workflow AI' },
    ],
  },
  {
    id: 'academic-document-remediation',
    title: 'Accessible Course Materials, Delivered at a Pace Manual Remediation Couldn’t Match',
    clientType: 'Universities & Academic Publishers',
    sector: 'Higher Education & Publishing',
    category: 'document-remediation',
    challenge:
      'University and school-level institutions needed dense academic PDFs — STEM and statistics textbooks, research methodology chapters, and full semester course packs — converted into accessible formats for low-vision and blind students at a volume manual remediation couldn’t keep up with.',
    approach:
      'Our internal remediation tooling converts source PDFs directly into structured, standards-compliant Word and PDF documents automatically, with every output rigorously reviewed and validated by our human accessibility team before delivery.',
    outcome:
      'High-volume, multi-document remediation delivered on rapid timelines that would have been impossible with a fully manual process — without sacrificing precision on complex mathematical tables, citations, or footnotes.',
    tags: ['PDF & Word Remediation', 'STEM & Math', 'Proprietary AI Tooling', 'High-Volume Delivery', 'Zero Content Loss'],
    metrics: [
      { label: 'Speed Advantage', value: 'Minutes vs. Weeks' },
      { label: 'Math/STEM Tables', value: '100% Retained' },
      { label: 'Quality Verification', value: 'Expert QA Review' },
    ],
  },
  {
    id: 'crm-winvinaya-mis',
    title: 'crm.winvinaya.com — Our Own AI-Powered MIS, Built and Run In-House',
    clientType: 'WinVinaya Foundation',
    sector: 'Non-Profit Operations & Skilling',
    category: 'agentic-ai',
    challenge:
      'WinVinaya Foundation needed to consolidate multi-center staff and trainer timesheets with program MIS reporting, replacing fragmented spreadsheets and manual tracking with a single source of truth.',
    approach:
      'We designed and developed a custom, AI-powered MIS and timesheet management system from the ground up, embedding intelligent data processing and approval workflows directly into the operational application.',
    outcome:
      'A live system — crm.winvinaya.com — that WinVinaya Foundation runs its day-to-day operations on today. This is one story we can name outright, since it’s our own build for our own Foundation.',
    tags: ['crm.winvinaya.com', 'Agentic AI MIS', 'Custom Application', 'Timesheet Management', 'Live in Production'],
    metrics: [
      { label: 'Deployment Status', value: 'Live in Production' },
      { label: 'User Base', value: 'Daily Foundation Staff' },
      { label: 'Operational Impact', value: 'Zero Spreadsheets' },
    ],
    link: { label: 'Visit Live Application: crm.winvinaya.com', href: 'https://crm.winvinaya.com' },
    isNamed: true,
  },
]

export const successStoriesCtaData = {
  heading: 'Ready to Start Your Own Success Story?',
  body: 'Discuss your accessibility compliance goals, reporting requirements, corporate upskilling, or custom application build with our practitioners.',
  cta: { label: 'Start Your Own Success Story', href: '/contact-us' },
}
