import { useEffect } from 'react'
import {
  BlogsHeroSection,
  FeaturedBlogSpotlightSection,
  BlogsGridSection,
  BlogNewsletterSection,
  BlogsCtaSection,
} from '../sections/resources/blogs'
import { useBlogs } from '../hooks'

/** Resources: Blogs Page — Thought leadership, workplace inclusion field notes, and digital accessibility insights. */
export const BlogsPage = () => {
  const { blogs, featured } = useBlogs()

  useEffect(() => {
    document.title = 'The WinVinaya Blog | Inclusive Workplaces & Tech'
  }, [])

  return (
    <>
      <BlogsHeroSection />
      <FeaturedBlogSpotlightSection post={featured} />
      <BlogsGridSection posts={blogs as any} />
      <BlogNewsletterSection />
      <BlogsCtaSection />
    </>
  )
}
