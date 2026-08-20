export interface WhyUsItem {
  id: string
  title: string
  description: string
}

export interface WhyUsContent {
  eyebrow: string
  heading: string
  items: WhyUsItem[]
}

export const whyUs: WhyUsContent = {
  eyebrow: 'Why WinVinaya',
  heading: 'Accessibility From People Who Live It',
  items: [
    {
      id: 'lived-expertise',
      title: 'Lived Expertise, Not Just Certification',
      description:
        "Our team includes persons with disabilities working across testing, development, and training — so accessibility isn't theoretical here.",
    },
    {
      id: 'standards',
      title: 'Standards We Hold Ourselves To',
      description:
        'WCAG 2.1/2.2, Section 508, ADA, and PDF/UA — rigor that satisfies auditors and, more importantly, real users.',
    },
    {
      id: 'compliant-and-usable',
      title: 'Compliant and Usable',
      description:
        "We don't stop at passing a checklist. Our goal is technology people can actually use, comfortably and independently.",
    },
    {
      id: 'one-partner',
      title: 'One Partner, Full Journey',
      description:
        "Audit, remediate, train, build, sustain — you're not stitching together five vendors to get there.",
    },
  ],
}
