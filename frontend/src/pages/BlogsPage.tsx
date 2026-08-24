import { useState, useMemo } from 'react'
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
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.categoryLabel.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
  }

  return (
    <>
      <BlogsHeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalCount={filteredPosts.length}
      />
      {!searchQuery && selectedCategory === 'all' && <FeaturedBlogSpotlightSection />}
      <BlogsGridSection posts={filteredPosts} onResetFilters={handleResetFilters} />
      <BlogNewsletterSection />
      <BlogsCtaSection />
    </>
  )
}
