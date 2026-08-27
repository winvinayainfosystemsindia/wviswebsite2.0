import { useEffect } from 'react'
import {
  CareersHeroSection,
  CareersInternshipSection,
  CareersOpenRolesSection,
  CareersCultureSection,
  CareersCtaSection,
} from '../sections/careers'
import { useCareers } from '../hooks'

/** Careers Page: Opportunities, College Student Unpaid Internships on live company projects, and talent network. */
export const CareersPage = () => {
  const { careerDomains } = useCareers()

  useEffect(() => {
    document.title = 'Careers & Internships | WinVinaya'
  }, [])

  return (
    <>
      <CareersHeroSection />
      <CareersInternshipSection domains={careerDomains as any} />
      <CareersOpenRolesSection />
      <CareersCultureSection />
      <CareersCtaSection />
    </>
  )
}
