export interface CareerDomain {
  id: string
  title: string
  department: string
  type: string
  location: string
  skills: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  isPublished?: boolean
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface CareerQuery {
  page?: number
  limit?: number
  type?: string
  department?: string
  search?: string
}
