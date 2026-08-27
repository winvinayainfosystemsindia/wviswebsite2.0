export interface Category {
  id: string
  slug: string
  name: string
  type: string
  description?: string | null
  createdAt?: string
  updatedAt?: string
}

export interface CategoryQuery {
  type?: string
}
