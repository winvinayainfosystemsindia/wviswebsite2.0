export interface TrainingAreaItem {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  keyHighlights: string[]
  badge: string
}

export interface TrainingDifferentiatorItem {
  id: string
  title: string
  description: string
  badge: string
}

export interface DeliveryPhaseItem {
  phase: number
  title: string
  subtitle: string
  description: string
  deliverable: string
}

export interface PastProgramItem {
  id: string
  title: string
  category: string
  description: string
  tag: string
}

export interface TrainingAudienceItem {
  id: string
  title: string
  description: string
}

export interface DeliveryFormatItem {
  id: string
  title: string
  description: string
  badge: string
}

export const corporateTrainingHeroData = {
  eyebrow: 'Industry-Aligned Corporate Skilling',
  headline: 'Skills That Move as Fast as',
  headlineHighlight: 'The Industry Does',
  subheadline:
    'Most corporate training programs teach what was current two years ago. Ours don’t. We build and refresh our curriculum around the technology teams are actually being asked to adopt right now — Generative AI, Microsoft Power Platform, and modern test automation frameworks like Playwright — and we retire what’s gone stale just as quickly.',
  primaryCta: { label: 'Talk to Us About a Training Program', href: '/contact-us' },
  secondaryCta: { label: 'Explore Training Areas', href: '#training-areas' },
  stats: [
    { label: 'Real Work, Not Toy Datasets', sublabel: 'Live Organizational Data' },
    { label: '3-Phase Delivery Model', sublabel: 'Workshop → Build → Handover' },
    { label: 'Trainer-Enablement Tracks', sublabel: 'Sustainable In-House Capability' },
  ],
}

export const trainingAreasData = {
  eyebrow: 'Core Curriculum',
  heading: 'Our Core Training Areas',
  description:
    'Evergrowing skills taught by practitioners who are hands-on with the tools every single day. Zero stale slides — 100% current enterprise stacks.',
  areas: [
    {
      id: 'genai',
      title: 'Generative AI & Applied AI Adoption',
      subtitle: 'From Conceptual Understanding to Applied Daily Workflows',
      description:
        'GenAI Capability Programs that go beyond a one-off workshop. Structured as an initial hands-on session followed by an Applied AI Adoption Sprint, so teams walk away having actually used GenAI on their own daily work.',
      tags: ['Applied AI Sprints', 'Google NotebookLM', 'Gemini & Prompt Engineering', 'Workflow Automation', 'Faculty AI Fluency'],
      keyHighlights: [
        'Applied AI Adoption Sprints embedded directly into your teams’ real tasks',
        'Specialized NotebookLM training for university faculty and knowledge workers',
        'Hands-on prompt design, research acceleration, and document intelligence',
        'Inclusive use cases, including educators teaching Deaf and hard-of-hearing students',
      ],
      badge: 'High-Demand Sprint',
    },
    {
      id: 'power-platform',
      title: 'Microsoft Power Platform',
      subtitle: 'Power BI, Power Apps & Power Automate In-House Mastery',
      description:
        'Built around our proven three-phase model: an awareness workshop to build foundational fluency, a consultation phase where we co-build a real dashboard or workflow alongside your team, and a handover phase that trains your people to maintain and extend it.',
      tags: ['Power BI Dashboards', 'Power Apps UX', 'Power Automate Flows', 'Live Dataset Modeling', '3-Phase Handover'],
      keyHighlights: [
        'Co-building live dashboards on your real organizational data',
        'Automated workflows eliminating manual data entry and repetitive tasks',
        'Structured handover training so the capability stays permanently in-house',
        'Tailored tracks for leadership reporting, program managers, and NGO teams',
      ],
      badge: 'Co-Build & Handover',
    },
    {
      id: 'modern-qa',
      title: 'Modern QA & Test Automation',
      subtitle: 'Playwright + TypeScript, Selenium, BDD Cucumber & Java',
      description:
        'Test automation training on the frameworks the industry has actually moved to. When QA standard stacks shifted from Selenium-only toward Playwright with TypeScript, our curriculum shifted with it — matching what modern engineering teams hire for.',
      tags: ['Playwright + TypeScript', 'Selenium WebDriver', 'BDD Cucumber', 'Java Automation', 'CI/CD Test Pipelines'],
      keyHighlights: [
        'Modern end-to-end testing with Playwright, TypeScript, and modern runners',
        'Foundational Java test automation for teams building practices from scratch',
        'Behavior-Driven Development (BDD) with Cucumber for cross-functional alignment',
        'Real-world CI/CD pipeline integration and automated regression suites',
      ],
      badge: 'Modern Industry Stack',
    },
  ] as TrainingAreaItem[],
}

