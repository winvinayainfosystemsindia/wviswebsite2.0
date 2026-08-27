export interface Ebook {
  id: string
  title: string
  category: string
  author: string
  description: string
  tileImage: string
  pdfUrl: string
  epubUrl?: string | null
  isFeatured: boolean
  isPublished?: boolean
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface EbookQuery {
  page?: number
  limit?: number
  category?: string
  search?: string
}
