import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'
import { AccessibilityAuditPage } from '../pages/AccessibilityAuditPage'

export const accessibilityAuditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/accessibility-audit-testing',
  component: AccessibilityAuditPage,
})