export const trainingProcessData = {
  eyebrow: 'Full-Cycle Delivery Model',
  heading: 'The 3-Phase Delivery Framework',
  description:
    'We don’t do one-and-done lectures that teams forget a month later. Every program is engineered to build sustainable, independent capability.',
  phases: [
    {
      phase: 1,
      title: 'Awareness & Hands-on Workshop',
      subtitle: 'Phase 01: Foundational Fluency',
      description:
        'Interactive, practice-paired sessions where every concept is followed by immediate hands-on exercises to build confidence and muscle memory.',
      deliverable: 'Core tool fluency, guided exercises & reference playbooks',
    },
    {
      phase: 2,
      title: 'Consultation & Co-Building',
      subtitle: 'Phase 02: Real-World Implementation',
      description:
        'We work side-by-side with your team to build an actual dashboard, automated workflow, test suite, or GenAI process using your live data.',
      deliverable: 'Working prototype / dashboard co-built on real organizational data',
    },
    {
      phase: 3,
      title: 'Handover & Capability Extension',
      subtitle: 'Phase 03: Long-Term Independence',
      description:
        'We train your people to maintain, troubleshoot, and extend what was built — ensuring full in-house ownership long after the program ends.',
      deliverable: 'Complete handover documentation, extension guide & internal trainer sign-off',
    },
  ] as DeliveryPhaseItem[],
}

export const trainingDifferentiatorsData = {
  eyebrow: 'Why WinVinaya Training',
  heading: 'What Makes Our Training Different',
  description: 'Designed from the ground up to ensure high retention, immediate application, and complete organizational self-sufficiency.',
  items: [
    {
      id: 'hands-on',
      title: 'Hands-On by Design, Not Lecture-Heavy',
      description:
        'Our workshop format pairs every block of content with immediate practice — participants aren’t just watching slides, they’re doing the task while it’s still fresh.',
      badge: 'Immediate Practice',
    },
    {
      id: 'real-work',
      title: 'We Train on Real Work, Not Toy Examples',
      description:
        'Power Platform sessions build against a live dataset structured to mirror real organizational data, and our GenAI sprints have participants apply tools directly to their own day-to-day work.',
      badge: 'Live Data',
    },
    {
      id: 'full-cycle',
      title: 'Full-Cycle Delivery, Not a One-and-Done Session',
      description:
        'Workshop, consultation, and handover are built into how we run programs — the goal is a team that can sustain the skill independently, not one that forgets it a month later.',
      badge: '3-Phase Lifecycle',
    },
    {
      id: 'build-trainers',
      title: 'We Build Trainers, Not Just Trainees',
      description:
        'Beyond individual upskilling, we run trainer-enablement programs — equipping an organization’s own people to deliver ongoing training internally across software testing and workplace tools.',
      badge: 'Trainer Enablement',
    },
    {
      id: 'accessible',
      title: 'Accessible & Inclusive by Default',
      description:
        'Every training program we deliver is designed with the same inclusive-facilitation lens that defines our work — materials, pacing, and delivery format built to work for every participant in the room.',
      badge: 'Inclusive Delivery',
    },
  ] as TrainingDifferentiatorItem[],
}

