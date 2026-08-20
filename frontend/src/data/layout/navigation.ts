export interface NavChildItem {
  id: string
  label: string
  href: string
  /** Short context shown under the label in the dropdown (e.g. why it matters to a buyer persona). */
  description?: string
  /** Renders a divider above this item, for setting an "overview" link apart from the rest. */
  topDivider?: boolean
}

export interface NavItem {
  id: string
  label: string
  /** Present on leaf items (Home, Careers) that navigate directly instead of opening a dropdown. */
  href?: string
  children?: NavChildItem[]
}

/** Primary navbar items, left to right. Items with `children` render as dropdowns. */
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
      { id: 'all-services', label: 'All Services', href: '/services', topDivider: true },
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
      { id: 'webinars-events', label: 'Webinars & Events', href: '/resources/webinars-events' },
    ],
  },
  { id: 'careers', label: 'Careers', href: '/careers' },
]

/** The standalone CTA button rendered at the end of the navbar (never a dropdown). */
export const contactNavItem: NavChildItem = { id: 'contact-us', label: 'Contact Us', href: '/contact-us' }

/** Look up a top-level nav item (and its children) by id, e.g. for reusing the services or resources list on the homepage. */
export const findNavItem = (id: string): NavItem | undefined => primaryNavItems.find((item) => item.id === id)
