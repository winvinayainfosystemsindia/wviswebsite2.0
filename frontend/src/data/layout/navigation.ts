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
        subtitle: 'Enterprise Learning, DEI, Accessibility & Technology Solutions',
        groups: [
          {
            id: 'corp-ld',
            title: '1. Learning & Development',
            href: '/services/corporate-training',
            items: [
              {
                id: 'corp-genai',
                label: 'GenAI Training, Upskilling & Adoption',
                href: '/services/corporate-training',
              },
              {
                id: 'corp-digital-skills',
                label: 'Digital Skills & Assistive Technology Enablement',
                href: '/services/corporate-training',
              },
              {
                id: 'corp-namm-pathways',
                label: 'NammAcademy Corporate E-Learning Pathways',
                href: '/services/capacity-building-adoption',
              },
            ],
          },
          {
            id: 'corp-dei',
            title: '2. Diversity, Equity & Inclusion (DEI)',
            href: '/services/corporate-training',
            items: [
              {
                id: 'corp-dao',
                label: 'Disability Awareness & Orientation (DAO)',
                href: '/services/corporate-training',
              },
              {
                id: 'corp-isl',
                label: 'Indian Sign Language (ISL) Workplace Programs',
                href: '/services/corporate-training',
              },
              {
                id: 'corp-csr-advisory',
                label: 'CSR & PwD Inclusion Advisory',
                href: '/services/corporate-training',
              },
            ],
          },
          {
            id: 'corp-accessibility',
            title: '3. Digital Accessibility',
            href: '/services/accessibility-audit-testing',
            items: [
              {
                id: 'corp-audits',
                label: 'Web, App & Portal Audits (WCAG 2.1 / 2.2 & ADA)',
                href: '/services/accessibility-audit-testing',
              },
              {
                id: 'corp-uiux-consulting',
                label: 'Accessible UI/UX Consulting',
                href: '/services/accessibility-audit-testing',
              },
              {
                id: 'corp-iaap-reporting',
                label: 'IAAP-Certified Compliance Reporting',
                href: '/services/accessibility-audit-testing',
              },
            ],
          },
          {
            id: 'corp-remediation',
            title: '4. Document & Content Accessibility',
            href: '/services/document-accessibility-remediation',
            items: [
              {
                id: 'corp-doc-remediation',
                label: 'Corporate PDF, Word & PowerPoint Remediation',
                href: '/services/document-accessibility-remediation',
              },
              {
                id: 'corp-courseware-remediation',
                label: 'Accessible Courseware & Training Material Production',
                href: '/services/document-accessibility-remediation',
              },
            ],
          },
          {
            id: 'corp-powerplatform',
            title: '5. Microsoft Power Platform & Consultancy',
            href: '/services/microsoft-power-platform-solutions',
            items: [
              {
                id: 'corp-powerbi-design',
                label: 'Power BI Dashboard Design & Consultancy',
                href: '/services/microsoft-power-platform-solutions',
              },
              {
                id: 'corp-powerplatform-training',
                label: 'Power Platform Corporate Training (Power BI, Power Apps, Power Automate)',
                href: '/services/microsoft-power-platform-solutions',
              },
              {
                id: 'corp-enterprise-reporting',
                label: 'Enterprise Reporting & Executive Dashboard Solutions',
                href: '/services/microsoft-power-platform-solutions',
              },
              {
                id: 'corp-dei-analytics',
                label: 'Workforce Inclusion & DEI Analytics',
                href: '/services/microsoft-power-platform-solutions',
              },
            ],
          },
          {
            id: 'corp-tech-solutions',
            title: '6. Technology Development & Solutions',
            href: '/services/agentic-ai-custom-application-development',
            items: [
              {
                id: 'corp-web-mobile-dev',
                label: 'Web & Mobile Application Development',
                href: '/services/agentic-ai-custom-application-development',
              },
              {
                id: 'corp-agentic-ai',
                label: 'Customized Agentic AI Solutions',
                href: '/services/agentic-ai-custom-application-development',
              },
              {
                id: 'corp-mis-tracking',
                label: 'MIS & Impact Tracking System Development',
                href: '/services/agentic-ai-custom-application-development',
              },
            ],
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
            items: [
              {
                id: 'npo-genai-grant',
                label: 'GenAI for Grant Writing & Impact Storytelling',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-beneficiary-digital',
                label: 'Beneficiary Digital Literacy & Exam Enablement',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-field-staff-orientation',
                label: 'Field Staff & Volunteer Technology Orientation',
                href: '/services/capacity-building-adoption',
              },
            ],
          },
          {
            id: 'npo-community-isl',
            title: '2. Community Inclusion & ISL Support',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'npo-isl-services',
                label: 'Indian Sign Language (ISL) Interpretation Services',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-pwd-employment',
                label: 'PwD Employment & Placement Support',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-volunteer-orientation',
                label: 'Volunteer & Field Operations DEI Orientation',
                href: '/services/corporate-training',
              },
            ],
          },
          {
            id: 'npo-portal-accessibility',
            title: '3. Website & Portal Accessibility',
            href: '/services/accessibility-audit-testing',
            items: [
              {
                id: 'npo-donor-portal-audit',
                label: 'Donor Portal & Public Website WCAG Audits',
                href: '/services/accessibility-audit-testing',
              },
              {
                id: 'npo-website-remediation',
                label: 'Accessible Website Remediation for NGOs',
                href: '/services/accessibility-audit-testing',
              },
              {
                id: 'npo-sec508-wcag',
                label: 'Section 508 & WCAG 2.2 Compliance Reporting',
                href: '/services/accessibility-audit-testing',
              },
            ],
          },
          {
            id: 'npo-academic-accessibility',
            title: '4. Academic & Publication Accessibility',
            href: '/services/document-accessibility-remediation',
            items: [
              {
                id: 'npo-textbook-remediation',
                label: 'Educational Textbook Remediation',
                href: '/services/document-accessibility-remediation',
              },
              {
                id: 'npo-sugamya-conversion',
                label: 'Sugamya Pustakalaya-Ready Document Conversion',
                href: '/services/document-accessibility-remediation',
              },
              {
                id: 'npo-exam-materials',
                label: 'Accessible Exam & Assessment Material Production',
                href: '/services/document-accessibility-remediation',
              },
            ],
          },
          {
            id: 'npo-impact-dashboards',
            title: '5. Impact Measurement & Dashboards',
            href: '/services/microsoft-power-platform-solutions',
            items: [
              {
                id: 'npo-donor-dashboards',
                label: 'Donor-Ready Impact & Beneficiary Tracking Dashboards',
                href: '/services/microsoft-power-platform-solutions',
              },
              {
                id: 'npo-mel-reporting',
                label: 'MEL (Monitoring, Evaluation & Learning) Reporting',
                href: '/services/microsoft-power-platform-solutions',
              },
              {
                id: 'npo-grant-visualisation',
                label: 'Grant-Ready Data Visualisation',
                href: '/services/microsoft-power-platform-solutions',
              },
            ],
          },
          {
            id: 'npo-community-lms',
            title: '6. Community LMS',
            href: '/services/capacity-building-adoption',
            items: [
              {
                id: 'npo-lms-hosting',
                label: 'NammAcademy Community LMS Hosting (24/7)',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-online-learning',
                label: 'Accessible Online Learning for Beneficiaries',
                href: '/services/capacity-building-adoption',
              },
              {
                id: 'npo-staff-skills',
                label: 'NGO Staff Skill Development Pathways',
                href: '/services/capacity-building-adoption',
              },
            ],
          },
          {
            id: 'npo-tech-solutions',
            title: '7. Technology Development & Solutions',
            href: '/services/agentic-ai-custom-application-development',
            items: [
              {
                id: 'npo-custom-mis',
                label: 'Custom MIS Development for NGO Program Tracking',
                href: '/services/agentic-ai-custom-application-development',
              },
              {
                id: 'npo-web-mobile-app',
                label: 'Web & Mobile Application Development',
                href: '/services/agentic-ai-custom-application-development',
              },
              {
                id: 'npo-agentic-ai-social',
                label: 'Agentic AI Solutions for Social Sector Workflows',
                href: '/services/agentic-ai-custom-application-development',
              },
              {
                id: 'npo-donor-mgmt-system',
                label: 'Donor & Beneficiary Management System Development',
                href: '/services/agentic-ai-custom-application-development',
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

