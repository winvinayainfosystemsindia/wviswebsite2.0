import {
  AboutTeaserSection,
  FinalCtaSection,
  FoundationSection,
  HeroSection,
  ImpactSection,
  ResourcesTeaserSection,
  ServicesSection,
  WhyWinVinayaSection,
} from '../sections/home'

/** Marketing homepage: hero through closing CTA, each section self-contained under `sections/home`. */
export const HomePage = () => (
  <>
    <HeroSection />
    <AboutTeaserSection />
    <ServicesSection />
    <WhyWinVinayaSection />
    <ImpactSection />
    <FoundationSection />
    <ResourcesTeaserSection />
    <FinalCtaSection />
  </>
)
