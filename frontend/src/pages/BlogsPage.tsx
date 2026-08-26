import {
  BlogsHeroSection,
  FeaturedBlogSpotlightSection,
  BlogsGridSection,
  BlogNewsletterSection,
  BlogsCtaSection,
} from '../sections/resources/blogs'
import { blogPostsData } from '../data/resources/blogs'

/** Resources: Blogs Page — Thought leadership, workplace inclusion field notes, and digital accessibility insights. */
export const BlogsPage = () => {
  return (
    <>
      <BlogsHeroSection />
      <FeaturedBlogSpotlightSection />
      <BlogsGridSection posts={blogPostsData} />
      <BlogNewsletterSection />
      <BlogsCtaSection />
    </>
  )
}
