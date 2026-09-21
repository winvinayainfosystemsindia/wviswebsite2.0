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
  href?: string
  items: NavChildItem[]
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
        subtitle: 'Enterprise Accessibility, AI & Workforce Enablement',
        // badge: 'Corporate',
        groups: [
          {
            id: 'corp-training-cluster',
            title: 'Corporate Training & Upskilling',
            href: '/services/corporate-training',
            items: [
              {
                id: 'corp-genai',
                label: 'GenAI Training, Upskilling & Adoption',
                href: '/services/corporate-training',
              },
              {
                id: 'corp-at-skills',
                label: 'Digital Skills & Assistive Tech Enablement',
                href: '/services/corporate-training',
              },
            ],
          },
          {
            id: 'corp-dei-cluster',
            title: 'DEI & Disability Services',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'corp-inclusion',
                label: 'Disability Awareness & Orientations (DAO)',
                href: '/services/corporate-training',
              },
              {
                id: 'corp-dei-isl',
                label: 'Indian Sign Language (ISL) & CSR Support',
                href: '/services/corporate-training',
              },
            ],
          },
          {
            id: 'corp-audit-cluster',
            title: 'Digital Accessibility Audits',
            href: '/services/accessibility-audit-testing',
            items: [
              {
                id: 'corp-audit',
                label: 'Web, App & Portal Audits (WCAG 2.1/2.2 & ADA)',
                href: '/services/accessibility-audit-testing',
              },
            ],
          },
          {
            id: 'corp-remediation-cluster',
            title: 'Document Remediation',
            href: '/services/document-accessibility-remediation',
            items: [
              {
                id: 'corp-remediation',
                label: 'Corporate PDF, Word & PowerPoint Remediation',
                href: '/services/document-accessibility-remediation',
              },
            ],
          },
          {
            id: 'corp-powerbi-cluster',
            title: 'Power Platform Solutions',
            href: '/services/microsoft-power-platform-solutions',
            items: [
              {
                id: 'corp-powerbi',
                label: 'Power BI & Enterprise Executive Dashboards',
                href: '/services/microsoft-power-platform-solutions',
              },
            ],
          },
          {
            id: 'corp-lms-cluster',
            title: 'NammAcademy LMS Solutions',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'corp-lms',
                label: 'Customized Corporate E-Learning Pathways',
                href: '/services/capacity-building-adoption',
              },
            ],
          },
        ],
      },
      {
        id: 'npo-sector',
        title: 'NPO / NGO / Social Sector',
        subtitle: 'Capacity Building, Beneficiary Upskilling & Inclusion',
        // badge: 'NGO / NPO',
        groups: [
          {
            id: 'npo-training-cluster',
            title: 'Capacity Building & NPO Training',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'npo-genai',
                label: 'GenAI for Grant Writing & Impact Storytelling',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-skills',
                label: 'Beneficiary Digital Literacy & Exam Enablement',
                href: '/services/capacity-building-adoption',
              },
            ],
          },
          {
            id: 'npo-dei-cluster',
            title: 'Community DEI & ISL Support',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'npo-inclusion',
                label: 'Volunteer & Field Operations Orientations',
                href: '/services/corporate-training',
              },
              {
                id: 'npo-dei-isl',
                label: 'ISL Interpretation & PwD Placement Support',
                href: '/services/capacity-building-adoption',
              },
            ],
          },
          {
            id: 'npo-audit-cluster',
            title: 'NPO Portal & Website Audits',
            href: '/services/accessibility-audit-testing',
            items: [
              {
                id: 'npo-audit',
                label: 'Donor Portals & Public Website WCAG Audits',
                href: '/services/accessibility-audit-testing',
              },
            ],
          },
          {
            id: 'npo-remediation-cluster',
            title: 'Academic & Textbook Remediation',
            href: '/services/document-accessibility-remediation',
            items: [
              {
                id: 'npo-remediation',
                label: 'Educational Textbooks & Sugamya Pustakalaya',
                href: '/services/document-accessibility-remediation',
              },
            ],
          },
          {
            id: 'npo-powerbi-cluster',
            title: 'NPO Impact & Donor Dashboards',
            href: '/services/microsoft-power-platform-solutions',
            items: [
              {
                id: 'npo-powerbi',
                label: 'Donor-Ready Impact & Beneficiary Tracking',
                href: '/services/microsoft-power-platform-solutions',
              },
            ],
          },
          {
            id: 'npo-lms-cluster',
            title: 'NammAcademy Community LMS',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'npo-lms',
                label: '24/7 Accessible Community LMS Hosting',
                href: '/services/capacity-building-adoption',
              },
            ],
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

