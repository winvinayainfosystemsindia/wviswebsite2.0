import { useEffect } from 'react'
import {
  ContactHeroSection,
  ContactMainSection,
  ContactFaqSection,
} from '../sections/contact'

/** Contact Us Page — Office location, direct contact info, and interactive inquiry form. */
export const ContactUsPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | WinVinaya'
  }, [])

  return (
    <>
      <ContactHeroSection />
      <ContactMainSection />
      <ContactFaqSection />
    </>
  )
}
