export interface NavChildItem {
  id: string
  label: string
  href: string
  /** Short context shown under the label in the dropdown. */
  description?: string
  topDivider?: boolean
}

export interface MegaMenuGroup {
  id: string
  title: string
  href: string
  description?: string
  badge?: string
  items?: NavChildItem[]
}

export interface MegaMenuColumn {
  id: string
  title: string
  subtitle?: string
  badge?: string
  groups: MegaMenuGroup[]
}

export interface NavItem {
  id: string
  label: string
  href?: string
  children?: NavChildItem[]
  isMegaMenu?: boolean
  megaMenuColumns?: MegaMenuColumn[]
}

/** Primary navbar items, left to right. Items with `children` or `megaMenuColumns` render as dropdowns/mega menus. */
export const primaryNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'about',
    label: 'About',
    children: [
      { id: 'our-story', label: 'Our Story', href: '/about/our-story' },
      { id: 'our-team', label: 'Our Team', href: '/about/our-team' },
      { id: 'awards-recognitions', label: 'Awards & Recognitions', href: '/about/awards-recognitions' },
      {
        id: 'winvinaya-foundation',
        label: 'WinVinaya Foundation',
        href: '/about/winvinaya-foundation',
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    isMegaMenu: true,
    megaMenuColumns: [
      {
        id: 'corporate-sector',
        title: 'Corporates',
        subtitle: 'Enterprise Learning, DEI, Accessibility & Technology Solutions',
        groups: [
          {
            id: 'corp-ld',
            title: '1. Learning & Development',
            href: '/services/corporate-training',
            description: 'GenAI upskilling, assistive tech enablement & corporate e-learning pathways.',
          },
          {
            id: 'corp-dei',
            title: '2. Diversity, Equity & Inclusion (DEI)',
            href: '/services/corporate-training',
            description: 'Disability awareness, Indian Sign Language programs & CSR inclusion advisory.',
          },
          {
            id: 'corp-accessibility',
            title: '3. Digital Accessibility Audits',
            href: '/services/accessibility-audit-testing',
            description: 'Web, app & portal audits against WCAG 2.1/2.2, ADA & Section 508.',
          },
          {
            id: 'corp-remediation',
            title: '4. Document & Content Remediation',
            href: '/services/document-accessibility-remediation',
            description: 'High-volume PDF, Word, PowerPoint & accessible courseware remediation.',
          },
          {
            id: 'corp-powerplatform',
            title: '5. Microsoft Power Platform & Dashboards',
            href: '/services/microsoft-power-platform-solutions',
            description: 'Power BI accessible analytics, Power Apps UX & workflow automation.',
          },
          {
            id: 'corp-tech-solutions',
            title: '6. Technology Development & AI Solutions',
            href: '/services/agentic-ai-custom-application-development',
            description: 'Agentic AI systems, web & mobile applications, and enterprise MIS tracking.',
          },
        ],
      },
      {
        id: 'npo-sector',
        title: 'NPO / NGO / Social Sector',
        subtitle: 'Capacity Building, Inclusion, Accessibility & Impact Measurement',
        groups: [
          {
            id: 'npo-capacity-building',
            title: '1. Capacity Building & Training',
            href: '/services/capacity-building-adoption',
            description: 'GenAI for grant writing, beneficiary digital literacy & staff orientation.',
          },
          {
            id: 'npo-community-isl',
            title: '2. Community Inclusion & ISL Support',
            href: '/services/capacity-building-adoption',
            description: 'Indian Sign Language (ISL) interpretation & inclusive PwD placement.',
          },
          {
            id: 'npo-portal-accessibility',
            title: '3. Website & Portal Accessibility',
            href: '/services/accessibility-audit-testing',
            description: 'Donor portals, public websites & Section 508/WCAG compliance fixes.',
          },
          {
            id: 'npo-academic-accessibility',
            title: '4. Academic & Publication Accessibility',
            href: '/services/document-accessibility-remediation',
            description: 'Textbooks, exam materials & Sugamya Pustakalaya-ready conversion.',
          },
          {
            id: 'npo-impact-dashboards',
            title: '5. Impact Measurement & Dashboards',
            href: '/services/microsoft-power-platform-solutions',
            description: 'Donor-ready impact tracking, MEL reporting & grant-ready data visualization.',
          },
          {
            id: 'npo-tech-lms',
            title: '6. Community LMS & Technology Solutions',
            href: '/services/agentic-ai-custom-application-development',
            description: 'NammAcademy 24/7 LMS hosting, custom MIS development & AI tools.',
          },
        ],
      },
    ],
    children: [
      {
        id: 'accessibility-audit-testing',
        label: 'Accessibility Audit & Testing',
        href: '/services/accessibility-audit-testing',
      },
      {
        id: 'document-accessibility-remediation',
        label: 'Document Accessibility & Remediation',
        href: '/services/document-accessibility-remediation',
      },
      {
        id: 'corporate-training',
        label: 'Corporate Training',
        href: '/services/corporate-training',
      },
      {
        id: 'microsoft-power-platform-solutions',
        label: 'Microsoft Power Platform Solutions',
        href: '/services/microsoft-power-platform-solutions',
      },
      {
        id: 'agentic-ai-custom-application-development',
        label: 'Agentic AI & Custom Application Development',
        href: '/services/agentic-ai-custom-application-development',
      },
      {
        id: 'capacity-building-adoption',
        label: 'Capacity Building & Adoption',
        href: '/services/capacity-building-adoption',
      },
    ],
  },

  {
    id: 'impact',
    label: 'Impact',
    children: [
      { id: 'success-stories', label: 'Success Stories', href: '/impact/success-stories' },
      { id: 'testimonials', label: 'Testimonials', href: '/impact/testimonials' },
      { id: 'approvals-certifications', label: 'Approvals & Certifications', href: '/impact/approvals-certifications' },
      { id: 'clients-partners', label: 'Clients & Partners', href: '/impact/clients-partners' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    children: [
      { id: 'blogs', label: 'Blogs', href: '/resources/blogs' },
      { id: 'newsletters', label: 'Newsletters', href: '/resources/newsletters' },
      { id: 'ebooks-guides', label: 'eBooks & Guides', href: '/resources/ebooks-guides' },
    ],
  },
  { id: 'careers', label: 'Careers', href: '/careers' },
]

/** The standalone CTA button rendered at the end of the navbar (never a dropdown). */
export const contactNavItem: NavChildItem = { id: 'contact-us', label: 'Contact Us', href: '/contact-us' }

/** Look up a top-level nav item (and its children) by id, e.g. for reusing the services or resources list on the homepage. */
export const findNavItem = (id: string): NavItem | undefined => primaryNavItems.find((item) => item.id === id)

