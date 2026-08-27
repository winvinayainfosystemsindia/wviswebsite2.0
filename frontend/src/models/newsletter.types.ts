export interface Newsletter {
  id: string
  title: string
  publishedDate: string
  year: string
  excerpt: string
  coverImage: string
  pdfUrl: string
  isFeatured: boolean
  isPublished?: boolean
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface NewsletterQuery {
  page?: number
  limit?: number
  year?: string
  search?: string
}
