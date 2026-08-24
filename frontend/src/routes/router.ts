import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './root'
import { homeRoute } from './home'
import { ourStoryRoute } from './ourStory'
import { ourTeamRoute } from './ourTeam'
import { awardsRecognitionsRoute } from './awardsRecognitions'
import { winVinayaFoundationRoute } from './winVinayaFoundation'
import { accessibilityAuditRoute } from './accessibilityAudit'
import { documentRemediationRoute } from './documentRemediation'
import { corporateTrainingRoute } from './corporateTraining'
import { agenticAiCustomAppsRoute } from './agenticAiCustomApps'
import { powerPlatformRoute } from './powerPlatform'
import { capacityBuildingRoute } from './capacityBuilding'
import { maintenanceRoute, serverErrorRoute } from './common'
import { NotFoundPage, ServerErrorPage } from '../pages/common'

const routeTree = rootRoute.addChildren([
  homeRoute,
  ourStoryRoute,
  ourTeamRoute,
  awardsRecognitionsRoute,
  winVinayaFoundationRoute,
  accessibilityAuditRoute,
  documentRemediationRoute,
  corporateTrainingRoute,
  agenticAiCustomAppsRoute,
  powerPlatformRoute,
  capacityBuildingRoute,
  maintenanceRoute,
  serverErrorRoute,
])






export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  defaultErrorComponent: ServerErrorPage,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
