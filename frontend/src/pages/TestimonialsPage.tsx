import { useEffect } from 'react'
import {
  TestimonialsHeroSection,
  TestimonialsGridSection,
  TestimonialSourcingFrameworkSection,
  TestimonialsCtaSection,
} from '../sections/impact/testimonials'
import { useTestimonials } from '../hooks'

/** Impact: Testimonials Page — Authentic partner reflections, outcome-driven feedback, and service-mapped endorsements across fintech audits, healthcare QA, Power Platform BI, and inclusive education. */
export const TestimonialsPage = () => {
  const { testimonials } = useTestimonials()

  useEffect(() => {
    document.title = 'Testimonials & Client Feedback | WinVinaya'
  }, [])

  return (
    <>
      <TestimonialsHeroSection />
      <TestimonialsGridSection testimonials={testimonials as any} />
      <TestimonialSourcingFrameworkSection />
      <TestimonialsCtaSection />
    </>
  )
}
