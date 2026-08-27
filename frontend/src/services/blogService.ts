import apiClient from './apiClient'
import type { ApiResponse, BlogPost, BlogQuery } from '../models'

export const blogService = {
  async getPublicBlogs(query?: BlogQuery): Promise<ApiResponse<BlogPost[]>> {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>('/blogs', {
      params: query,
    })
    return response.data
  },

  async getPublicBlogBySlug(slug: string): Promise<ApiResponse<BlogPost>> {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/blogs/${encodeURIComponent(slug)}`)
    return response.data
  },
}

export default blogService
