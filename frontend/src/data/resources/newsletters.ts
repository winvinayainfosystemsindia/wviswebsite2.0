export interface NewsletterItem {
  id: string
  title: string
  publishedDate: string
  year: string
  excerpt: string
  coverImage: string
  pdfUrl: string
  isFeatured?: boolean
}

export const newslettersHeroData = {
  eyebrow: 'Resources • Monthly Publication',
  headline: 'Newsletter',
  headlineHighlight: 'Archive',
  subheadline:
    'Monthly updates on our training cohorts, hiring partnerships, and the everyday work of building a more inclusive India.',
}

export const latestNewsletter: NewsletterItem = {
  id: 'newsletter-jul-2026',
  title: 'WinVinaya Newsletter — July 2026',
  publishedDate: '1 Jul 2026',
  year: '2026',
  coverImage:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  excerpt:
    'Last month, we talked about reach — new employer partnerships, a wider sourcing network, more doors than before. This month, we asked a quieter question: not how far can we go, but what holds the going together. A second module of governance training landed at Niranthara, teaching our Founder and Trustees what a Board owes and what a CEO carries. Five new organisations sat across the table from us, weighing what partnership could look like. One of two candidates who walked into Paychex walked out selected. Five others, placed months ago at a global energy management and automation leader, told us on a Zoom call that they are still comfortable, still meeting their targets, still there.',
  pdfUrl:
    'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  isFeatured: true,
}

export const pastNewslettersData: NewsletterItem[] = [
  {
    id: 'newsletter-jun-2026',
    title: 'WinVinaya Newsletter — June 2026',
    publishedDate: '1 Jun 2026',
    year: '2026',
    coverImage:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Expanding corporate engagement across BFSI and IT sectors with our newly launched specialized training tracks in accessible software testing, RPA automation, and workplace readiness.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-may-2026',
    title: 'WinVinaya Newsletter — May 2026',
    publishedDate: '1 May 2026',
    year: '2026',
    coverImage:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Strengthening community grassroots ecosystems and deep partnerships with disability advocacy organizations across tier-2 and tier-3 cities to bring technical training directly to aspiring youth.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-apr-2026',
    title: 'WinVinaya Newsletter — April 2026',
    publishedDate: '1 Apr 2026',
    year: '2026',
    coverImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Celebrating our latest batch of Deaf developers certified in Python, Data Analytics, and Web Development utilizing our custom Indian Sign Language (ISL) technical glossaries.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-mar-2026',
    title: 'WinVinaya Newsletter — March 2026',
    publishedDate: '1 Mar 2026',
    year: '2026',
    coverImage:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Special International Women’s Month edition spotlighting inspiring women scholars with disabilities excelling in quality engineering, accessibility testing, and leadership roles.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-feb-2026',
    title: 'WinVinaya Newsletter — February 2026',
    publishedDate: '1 Feb 2026',
    year: '2026',
    coverImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'How our trained accessibility testers with visual impairments audited over 50 enterprise portals for WCAG 2.2 AA compliance, paving the way for digital inclusion.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-jan-2026',
    title: 'WinVinaya Newsletter — January 2026',
    publishedDate: '1 Jan 2026',
    year: '2026',
    coverImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Reflecting on annual milestones and setting our ambitious 2026 strategic vision: skilling 2,000+ candidates with disabilities across emerging AI, automation, and full-stack domains.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-dec-2025',
    title: 'WinVinaya Newsletter — December 2025',
    publishedDate: '1 Dec 2025',
    year: '2025',
    coverImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Special edition commemorating the International Day of Persons with Disabilities. Honoring corporate allies, outstanding alumni, and milestone graduation ceremonies.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'newsletter-nov-2025',
    title: 'WinVinaya Newsletter — November 2025',
    publishedDate: '1 Nov 2025',
    year: '2025',
    coverImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Over 1,200 corporate employees trained in workplace empathy, ISL conversational basics, and accessible interviewing practices across major technology hubs.',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
]
