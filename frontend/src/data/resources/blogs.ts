export interface BlogContentSection {
  heading?: string
  paragraphs: string[]
  quoteCallout?: {
    text: string
    author?: string
  }
  takeaways?: string[]
}

export interface BlogPostItem {
  id: string
  slug: string
  aliases?: string[]
  title: string
  excerpt: string
  category: 'workplace-inclusion' | 'accessibility' | 'community-training' | 'sign-language' | 'tech-engineering'
  categoryLabel: string
  author: string
  authorRole: string
  publishedDate: string
  readTime: string
  isFeatured?: boolean
  tags: string[]
  highlightBadge?: string
  coverCaption?: string
  sections: BlogContentSection[]
}

export interface BlogCategoryFilter {
  id: string
  label: string
}

export const blogCategories: BlogCategoryFilter[] = [
  { id: 'all', label: 'All Articles' },
  { id: 'workplace-inclusion', label: 'Workplace Inclusion' },
  { id: 'accessibility', label: 'Accessibility & Tech' },
  { id: 'community-training', label: 'Community & Training' },
  { id: 'sign-language', label: 'Sign Language & ISL' },
]

export const blogsHeroData = {
  eyebrow: 'Thought Leadership • Field Notes • Inclusive Tech',
  headline: 'The WinVinaya',
  headlineHighlight: 'Blog',
  subheadline:
    'Stories, ideas, and honest field notes from our work building inclusive workplaces, accessible digital systems, and empowering diverse teams across India.',
}

export const featuredBlogPost: BlogPostItem = {
  id: 'pwd-employment-gap',
  slug: 'why-indias-pwd-employment-number-should-alarm-every-employer',
  aliases: ['pwd-employment-gap-should-alarm-every-employer', 'pwd-employment-gap'],
  title: 'Why India’s 0.36% PWD Employment Number Should Alarm Every Employer',
  excerpt:
    'A workforce gap this large isn’t a diversity footnote — it’s a hiring strategy sitting completely untouched. Here’s what the number actually means for your talent pipeline, productivity, and long-term organizational competitiveness.',
  category: 'workplace-inclusion',
  categoryLabel: 'Workplace Inclusion',
  author: 'WinVinaya Editorial Team',
  authorRole: 'Workforce Inclusion Research',
  publishedDate: '13 Aug 2026',
  readTime: '3 min read',
  isFeatured: true,
  highlightBadge: 'Flagship Article',
  tags: ['Disability Employment', 'Workforce Diversity', 'Hiring Strategy', 'Talent Pipeline', 'ROI of Inclusion'],
  coverCaption: 'Examining India’s formal corporate PwD employment statistics and untapped talent pipelines.',
  sections: [
    {
      heading: 'The Number Nobody Wants to Put on a Slide',
      paragraphs: [
        'India is home to an estimated 26.8 million Persons with Disabilities (PwDs), according to official census data — with independent demographic assessments placing that number closer to 40-50 million. Yet, across India’s top 200 listed companies and private corporate sector, the average employment rate of Persons with Disabilities hovers at an astonishingly low 0.36%.',
        'To put that into stark perspective: out of every 10,000 employees in formal corporate enterprises, barely 36 are persons with disabilities. In many high-growth sectors — including software engineering, BFSI, and business consulting — that representation drops even closer to zero.',
      ],
      quoteCallout: {
        text: 'A workforce participation rate of 0.36% is not a mild diversity shortfall. It is an indicator of systemic hiring blindness that leaves millions of capable, educated, and loyal professionals locked out of the formal economy.',
        author: 'WinVinaya Workforce Inclusion Research',
      },
    },
    {
      heading: 'Why This Is an Operational Crisis, Not Just a CSR Matter',
      paragraphs: [
        'For decades, disability hiring in corporate India has been relegated to Corporate Social Responsibility (CSR) committees, treated as a charitable deed or an annual publicity campaign. This framing is fundamentally flawed and commercially counterproductive.',
        'When organizations treat disability employment as charity rather than mainstream talent acquisition, three things happen:',
        'First, hiring managers assume candidate capabilities must be compromised, leading to low-skill token placements rather than merit-based technical roles. Second, onboarding and assistive technology adjustments are treated as painful cost centers rather than standard workplace enablement. Third, companies miss out on a talent pool characterized by exceptionally high retention rates, meticulous problem-solving, and deep cognitive diversity.',
      ],
      takeaways: [
        'Retention Rates: Studies consistently show PwD employees have retention rates 25–40% higher than industry averages in software testing, data analysis, and technical operations.',
        'Innovation Dividend: Teams with neurodivergent, Deaf, and visually impaired engineers identify accessibility bugs, UX friction points, and edge-case errors 3x faster during development cycles.',
        'Untapped Talent: Thousands of university graduates with disabilities remain unemployed simply because standard recruitment portals lack accessibility or interviewers lack sensitization.',
      ],
    },
    {
      heading: 'The Three Practical Steps Employers Must Take Today',
      paragraphs: [
        'Closing this gap does not require complex corporate overhauls or massive capital expenditure. It begins with three decisive actions:',
        '1. Audit the Candidate Journey: Ensure your career portals, job application forms, and technical screening assessments comply with WCAG 2.1 AA standards and work seamlessly with screen readers and keyboard navigation.',
        '2. Partner for Specialized Sourcing & Skilling: Work with specialized institutions that train candidates with disabilities in market-relevant skills like Playwright test automation, Python, Power BI, and business communications.',
        '3. Sensitize Middle Management & Interview Panels: The primary barrier to inclusive hiring is rarely senior leadership intent; it is middle management fear of the unknown. Structured sensitization demystifies accommodations and builds confident managers.',
        'The 0.36% figure should alarm every corporate leader — but for forward-thinking organizations, it also represents the largest untapped competitive talent advantage in India today.',
      ],
    },
  ],
}

