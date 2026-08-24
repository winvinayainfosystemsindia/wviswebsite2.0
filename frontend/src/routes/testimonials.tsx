import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { TestimonialsPage } from '../pages/TestimonialsPage'

export const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact/testimonials',
  component: TestimonialsPage,
})
