export interface WhyUsItem {
  id: string
  title: string
  description: string
}

export interface WorkflowStep {
  stepNumber: string
  title: string
  description: string
}

export interface WhyUsContent {
  eyebrow: string
  heading: string
  items: WhyUsItem[]
  workflowHeading: string
  workflowSteps: WorkflowStep[]
}

export const whyUs: WhyUsContent = {
  eyebrow: 'Why WinVinaya',
  heading: 'Authentic Accessibility Driven by Lived Experience',
  items: [
    {
      id: 'lived-expertise',
      title: 'Lived-Experience Testing',
      description:
        'Over 50% of our testing engineers are Persons with Disabilities (PwDs). We catch real-world usability barriers that automated scans miss.',
    },
    {
      id: 'standards',
      title: 'Strict Global Standards',
      description:
        'Full compliance with WCAG 2.1/2.2 AA & AAA, Section 508, ADA, GIGW, and PDF/UA standards backed by formal VPAT / ACR documentation.',
    },
    {
      id: 'compliant-and-usable',
      title: 'Zero Compliance Risk',
      description:
        'We deliver accessible code fixes, remediated documents, and verified UI components that satisfy regulatory audits and legal requirements.',
    },
    {
      id: 'one-partner',
      title: 'Single Accountable Partner',
      description:
        'From initial audit to code remediation, staff training, custom software build, and ongoing monitoring — all under one roof.',
    },
  ],
  workflowHeading: 'Our Proven 4-Step Engagement Process',
  workflowSteps: [
    {
      stepNumber: '01',
      title: 'Audit & Diagnose',
      description: 'Comprehensive automated scans + manual testing by assistive-technology power users.',
    },
    {
      stepNumber: '02',
      title: 'Remediate & Refactor',
      description: 'Direct code & document remediation with developer-friendly refactoring guidelines.',
    },
    {
      stepNumber: '03',
      title: 'Validate & Certify',
      description: 'Lived-experience user validation, screen-reader testing, and VPAT/ACR issuance.',
    },
    {
      stepNumber: '04',
      title: 'Train & Sustain',
      description: 'Custom team skilling workshops and continuous accessibility governance frameworks.',
    },
  ],
}