export const blogPostsData: BlogPostItem[] = [
  featuredBlogPost,
  {
    id: 'learn-isl-beginner',
    slug: 'what-it-is-really-like-to-learn-indian-sign-language-as-a-beginner',
    aliases: ['learning-indian-sign-language-as-a-beginner', 'learn-isl-beginner'],
    title: 'What It Is Really Like to Learn Indian Sign Language as a Beginner',
    excerpt:
      'The initial clumsiness, the grammar that works entirely through spatial orientation and facial expressions, and why the first conversation in ISL feels like unlocking a whole new cognitive superpower.',
    category: 'sign-language',
    categoryLabel: 'Sign Language',
    author: 'ISL Training Faculty',
    authorRole: 'Master Sign Language Instructor',
    publishedDate: '30 Jul 2026',
    readTime: '2 min read',
    tags: ['Indian Sign Language', 'Deaf Culture', 'Inclusive Communication', 'ISL Basics'],
    coverCaption: 'Experiencing the expressive grammar and spatial dynamics of Indian Sign Language.',
    sections: [
      {
        heading: 'Breaking the Illusion of "Spoken Words with Hands"',
        paragraphs: [
          'Most hearing people assume Indian Sign Language (ISL) is simply English or Hindi translated into hand gestures. It isn’t. ISL is an independent, complete natural language with its own complex syntax, grammatical rules, spatial references, and non-manual markers.',
          'When you take your first ISL class, your hands feel clumsy. You realize your hands have spent their entire existence typing on keyboards or holding smartphones, completely unaccustomed to articulating precise geometric shapes in three-dimensional space.',
        ],
        quoteCallout: {
          text: 'In Indian Sign Language, your face is your grammar. An eyebrow raise transforms a statement into a question, and the speed of a hand stroke conveys tense and emotional weight.',
          author: 'WinVinaya ISL Master Instructor',
        },
      },
      {
        heading: 'The Three Mindset Shifts Every Learner Experiences',
        paragraphs: [
          'Learning ISL fundamentally rewires how you perceive communication in several distinct ways:',
        ],
        takeaways: [
          'Eyes Replaces Ears: You learn to maintain constant eye contact and read subtle facial micro-expressions that hearing conversations often ignore.',
          'Spatial Memory: You assign conceptual spaces in front of your chest for past, present, future, and multiple conversational subjects, building a 3D memory map.',
          'Directness & Clarity: ISL removes polite auditory padding and delivers clear, unambiguous, and honest communication.',
        ],
      },
      {
        heading: 'Why Every Tech Workplace Should Learn Basic ISL',
        paragraphs: [
          'When teams learn even 20 to 30 basic signs — introductions, technical terms, questions, and greetings — the workplace culture transforms. Deaf colleagues no longer feel like isolated observers waiting for written summaries; they become equal participants in daily standups and brainstorming sessions.',
        ],
      },
    ],
  },
  {
    id: 'sensitization-workshop',
    slug: 'inside-a-disability-sensitization-workshop-what-actually-happens',
    aliases: ['inside-a-disability-sensitization-workshop'],
    title: 'Inside a Disability Sensitization Workshop: What Actually Happens',
    excerpt:
      'Beyond theory: what happens when teams actually experience accessible technology barriers firsthand, ask the awkward questions in a safe space, and walk away with genuine empathy.',
    category: 'community-training',
    categoryLabel: 'Community & Training',
    author: 'Corporate Enablement Team',
    authorRole: 'D&I Workshop Lead',
    publishedDate: '16 Jul 2026',
    readTime: '2 min read',
    tags: ['Sensitization', 'Workplace Culture', 'Empathy Building', 'Inclusive Teams'],
    coverCaption: 'Interactive sensitization sessions bridging understanding across corporate teams.',
    sections: [
      {
        heading: 'Moving Beyond Politeness to Real Understanding',
        paragraphs: [
          'Most diversity workshops fail because they focus on what you are NOT allowed to say. People walk away terrified of making a mistake, walking on eggshells around colleagues with disabilities.',
          'Our sensitization workshops do the exact opposite: we create a candid, safe environment where participants can ask all the questions they have always been afraid to voice.',
        ],
        quoteCallout: {
          text: 'Sensitization is not about feeling pity or memorizing politically correct terminology. It is about understanding how assistive tools work and removing unnecessary friction from daily collaboration.',
        },
      },
      {
        heading: 'The Experiential Component: Experiencing Digital Barriers',
        paragraphs: [
          'During the workshop, participants turn off their monitors and attempt to book a ticket using only a screen reader. They navigate websites using only keyboard tab sequences. Within ten minutes, what felt like abstract compliance rules becomes visceral reality.',
        ],
        takeaways: [
          'Experiential Empathy: Experiencing software without mouse input instantly clarifies why ARIA attributes and focus order matter.',
          'Etiquette Demystification: Learning practical collaboration etiquette for working alongside Deaf, blind, and neurodivergent peers.',
          'Actionable Takeaways: Every attendee creates a personal checklist of accessible practices for their emails, documents, and meetings.',
        ],
      },
    ],
  },
  {
    id: 'five-workplace-myths',
    slug: 'five-workplace-myths-about-disability-we-hear-all-the-time',
    aliases: ['five-workplace-myths-about-disability'],
    title: 'Five Workplace Myths About Disability We Hear All the Time',
    excerpt:
      'From “accommodations are too expensive” to “job roles must be watered down” — breaking down the five most persistent misconceptions that keep companies from hiring top-tier PwD talent.',
    category: 'workplace-inclusion',
    categoryLabel: 'Workplace Inclusion',
    author: 'Workplace Inclusion Research',
    authorRole: 'Principal Inclusion Consultant',
    publishedDate: '2 Jul 2026',
    readTime: '3 min read',
    tags: ['Mythbusting', 'HR Strategy', 'Accommodation Costs', 'Talent Acquisition'],
    coverCaption: 'Dissecting and dispelling persistent workplace myths regarding disability employment.',
    sections: [
      {
        heading: 'Myth 1: Workplace Accommodations Are Prohibitively Expensive',
        paragraphs: [
          'Data from the Job Accommodation Network (JAN) shows that over 58% of workplace accommodations cost exactly $0 (such as flexible scheduling or noise-cancelling headphones), while the rest carry an average one-time cost of under ₹15,000.',
        ],
      },
      {
        heading: 'Myth 2: Performance Standards Must Be Lowered',
        paragraphs: [
          'Candidates trained through rigorous skilling programs write standard Playwright test automation scripts, analyze complex datasets, and deliver enterprise MIS reports to the exact same specifications as any peer. Equal opportunity means equal standards, enabled by accessible tools.',
        ],
      },
      {
        heading: 'Myth 3: Emergency Evacuations Are Impossible to Manage',
        paragraphs: [
          'With modern visual strobe alarms, vibrating pagers, and buddy evacuation protocols, inclusive workplaces have proven emergency readiness plans that protect all employees.',
        ],
      },
    ],
  },
  {
    id: 'assistive-tech-101',
    slug: 'assistive-tech-101-what-screen-readers-are-and-what-developers-get-wrong',
    aliases: ['assistive-tech-101-what-screen-readers-are'],
    title: 'Assistive Tech 101: What Screen Readers Are, and What Developers Get Wrong',
    excerpt:
      'Why adding aria-label to everything doesn’t make your site accessible. A practical guide for engineers on how blind developers and users navigate modern web applications with NVDA and JAWS.',
    category: 'accessibility',
    categoryLabel: 'Accessibility & Tech',
    author: 'Digital Accessibility Practice',
    authorRole: 'Lead Accessibility Engineer (WAS)',
    publishedDate: '18 Jun 2026',
    readTime: '2 min read',
    tags: ['Screen Readers', 'Web Accessibility', 'ARIA', 'Developer Guide', 'NVDA / JAWS'],
    coverCaption: 'Understanding screen reader semantics, DOM hierarchy, and developer best practices.',
    sections: [
      {
        heading: 'The "ARIA First" Anti-Pattern',
        paragraphs: [
          'The first rule of ARIA is: don’t use ARIA if a native HTML element already exists. A button is `<button>`, not `<div role="button" tabindex="0">`. When developers over-apply ARIA attributes without understanding screen reader announcements, they create confusing, cluttered audio experiences.',
        ],
        quoteCallout: {
          text: 'Screen reader users do not read web pages top to bottom like a book; they jump through headings, landmarks, and interactive elements. If your heading structure is broken, navigation becomes impossible.',
        },
      },
      {
        heading: 'Top 3 Screen Reader Mistakes to Fix Today',
        paragraphs: [
          '1. Unlabelled Icon Buttons: A button containing only an SVG icon must have an `aria-label` or accessible text, otherwise screen readers announce "button" with no context.',
          '2. Trap Focus in Modals: When a dialog opens, keyboard focus must move inside the modal and be trapped until closed, returning focus to the trigger button upon exit.',
          '3. Meaningful Image Alt Text: Do not write "image of a graph" — write the takeaway: "Quarterly revenue increased 24% to ₹4.2 Cr".',
        ],
      },
    ],
  },
  {
    id: 'intern-to-hire-model',
    slug: 'from-intern-to-hire-what-makes-winvinayas-placement-model-different',
    aliases: ['from-intern-to-hire-winvinayas-model'],
    title: 'From Intern to Hire: What Makes WinVinaya’s Placement Model Different',
    excerpt:
      'Why standard vocational training often fails to bridge into corporate IT careers, and how our project-based incubation model equips scholars with enterprise-grade test automation and dev skills.',
    category: 'community-training',
    categoryLabel: 'Community & Training',
    author: 'Placement & Skilling Team',
    authorRole: 'Career Development Director',
    publishedDate: '4 Jun 2026',
    readTime: '2 min read',
    tags: ['Career Placement', 'IT Training', 'Inclusive Hiring', 'Project-Based Learning'],
    coverCaption: 'Tracing the transition pipeline from hands-on incubation to corporate placement.',
    sections: [
      {
        heading: 'The Gap in Traditional NGO Skilling',
        paragraphs: [
          'Traditional NGO training programs often teach general computer basics like typing and basic data entry. While valuable, these skills do not match the entry-level hiring requirements of modern software engineering teams and product companies.',
        ],
      },
      {
        heading: 'The Incubation & Real-Project Approach',
        paragraphs: [
          'At WinVinaya, scholars work on real software products, write TypeScript automation suites with Playwright, and remediate live PDF courseware. When they sit for interviews, they demonstrate a portfolio of live engineering work.',
        ],
      },
    ],
  },
  {
    id: 'agentic-ai-accessibility',
    slug: 'building-ai-agents-that-are-born-accessible-from-day-one',
    aliases: ['building-ai-agents-born-accessible'],
    title: 'Building AI Agents That Are Born Accessible from Day One',
    excerpt:
      'How we design custom Agentic AI workflows with screen-reader compatibility, multi-modal feedback, and keyboard-first navigation embedded directly into the foundational agent architecture.',
    category: 'accessibility',
    categoryLabel: 'Accessibility & Tech',
    author: 'AI & Engineering Practice',
    authorRole: 'Principal AI Architect',
    publishedDate: '22 May 2026',
    readTime: '4 min read',
    tags: ['Agentic AI', 'Accessible Architecture', 'Multi-Modal UI', 'Keyboard Navigation'],
    coverCaption: 'Architecting Agentic AI solutions with accessibility embedded at the root level.',
    sections: [
      {
        heading: 'Why AI Systems Often Create New Digital Divides',
        paragraphs: [
          'As organizations deploy Autonomous AI agents, voice assistants, and real-time reasoning dashboards, many of these interfaces fail basic accessibility tests: dynamic content updates without `aria-live` regions, missing keyboard shortcuts, and unstructured chat outputs.',
        ],
      },
      {
        heading: 'Our 4-Point Accessible Agent Architecture',
        paragraphs: [
          'We engineer AI agents where accessibility is a core architectural requirement: structured markdown formatting, screen reader announcements for streaming outputs, multi-modal fallback, and high-contrast UI themes.',
        ],
      },
    ],
  },
  {
    id: 'sebi-accessibility-mandate',
    slug: 'why-sebis-accessibility-mandate-changes-the-game-for-indian-capital-markets',
    aliases: ['why-sebis-accessibility-mandate-changes-the-game'],
    title: 'Why SEBI’s Accessibility Mandate Changes the Game for Indian Capital Markets',
    excerpt:
      'An in-depth analysis of SEBI’s digital accessibility directives for stock brokers, depositories, and market infrastructure entities — what compliance requires and how to avoid common audit pitfalls.',
    category: 'accessibility',
    categoryLabel: 'Accessibility & Tech',
    author: 'Regulatory Compliance Team',
    authorRole: 'Senior Accessibility Auditor (CPACC)',
    publishedDate: '10 May 2026',
    readTime: '3 min read',
    tags: ['SEBI Mandate', 'Capital Markets', 'Regulatory Compliance', 'Fintech Accessibility'],
    coverCaption: 'Deciphering SEBI digital accessibility circulars and compliance audit protocols.',
    sections: [
      {
        heading: 'The Regulatory Shift in Indian Finance',
        paragraphs: [
          'The Securities and Exchange Board of India (SEBI) has mandated that all market infrastructure institutions, stock brokers, and registered intermediaries ensure their digital trading platforms and mobile apps conform to WCAG 2.1 Level AA standards.',
        ],
      },
      {
        heading: 'Key Audit Requirements for Regulated Entities',
        paragraphs: [
          'Audits must be conducted by certified professionals (IAAP CPACC/WAS), testing must cover cross-disability assistive tools, and half-yearly closure reports must be submitted to regulators.',
        ],
      },
    ],
  },
  {
    id: 'power-bi-nonprofits',
    slug: 'power-bi-for-nonprofits-transforming-fragmented-spreadsheets-into-mission-intelligence',
    aliases: ['power-bi-for-nonprofits-transforming-spreadsheets'],
    title: 'Power BI for Nonprofits: Transforming Fragmented Spreadsheets into Mission Intelligence',
    excerpt:
      'How social sector organizations can move from scattered monthly spreadsheets to unified, automated impact reporting that satisfies donors, monitors field programs, and requires zero ongoing code maintenance.',
    category: 'community-training',
    categoryLabel: 'Community & Training',
    author: 'Data Solutions Team',
    authorRole: 'Power Platform Lead Consultant',
    publishedDate: '28 Apr 2026',
    readTime: '3 min read',
    tags: ['Power BI', 'Nonprofit MIS', 'Data Transformation', 'Donor Reporting'],
    coverCaption: 'Empowering non-profits with automated Power BI dashboards and mission analytics.',
    sections: [
      {
        heading: 'The Spreadsheet Dilemma in the Social Sector',
        paragraphs: [
          'Non-profits often collect vast amounts of field data across multiple states and projects, but leadership spends days manually compiling Excel spreadsheets every month for donor reporting.',
        ],
      },
      {
        heading: 'Automated Impact Dashboards with Zero Code Maintenance',
        paragraphs: [
          'By connecting data pipelines directly to Microsoft Power BI, organizations gain live, interactive geographic visual maps, gender and disability demographic breakdowns, and automated executive summaries ready for board review.',
        ],
      },
    ],
  },
]

