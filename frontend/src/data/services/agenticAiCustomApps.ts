export interface BuildSolutionItem {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  badge: string
}

export interface ProductionProofItem {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  url?: string
  highlights: string[]
  quote: string
}

export interface CapabilityItem {
  id: string
  title: string
  description: string
  badge: string
}

export interface AgenticDifferentiatorItem {
  id: string
  title: string
  description: string
  badge: string
}

export interface AgenticAudienceItem {
  id: string
  title: string
  description: string
}

export interface AgenticDeliverableItem {
  title: string
  description: string
}

export const agenticHeroData = {
  eyebrow: 'Agentic AI & Custom Enterprise Engineering',
  headline: 'We Build What We',
  headlineHighlight: 'Use Ourselves',
  subheadline:
    'Anyone can propose an AI strategy. Fewer companies actually build and run enterprise applications on it themselves. We do both — designing and developing custom software, web, and mobile applications with AI agents built into the workflow, not bolted on as a chatbot afterthought. The clearest proof isn’t a pitch deck; it’s the systems we’ve built and depend on ourselves.',
  primaryCta: { label: 'Discuss a Custom Application Project', href: '/contact-us' },
  secondaryCta: { label: 'Explore Live In-House Systems', href: '#production-proof' },
  stats: [
    { label: 'Live in Production', sublabel: 'crm.winvinaya.com Running Daily Ops' },
    { label: 'Embedded Workflow AI', sublabel: 'Zero Gimmick Chatbot Widgets' },
    { label: '100% Accessible Design', sublabel: 'Inclusive Enterprise Architecture' },
  ],
}

export const whatWeBuildData = {
  eyebrow: 'Core Offerings',
  heading: 'What We Build',
  description:
    'Purpose-engineered software that embeds intelligent AI agents directly into real-world enterprise operations.',
  solutions: [
    {
      id: 'agentic-ai',
      title: 'Agentic AI Solutions',
      subtitle: 'Autonomous Decision Support & Process Automation',
      description:
        'AI agents integrated directly into business workflows — automating research, data processing, reporting, and repetitive decision-support tasks that used to require manual effort at every single step.',
      tags: ['Autonomous Agents', 'Decision Support', 'Data Intelligence', 'Workflow Automation'],
      badge: 'Agentic Workflows',
    },
    {
      id: 'custom-enterprise',
      title: 'Custom Enterprise Applications',
      subtitle: 'Web & Mobile Systems Replacing Fragmented Spreadsheets',
      description:
        'Web and mobile applications built around your actual operational processes — MIS systems, internal tools, and workflow platforms designed to replace fragmented spreadsheets and manual tracking with a single, reliable system.',
      tags: ['Enterprise MIS', 'Operational Portals', 'Cross-Platform Mobile', 'Relational Architecture'],
      badge: 'Enterprise Systems',
    },
    {
      id: 'ai-internal-tools',
      title: 'AI-Integrated Internal Tools',
      subtitle: 'Targeted Automation That Eliminates Recurring Friction',
      description:
        'Purpose-built automation tools that combine AI capabilities with practical business logic — the kind of tool that quietly removes a recurring manual task rather than adding another dashboard nobody checks.',
      tags: ['Friction Elimination', 'Operational Tooling', 'API Integration', 'Staff Productivity'],
      badge: 'Purpose-Built Tools',
    },
  ] as BuildSolutionItem[],
}

export const productionProofData = {
  eyebrow: 'Proof in Production',
  heading: 'Live Systems We Run Every Day',
  description:
    'We don’t pitch theoretical AI architectures. We run our own organization on the very systems and AI agents we engineer.',
  systems: [
    {
      id: 'crm-winvinaya',
      title: 'crm.winvinaya.com',
      subtitle: 'AI-Powered MIS & Timesheet Management Platform',
      description:
        'One of our own flagship builds is crm.winvinaya.com — an AI-powered MIS and timesheet management system we developed for WinVinaya Foundation. It’s a live, in-use enterprise application: consolidating staff and trainer timesheets alongside program MIS reporting, with AI woven into the system rather than treated as a separate feature.',
      badge: 'Live Production System',
      url: 'https://crm.winvinaya.com',
      highlights: [
        'Consolidates staff, trainer, and student timesheets seamlessly',
        'Automated MIS reporting replacing manual cross-department collation',
        'AI agents woven into data validation and workflow decision points',
        'Daily operational backbone for WinVinaya Foundation’s pan-India programs',
      ],
      quote:
        'It’s not a demo or a case study we’re describing secondhand — it’s the system WinVinaya Foundation runs its own operations on, every single day.',
    },
    {
      id: 'a11ysense',
      title: 'a11ysense',
      subtitle: 'AI-Powered Automated Accessibility Scanner & WCAG Analyzer',
      description:
        'We’ve applied the same build-it-ourselves approach to accessibility. a11ysense is our internal AI-powered accessibility automation tool — it crawls websites and runs WCAG baseline analysis automatically, giving our accessibility audit team a head start before manual testing even begins.',
      badge: 'Internal Tooling in Action',
      highlights: [
        'Autonomous web crawler scanning multi-page digital estates for WCAG compliance',
        'AI-driven code and DOM pattern analysis accelerating initial triage',
        'Built to solve our own audit team’s efficiency bottleneck',
        'Battle-tested in-house, now available as part of client engagements',
      ],
      quote:
        'When we need a tool, we build it. When it proves its value internally, we know it’s ready to offer as part of how we work with clients.',
    },
  ] as ProductionProofItem[],
}