export const pastProgramsData = {
  eyebrow: 'Track Record',
  heading: 'Programs We’ve Delivered',
  description: 'A proven record of delivering impactful, practical skilling for technology enterprises, social sector leaders, and universities.',
  programs: [
    {
      id: 'qa-tech',
      title: 'Modern QA Automation Upskilling',
      category: 'Enterprise Tech & Healthcare',
      description:
        'Delivered hands-on Java, Selenium, Playwright with TypeScript, and BDD Cucumber training for technology and healthcare-technology teams modernizing their automated test practice.',
      tag: 'Playwright • TypeScript • Java • BDD',
    },
    {
      id: 'genai-social',
      title: 'GenAI Capability Programs & Sprints',
      category: 'Social Sector & NGOs',
      description:
        'Hands-on workshop plus Applied AI Adoption Sprint for social-sector organizations and NGOs building internal AI fluency for program evaluation and operational acceleration.',
      tag: 'GenAI Sprints • Workflow Automation',
    },
    {
      id: 'notebooklm-faculty',
      title: 'GenAI & NotebookLM for University Faculty',
      category: 'Higher Education & Educators',
      description:
        'Practical NotebookLM training for university faculty, including educators teaching Deaf and hard-of-hearing students, focused on classroom facilitation and curriculum management.',
      tag: 'NotebookLM • Inclusive AI • Higher Ed',
    },
    {
      id: 'powerbi-ngo',
      title: 'Power BI End-to-End Enablement',
      category: 'Nonprofit Leadership',
      description:
        'From foundational dashboard literacy through to a fully built, handed-over reporting solution on live organizational data for NGO and nonprofit leadership teams.',
      tag: 'Power BI • Live Data • 3-Phase Handover',
    },
    {
      id: 'trainer-enablement',
      title: 'Multi-Course Trainer-Enablement Tracks',
      category: 'Internal Capability Building',
      description:
        'Equipping in-house trainers to deliver ongoing internal education across business software (Zoho Books, Zoho Creator) and technical skills (Java Test Automation).',
      tag: 'Trainer Enablement • Zoho • Java QA',
    },
  ] as PastProgramItem[],
}

export const trainingAudienceData = {
  eyebrow: 'Target Audience',
  heading: 'Who This Is For',
  description: 'Whether you are an enterprise tech team, educational institution, or impact organization, our programs meet you where you are.',
  items: [
    {
      id: 'enterprises',
      title: 'Enterprises & Technology Teams',
      description:
        'Upskilling QA, engineering, and data teams on current industry-standard stacks like Playwright, TypeScript, and Generative AI workflows.',
    },
    {
      id: 'ngos-csr',
      title: 'NGOs & CSR-Funded Organizations',
      description:
        'Building internal AI, Power BI reporting, and operational automation capabilities without the cost of hiring new full-time specialist staff.',
    },
    {
      id: 'universities',
      title: 'Universities & Higher Education',
      description:
        'Equipping faculty and staff with practical GenAI tools (like NotebookLM) and digital productivity workflows, delivered through inclusive facilitation.',
    },
    {
      id: 'inhouse-independence',
      title: 'Organizations Seeking Independence',
      description:
        'Any team that would rather build and sustain an enduring skill internally through trainer-enablement than depend on external vendors indefinitely.',
    },
  ] as TrainingAudienceItem[],
}

export const trainingFormatData = {
  eyebrow: 'Delivery Formats',
  heading: 'How We Deliver Training',
  description: 'Flexible, hands-on delivery models tailored to your team’s schedule, technical readiness, and operational goals.',
  formats: [
    {
      id: 'in-person',
      title: 'In-Person & Offline Workshops',
      description: 'Immersive, practice-paired sessions with live instructor coaching, immediate feedback, and collaborative group exercises.',
      badge: 'High Engagement',
    },
    {
      id: 'multi-phase',
      title: 'Multi-Phase Sprint Structures',
      description: 'Structured progression: foundational workshop → live project consultation/build → complete knowledge handover.',
      badge: 'Full-Cycle Lifecycle',
    },
    {
      id: 'trainer-track',
      title: 'Trainer-Enablement Tracks',
      description: 'Equipping your high-performers to facilitate internal training sessions, sustaining knowledge transfer across your org.',
      badge: 'Scale In-House',
    },
    {
      id: 'custom-curriculum',
      title: 'Tailored to Your Stack & Data',
      description: 'Curriculum customized to your team’s actual tools, codebases, and real-world datasets — not a generic slide deck.',
      badge: '100% Customized',
    },
  ] as DeliveryFormatItem[],
}

export const corporateTrainingCtaData = {
  heading: 'Ready to Equip Your Team with Evergrowing Skills?',
  body: 'Talk to our practitioners about a customized training program, GenAI sprint, Power Platform co-build, or QA upskilling track.',
  cta: { label: 'Talk to Us About a Training Program', href: '/contact-us' },
}
