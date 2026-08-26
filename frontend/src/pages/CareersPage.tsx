import { useEffect } from 'react'
import {
  CareersHeroSection,
  CareersInternshipSection,
  CareersOpenRolesSection,
  CareersCultureSection,
  CareersCtaSection,
} from '../sections/careers'

/** Careers Page: Opportunities, College Student Unpaid Internships on live company projects, and talent network. */
export const CareersPage = () => {
  useEffect(() => {
    document.title = 'Careers & Internships | WinVinaya'
  }, [])

  return (
    <>
      <CareersHeroSection />
      <CareersInternshipSection />
      <CareersOpenRolesSection />
      <CareersCultureSection />
      <CareersCtaSection />
    </>
  )
}
