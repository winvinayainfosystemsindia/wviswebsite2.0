import { useState, useEffect, useCallback, useMemo } from 'react'
import type {
  BlogPost,
  BlogQuery,
  Newsletter,
  NewsletterQuery,
  Ebook,
  EbookQuery,
  CareerDomain,
  CareerQuery,
  Testimonial,
  TestimonialQuery,
  Story,
  StoryQuery,
  ContactInquiryInput,
  PaginationMeta,
} from '../models'
import {
  blogService,
  newsletterService,
  ebookService,
  careersService,
  testimonialsService,
  storiesService,
  contactService,
} from '../services'

// Fallback seed data in case backend is offline
import { blogPostsData, getBlogPostBySlug, featuredBlogPost } from '../data/resources/blogs'
import { pastNewslettersData, latestNewsletter } from '../data/resources/newsletters'
import { ebooksData, featuredEbook } from '../data/resources/ebooks'
import { internshipProgramData } from '../data/careers/careers'
import { testimonialsData } from '../data/impact/testimonials'
import { successStoriesData } from '../data/impact/successStories'

/**
 * Hook to fetch blog posts from backend API with fallback to static dataset
 */
export function useBlogs(query?: BlogQuery) {
  const [blogs, setBlogs] = useState<BlogPost[]>(blogPostsData as unknown as BlogPost[])
  const [pagination, setPagination] = useState<PaginationMeta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const queryKey = useMemo(() => JSON.stringify(query || {}), [query])

  const fetchBlogs = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await blogService.getPublicBlogs(query)
      if (res.success && res.data && res.data.length > 0) {
        setBlogs(res.data)
        if (res.pagination) setPagination(res.pagination)
      } else {
        // Fallback filter
        let filtered = [...blogPostsData] as unknown as BlogPost[]
        if (query?.category && query.category !== 'all') {
          filtered = filtered.filter((b) => b.category === query.category)
        }
        setBlogs(filtered)
      }
    } catch (err: unknown) {
      console.warn('API error fetching blogs, using local dataset:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch blogs from server')
      let filtered = [...blogPostsData] as unknown as BlogPost[]
      if (query?.category && query.category !== 'all') {
        filtered = filtered.filter((b) => b.category === query.category)
      }
      setBlogs(filtered)
    } finally {
      setLoading(false)
    }
  }, [queryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchBlogs()
  }, [fetchBlogs])

  const featured = useMemo(() => {
    return blogs.find((b) => b.isFeatured) || (featuredBlogPost as unknown as BlogPost)
  }, [blogs])

  return { blogs, featured, pagination, loading, error, refetch: fetchBlogs }
}

/**
 * Hook to fetch a single blog post by slug with fallback
 */
export function useBlogDetails(slug: string) {
  const localFallback = useMemo(() => (slug ? (getBlogPostBySlug(slug) as unknown as BlogPost) || null : null), [slug])
  const [post, setPost] = useState<BlogPost | null>(localFallback)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPost = useCallback(async () => {
    if (!slug) {
      setPost(null)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    try {
      const res = await blogService.getPublicBlogBySlug(slug)
      if (res.success && res.data) {
        setPost(res.data)
      } else {
        setPost(getBlogPostBySlug(slug) as unknown as BlogPost || null)
      }
    } catch (err: unknown) {
      console.warn(`API error fetching blog "${slug}", using fallback:`, err)
      setError(err instanceof Error ? err.message : 'Article not found')
      setPost(getBlogPostBySlug(slug) as unknown as BlogPost || null)
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return { post, loading, error, refetch: fetchPost }
}

/**
 * Hook to fetch newsletters from backend API with fallback
 */
export function useNewsletters(query?: NewsletterQuery) {
  const [newsletters, setNewsletters] = useState<Newsletter[]>(pastNewslettersData as unknown as Newsletter[])
  const [pagination, setPagination] = useState<PaginationMeta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const queryKey = useMemo(() => JSON.stringify(query || {}), [query])

  const fetchNewsletters = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await newsletterService.getPublicNewsletters(query)
      if (res.success && res.data && res.data.length > 0) {
        setNewsletters(res.data)
        if (res.pagination) setPagination(res.pagination)
      } else {
        setNewsletters(pastNewslettersData as unknown as Newsletter[])
      }
    } catch (err: unknown) {
      console.warn('API error fetching newsletters, using local dataset:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch newsletters')
      setNewsletters(pastNewslettersData as unknown as Newsletter[])
    } finally {
      setLoading(false)
    }
  }, [queryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchNewsletters()
  }, [fetchNewsletters])

  const latest = useMemo(() => {
    return newsletters.find((n) => n.isFeatured) || newsletters[0] || (latestNewsletter as unknown as Newsletter)
  }, [newsletters])

  return { newsletters, latest, pagination, loading, error, refetch: fetchNewsletters }
}

/**
 * Hook to fetch eBooks from backend API with fallback
 */
export function useEbooks(query?: EbookQuery) {
  const [ebooks, setEbooks] = useState<Ebook[]>(ebooksData as unknown as Ebook[])
  const [pagination, setPagination] = useState<PaginationMeta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const queryKey = useMemo(() => JSON.stringify(query || {}), [query])

  const fetchEbooks = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await ebookService.getPublicEbooks(query)
      if (res.success && res.data && res.data.length > 0) {
        setEbooks(res.data)
        if (res.pagination) setPagination(res.pagination)
      } else {
        setEbooks(ebooksData as unknown as Ebook[])
      }
    } catch (err: unknown) {
      console.warn('API error fetching eBooks, using local dataset:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch eBooks')
      setEbooks(ebooksData as unknown as Ebook[])
    } finally {
      setLoading(false)
    }
  }, [queryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchEbooks()
  }, [fetchEbooks])

  const featured = useMemo(() => {
    return ebooks.find((e) => e.isFeatured) || ebooks[0] || (featuredEbook as unknown as Ebook)
  }, [ebooks])

  return { ebooks, featured, pagination, loading, error, refetch: fetchEbooks }
}

