export interface TestimonialItem {
  id: string
  text: string
  image: string
  name: string
  role: string
  organization: string
  sector: string
}

export interface TestimonialsContent {
  eyebrow: string
  heading: string
  subheading: string
  items: TestimonialItem[]
}

export const testimonialsData: TestimonialsContent = {
  eyebrow: 'Client Testimonials',
  heading: 'What Global Leaders Say About WinVinaya',
  subheading:
    'Discover how enterprise engineering teams, compliance leaders, and corporate partners achieve bulletproof digital accessibility and social impact with us.',
  items: [
    {
      id: '1',
      text: 'WinVinaya delivered a comprehensive WCAG 2.1 AA audit for our digital banking portal. Their lived-experience testing gave us insights that automated tools could never reveal.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      name: 'Briana Patton',
      role: 'VP of Product Engineering',
      organization: 'Tier-1 Banking Partner',
      sector: 'FinTech',
    },
    {
      id: '2',
      text: 'Remediating over 12,000 PDF statements ahead of the European Accessibility Act was seamless. WinVinaya ensured 100% PDF/UA conformance with zero turnaround delays.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      name: 'Bilal Ahmed',
      role: 'Director of Compliance',
      organization: 'Global Insurance Corp',
      sector: 'Insurance',
    },
    {
      id: '3',
      text: 'Their role-based accessibility skilling masterclasses transformed our developer culture. Our frontend teams now build WCAG 2.2 compliant components right from sprint one.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      name: 'Saman Malik',
      role: 'Lead UX Architect',
      organization: 'Enterprise Cloud Solutions',
      sector: 'SaaS',
    },
    {
      id: '4',
      text: 'The accessibility of our Power BI dashboards went from a major compliance risk to an industry gold standard. Their team understands both business intelligence and universal design.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      name: 'Omar Raza',
      role: 'Head of Enterprise Analytics',
      organization: 'Multinational Retail Tech',
      sector: 'E-Commerce',
    },
    {
      id: '5',
      text: 'Working with WinVinaya is unique because over 50% of their QA testers have lived experience. The feedback on screen reader interaction was practical, actionable, and thorough.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      name: 'Zainab Hussain',
      role: 'Principal QA Manager',
      organization: 'FinTech Growth Platform',
      sector: 'FinTech',
    },
    {
      id: '6',
      text: 'WinVinaya issued court-tested VPATs for our public-sector portal. Their engineers provided exact code fix snippets that our engineering squad implemented in days.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      name: 'Aliza Khan',
      role: 'Chief Technology Officer',
      organization: 'Public Health Agency',
      sector: 'Healthcare',
    },
    {
      id: '7',
      text: 'The dual impact model is remarkable. Not only did we achieve ADA Title III compliance, but we also sponsored training pathways that helped PwDs launch meaningful IT careers.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      name: 'Farhan Siddiqui',
      role: 'Head of Diversity & ESG',
      organization: 'Fortune 500 Tech Brand',
      sector: 'Enterprise Tech',
    },
    {
      id: '8',
      text: 'Their custom AI agent application met every single accessibility benchmark from inception. Fast, secure, and genuinely usable for people using assistive tech.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80',
      name: 'Sana Sheikh',
      role: 'VP of Product Development',
      organization: 'Intelligent AI Systems',
      sector: 'AI & Automation',
    },
    {
      id: '9',
      text: 'From initial audit diagnosis to final certification, their transparency and depth of knowledge made them our most trusted digital partner.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      name: 'Hassan Ali',
      role: 'Director of Digital Platforms',
      organization: 'Global Higher Ed Network',
      sector: 'Education',
    },
  ],
}
