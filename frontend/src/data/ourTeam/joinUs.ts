export interface JoinUsContent {
  heading: string
  body: string
  cta: { label: string; href: string }
}

export const joinUs: JoinUsContent = {
  heading: 'Join Us',
  body: "We're always interested in hearing from people who bring both technical skill and a real stake in inclusive technology.",
  cta: { label: 'View Open Roles', href: '/careers' },
}
