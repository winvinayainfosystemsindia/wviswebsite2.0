import apiClient from './apiClient'
import type { ApiResponse, Ebook, EbookQuery } from '../models'

export const ebookService = {
  async getPublicEbooks(query?: EbookQuery): Promise<ApiResponse<Ebook[]>> {
    const response = await apiClient.get<ApiResponse<Ebook[]>>('/ebooks', {
      params: query,
    })
    return response.data
  },

  async getPublicEbookById(id: string): Promise<ApiResponse<Ebook>> {
    const response = await apiClient.get<ApiResponse<Ebook>>(`/ebooks/${encodeURIComponent(id)}`)
    return response.data
  },
}

export default ebookService
