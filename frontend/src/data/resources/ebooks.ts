export interface EbookItem {
  id: string
  title: string
  category: string
  description: string
  author: string
  tileImage: string
  pdfUrl: string
  epubUrl: string
  isFeatured?: boolean
}

export const ebooksHeroData = {
  eyebrow: 'Resources • Free Publications & Playbooks',
  headline: 'eBooks &',
  headlineHighlight: 'Guides',
  subheadline:
    'Free industry playbooks, accessibility implementation manuals, and corporate disability inclusion handbooks created by WinVinaya experts.',
}

export const featuredEbook: EbookItem = {
  id: 'inclusive-workplace-playbook',
  title: 'The Inclusive Workplace Playbook: Hiring & Retaining Persons with Disabilities',
  category: 'Workplace Inclusion',
  author: 'WinVinaya Foundation & Corporate Advisory Board',
  description:
    'A definitive, end-to-end operational guide for HR leaders, recruiters, and managers on sourcing, interviewing, onboarding, and scaling merit-based career pathways for Persons with Disabilities in corporate India.',
  tileImage:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  pdfUrl:
    'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  epubUrl:
    'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  isFeatured: true,
}

export const ebooksData: EbookItem[] = [
  {
    id: 'digital-accessibility-blueprint',
    title: 'Digital Accessibility Blueprint: WCAG 2.2 AA Compliance Guide',
    category: 'Digital Accessibility',
    author: 'WinVinaya Accessibility Practice (IAAP Certified)',
    description:
      'A practical engineering and design manual for software teams on delivering WCAG 2.2 Level AA compliant web portals, mobile apps, and enterprise design systems.',
    tileImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
    epubUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'corporate-isl-handbook',
    title: 'Corporate Indian Sign Language (ISL) Conversational Handbook',
    category: 'Sign Language',
    author: 'WinVinaya ISL Training Faculty',
    description:
      'Over 200 essential signs, technical vocabulary, and conversational etiquette designed to empower hearing colleagues and Deaf employees in daily collaboration.',
    tileImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
    epubUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'document-remediation-sop',
    title: 'Document Accessibility & PDF Remediation Standard Operating Procedures',
    category: 'Document Remediation',
    author: 'WinVinaya Document Remediation Center',
    description:
      'Comprehensive step-by-step methodology for tagging, reading order optimization, MathML structuring, and PDF/UA validation across enterprise document repositories.',
    tileImage:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
    epubUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'screen-reader-testing-guide',
    title: 'Screen Reader Testing Handbook for QA Engineers & Developers',
    category: 'Quality Assurance',
    author: 'WinVinaya Quality Engineering Team',
    description:
      'Practical test matrices and navigation keystroke reference cards for NVDA, JAWS, VoiceOver, and TalkBack in automated and manual verification cycles.',
    tileImage:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
    epubUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'agentic-ai-accessibility-handbook',
    title: 'Agentic AI & Accessible Enterprise Architecture: A Practitioner’s Guide',
    category: 'AI & Emerging Tech',
    author: 'WinVinaya AI & Innovation Practice',
    description:
      'Designing Autonomous AI agents, streaming reasoning dashboards, and multi-modal assistants that comply with accessibility standards from inception.',
    tileImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
    epubUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
  {
    id: 'csr-impact-measurement-framework',
    title: 'Measuring True CSR Impact: Skilling & Placement ROI in India',
    category: 'Corporate Social Responsibility',
    author: 'WinVinaya Impact Research Center',
    description:
      'A structured framework for corporate donors and CSR committees to measure candidate retention, income growth, and generational economic mobility.',
    tileImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    pdfUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
    epubUrl:
      'https://winvinayafoundation.org/uploads/newsletters/1787217863636_f6743ac2-3b88-466d-88f5-d5e1f82baea6.pdf',
  },
]