export const devCapabilitiesData = {
  eyebrow: 'Full-Stack Engineering',
  heading: 'Our Development Capabilities',
  description:
    'From architecture and modern UI design to backend engineering and autonomous AI agent orchestration.',
  capabilities: [
    {
      id: 'custom-web-mobile',
      title: 'Custom Web & Mobile Development',
      description:
        'High-performance, responsive web applications and native/hybrid mobile apps engineered for reliability and scale.',
      badge: 'Web & Mobile',
    },
    {
      id: 'enterprise-mis',
      title: 'Enterprise MIS & Workflow Systems',
      description:
        'Operations management, timesheets, inventory, and cross-functional reporting systems tailored to exact business logic.',
      badge: 'Operations & MIS',
    },
    {
      id: 'ai-agent-design',
      title: 'AI Agent Design & Workflow Integration',
      description:
        'Multi-agent decision systems, autonomous data extraction, and task-routing pipelines embedded into business processes.',
      badge: 'Agentic Workflows',
    },
    {
      id: 'llm-api-integration',
      title: 'LLM & AI API Integration',
      description:
        'State-of-the-art LLMs (Gemini, Claude, GPT) integrated with secure retrieval-augmented generation (RAG) and private data.',
      badge: 'LLMs & RAG',
    },
    {
      id: 'internal-automation',
      title: 'Operational Automation Tooling',
      description:
        'Targeted micro-tools and process automations that quietly eliminate hundreds of manual hours across operations.',
      badge: 'Internal Tools',
    },
  ] as CapabilityItem[],
}

export const agenticDifferentiatorsData = {
  eyebrow: 'Why WinVinaya AI & Dev',
  heading: 'What Makes Our Approach Different',
  description:
    'We combine pragmatic enterprise software engineering with authentic accessibility discipline and production-tested AI.',
  items: [
    {
      id: 'own-client',
      title: 'We’re Our Own First Client',
      description:
        'Before we build something for you, we’ve often already built and used something similar for ourselves — crm.winvinaya.com and a11ysense are both proof, not promises.',
      badge: 'Proof in Production',
    },
    {
      id: 'accessible-by-design',
      title: 'Accessible by Design, Even Here',
      description:
        'The same accessibility discipline that runs through our audit, document, and training work carries into custom application development — enterprise systems built to work for every team member, not most of them.',
      badge: 'Universal Accessibility',
    },
    {
      id: 'integrated-ai',
      title: 'AI That’s Integrated, Not Decorative',
      description:
        'Agentic AI features are built into the actual workflow logic of the application, aimed at removing real manual work — not a chatbot widget added for the sake of having one.',
      badge: 'Deep Integration',
    },
  ] as AgenticDifferentiatorItem[],
}

export const agenticAudienceData = {
  eyebrow: 'Target Audience',
  heading: 'Who This Is For',
  description:
    'Designed for organizations that require custom, reliable software built around their real operational processes.',
  items: [
    {
      id: 'spreadsheet-replacers',
      title: 'Organizations Replacing Spreadsheet Operations',
      description:
        'Teams moving away from brittle, fragmented spreadsheets and manual tracking into a single, cohesive MIS, timesheet, or workflow platform.',
    },
    {
      id: 'ngos-enterprises-ai',
      title: 'NGOs & Enterprises Seeking Integrated Process AI',
      description:
        'Organizations wanting intelligent AI agents integrated directly into their existing operational workflows rather than paying for generic off-the-shelf chatbots.',
    },
    {
      id: 'custom-needs',
      title: 'Teams with Specific Operational Demands',
      description:
        'Businesses whose unique workflows, data structures, or regulatory constraints are poorly served by rigid, one-size-fits-all SaaS products.',
    },
    {
      id: 'accessible-internal-tools',
      title: 'Teams Requiring Accessible Internal Systems',
      description:
        'Any forward-thinking organization that demands its internal operations portals, tools, and platforms be natively accessible to all employees by default.',
    },
  ] as AgenticAudienceItem[],
}

export const agenticDeliverablesData = {
  eyebrow: 'Engagement Deliverables',
  heading: 'What You Receive',
  description:
    'Every engagement delivers production-grade, accessible software backed by comprehensive source code and handover support.',
  items: [
    {
      title: 'Working Custom Application',
      description: 'Fully responsive web application, mobile app, or both — fully built, tested, and deployed to your target cloud environment.',
    },
    {
      title: 'Scoped AI Agent Integration',
      description: 'Intelligent AI agents embedded directly into the application logic where they eliminate repetitive manual effort.',
    },
    {
      title: 'Accessible Design Throughout',
      description: 'Semantic, screen-reader verified UI components ensuring full accessibility for every team member.',
    },
    {
      title: 'Documentation & Handover Support',
      description: 'Complete architecture blueprints, code repository access, API documentation, and coaching for internal maintenance.',
    },
  ] as AgenticDeliverableItem[],
}

export const agenticCtaData = {
  heading: 'Ready to Build an Intelligent Custom System?',
  body: 'Discuss your operational workflow, MIS requirements, or AI agent integration with practitioners who build and run enterprise systems daily.',
  cta: { label: 'Discuss a Custom Application Project', href: '/contact-us' },
}
