export interface AboutTeaserContent {
  eyebrow: string
  heading: string
  body: string
  highlight: string
  cta: { label: string; href: string }
}

export const aboutTeaser: AboutTeaserContent = {
  eyebrow: 'Who We Are',
  heading: "Inclusion Isn't Our Add-On. It's Our Origin Story.",
  body: "WinVinaya InfoSystems was founded on a simple belief: technology should work for everyone, and the people best equipped to build that technology are the ones who understand accessibility firsthand. We're an IT consulting and training company specializing in accessibility, AI, and inclusive digital solutions — proudly connected to WinVinaya Foundation, our social-impact arm that has trained and placed persons with disabilities in industry roles for years.",
  highlight:
    "That connection isn't a footnote. It's why our accessibility work holds up under real assistive-technology use, not just automated scans.",
  cta: { label: 'Read Our Story', href: '/about/our-story' },
}
