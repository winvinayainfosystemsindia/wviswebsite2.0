import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { ApprovalsCertificationsPage } from '../pages/ApprovalsCertificationsPage'

export const approvalsCertificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/impact/approvals-certifications',
  component: ApprovalsCertificationsPage,
})
