export interface WhyUsItem {
  id: string
  title: string
  tag: string
  description: string
  proofPoint: string
}

export interface WorkflowStep {
  stepNumber: string
  phase: string
  title: string
  description: string
  deliverables: string[]
}

export interface WhyUsContent {
  eyebrow: string
  badge: string
  heading: string
  subheading: string
  spotlightHeading: string
  spotlightDescription: string
  spotlightStats: { value: string; label: string }[]
  items: WhyUsItem[]
  workflowEyebrow: string
  workflowHeading: string
  workflowSubheading: string
  workflowSteps: WorkflowStep[]
}

export const whyUs: WhyUsContent = {
  eyebrow: 'Why WinVinaya',
  badge: 'The Lived-Experience Advantage',
  heading: 'Authentic Accessibility Backed by Deep IT Engineering',
  subheading:
    'Automated tools miss over 60% of critical WCAG barriers. We combine automated precision with certified human lived-experience testing to deliver complete compliance and effortless user experience.',
  spotlightHeading: 'Why Global Enterprises Trust WinVinaya',
  spotlightDescription:
    'Accessibility is not just an inspection checkpoint for us — it is our core foundation. We protect your enterprise from legal risk, expand your audience reach to 1.3 billion people with disabilities worldwide, and empower your teams to build inclusively from day one.',
  spotlightStats: [
    { value: '50%+', label: 'PwD Testing Engineers' },
    { value: '100%', label: 'Human-Validated Audits' },
    { value: '0', label: 'Compliance Guesswork' },
  ],
  items: [
    {
      id: 'lived-expertise',
      title: 'Real Lived-Experience Validation',
      tag: 'Human-Led Audits',
      description:
        'Over half of our accessibility specialists are Persons with Disabilities who use NVDA, JAWS, VoiceOver, and Braille daily. We catch real interaction barriers that automated scanners never detect.',
      proofPoint: 'Tested on actual assistive hardware & software',
    },
    {
      id: 'standards',
      title: 'Global Regulatory & Legal Assurance',
      tag: 'Global Compliance',
      description:
        'Rigorous conformance mapping for WCAG 2.1/2.2 AA & AAA, Section 508, ADA Title III, and European Accessibility Act (EAA 2025) backed by formal VPAT / ACR documentation.',
      proofPoint: 'Litigation-ready VPAT and ACR compliance reports',
    },
    {
      id: 'compliant-and-usable',
      title: 'Developer-Ready Actionable Code Fixes',
      tag: 'Engineering First',
      description:
        'We do not just hand over a list of errors. Our software engineers provide precise code snippets, ARIA refactoring guidance, and direct PR support to resolve issues quickly.',
      proofPoint: 'Zero ambiguity for your frontend and dev teams',
    },
    {
      id: 'one-partner',
      title: 'Single End-to-End Accountable Partner',
      tag: 'Full Lifecycle',
      description:
        'From initial WCAG audits and high-volume document remediation to custom AI apps, corporate skilling masterclasses, and ongoing governance — all under one unified team.',
      proofPoint: 'Complete lifecycle accountability under one roof',
    },
  ],
  workflowEyebrow: 'HOW WE WORK',
  workflowHeading: 'Our 4-Phase Proven Engagement Stepper',
  workflowSubheading:
    'A transparent, agile, and structured roadmap designed to transition your digital ecosystem from non-compliant to fully certified and continuously governed.',
  workflowSteps: [
    {
      stepNumber: '01',
      phase: 'Phase 1: Discover & Audit',
      title: 'Comprehensive Diagnostic Audit',
      description:
        'Automated scans combined with extensive manual testing by certified PwD engineers across desktop, mobile, and assistive tech.',
      deliverables: ['Automated + Manual WCAG Scans', 'Screen Reader Interaction Logs', 'Prioritized Defect Matrix'],
    },
    {
      stepNumber: '02',
      phase: 'Phase 2: Fix & Remediate',
      title: 'Developer-Led Code Remediation',
      description:
        'Actionable code fixes, ARIA pattern adjustments, and bulk PDF/document remediation with step-by-step developer guidelines.',
      deliverables: ['Exact Code Fix Snippets', 'PDF/UA Document Remediation', 'Engineering Pair-Programming'],
    },
    {
      stepNumber: '03',
      phase: 'Phase 3: Validate & Certify',
      title: 'Lived-Experience Verification',
      description:
        'Secondary validation by native assistive technology users to ensure genuine real-world usability and official VPAT issuance.',
      deliverables: ['Human Usability Sign-Off', 'Official VPAT / ACR Issuance', 'Compliance Certificate'],
    },
    {
      stepNumber: '04',
      phase: 'Phase 4: Train & Govern',
      title: 'Continuous Skilling & Policy',
      description:
        'Role-specific training for engineers and designers alongside automated regression monitoring for sustained compliance.',
      deliverables: ['Dev & UX Masterclasses', 'Continuous Monitoring Guardrails', 'DEI Governance Framework'],
    },
  ],
}
