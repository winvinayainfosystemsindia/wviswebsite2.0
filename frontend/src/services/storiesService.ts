import apiClient from './apiClient'
import type { Story, StoryQuery, ApiResponse } from '../models'

export const storiesService = {
  async getPublicStories(query?: StoryQuery): Promise<ApiResponse<Story[]>> {
    const response = await apiClient.get<ApiResponse<Story[]>>('/stories', { params: query })
    return response.data
  },

  async getPublicStoryBySlug(slug: string): Promise<ApiResponse<Story>> {
    const response = await apiClient.get<ApiResponse<Story>>(`/stories/${slug}`)
    return response.data
  },

  async getAdminStories(query?: StoryQuery): Promise<ApiResponse<Story[]>> {
    const response = await apiClient.get<ApiResponse<Story[]>>('/admin/stories', { params: query })
    return response.data
  },

  async getAdminStoryById(id: string): Promise<ApiResponse<Story>> {
    const response = await apiClient.get<ApiResponse<Story>>(`/admin/stories/${id}`)
    return response.data
  },

  async createStory(data: Partial<Story>): Promise<ApiResponse<Story>> {
    const response = await apiClient.post<ApiResponse<Story>>('/admin/stories', data)
    return response.data
  },

  async updateStory(id: string, data: Partial<Story>): Promise<ApiResponse<Story>> {
    const response = await apiClient.patch<ApiResponse<Story>>(`/admin/stories/${id}`, data)
    return response.data
  },

  async deleteStory(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/stories/${id}`)
    return response.data
  },
}

export default storiesService
