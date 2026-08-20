export interface FinalCtaContent {
  heading: string
  body: string
  cta: { label: string; href: string }
  phone: { label: string; href: string }
  email: { label: string; href: string }
}

export const finalCta: FinalCtaContent = {
  heading: "Let's Build Something Everyone Can Use",
  body: "Whether it's a single audit or a full digital transformation, we'll meet you where you are.",
  cta: { label: 'Get in Touch', href: '/contact-us' },
  phone: { label: '+91-99805-25374', href: 'tel:+919980525374' },
  email: { label: 'info@winvinaya.com', href: 'mailto:info@winvinaya.com' },
}
