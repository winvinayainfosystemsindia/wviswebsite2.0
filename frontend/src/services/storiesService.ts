import apiClient from './apiClient'
import type { ApiResponse, Story, StoryQuery } from '../models'

export const storiesService = {
  async getPublicStories(query?: StoryQuery): Promise<ApiResponse<Story[]>> {
    const response = await apiClient.get<ApiResponse<Story[]>>('/stories', {
      params: query,
    })
    return response.data
  },

  async getPublicStoryBySlug(slug: string): Promise<ApiResponse<Story>> {
    const response = await apiClient.get<ApiResponse<Story>>(`/stories/${encodeURIComponent(slug)}`)
    return response.data
  },
}

export default storiesService
