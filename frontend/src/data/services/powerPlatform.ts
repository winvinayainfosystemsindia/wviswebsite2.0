export interface PowerSolutionItem {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  badge: string
}

export interface AccessibleDesignPillarItem {
  id: string
  title: string
  description: string
  badge: string
}

export interface EngagementPhaseItem {
  phase: number
  title: string
  subtitle: string
  description: string
  deliverable: string
}

export interface UseCaseItem {
  id: string
  title: string
  category: string
  description: string
  tag: string
}

export interface PowerAudienceItem {
  id: string
  title: string
  description: string
}

export interface PowerDeliverableItem {
  title: string
  description: string
}

export const powerPlatformHeroData = {
  eyebrow: 'Custom Build & Handover • Power Platform',
  headline: 'Real Solutions, Built on',
  headlineHighlight: 'Power BI, Power Apps & Power Automate',
  subheadline:
    'This isn’t a training page — it’s what we build. Where our Corporate Training service teaches your team to use the Power Platform, this service is us doing the building: a working Power BI dashboard, a custom Power App, or an automated Power Automate workflow, designed around your actual data and handed over ready to run.',
  primaryCta: { label: 'Discuss a Power Platform Project', href: '/contact-us' },
  secondaryCta: { label: 'Explore 3-Phase Model', href: '#engagement-model' },
  stats: [
    { label: 'Built on Live Data', sublabel: 'Zero Generic Demo Datasets' },
    { label: 'Accessible by Design', sublabel: 'Screen-Reader & High-Contrast Visuals' },
    { label: '3-Phase Handover', sublabel: 'Complete In-House Ownership' },
  ],
}

export const powerPlatformWhatWeBuildData = {
  eyebrow: 'Core Offerings',
  heading: 'What We Build',
  description:
    'Production-ready business intelligence, custom operational applications, and automated workflows engineered to replace spreadsheet chaos with structured reliability.',
  solutions: [
    {
      id: 'power-bi',
      title: 'Power BI Dashboards & Reports',
      subtitle: 'MIS Reporting, Impact Measurement & Decision Support',
      description:
        'MIS reporting, impact measurement dashboards, and leadership decision-support reports — built on your real data, not a demo dataset, and structured so the metrics that matter are visible at a glance.',
      tags: ['Executive MIS', 'Impact Measurement', 'Real-Time Telemetry', 'DAX Modeling'],
      badge: 'Business Intelligence',
    },
    {
      id: 'power-apps',
      title: 'Power Apps — Custom Applications',
      subtitle: 'Purpose-Built Operational Apps & Data Intake Portals',
      description:
        'Purpose-built apps for data collection, internal workflows, and process digitization — replacing spreadsheet-and-email processes with something structured, accessible, and maintainable.',
      tags: ['Data Collection', 'Intake Portals', 'Cross-Platform UI', 'Role-Based Access'],
      badge: 'Custom Applications',
    },
    {
      id: 'power-automate',
      title: 'Power Automate — Workflow Automation',
      subtitle: 'Automated Approvals, Notifications & Task Elimination',
      description:
        'Automated approval chains, notifications, and repetitive-task elimination — so your team’s time goes to strategic decisions and program impact, not manual data entry.',
      tags: ['Multi-Stage Approvals', 'System Integrations', 'Automated Alerts', 'Error Handling'],
      badge: 'Process Automation',
    },
  ] as PowerSolutionItem[],
}

export const accessibleByDesignData = {
  eyebrow: 'The WinVinaya Differentiator',
  heading: 'Accessible by Design — Not Retrofitted',
  description:
    'Here’s what most Power Platform vendors don’t tell you: a dashboard can be technically functional and still be unusable for a screen-reader user, or a color-blind team member, or anyone relying on assistive technology.',
  quote:
    'We build accessibility into the dashboard and app design from the first draft — proper reading order, screen-reader-compatible visuals, and color choices that don’t rely on color alone to convey meaning.',
  pillars: [
    {
      id: 'screen-reader',
      title: 'Screen-Reader Compatible Visuals',
      description:
        'Custom visual headers, alternative text, and accessible data table equivalents ensuring blind and low-vision users navigate insights seamlessly.',
      badge: 'Assistive Tech',
    },
    {
      id: 'color-independence',
      title: 'Color-Independent Data Encoding',
      description:
        'KPI cards and charts use shape, iconography, patterns, and clear text labels rather than relying solely on red/green status colors.',
      badge: 'Color-Blind Friendly',
    },
    {
      id: 'reading-order',
      title: 'Proper Tab & Reading Hierarchy',
      description:
        'Structured keyboard tab order across filters, slicers, and interactive cards so navigation is logical and frictionless.',
      badge: 'Logical Flow',
    },
  ] as AccessibleDesignPillarItem[],
  note: 'It’s the same accessibility discipline that runs through everything else we do, applied to business intelligence and app development. If your organization needs MIS reporting that works for every member of your team, this is the difference that matters.',
}

