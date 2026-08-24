export interface StandardItem {
  id: string
  title: string
  description: string
  badge?: string
}

export interface FormatItem {
  id: string
  title: string
  description: string
  badge?: string
}

export interface AcademicSpecializationItem {
  id: string
  title: string
  description: string
  badge: string
}

export interface ApproachSpecItem {
  number: number
  title: string
  description: string
}

export interface ComparisonPoint {
  title: string
  points: string[]
  badge: string
  highlight?: boolean
}

export interface AudienceItem {
  id: string
  title: string
  description: string
}

export interface DeliverableItem {
  title: string
  description: string
}

export const remediationHeroData = {
  eyebrow: 'Proprietary AI Engine + Expert Human QA',
  headline: 'Accessible Documents, Delivered in Minutes —',
  headlineHighlight: 'Not Weeks',
  subheadline:
    "Most document remediation is slow because it's done by hand, page by page. Ours isn't. We've built proprietary internal tooling that converts source PDFs directly into structured, standards-compliant accessible documents — which means turnaround measured in minutes for most course materials and reports, backed by expert review before anything is delivered. Speed without sacrificing rigor is the whole point.",
  primaryCta: { label: 'Get Your Documents Remediated', href: '/contact-us' },
  secondaryCta: { label: 'Explore Our Spec & Process', href: '#remediation-spec' },
  stats: [
    { label: 'Minutes, Not Weeks', sublabel: 'Proprietary Automation Engine' },
    { label: 'PDF/UA & WCAG 2.1 AA', sublabel: 'Fully Tagged & Screen-Reader Ready' },
    { label: '100% Content Verbatim', sublabel: 'Zero Loss of Academic Content' },
  ],
}

export const remediationStandardsData = {
  eyebrow: 'Compliance Benchmarks',
  heading: 'Standards We Remediate Against',
  description:
    'Every document processed by WinVinaya is engineered and validated against global digital document accessibility benchmarks.',
  standards: [
    {
      id: 'wcag',
      title: 'WCAG 2.1 (Level AA)',
      description: 'The international standard for document structure, contrast, and non-text element accessibility.',
      badge: 'Global Standard',
    },
    {
      id: 'pdfua',
      title: 'PDF/UA (ISO 14289-1)',
      description: 'Universal Accessibility standard ensuring proper tag tree hierarchy, artifacts, and reading order.',
      badge: 'ISO Standard',
    },
    {
      id: 'section508',
      title: 'Section 508 (US Federal)',
      description: 'Mandatory standard for US federal agencies, higher education grantees, and global publishers.',
      badge: 'US Federal',
    },
    {
      id: 'screen-readers',
      title: 'Screen Reader Compatibility',
      description: 'Verified seamless audio reading and navigation across JAWS, NVDA, and Apple VoiceOver.',
      badge: 'Assistive Tech',
    },
    {
      id: 'rpwd',
      title: 'RPWD Act, 2016',
      description: "India's Rights of Persons with Disabilities statutory mandate for accessible institutional content.",
      badge: 'Statutory Act',
    },
    {
      id: 'ada',
      title: 'ADA (Title III)',
      description: 'Equal access mandate requiring barrier-free electronic publications and course materials.',
      badge: 'US Statutory',
    },
  ] as StandardItem[],
}

