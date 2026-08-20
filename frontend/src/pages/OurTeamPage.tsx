import {
  TeamHeroSection,
  LeadershipSection,
  CoreTeamSection,
  WhyDifferentSection,
  JoinUsSection,
} from '../sections/ourTeam'

/** "Our Team" — leadership and core team, each section self-contained under `sections/ourTeam`. */
export const OurTeamPage = () => (
  <>
    <TeamHeroSection />
    <LeadershipSection />
    <CoreTeamSection />
    <WhyDifferentSection />
    <JoinUsSection />
  </>
)
