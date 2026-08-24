import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { SuccessStoriesPage } from '../pages/SuccessStoriesPage'

export const successStoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact/success-stories',
  component: SuccessStoriesPage,
})
