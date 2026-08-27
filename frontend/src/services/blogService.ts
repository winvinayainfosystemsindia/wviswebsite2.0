import apiClient from './apiClient'
import type { BlogPost, BlogQuery, PaginatedResponse, ApiResponse } from '../models'

export const blogService = {
  async getPublicBlogs(query?: BlogQuery): Promise<PaginatedResponse<BlogPost>> {
    const response = await apiClient.get<PaginatedResponse<BlogPost>>('/blogs', { params: query })
    return response.data
  },

  async getPublicBlogBySlug(slug: string): Promise<ApiResponse<BlogPost>> {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/blogs/${slug}`)
    return response.data
  },

  async getAdminBlogs(query?: BlogQuery): Promise<PaginatedResponse<BlogPost>> {
    const response = await apiClient.get<PaginatedResponse<BlogPost>>('/admin/blogs', { params: query })
    return response.data
  },

  async getAdminBlogById(id: string): Promise<ApiResponse<BlogPost>> {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/admin/blogs/${id}`)
    return response.data
  },

  async createBlog(data: Partial<BlogPost>): Promise<ApiResponse<BlogPost>> {
    const response = await apiClient.post<ApiResponse<BlogPost>>('/admin/blogs', data)
    return response.data
  },

  async updateBlog(id: string, data: Partial<BlogPost>): Promise<ApiResponse<BlogPost>> {
    const response = await apiClient.patch<ApiResponse<BlogPost>>(`/admin/blogs/${id}`, data)
    return response.data
  },

  async deleteBlog(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/blogs/${id}`)
    return response.data
  },
}

export default blogService
