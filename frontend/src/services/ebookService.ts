import apiClient from './apiClient'
import type { Ebook, EbookQuery, PaginatedResponse, ApiResponse } from '../models'

export const ebookService = {
  async getPublicEbooks(query?: EbookQuery): Promise<PaginatedResponse<Ebook>> {
    const response = await apiClient.get<PaginatedResponse<Ebook>>('/ebooks', { params: query })
    return response.data
  },

  async getPublicEbookById(id: string): Promise<ApiResponse<Ebook>> {
    const response = await apiClient.get<ApiResponse<Ebook>>(`/ebooks/${id}`)
    return response.data
  },

  async getAdminEbooks(query?: EbookQuery): Promise<PaginatedResponse<Ebook>> {
    const response = await apiClient.get<PaginatedResponse<Ebook>>('/admin/ebooks', { params: query })
    return response.data
  },

  async getAdminEbookById(id: string): Promise<ApiResponse<Ebook>> {
    const response = await apiClient.get<ApiResponse<Ebook>>(`/admin/ebooks/${id}`)
    return response.data
  },

  async createEbook(data: Partial<Ebook>): Promise<ApiResponse<Ebook>> {
    const response = await apiClient.post<ApiResponse<Ebook>>('/admin/ebooks', data)
    return response.data
  },

  async updateEbook(id: string, data: Partial<Ebook>): Promise<ApiResponse<Ebook>> {
    const response = await apiClient.patch<ApiResponse<Ebook>>(`/admin/ebooks/${id}`, data)
    return response.data
  },

  async deleteEbook(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/ebooks/${id}`)
    return response.data
  },
}

export default ebookService
