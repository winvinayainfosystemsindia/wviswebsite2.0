import {
  StoryHeroSection,
  JourneySection,
  FoundationStorySection,
  ServicesTodaySection,
  ProofSection,
  FutureSection,
  StoryCtaSection,
} from '../sections/ourStory'

/** "Our Story" — company history and mission narrative, each section self-contained under `sections/ourStory`. */
export const OurStoryPage = () => (
  <>
    <StoryHeroSection />
    <JourneySection />
    <FoundationStorySection />
    <ServicesTodaySection />
    <ProofSection />
    <FutureSection />
    <StoryCtaSection />
  </>
)
