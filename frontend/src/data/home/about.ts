export interface AboutPillar {
  id: string
  title: string
  tag: string
  description: string
  keywords: string[]
}

export interface AboutStat {
  value: string
  label: string
  sublabel: string
}

export interface AboutTeaserContent {
  eyebrow: string
  badge: string
  heading: string
  subheading: string
  storyParagraph1: string
  storyParagraph2: string
  highlight: string
  cta: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  complianceTags: string[]
  pillars: AboutPillar[]
  stats: AboutStat[]
}

export const aboutTeaser: AboutTeaserContent = {
  eyebrow: 'Who We Are',
  badge: 'Pioneering Digital Accessibility & AI Solutions',
  heading: 'Where World-Class IT Engineering Meets Authentic Accessibility',
  subheading:
    'We empower global enterprises to build compliant, high-performing, and inclusive digital products — engineered with precision and validated by specialists with lived experience.',
  storyParagraph1:
    'WinVinaya InfoSystems is a premier IT consulting and accessibility services firm. We bridge the critical gap between regulatory compliance and real-world user experience, ensuring websites, enterprise applications, and digital platforms are genuinely usable for everyone.',
  storyParagraph2:
    'Unlike conventional agencies relying solely on automated checkers, over 50% of our testing specialists are Persons with Disabilities (PwDs). They navigate software using native screen readers, keyboard controls, and assistive tech — delivering human-verified accessibility that automated tools miss.',
  highlight:
    'Inclusion is our origin story, not an afterthought. That is why our digital accessibility audits, AI agents, and custom enterprise applications withstand real-world assistive technology use.',
  cta: { label: 'Explore Our Story & Mission', href: '/about/our-story' },
  ctaSecondary: { label: 'Book Accessibility Audit', href: '/services/accessibility' },
  complianceTags: [
    'WCAG 2.1 / 2.2 (AA & AAA)',
    'ADA Title III & Section 508',
    'European Accessibility Act (EAA 2025)',
    'IAAP-Certified Specialists',
    'Accessible AI & Power BI',
    'VPAT & ACR Certification',
  ],
  pillars: [
    {
      id: 'lived-experience',
      title: 'Lived-Experience Accessibility Audits',
      tag: 'Human-Led QA',
      description:
        'Audits conducted by certified engineers who are Persons with Disabilities using NVDA, JAWS, VoiceOver, TalkBack, and Refreshable Braille. Zero false sense of security.',
      keywords: ['WCAG 2.2 AA/AAA', 'Screen Readers', 'Assistive Tech Testing'],
    },
    {
      id: 'enterprise-ai',
      title: 'Accessible AI & Digital Engineering',
      tag: 'Next-Gen IT Solutions',
      description:
        'Full-stack enterprise web apps, intelligent AI workflows, and certified Power BI dashboards designed and coded with inclusive design architecture from line one.',
      keywords: ['Accessible Web Apps', 'Enterprise Power BI', 'AI Agents'],
    },
    {
      id: 'compliance-assurance',
      title: 'Global Compliance & Risk Mitigation',
      tag: 'Regulatory Assurance',
      description:
        'Comprehensive VPAT/ACR documentation and risk mitigation defending your brand against ADA lawsuits while unlocking seamless EAA 2025 market readiness.',
      keywords: ['ADA Compliance', 'Section 508 VPAT', 'EAA 2025 Ready'],
    },
    {
      id: 'social-impact',
      title: 'WinVinaya Foundation Synergy',
      tag: 'Social Impact (ESG)',
      description:
        'Directly linked to our non-profit foundation, advancing inclusive hiring and building sustainable IT career pathways for PwDs, neurodivergent talent, and women in tech.',
      keywords: ['ESG Leadership', 'Inclusive Hiring', '4,000+ Careers Empowered'],
    },
  ],
  stats: [
    {
      value: '10+',
      label: 'Years of Excellence',
      sublabel: 'Delivering enterprise IT & accessibility solutions',
    },
    {
      value: '50%+',
      label: 'Lived-Experience QA',
      sublabel: 'Team members who are Persons with Disabilities',
    },
    {
      value: '150+',
      label: 'Enterprises Served',
      sublabel: 'Global clients across tech, finance & public sector',
    },
    {
      value: '99.8%',
      label: 'Audit Accuracy',
      sublabel: 'Eliminating false positives & undetected WCAG barriers',
    },
  ],
}
