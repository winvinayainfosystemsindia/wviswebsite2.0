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
import { successStoriesRoute } from './successStories'
import { testimonialsRoute } from './testimonials'
import { approvalsCertificationsRoute } from './approvalsCertifications'
import { clientsPartnersRoute } from './clientsPartners'
import { blogsRoute, blogAliasRoute, blogDetailsRoute, blogDetailsAliasRoute } from './blogs'
import { newslettersRoute, newsletterAliasRoute } from './newsletters'
import {
  ebooksGuidesRoute,
  ebookAliasRoute,
  ebooksAliasRoute,
  guidesAliasRoute,
} from './ebooks'
import { careersRoute } from './careers'
import { contactUsRoute, contactAliasRoute } from './contact'
import {
  adminLoginRoute,
  adminDashboardRoute,
  adminRootRoute,
  adminBlogsRoute,
  adminNewslettersRoute,
  adminEbooksRoute,
  adminCareersRoute,
  adminInquiriesRoute,
  adminTestimonialsRoute,
  adminStoriesRoute,
  adminCategoriesRoute,
} from './admin'
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
  successStoriesRoute,
  testimonialsRoute,
  approvalsCertificationsRoute,
  clientsPartnersRoute,
  blogsRoute,
  blogAliasRoute,
  blogDetailsRoute,
  blogDetailsAliasRoute,
  newslettersRoute,
  newsletterAliasRoute,
  ebooksGuidesRoute,
  ebookAliasRoute,
  ebooksAliasRoute,
  guidesAliasRoute,
  careersRoute,
  contactUsRoute,
  contactAliasRoute,
  adminLoginRoute,
  adminDashboardRoute,
  adminRootRoute,
  adminBlogsRoute,
  adminNewslettersRoute,
  adminEbooksRoute,
  adminCareersRoute,
  adminInquiriesRoute,
  adminTestimonialsRoute,
  adminStoriesRoute,
  adminCategoriesRoute,
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
