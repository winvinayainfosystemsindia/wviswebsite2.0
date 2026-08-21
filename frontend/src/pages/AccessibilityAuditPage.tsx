import {
  AuditHeroSection,
  AuditStandardsSection,
  SebiMandateSection,
  GigwAuditSection,
  IaapTeamSection,
  AuditScopeSection,
  AuditProcessSection,
  AuditDifferentiatorsSection,
  WhoThisIsForSection,
  AuditDeliverablesSection,
  AuditCtaSection,
} from '../sections/services/accessibilityAudit'

/** Accessibility Audit & Testing Service Page: comprehensive regulatory compliance, SEBI mandate, GIGW 3.0, and 3-round process. */
export const AccessibilityAuditPage = () => (
  <>
    <AuditHeroSection />
    <AuditStandardsSection />
    <SebiMandateSection />
    <GigwAuditSection />
    <IaapTeamSection />
    <AuditScopeSection />
    <AuditProcessSection />
    <AuditDifferentiatorsSection />
    <WhoThisIsForSection />
    <AuditDeliverablesSection />
    <AuditCtaSection />
  </>
)
