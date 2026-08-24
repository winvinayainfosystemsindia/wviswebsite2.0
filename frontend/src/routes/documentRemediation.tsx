import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { DocumentRemediationPage } from '../pages/DocumentRemediationPage'

export const documentRemediationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/document-accessibility-remediation',
  component: DocumentRemediationPage,
})
