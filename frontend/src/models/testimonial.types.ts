export interface Testimonial {
  id: string
  name: string
  role: string
  organization: string
  avatar?: string | null
  content: string
  rating: number
  category: string
  isFeatured: boolean
  isPublished?: boolean
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface TestimonialQuery {
  page?: number
  limit?: number
  category?: string
  isFeatured?: boolean
}
