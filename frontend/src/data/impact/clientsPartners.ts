export interface SectorServedItem {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  deliverables: string[]
  standardsAndTools: string[]
}

export interface PublicPartnerItem {
  id: string
  name: string
  subtitle: string
  description: string
  initiative: string
  badge: string
  tags: string[]
}

export interface AcademicPartnerItem {
  id: string
  name: string
  location: string
  description: string
  focus: string
  badge: string
}

export const clientsPartnersHeroData = {
  eyebrow: 'Community Collaboration • Enterprise Impact',
  headline: 'Collaborating for Impact,',
  headlineHighlight: 'Delivering for Enterprise',
  subheadline:
    'Our work spans Fortune 500 corporations, regulated capital market platforms, social foundations, and pioneering academic institutions. We respect client confidentiality on non-public work while proudly sharing our on-record partnerships.',
  disclaimer:
    'Trademark & Brand Transparency: A logo wall requires explicit written legal trademark permission. This page presents our enterprise work by industry sector and showcases named partnerships that are part of the verified public record.',
  primaryCta: { label: 'Become a Partner', href: '/contact-us' },
  secondaryCta: { label: 'Explore Sectors & Partners', href: '#sectors-served' },
  stats: [
    { label: '5 Industry Sectors', sublabel: 'Fintech, Healthcare, NGOs & Gov' },
    { label: 'Public Collaborations', sublabel: 'JPMorgan Chase, SVP & VAANI' },
    { label: 'EduConnect Network', sublabel: 'TEACH, NISH, CDAP & Colleges' },
  ],
}

export const sectorsServedData = {
  eyebrow: 'Industry Breadth',
  heading: 'Sectors We’ve Served',
  description:
    'We deliver specialized digital accessibility audits, custom workflow software, business intelligence, and corporate upskilling across key industry domains.',
  sectors: [
    {
      id: 'fintech-capital-markets',
      title: 'Financial Services & Stock Market Platforms',
      subtitle: 'Regulated Digital Compliance & Audits',
      description:
        'Comprehensive accessibility audits, dual-fix technical remediation support, and closed-loop compliance reporting for stock trading portals, market intermediaries, and fintech web properties.',
      badge: 'SEBI Mandate & Fintech',
      deliverables: [
        'Three-round WCAG 2.1 AA and Section 508 accessibility audits',
        'Consolidated half-yearly reports formatted for DEPwD regulatory submission',
        'Dual-format recommendations: code fixes and alternative UX options',
      ],
      standardsAndTools: ['WCAG 2.1/2.2 AA', 'SEBI Directives', 'Section 508', 'DEPwD Submission'],
    },
    {
      id: 'healthcare-technology',
      title: 'Healthcare Technology',
      subtitle: 'Modern QA Engineering & Automation',
      description:
        'Technical corporate training and workforce transformation helping healthcare QA teams modernize legacy testing into robust automation frameworks.',
      badge: 'QA Modernization',
      deliverables: [
        'Transitioning manual and Selenium testing to Playwright with TypeScript',
        'End-to-end BDD automation suites with Cucumber and Java',
        'Multi-year repeat curriculum updates matching industry hiring standards',
      ],
      standardsAndTools: ['Playwright + TypeScript', 'Selenium WebDriver', 'BDD Cucumber', 'Healthcare QA'],
    },
    {
      id: 'ngos-nonprofits',
      title: 'NGOs & Nonprofit Organizations',
      subtitle: 'Applied GenAI & Power BI Impact Dashboards',
      description:
        'Empowering social-sector foundations with practical GenAI workflows, impact-measurement (MEL) dashboards, and accessible document conversion.',
      badge: 'Social Impact & MEL',
      deliverables: [
        'Custom Power BI dashboards replacing fragmented spreadsheets',
        'GenAI Capability Programs and Applied AI Adoption Sprints',
        'Full handover training ensuring 100% in-house operational independence',
      ],
      standardsAndTools: ['Power BI', 'Google NotebookLM', 'GenAI Sprints', 'Trainer Enablement'],
    },
    {
      id: 'higher-education-publishing',
      title: 'Higher Education & Publishing',
      subtitle: 'High-Volume Academic Document Remediation',
      description:
        'Converting complex academic semester packs, STEM textbooks, formulas, and research methodology chapters into accessible formats at rapid pace.',
      badge: 'Academic Remediation',
      deliverables: [
        'Proprietary automated PDF-to-accessible-Word conversion tooling',
        'Zero content loss on complex tables, citations, and footnotes',
        'Expert accessibility team review before student delivery',
      ],
      standardsAndTools: ['PDF/UA', 'WCAG Documents', 'STEM & Math', 'Proprietary AI Tooling'],
    },
    {
      id: 'government-public-sector',
      title: 'Government & Public Sector',
      subtitle: 'Mandatory National Accessibility Benchmarking',
      description:
        'Digital accessibility audits and technical gap assessments benchmarked against mandatory Indian national accessibility guidelines and statutory acts.',
      badge: 'National Mandates',
      deliverables: [
        'GIGW 3.0 website and mobile application accessibility compliance',
        'Audits aligned to RPWD Act, 2016 and Bureau of Indian Standards IS 17802',
        'Detailed barrier identification with prioritized remediation playbooks',
      ],
      standardsAndTools: ['GIGW 3.0', 'RPWD Act 2016', 'IS 17802', 'Public Sector Portals'],
    },
  ] as SectorServedItem[],
}

