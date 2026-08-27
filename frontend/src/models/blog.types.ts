export interface BlogQuoteCallout {
  text: string
  author?: string
}

export interface BlogContentSection {
  heading?: string
  paragraphs: string[]
  quoteCallout?: BlogQuoteCallout
  takeaways?: string[]
}

export interface BlogPost {
  id: string
  slug: string
  aliases: string[]
  title: string
  excerpt: string
  category: string
  categoryLabel: string
  author: string
  authorRole: string
  publishedDate: string
  readTime: string
  tileImage: string
  bannerImage: string
  isFeatured: boolean
  isPublished?: boolean
  tags: string[]
  highlightBadge?: string | null
  coverCaption?: string | null
  sections: BlogContentSection[]
  views?: number
  authorUserId?: string | null
  createdAt?: string
  updatedAt?: string
}

export interface BlogQuery {
  page?: number
  limit?: number
  category?: string
  tag?: string
  search?: string
  isFeatured?: boolean
}
