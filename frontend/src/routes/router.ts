import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './root'
import { homeRoute } from './home'
import { ourStoryRoute } from './ourStory'
import { ourTeamRoute } from './ourTeam'
import { awardsRecognitionsRoute } from './awardsRecognitions'
import { maintenanceRoute, serverErrorRoute } from './common'
import { NotFoundPage, ServerErrorPage } from '../pages/common'

const routeTree = rootRoute.addChildren([
  homeRoute,
  ourStoryRoute,
  ourTeamRoute,
  awardsRecognitionsRoute,
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