export const whatWeRemediateData = {
  eyebrow: 'Format & Media Coverage',
  heading: 'What We Remediate',
  description: 'Comprehensive accessibility conversion across all enterprise, academic, and publishing file formats.',
  items: [
    {
      id: 'pdf',
      title: 'PDF Accessibility Remediation',
      description: 'Tagged, reading-order-correct, screen-reader-compatible PDFs with valid tag trees and artifact tags.',
      badge: 'PDF/UA & WCAG',
    },
    {
      id: 'word',
      title: 'Accessible Word Documents',
      description: 'Converted from scanned, flattened, or poorly structured source PDFs into clean, semantic DOCX files.',
      badge: 'Full Semantics',
    },
    {
      id: 'powerpoint',
      title: 'PowerPoint & Presentations',
      description: 'Logical slide reading orders, comprehensive alt text for diagrams, and high-contrast color validation.',
      badge: 'Slide Semantics',
    },
    {
      id: 'epub',
      title: 'EPUB & DAISY Formats',
      description: 'Blind-friendly formats for e-readers and assistive reading software with rich navigational landmarks.',
      badge: 'Accessible e-Publishing',
    },
    {
      id: 'web',
      title: 'Web Content Remediation',
      description: 'HTML pages, knowledge portals, and web-published documentation transformed for assistive tech.',
      badge: 'Web & Portals',
    },
    {
      id: 'legacy',
      title: 'Legacy & Scanned Documents',
      description: 'High-accuracy OCR recovery for older materials and historical archives with zero original digital source file.',
      badge: 'OCR Recovery',
    },
  ] as FormatItem[],
}

export const academicStemData = {
  eyebrow: 'Academic & STEM Specialization',
  heading: 'Built for Academic, STEM & University Content',
  description:
    'Where most remediation vendors struggle with complex data tables, mathematical notation, and academic citations, WinVinaya specializes.',
  items: [
    {
      id: 'stem-textbooks',
      title: 'STEM & Mathematics Textbooks',
      description:
        'Statistics, mathematics, and science content that requires accurate table structure, correctly tagged figures, and readable formula presentation — not just plain text extraction. Includes state-board and regional-language editions.',
      badge: 'Formulas & Data Tables',
    },
    {
      id: 'university-materials',
      title: 'University Course Materials',
      description:
        'Semester subject content, research methodology texts, and School of Education coursework, converted into accessible Word and PDF formats for low-vision and screen-reader-using students.',
      badge: 'Course Packs & Syllabi',
    },
    {
      id: 'academic-research',
      title: 'Academic Research & Chapters',
      description:
        'Preserving citations, footnotes, and source references exactly as published, with zero loss of academic content during conversion.',
      badge: 'Citations & Footnotes',
    },
  ] as AcademicSpecializationItem[],
  highlightBox:
    'If your content includes data tables, statistical figures, footnotes, or mathematical notation, we know how to keep it both accurate and accessible — that combination is where most remediation vendors fall short.',
}

export const internalToolingData = {
  eyebrow: 'Technology Advantage',
  heading: 'Powered by Our Internal Remediation Tooling',
  description:
    "Manual remediation is where most vendors bottleneck — and where cost and turnaround time balloon. We've built our own internal conversion engine that takes a source PDF and generates a structured, accessibility-compliant Word or PDF output automatically, applying our full formatting and tagging spec in the process.",
  expertNote:
    'Every automated output still goes through expert human review before delivery — but the heavy lifting that used to take days now takes minutes, which means we can take on high-volume work (a full semester’s course pack, a multi-chapter textbook) without the timeline stretching into months.',
  comparison: {
    traditional: {
      title: 'Traditional Manual Remediation',
      badge: 'The Industry Bottleneck',
      points: [
        'Page-by-page manual tagging takes days to weeks per document',
        'Cost balloons drastically on multi-chapter textbooks and course packs',
        'Inconsistent tagging and missed reading orders across high-volume runs',
        'Turnaround delays cause students to start semesters without accessible materials',
      ],
      highlight: false,
    },
    winvinaya: {
      title: 'WinVinaya Proprietary AI Engine + Expert QA',
      badge: 'Minutes Per Document',
      points: [
        'Proprietary engine parses source PDF directly into semantic structures in minutes',
        'Full formatting, table scoping, and tagging spec applied automatically at scale',
        'Rigorous expert human QA review on every deliverable before handoff',
        'High-volume capacity: full semester course packs and multi-chapter books delivered rapidly',
      ],
      highlight: true,
    },
  },
}

