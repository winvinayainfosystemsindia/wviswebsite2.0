import apiClient from './apiClient'
import type { ApiResponse, Category } from '../models'

export const categoryService = {
  async getCategories(type?: string): Promise<ApiResponse<Category[]>> {
    const response = await apiClient.get<ApiResponse<Category[]>>('/categories', {
      params: type ? { type } : undefined,
    })
    return response.data
  },
}

export default categoryService
