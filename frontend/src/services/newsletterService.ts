import apiClient from './apiClient'
import type { ApiResponse, Newsletter, NewsletterQuery } from '../models'

export const newsletterService = {
  async getPublicNewsletters(query?: NewsletterQuery): Promise<ApiResponse<Newsletter[]>> {
    const response = await apiClient.get<ApiResponse<Newsletter[]>>('/newsletters', {
      params: query,
    })
    return response.data
  },

  async getPublicNewsletterById(id: string): Promise<ApiResponse<Newsletter>> {
    const response = await apiClient.get<ApiResponse<Newsletter>>(`/newsletters/${encodeURIComponent(id)}`)
    return response.data
  },
}

export default newsletterService
