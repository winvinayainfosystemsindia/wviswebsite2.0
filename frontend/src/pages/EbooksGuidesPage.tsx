import { useEffect } from 'react'
import {
  EbooksHeroSection,
  FeaturedEbookSpotlightSection,
  EbooksGridSection,
  EbooksCtaSection,
} from '../sections/resources/ebooks'
import { ebooksData } from '../data/resources/ebooks'

/** Resources: eBooks & Guides Page — Free publications, accessibility blueprints, and inclusive hiring playbooks. */
export const EbooksGuidesPage = () => {
  useEffect(() => {
    document.title = 'eBooks & Guides | WinVinaya'
  }, [])

  return (
    <>
      <EbooksHeroSection />
      <FeaturedEbookSpotlightSection />
      <EbooksGridSection ebooks={ebooksData} />
      <EbooksCtaSection />
    </>
  )
}
