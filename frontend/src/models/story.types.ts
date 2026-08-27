export interface StoryContentBlock {
  heading?: string
  text?: string
  bulletPoints?: string[]
}

export interface Story {
  id: string
  slug: string
  title: string
  personName: string
  personRole: string
  organization?: string | null
  disabilityType?: string | null
  summary: string
  content?: StoryContentBlock[] | unknown
  image?: string | null
  videoUrl?: string | null
  isFeatured: boolean
  isPublished?: boolean
  sortOrder?: number
  createdAt?: string
  updatedAt?: string
}

export interface StoryQuery {
  page?: number
  limit?: number
  search?: string
  isFeatured?: boolean
}
