export interface CapacityPillarItem {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
}

export interface DomainStackItem {
  id: string
  title: string
  description: string
  category: string
}

export interface CapacityProofItem {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  highlights: string[]
}

export interface CapacityAudienceItem {
  id: string
  title: string
  description: string
}

export interface CapacityDeliverableItem {
  title: string
  description: string
}

export const capacityHeroData = {
  eyebrow: 'Sustainable Adoption • Trainer Enablement • Inclusive Culture',
  headline: 'The Work Doesn’t End When',
  headlineHighlight: 'The Engagement Does',
  subheadline:
    'An audit report gets filed. A training session ends and the slides get forgotten. A new dashboard gets built and nobody updates it six months later. That’s the usual failure point in consulting — and it’s exactly what this service exists to prevent. Capacity Building & Adoption is how we make sure what we deliver keeps working long after we’re no longer in the room: internal skills that stick, practices that get embedded rather than filed away, and teams that can sustain the work independently.',
  primaryCta: { label: 'Build Lasting Capability With Us', href: '/contact-us' },
  secondaryCta: { label: 'Explore 4-Pillar Model', href: '#capacity-pillars' },
  stats: [
    { label: 'Skills That Stick', sublabel: 'Embedded Practices, Not Filed Reports' },
    { label: 'Trainer Enablement', sublabel: 'Internal Pipelines for Ongoing Training' },
    { label: 'Full-Stack Domain Range', sublabel: 'GenAI, Power Platform, QA & Development' },
  ],
}

export const capacityPillarsData = {
  eyebrow: 'Core Enablement Pillars',
  heading: 'What Capacity Building Looks Like With Us',
  description:
    'Four integrated pillars engineered to bridge the gap between initial delivery and long-term organizational self-sufficiency.',
  pillars: [
    {
      id: 'trainer-enablement',
      title: 'Trainer Enablement',
      subtitle: 'Build Internal Instructors, Not Just End Users',
      description:
        'We don’t just train your end users — we build your internal trainers. Our train-the-trainer programs equip your own people to deliver ongoing training across technical and business skills, so your organization’s capacity to teach doesn’t depend on repeatedly bringing us back in.',
      badge: 'Train-the-Trainer',
    },
    {
      id: 'change-management',
      title: 'Change Management & Adoption Support',
      subtitle: 'From "Training Completed" to "How We Work"',
      description:
        'A new tool or a new accessibility standard only creates value if people actually use it. We help organizations move from "we completed the training" to "this is now how we work" — supporting the adoption curve, not just the rollout moment.',
      badge: 'Adoption Curve',
    },
    {
      id: 'disability-culture',
      title: 'Disability Awareness & Inclusion Culture',
      subtitle: 'Ongoing Practice, Not a One-Time Checklist',
      description:
        'Beyond technical compliance, we run Disability Awareness Orientation programs that help teams understand accessibility and inclusion as an ongoing practice, not a one-time checklist — building the internal culture that makes every other accessibility investment more durable.',
      badge: 'Inclusive Culture',
    },
    {
      id: 'handover-maintenance',
      title: 'Handover & Maintenance Training',
      subtitle: 'Structured Knowledge Transfer on Every Build',
      description:
        'Every solution we build — a Power BI dashboard, a custom application, a remediated document workflow — comes with a structured handover phase, training your nominated team to maintain and extend it independently rather than leaving you dependent on us for every small change.',
      badge: 'Full Handover',
    },
  ] as CapacityPillarItem[],
}

export const capacityDomainsData = {
  eyebrow: 'Full-Stack Expertise',
  heading: 'Where We Build Capacity',
  description:
    'Trainer enablement and adoption support only work if the people delivering it actually know the subject cold. Here is the range we cover across technical and business domains:',
  domains: [
    {
      id: 'genai',
      title: 'Generative AI',
      category: 'AI & Automation',
      description: 'Practical, applied GenAI skills, prompt design, and everyday workflow automation — not just theoretical awareness.',
    },
    {
      id: 'office',
      title: 'Microsoft Office',
      category: 'Workplace Productivity',
      description: 'Everyday productivity tools, accessible document creation, and collaborative workflows taught for real workplace use.',
    },
    {
      id: 'power-platform',
      title: 'Microsoft Power Platform',
      category: 'Business Intelligence',
      description: 'Power BI dashboards, custom Power Apps, and Power Automate workflows with live data modeling.',
    },
    {
      id: 'test-automation',
      title: 'Test Automation',
      category: 'Quality Engineering',
      description: 'Modern frameworks including Playwright with TypeScript, Selenium WebDriver, and BDD with Cucumber.',
    },
    {
      id: 'software-testing',
      title: 'Software Testing & QA',
      category: 'Quality Assurance',
      description: 'Manual and automated QA practice, test strategy, defect lifecycle, and accessibility verification end to end.',
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      category: 'Core Engineering',
      description: 'Building maintainable, production-ready enterprise software, clean code architectures, and API integrations.',
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      category: 'Web & Applications',
      description: 'Front-end UI components through to backend services, database connections, and integrated cloud delivery.',
    },
    {
      id: 'python',
      title: 'Python Engineering',
      category: 'Programming & Data',
      description: 'From scripting, data processing, and automation through to full backend application development.',
    },
    {
      id: 'postgres',
      title: 'PostgreSQL Databases',
      category: 'Data Architecture',
      description: 'Relational database design, index management, data integrity, and high-performance query optimization.',
    },
  ] as DomainStackItem[],
  callout:
    'That range is what lets a single engagement build capacity across an organization’s actual tech stack, instead of one narrow skill in isolation.',
}

