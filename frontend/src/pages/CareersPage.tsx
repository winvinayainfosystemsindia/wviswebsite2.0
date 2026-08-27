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

  const internshipTracks = (careerDomains || []).filter(
    (d) => (d.type || '').toLowerCase().includes('intern') || !(d.type || '').toLowerCase().includes('full')
  )
  const fullTimeRoles = (careerDomains || []).filter((d) => (d.type || '').toLowerCase().includes('full'))

  useEffect(() => {
    document.title = 'Careers & Internships | WinVinaya'
  }, [])

  return (
    <>
      <CareersHeroSection />
      <CareersInternshipSection domains={internshipTracks as any} />
      <CareersOpenRolesSection roles={fullTimeRoles as any} />
      <CareersCultureSection />
      <CareersCtaSection />
    </>
  )
}
