import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { CorporateTrainingPage } from '../pages/CorporateTrainingPage'

export const corporateTrainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/corporate-training',
  component: CorporateTrainingPage,
})
