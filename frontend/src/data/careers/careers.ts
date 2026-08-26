export interface InternshipDomain {
  id: string
  title: string
  skills: string[]
  description: string
}

export const careersHeroData = {
  eyebrow: 'Careers & Internships • Work With Purpose',
  headline: 'Shape an Inclusive',
  headlineHighlight: 'Digital Future',
  subheadline:
    'Join our team engineering accessible software, delivering enterprise audits, and creating transformative career opportunities for Persons with Disabilities across India.',
}

export const internshipProgramData = {
  badge: 'College Students & Recent Graduates',
  heading: 'Hands-On Industry Internship Program',
  subheading:
    'Gain real-world engineering and accessibility experience working directly on live company client and product deliverables.',
  
  importantNotice: {
    title: 'Important Note Regarding This Internship Program',
    points: [
      'Unpaid Internship: This is an unpaid, skill-intensive industry internship program.',
      'Live Company Projects: This program is NOT for students seeking academic project guidance or dummy college assignments. Interns work directly on WinVinaya’s active, ongoing production projects and client deliverables.',
      'Performance-Driven: Interns are expected to maintain professional sprint deadlines, attend daily standups, and deliver high-quality contributions.',
    ],
  },

  domains: [
    {
      id: 'accessibility-audit',
      title: 'Digital Accessibility Auditing & QA',
      skills: ['WCAG 2.2 AA', 'NVDA', 'JAWS', 'TalkBack', 'VoiceOver', 'Colour Contrast Testing'],
      description:
        'Audit live web applications, mobile apps, and design systems for enterprise compliance, log cross-disability barrier reports, and collaborate on remediation fixes.',
    },
    {
      id: 'fullstack-dev',
      title: 'Full-Stack Software Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'REST APIs', 'Modern CSS'],
      description:
        'Build and enhance modern web applications, accessible component design systems, and portal features using clean, maintainable architecture.',
    },
    {
      id: 'test-automation',
      title: 'Test Automation Engineering',
      skills: ['Playwright', 'TypeScript', 'Axe-core Automated Auditing', 'CI/CD Pipelines'],
      description:
        'Develop end-to-end automated testing suites with Playwright, embedding automated accessibility scanners directly into deployment pipelines.',
    },
    {
      id: 'document-remediation',
      title: 'Document Remediation & PDF/UA',
      skills: ['Adobe Acrobat Pro', 'PAC 2024', 'Accessible Word & PPT', 'MathML Structuring'],
      description:
        'Remediate complex enterprise documents, financial reports, and academic textbooks to ensure compliance with PDF/UA and WCAG standards.',
    },
    {
      id: 'ai-power-platform',
      title: 'Agentic AI & Power Platform Solutions',
      skills: ['Autonomous AI Agents', 'Power BI', 'Power Automate', 'Mission Analytics'],
      description:
        'Implement automated workflow agents and interactive Power BI executive dashboards for social impact monitoring and enterprise reporting.',
    },
  ],

  benefits: [
    {
      title: 'Official Certificate & Recommendation',
      description:
        'Receive an official Certificate of Internship Completion and performance-based Letter of Recommendation upon successful delivery.',
    },
    {
      title: 'Real Enterprise Code Contributions',
      description:
        'Build a verified portfolio of real-world software, audit reports, and automation pipelines rather than generic classroom projects.',
    },
    {
      title: 'Direct Industry Mentorship',
      description:
        'Work directly with IAAP-certified accessibility specialists, senior architects, and lead engineers with decades of industry experience.',
    },
    {
      title: 'Inclusive Workplace Exposure',
      description:
        'Learn how to collaborate seamlessly across diverse, inclusive teams including Deaf, blind, and neurodivergent professionals.',
    },
  ],

  eligibility: {
    title: 'Eligibility & Requirements',
    items: [
      'Pre-final or final year students pursuing BE / B.Tech (CS, IT, ECE), BCA, MCA, or related disciplines.',
      'Strong foundational knowledge of programming (JavaScript/TypeScript, Python, or Web Technologies).',
      'High curiosity and genuine interest in Digital Accessibility, Software Quality, or AI.',
      'Commitment of 2 to 6 months (Flexible full-time or part-time / hybrid arrangements).',
    ],
  },

  applyEmail: 'careers@winvinayainfosystems.com',
  applySubject: 'Application for College Student Internship - [Your Name] - [Domain of Interest]',
}

export const openRolesData = {
  badge: 'Full-Time & Lateral Opportunities',
  heading: 'Current Full-Time Openings',
  noRolesTitle: 'No Open Full-Time Positions at Present',
  noRolesDescription:
    'We currently do not have any active full-time job openings. However, we are constantly growing our talent pool of passionate accessibility auditors, full-stack engineers, and sign language interpreters.',
  talentNetworkTitle: 'Join Our Talent Network',
  talentNetworkDescription:
    'If you are an experienced professional interested in future opportunities with WinVinaya, send your resume and a brief introduction to our talent acquisition team.',
  contactEmail: 'careers@winvinayainfosystems.com',
  emailSubject: 'General Application / Talent Network - [Your Name] - [Role/Specialization]',
}

export const careersCultureData = {
  heading: 'Why Build Your Career at WinVinaya?',
  subheading:
    'We combine rigorous enterprise engineering standards with a high-empathy, inclusive culture where every voice shapes the future of technology.',
  pillars: [
    {
      title: 'Inclusion is Our Foundation',
      description:
        'Over 40% of our workforce are Persons with Disabilities. Accessibility and inclusion are not afterthoughts — they are woven into how we work every single day.',
    },
    {
      title: 'Enterprise Impact at Scale',
      description:
        'Our solutions touch millions of users across India’s leading corporate enterprises, BFSI institutions, and social sector organizations.',
    },
    {
      title: 'Continuous Growth & Certifications',
      description:
        'We actively sponsor and encourage team members to obtain globally recognized IAAP certifications (CPACC, WAS) and advanced engineering skills.',
    },
  ],
}
