import apiClient from './apiClient'
import type { Category, CategoryQuery, ApiResponse } from '../models'

export const categoryService = {
  async getCategories(query?: CategoryQuery): Promise<ApiResponse<Category[]>> {
    const response = await apiClient.get<ApiResponse<Category[]>>('/categories', { params: query })
    return response.data
  },

  async getAdminCategories(query?: CategoryQuery): Promise<ApiResponse<Category[]>> {
    const response = await apiClient.get<ApiResponse<Category[]>>('/admin/categories', { params: query })
    return response.data
  },

  async createCategory(data: Partial<Category>): Promise<ApiResponse<Category>> {
    const response = await apiClient.post<ApiResponse<Category>>('/admin/categories', data)
    return response.data
  },

  async updateCategory(id: string, data: Partial<Category>): Promise<ApiResponse<Category>> {
    const response = await apiClient.patch<ApiResponse<Category>>(`/admin/categories/${id}`, data)
    return response.data
  },

  async deleteCategory(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/categories/${id}`)
    return response.data
  },
}

export default categoryService
