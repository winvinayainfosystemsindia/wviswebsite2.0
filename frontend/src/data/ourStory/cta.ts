export interface StoryCtaContent {
  heading: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export const storyCta: StoryCtaContent = {
  heading: 'Meet the People Behind the Mission',
  primaryCta: { label: 'Meet the Team', href: '/about/our-team' },
  secondaryCta: { label: 'Learn About WinVinaya Foundation', href: '/about/winvinaya-foundation' },
}
