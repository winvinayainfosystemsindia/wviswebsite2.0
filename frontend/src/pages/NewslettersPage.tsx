import { useEffect } from 'react'
import {
  NewslettersHeroSection,
  FeaturedNewsletterSpotlightSection,
  NewslettersGridSection,
  NewsletterSubscribeSection,
} from '../sections/resources/newsletters'
import { useNewsletters } from '../hooks'

/** Resources: Newsletter Archive Page — Monthly publications, impact updates, and training cohort stories. */
export const NewslettersPage = () => {
  const { newsletters, latest } = useNewsletters()

  useEffect(() => {
    document.title = 'Newsletter Archive | WinVinaya'
  }, [])

  return (
    <>
      <NewslettersHeroSection />
      <FeaturedNewsletterSpotlightSection item={latest} />
      <NewslettersGridSection newsletters={newsletters as any} />
      <NewsletterSubscribeSection />
    </>
  )
}
