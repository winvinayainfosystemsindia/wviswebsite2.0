export interface ResourcesTeaserContent {
  eyebrow: string
  heading: string
  body: string
  cta: { label: string; href: string }
}

export const resourcesTeaser: ResourcesTeaserContent = {
  eyebrow: 'Resources',
  heading: 'Stay Close to the Work',
  body: 'From accessibility how-tos to newsletters on inclusive AI adoption — practical resources for teams building a more accessible digital presence.',
  cta: { label: 'Browse Resources', href: '/resources' },
}