export const remediationApproachData = {
  eyebrow: 'Disciplined Quality Specification',
  heading: 'Our Remediation Approach',
  description:
    'Every document that comes out of our process follows a consistent, disciplined spec — because consistency is what actually makes a document usable, not just technically "tagged".',
  specs: [
    {
      number: 1,
      title: 'Content Preserved Verbatim',
      description: 'Remediation never means rewriting or summarizing your source material. Zero loss of academic content.',
    },
    {
      number: 2,
      title: 'Correct Reading Order & Headings',
      description: 'Proper heading hierarchy so screen-reader users can navigate section by section, not just scroll.',
    },
    {
      number: 3,
      title: 'Real, Structured Tables',
      description: 'No merged cells; row and column headers correctly associated for assistive technology.',
    },
    {
      number: 4,
      title: 'Sequential, Descriptive Captions',
      description: 'Clear, sequential captions for every figure, chart, formula, and image throughout the text.',
    },
    {
      number: 5,
      title: 'Meaningful Alt Text',
      description: 'Context-rich alt text written to convey true instructional meaning, not just satisfy a checklist.',
    },
    {
      number: 6,
      title: 'Page-Accurate Navigation',
      description: 'Original print page numbers preserved as navigable markers, keeping print citations aligned.',
    },
    {
      number: 7,
      title: 'Footnotes & Source Citations',
      description: 'All footnotes, endnotes, and academic references retained and linked exactly as published.',
    },
    {
      number: 8,
      title: 'Clean, Consistent Formatting',
      description: 'No repeated header/footer clutter or visual noise interrupting the reading flow.',
    },
  ] as ApproachSpecItem[],
}

export const remediationAudienceData = {
  eyebrow: 'Who We Serve',
  heading: 'Who This Is For',
  description: 'Tailored solutions for educational institutions, publishers, state agencies, and enterprise organizations.',
  items: [
    {
      id: 'universities',
      title: 'Universities & Higher Education',
      description:
        'Higher-education institutions needing accessible course material, syllabi, and research papers for students with visual impairments or print disabilities.',
    },
    {
      id: 'school-boards',
      title: 'School Boards & Education Departments',
      description:
        'State education departments and school boards remediating primary, secondary, and STEM textbooks, including regional-language editions.',
    },
    {
      id: 'publishers',
      title: 'Publishers & Ed-Tech Providers',
      description:
        'Publishing houses and digital learning platforms needing accessible digital editions of existing print catalogs and learning modules.',
    },
    {
      id: 'corporates-ngos',
      title: 'Corporates, Enterprises & NGOs',
      description:
        'Organizations requiring accessible annual reports, ESG disclosures, company policies, training materials, and public-facing documents.',
    },
    {
      id: 'backlog-holders',
      title: 'Organizations with Compliance Deadlines',
      description:
        'Any team sitting on a backlog of inaccessible PDFs with an impending regulatory, legal, or statutory compliance deadline.',
    },
  ] as AudienceItem[],
}

export const remediationDeliverablesData = {
  eyebrow: 'Engagement Deliverables',
  heading: 'What You Receive',
  description: 'Every remediation project is backed by verified outputs, conformance reports, and complete documentation.',
  items: [
    {
      title: 'Fully Remediated Documents',
      description: 'Standards-compliant, fully tagged files delivered in PDF (PDF/UA), Word (DOCX), PowerPoint (PPTX), or EPUB/DAISY.',
    },
    {
      title: 'Accessibility Conformance Summary',
      description: 'Detailed compliance report mapped against WCAG 2.1 AA, Section 508, and PDF/UA benchmarks.',
    },
    {
      title: 'Alt Text & Caption Documentation',
      description: 'Complete documentation of all descriptive alternative text and table structure associations.',
    },
    {
      title: 'Fast Turnaround with Expert QA Review',
      description: 'Rapid automated conversion backed by thorough human specialist QA review on every delivery.',
    },
  ] as DeliverableItem[],
}

export const remediationCtaData = {
  heading: 'Ready to Remediate Your Document Backlog in Minutes?',
  body: 'Get standards-compliant, screen-reader verified documents delivered with unmatched speed and academic rigor.',
  cta: { label: 'Get Your Documents Remediated', href: '/contact-us' },
}
