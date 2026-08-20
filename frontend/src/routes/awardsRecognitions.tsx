import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { AwardsRecognitionsPage } from '../pages/AwardsRecognitionsPage'

export const awardsRecognitionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/awards-recognitions',
  component: AwardsRecognitionsPage,
})
