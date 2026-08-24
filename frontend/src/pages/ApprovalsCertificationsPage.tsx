import {
  CertificationsHeroSection,
  OrganizationalApprovalsSection,
  IaapCertificationsSection,
  StandardsMatrixSection,
  CertificationsCtaSection,
} from '../sections/impact/approvalsCertifications'

/** Impact: Approvals & Certifications Page — Formal 80G legal approvals for WinVinaya Foundation, IAAP accessibility certifications, and the 8 recognized international and national standards we deliver against. */
export const ApprovalsCertificationsPage = () => (
  <>
    <CertificationsHeroSection />
    <OrganizationalApprovalsSection />
    <IaapCertificationsSection />
    <StandardsMatrixSection />
    <CertificationsCtaSection />
  </>
)
