import {
  AboutTeaserSection,
  FinalCtaSection,
  HeroSection,
  ImpactSection,
  ResourcesTeaserSection,
  ServicesSection,
  TestimonialsSection,
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
    <TestimonialsSection />
    <ResourcesTeaserSection />
    <FinalCtaSection />
  </>
)