/**
 * Hook to fetch career and internship domains from backend API with fallback
 */
export function useCareers(query?: CareerQuery) {
  const [careerDomains, setCareerDomains] = useState<CareerDomain[]>(
    internshipProgramData.domains as unknown as CareerDomain[]
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const queryKey = useMemo(() => JSON.stringify(query || {}), [query])

  const fetchCareers = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await careersService.getPublicCareerDomains(query)
      if (res.success && res.data && res.data.length > 0) {
        setCareerDomains(res.data)
      } else {
        setCareerDomains(internshipProgramData.domains as unknown as CareerDomain[])
      }
    } catch (err: unknown) {
      console.warn('API error fetching career domains, using local dataset:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch career domains')
      setCareerDomains(internshipProgramData.domains as unknown as CareerDomain[])
    } finally {
      setLoading(false)
    }
  }, [queryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchCareers()
  }, [fetchCareers])

  return { careerDomains, loading, error, refetch: fetchCareers }
}

/**
 * Hook to fetch testimonials from backend API with fallback
 */
export function useTestimonials(query?: TestimonialQuery) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData as unknown as Testimonial[])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const queryKey = useMemo(() => JSON.stringify(query || {}), [query])

  const fetchTestimonials = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await testimonialsService.getPublicTestimonials(query)
      if (res.success && res.data && res.data.length > 0) {
        setTestimonials(res.data)
      } else {
        setTestimonials(testimonialsData as unknown as Testimonial[])
      }
    } catch (err: unknown) {
      console.warn('API error fetching testimonials, using local dataset:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch testimonials')
      setTestimonials(testimonialsData as unknown as Testimonial[])
    } finally {
      setLoading(false)
    }
  }, [queryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchTestimonials()
  }, [fetchTestimonials])

  return { testimonials, loading, error, refetch: fetchTestimonials }
}

/**
 * Hook to fetch success stories from backend API with fallback
 */
export function useStories(query?: StoryQuery) {
  const [stories, setStories] = useState<Story[]>(successStoriesData as unknown as Story[])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const queryKey = useMemo(() => JSON.stringify(query || {}), [query])

  const fetchStories = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await storiesService.getPublicStories(query)
      if (res.success && res.data && res.data.length > 0) {
        setStories(res.data)
      } else {
        setStories(successStoriesData as unknown as Story[])
      }
    } catch (err: unknown) {
      console.warn('API error fetching success stories, using local dataset:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch success stories')
      setStories(successStoriesData as unknown as Story[])
    } finally {
      setLoading(false)
    }
  }, [queryKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchStories()
  }, [fetchStories])

  const featured = useMemo(() => {
    return stories.find((s) => s.isFeatured) || stories[0] || (successStoriesData[0] as unknown as Story)
  }, [stories])

  return { stories, featured, loading, error, refetch: fetchStories }
}

/**
 * Hook to handle submitting contact inquiries to backend API
 */
export function useContact() {
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const submitInquiry = useCallback(async (data: ContactInquiryInput) => {
    setSubmitting(true)
    setSuccessMessage(null)
    setErrorMessage(null)
    try {
      const res = await contactService.submitContactInquiry(data)
      if (res.success) {
        setSuccessMessage(res.message || 'Thank you for reaching out! Your message has been received.')
        return true
      } else {
        setErrorMessage(res.message || 'Failed to submit inquiry. Please try again.')
        return false
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error submitting inquiry'
      setErrorMessage(msg)
      return false
    } finally {
      setSubmitting(false)
    }
  }, [])

  const resetStatus = useCallback(() => {
    setSuccessMessage(null)
    setErrorMessage(null)
  }, [])

  return { submitInquiry, submitting, successMessage, errorMessage, resetStatus }
}