export const publicPartnersData = {
  eyebrow: 'On-Record Collaborations',
  heading: 'Our Public Partners',
  description:
    'These partnerships are an established part of the public record, demonstrating our ongoing commitment to community enablement, career guidance, and inclusive technology.',
  partners: [
    {
      id: 'svp-bengaluru',
      name: 'SVP Bengaluru',
      subtitle: 'Social Venture Partners',
      description:
        'AI capacity-building programs delivered for NGO professionals, non-profit leaders, and educators — including a comprehensive Train-the-Trainer program to foster sustained institutional literacy.',
      initiative: 'AI Train-the-Trainer & Capability Building for NGOs',
      badge: 'AI Enablement',
      tags: ['Train-the-Trainer', 'Applied GenAI', 'NGO Leadership', 'Social Innovation'],
    },
    {
      id: 'vaani-foundation',
      name: 'VAANI Deaf Children’s Foundation',
      subtitle: 'Inclusive Childhood Development',
      description:
        'Collaborative partnership on the AI Train-the-Trainer program delivered in conjunction with SVP Bengaluru, equipping educators and staff with practical AI tools for inclusive communication.',
      initiative: 'AI Educator Enablement for Deaf Children’s Programs',
      badge: 'Deaf Education',
      tags: ['Special Education', 'AI in Education', 'Deaf Children Inclusion', 'SVP Partnership'],
    },
    {
      id: 'jpmorgan-chase',
      name: 'JPMorgan Chase (Force For Good)',
      subtitle: 'Experiential Tech Prototyping',
      description:
        'Collaborated with JPMorgan Chase technologists and volunteers to develop a prototype learning platform that helps visually impaired learners study coding and programming experientially.',
      initiative: 'Accessible Coding & Experiential Learning Platform',
      badge: 'Tech For Good',
      tags: ['Accessible Coding', 'Visual Impairment', 'Force For Good', 'Prototype Engineering'],
    },
    {
      id: 'youth4jobs',
      name: 'Youth4Jobs Foundation',
      subtitle: 'Livelihoods for Persons with Disabilities',
      description:
        'Joint workshops and technical coaching sessions supporting career guidance, resume building, and digital employment readiness for candidates with disabilities.',
      initiative: 'Career Guidance & Skilling Workshops for PwD Candidates',
      badge: 'Career Readiness',
      tags: ['Livelihoods', 'Career Guidance', 'PwD Skilling', 'Technical Readiness'],
    },
    {
      id: 'mitra-jyothi',
      name: 'Mitra Jyothi',
      subtitle: 'Empowering the Visually Impaired',
      description:
        'Collaborative sessions focused on career guidance, assistive technology orientation, and digital accessibility skilling for visually impaired learners and job seekers.',
      initiative: 'Assistive Tech Skilling & Career Pathways',
      badge: 'Assistive Tech',
      tags: ['Visual Impairment', 'Assistive Technology', 'Career Pathways', 'Inclusion'],
    },
  ] as PublicPartnerItem[],
}

export const eduConnectAcademicData = {
  eyebrow: 'EduConnect Program',
  heading: 'Academic Partner Institutions',
  description:
    'Through our EduConnect Program, we partner with leading colleges, universities, and specialized institutes across India to train school and college students with disabilities.',
  institutions: [
    {
      id: 'teach-mumbai',
      name: 'TEACH',
      location: 'Mumbai, Maharashtra',
      description:
        'Partnering to deliver digital literacy, computer applications, and career transition skilling for students with hearing impairments.',
      focus: 'Higher Education for Deaf Students',
      badge: 'Deaf Higher Education',
    },
    {
      id: 'nish-kerala',
      name: 'NISH',
      location: 'National Institute of Speech & Hearing, Thiruvananthapuram, Kerala',
      description:
        'Collaborating on software testing training, accessibility workshops, and applied tech education for students with speech and hearing disabilities.',
      focus: 'Specialized Technology Training',
      badge: 'Premier National Institute',
    },
    {
      id: 'cdap-trichy',
      name: 'CDAP',
      location: 'Centre for Differently Abled Persons, Bharathidasan University, Trichy',
      description:
        'Delivering structured ICT skilling, test automation foundational courses, and career readiness programs for university students with diverse disabilities.',
      focus: 'University Disability Support',
      badge: 'University Center',
    },
    {
      id: 'bishop-moore',
      name: 'Bishop Moore College',
      location: 'Mavelikara, Kerala',
      description:
        'Institutional collaboration supporting inclusive campus computing, accessibility orientation, and skilling for college students with disabilities.',
      focus: 'Inclusive Higher Education',
      badge: 'Collegiate Inclusion',
    },
  ] as AcademicPartnerItem[],
}

export const clientsPartnersCtaData = {
  heading: 'Ready to Collaborate for Greater Impact and Enterprise Excellence?',
  body: 'Whether you’re an enterprise seeking accessibility audits, an NGO looking for capacity building, or an institution exploring partnership, we’d love to connect.',
  primaryCta: { label: 'Become a Partner', href: '/contact-us' },
  secondaryCta: { label: 'Explore Our Services', href: '/services/accessibility-audit-testing' },
}