/** Look up a blog post by its exact slug or alias. */
export const getBlogPostBySlug = (slug: string): BlogPostItem | undefined => {
  const normalizedSlug = slug.toLowerCase().trim()
  return blogPostsData.find(
    (post) =>
      post.slug.toLowerCase() === normalizedSlug ||
      post.id.toLowerCase() === normalizedSlug ||
      post.aliases?.some((alias) => alias.toLowerCase() === normalizedSlug)
  )
}

/** Get adjacent (previous and next) blog posts for bottom navigation. */
export const getAdjacentPosts = (
  currentId: string
): { prevPost?: BlogPostItem; nextPost?: BlogPostItem } => {
  const currentIndex = blogPostsData.findIndex((p) => p.id === currentId)
  if (currentIndex === -1) return {}

  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : undefined
  const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : undefined

  return { prevPost, nextPost }
}

export const blogNewsletterData = {
  eyebrow: 'Stay Informed',
  heading: 'Subscribe to Inclusive Tech & Accessibility Insights',
  description:
    'Get our latest articles, regulatory audit updates, and practical accessibility playbooks delivered straight to your inbox once a month. No spam, ever.',
  buttonLabel: 'Subscribe',
  privacyNote: 'We respect your privacy. Unsubscribe at any time with one click.',
}

export const blogsCtaData = {
  heading: 'Have a Project, Training Need, or Accessibility Question?',
  body: 'Whether you need a digital accessibility audit, team sensitization, or custom application engineering, our certified team is here to help.',
  primaryCta: { label: 'Explore Accessibility Services', href: '/services/accessibility-audit-testing' },
  secondaryCta: { label: 'Contact Us', href: '/contact-us' },
}
