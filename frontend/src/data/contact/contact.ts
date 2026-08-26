export interface ContactReasonOption {
  value: string
  label: string
}

export const contactHeroData = {
  eyebrow: 'Get in Touch • Let’s Collaborate',
  headline: 'Contact',
  headlineHighlight: 'WinVinaya',
  subheadline:
    'Have an accessibility audit requirement, training inquiry, document remediation project, or student internship question? We’re here to help.',
}

export const contactInfoData = {
  address: {
    title: 'Headquarters & Delivery Center',
    line1: '25/3 Brindavan, 3rd Cross, Post, Nyanappana Halli,',
    line2: 'Hulimavu, Bengaluru, Karnataka 560076',
    full: '25/3 Brindavan, 3rd Cross, Post, Nyanappana Halli, Hulimavu, Bengaluru, Karnataka 560076',
    mapUrl: 'https://maps.google.com/?q=25/3+Brindavan,+3rd+Cross,+Nyanappana+Halli,+Hulimavu,+Bengaluru,+Karnataka+560076',
  },
  email: {
    title: 'General & Business Inquiries',
    address: 'info@winvinaya.com',
    href: 'mailto:info@winvinaya.com',
  },
  phone: {
    title: 'Direct Call / WhatsApp',
    number: '+91-99805-25374',
    href: 'tel:+919980525374',
  },
  hours: {
    title: 'Operating Hours',
    text: 'Monday – Friday: 9:30 AM – 6:30 PM IST',
    responseTime: 'We typically respond within 1 business day.',
  },
}

export const contactReasonOptions: ContactReasonOption[] = [
  { value: 'accessibility-audit', label: 'Digital Accessibility Audit & Testing (WCAG / SEBI / Section 508)' },
  { value: 'document-remediation', label: 'Document & PDF Remediation (PDF/UA, Word, Courseware)' },
  { value: 'corporate-training', label: 'Corporate Training & Disability Sensitization Workshops' },
  { value: 'custom-apps-ai', label: 'Custom Application Development & Agentic AI Solutions' },
  { value: 'power-platform', label: 'Power Platform, Power BI & Impact Analytics' },
  { value: 'student-internship', label: 'College Student Internship Program' },
  { value: 'inclusive-hiring', label: 'Inclusive Hiring & Sourcing PwD Talent' },
  { value: 'general-inquiry', label: 'General Inquiry / Other Support' },
]

export const contactFaqData = [
  {
    question: 'How quickly can WinVinaya start an accessibility audit or project?',
    answer:
      'We typically schedule an initial discovery call within 24 to 48 hours. Depending on the scope of your application or document volume, we can commence audits within 3 to 5 business days.',
  },
  {
    question: 'Do you sign Non-Disclosure Agreements (NDAs) before reviewing source code or documents?',
    answer:
      'Yes, absolutely. We regularly sign standard enterprise NDAs and confidentiality agreements before any proprietary code, designs, or confidential documents are shared with our audit team.',
  },
  {
    question: 'Are WinVinaya audits certified by qualified accessibility professionals?',
    answer:
      'Yes. Our audits are performed by IAAP Certified Professionals in Accessibility Core Competencies (CPACC) and Web Accessibility Specialists (WAS), ensuring global compliance with WCAG 2.1 / 2.2 AA standards.',
  },
  {
    question: 'How do students apply for the College Internship Program?',
    answer:
      'Students can select "College Student Internship Program" in the contact form, share their GitHub/portfolio, or email careers@winvinayainfosystems.com directly. Please note this is an unpaid, hands-on internship working on live production deliverables.',
  },
]