export const whyThisMattersData = {
  eyebrow: 'Our Core Philosophy',
  heading: 'Why This Matters: "Can Your Team Run This Without Us Next Time?"',
  description:
    'Most vendors deliver a report, run a session, or ship a build, and move on to the next client. We measure success differently: can your team run this without us next time?',
  subtext:
    'Our engagement model across every service — audits, training, Power Platform solutions, custom applications — is built around a consistent arc of workshop, build or delivery, and handover, precisely because that last phase is where lasting capability actually gets built.',
  arc: [
    {
      step: 1,
      title: '01. Foundational Workshop',
      description: 'Hands-on awareness and practical literacy paired with immediate exercises.',
    },
    {
      step: 2,
      title: '02. Collaborative Build / Delivery',
      description: 'Executing the actual audit, dashboard, code, or document remediation on live organizational assets.',
    },
    {
      step: 3,
      title: '03. Structured Handover & Extension',
      description: 'Training internal champions and trainers so the organization owns the capability independently.',
    },
  ],
}

export const capacityProofData = {
  eyebrow: 'Proof in Practice',
  heading: 'Demonstrated Impact & Track Record',
  description:
    'Concrete proof of sustainable enablement across partner organizations and our own operational scaling.',
  items: [
    {
      id: 'enable-india',
      title: 'EnAble India Trainer Enablement Program',
      subtitle: 'Multi-Course Sustainable Training Pipeline',
      description:
        'An ongoing program building internal trainer capacity across multiple technical courses, including business software and test automation training, so partner organizations can sustain their own training pipelines indefinitely.',
      badge: 'Flagship Trainer Program',
      highlights: [
        'Trained in-house instructors across business tools (Zoho Books, Zoho Creator)',
        'Built test automation training capacity for long-term skilling',
        'Directly reduced partner reliance on external training vendors',
        'Enabled ongoing cohort delivery managed 100% by internal teams',
      ],
    },
    {
      id: 'handover-discipline',
      title: 'Handover-and-Training in Every Solution',
      subtitle: 'Embedded Into All Power Platform & Custom App Builds',
      description:
        'Client teams are trained to maintain and extend what’s built, not left holding a system they can’t touch. Every dashboard, custom app, and automated workflow comes with documentation and coaching for nominated staff.',
      badge: 'Standard Delivery Policy',
      highlights: [
        'Periodic working sessions with nominated client staff during builds',
        'Comprehensive data model, code, and maintenance playbooks',
        'Practical coaching on troubleshooting and feature extension',
        'Zero vendor lock-in or artificial maintenance dependencies',
      ],
    },
    {
      id: 'internal-scaling',
      title: 'Scaling Our Own Delivery Capacity',
      subtitle: 'The Same Discipline Applied to Our Own Team',
      description:
        'A proven track record of scaling our own delivery capacity through structured internal training — the same discipline we apply to client capacity-building, applied first to our own team.',
      badge: 'Battle-Tested In-House',
      highlights: [
        'Internal academy skilling Persons with Disabilities in software testing and AI',
        'Continuous curriculum refresh from Selenium to modern Playwright stacks',
        'Mentorship-driven practitioner upskilling scaling our delivery capacity',
        'Authentic lived-experience testing and development teams',
      ],
    },
  ] as CapacityProofItem[],
}

export const capacityAudienceData = {
  eyebrow: 'Target Audience',
  heading: 'Who This Is For',
  description:
    'Designed for forward-looking organizations that want sustainable internal capability rather than recurring vendor dependency.',
  items: [
    {
      id: 'one-off-recovery',
      title: 'Organizations Where Past Training Failed to Stick',
      description:
        'Teams that have run a one-off audit or training elsewhere in the past and watched the slides get filed away and the practices forgotten.',
    },
    {
      id: 'ngos-ld',
      title: 'NGOs & Nonprofits Building In-House L&D',
      description:
        'Impact organizations wanting to build internal learning and development capacity rather than depend on expensive external vendors indefinitely.',
    },
    {
      id: 'enterprise-champions',
      title: 'Enterprises Seeking Accessibility Champions',
      description:
        'Companies wanting internal accessibility champions and sustainable adoption practices woven into their culture, not just a compliance certificate.',
    },
    {
      id: 'multi-year-transformation',
      title: 'Multi-Year Digital Transformation Journeys',
      description:
        'Any organization planning a multi-year accessibility or digital transformation roadmap that needs capability to outlast any single project timeline.',
    },
  ] as CapacityAudienceItem[],
}

export const capacityDeliverablesData = {
  eyebrow: 'Engagement Deliverables',
  heading: 'What You Receive',
  description:
    'Comprehensive enablement packages designed to leave your team fully equipped, certified, and autonomous.',
  items: [
    {
      title: 'Trainer Enablement & Certification',
      description: 'Formal train-the-trainer coaching, facilitator rubrics, and internal certification for your nominated team instructors.',
    },
    {
      title: 'Documented Adoption Roadmap',
      description: 'A tailored change management roadmap and implementation milestones matching your organization’s pace and structure.',
    },
    {
      title: 'Disability Awareness & Culture Sessions',
      description: 'Interactive orientation workshops building an authentic, durable culture of accessibility and inclusion across all teams.',
    },
    {
      title: 'Maintenance Documentation & Handover',
      description: 'Step-by-step maintenance playbooks, architectural guides, and handover training for every delivered solution.',
    },
    {
      title: 'Ongoing Advisory Touchpoints',
      description: 'Periodic review sessions and advisory touchpoints beyond the initial engagement to ensure practices remain on track.',
    },
  ] as CapacityDeliverableItem[],
}

export const capacityCtaData = {
  heading: 'Ready to Build Lasting In-House Capability?',
  body: 'Talk to our practitioners about trainer enablement, adoption roadmaps, disability awareness orientation, or handover coaching.',
  cta: { label: 'Build Lasting Capability With Us', href: '/contact-us' },
}
