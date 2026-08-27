import { useEffect } from 'react'
import {
  SuccessStoriesHeroSection,
  SuccessStoriesGridSection,
  NamedCaseStudySpotlightSection,
  SuccessStoriesCtaSection,
} from '../sections/impact/successStories'
import { useStories } from '../hooks'

/** Impact: Success Stories Page — Verified case studies across fintech compliance, NGO Power BI dashboards, healthcare QA upskilling, GenAI sprints, academic document remediation, and live in-house MIS crm.winvinaya.com. */
export const SuccessStoriesPage = () => {
  const { stories } = useStories()

  useEffect(() => {
    document.title = 'Client Success Stories & Case Studies | WinVinaya'
  }, [])

  return (
    <>
      <SuccessStoriesHeroSection />
      <SuccessStoriesGridSection stories={stories as any} />
      <NamedCaseStudySpotlightSection />
      <SuccessStoriesCtaSection />
    </>
  )
}
