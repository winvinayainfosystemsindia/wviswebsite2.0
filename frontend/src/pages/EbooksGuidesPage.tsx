import { useEffect } from 'react'
import {
  EbooksHeroSection,
  FeaturedEbookSpotlightSection,
  EbooksGridSection,
  EbooksCtaSection,
} from '../sections/resources/ebooks'
import { useEbooks } from '../hooks'

/** Resources: eBooks & Guides Page — Free publications, accessibility blueprints, and inclusive hiring playbooks. */
export const EbooksGuidesPage = () => {
  const { ebooks, featured } = useEbooks()

  useEffect(() => {
    document.title = 'eBooks & Guides | WinVinaya'
  }, [])

  return (
    <>
      <EbooksHeroSection />
      <FeaturedEbookSpotlightSection ebook={featured} />
      <EbooksGridSection ebooks={ebooks as any} />
      <EbooksCtaSection />
    </>
  )
}