export const powerPlatformEngagementData = {
  eyebrow: 'Our Engagement Model',
  heading: 'A 3-Phase Model Designed for In-House Ownership',
  description:
    'We run Power Platform engagements in three phases, so you end up owning the solution — not renting our availability indefinitely.',
  phases: [
    {
      phase: 1,
      title: 'Awareness & Discovery',
      subtitle: 'Phase 01: Scoping & Data Readiness',
      description:
        'A foundational workshop covering what the platform can do, what a good dashboard or workflow actually looks like, and what your data needs to look like to support it.',
      deliverable: 'Data architecture roadmap, KPI hierarchy & wireframe validation',
    },
    {
      phase: 2,
      title: 'Consultation & Build',
      subtitle: 'Phase 02: Collaborative Co-Building',
      description:
        'We build your actual solution, working directly with 1–2 of your nominated team members in periodic working sessions, using your real organizational data.',
      deliverable: 'Working Power BI dashboard, Power App, or Automate flow on live data',
    },
    {
      phase: 3,
      title: 'Handover & Training',
      subtitle: 'Phase 03: Sustainable Independence',
      description:
        'We train your team to maintain, update, and extend what’s been built, so you’re not dependent on us for every future change or reporting cycle.',
      deliverable: 'Handover training sessions, documentation & extension playbook',
    },
  ] as EngagementPhaseItem[],
}

export const whereThisFitsData = {
  eyebrow: 'Practical Use Cases',
  heading: 'Where This Fits',
  description:
    'From social-sector impact reporting to enterprise operations, our Power Platform builds deliver measurable clarity and time savings.',
  useCases: [
    {
      id: 'impact-mel',
      title: 'Impact Measurement & MEL Dashboards',
      category: 'NGOs & CSR Programs',
      description:
        'For NGOs and CSR-funded programs needing to report outcomes, beneficiary reach, and monitoring data clearly to funders, trustees, and boards.',
      tag: 'Funders • Boards • MEL Reporting',
    },
    {
      id: 'org-mis',
      title: 'Organizational MIS Reporting',
      category: 'Leadership & Operations',
      description:
        'Leadership dashboards that turn scattered spreadsheets, department silos, and manual trackers into a single, reliable source of truth.',
      tag: 'Single Source of Truth • Executive KPIs',
    },
    {
      id: 'data-apps',
      title: 'Data Collection & Intake Apps',
      category: 'Field & Internal Workflows',
      description:
        'Replacing manual, error-prone paper and spreadsheet intake processes with structured, mobile-ready Power Apps forms with validation.',
      tag: 'Error-Free Intake • Power Apps UX',
    },
    {
      id: 'workflow-automation',
      title: 'Workflow & Approval Automation',
      category: 'Process Optimization',
      description:
        'Approval processes, milestone reminders, and routine cross-system tasks handled automatically by Power Automate instead of manual email chasing.',
      tag: 'Zero Manual Follow-Up • Auto-Alerts',
    },
  ] as UseCaseItem[],
}

export const powerPlatformAudienceData = {
  eyebrow: 'Target Audience',
  heading: 'Who This Is For',
  description:
    'Tailored for organizations seeking structured data clarity, automated workflows, and universal accessibility without overhead.',
  items: [
    {
      id: 'ngos-nonprofits',
      title: 'NGOs & Nonprofits',
      description:
        'Needing accessible impact-measurement or MIS dashboards for funders, boards, and internal program decision-making.',
    },
    {
      id: 'enterprises-lean-bi',
      title: 'Enterprises & Growing Teams',
      description:
        'Wanting internal tools, BI reports, and automation built without expanding an expensive internal development or BI department.',
    },
    {
      id: 'spreadsheet-heavy',
      title: 'Teams Ready to Leave Spreadsheets Behind',
      description:
        'Organizations with messy spreadsheet-based processes ready to move to something structured, validated, and automated.',
    },
    {
      id: 'accessibility-seekers',
      title: 'Organizations Demanding Universal Accessibility',
      description:
        'Any organization that specifically needs its business intelligence and internal tools to be accessible to every team member, not just most of them.',
    },
  ] as PowerAudienceItem[],
}

export const powerPlatformDeliverablesData = {
  eyebrow: 'Engagement Deliverables',
  heading: 'What You Receive',
  description:
    'Every Power Platform build delivers a working, tested, and fully documented solution with dedicated handover training.',
  items: [
    {
      title: 'Working Solution on Real Data',
      description: 'A fully functional Power BI dashboard, Power App, or Power Automate workflow, built on your real organizational data and processes.',
    },
    {
      title: 'Accessible Design Throughout',
      description: 'Accessibility baked into every visual, tab order, and color palette from day one — not retrofitted or bolted on afterward.',
    },
    {
      title: 'Comprehensive Solution Documentation',
      description: 'Clear documentation covering data models, DAX measures, workflow architecture, and step-by-step maintenance instructions.',
    },
    {
      title: 'Dedicated Handover Training',
      description: 'Hands-on coaching sessions for your nominated team members so your organization owns and extends the solution independently.',
    },
  ] as PowerDeliverableItem[],
}

export const powerPlatformCtaData = {
  heading: 'Ready to Transform Your Data into Accessible Insights?',
  body: 'Discuss your reporting goals, MIS needs, or workflow automation with practitioners who build working Power Platform solutions on real data.',
  cta: { label: 'Discuss a Power Platform Project', href: '/contact-us' },
}
