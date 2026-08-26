import { useEffect } from 'react'
import {
  NewslettersHeroSection,
  FeaturedNewsletterSpotlightSection,
  NewslettersGridSection,
  NewsletterSubscribeSection,
} from '../sections/resources/newsletters'
import { pastNewslettersData } from '../data/resources/newsletters'

/** Resources: Newsletter Archive Page — Monthly publications, impact updates, and training cohort stories. */
export const NewslettersPage = () => {
  useEffect(() => {
    document.title = 'Newsletter Archive | WinVinaya'
  }, [])

  return (
    <>
      <NewslettersHeroSection />
      <FeaturedNewsletterSpotlightSection />
      <NewslettersGridSection newsletters={pastNewslettersData} />
      <NewsletterSubscribeSection />
    </>
  )
}
