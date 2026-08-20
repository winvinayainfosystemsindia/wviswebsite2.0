import {
  FoundationHeroSection,
  WhoWeTrainSection,
  ProgramsSection,
  OutcomesSection,
  SupportSection,
  PartnershipsSection,
  DonateSection,
  GetInvolvedSection,
} from '../sections/foundation'

/** "WinVinaya Foundation" — the social-impact arm's own page, each section self-contained under `sections/foundation`. */
export const WinVinayaFoundationPage = () => (
  <>
    <FoundationHeroSection />
    <WhoWeTrainSection />
    <ProgramsSection />
    <OutcomesSection />
    <SupportSection />
    <PartnershipsSection />
    <DonateSection />
    <GetInvolvedSection />
  </>
)
