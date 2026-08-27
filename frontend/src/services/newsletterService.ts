import apiClient from './apiClient'
import type { Newsletter, NewsletterQuery, PaginatedResponse, ApiResponse } from '../models'

export const newsletterService = {
  async getPublicNewsletters(query?: NewsletterQuery): Promise<PaginatedResponse<Newsletter>> {
    const response = await apiClient.get<PaginatedResponse<Newsletter>>('/newsletters', { params: query })
    return response.data
  },

  async getPublicNewsletterById(id: string): Promise<ApiResponse<Newsletter>> {
    const response = await apiClient.get<ApiResponse<Newsletter>>(`/newsletters/${id}`)
    return response.data
  },

  async getAdminNewsletters(query?: NewsletterQuery): Promise<PaginatedResponse<Newsletter>> {
    const response = await apiClient.get<PaginatedResponse<Newsletter>>('/admin/newsletters', { params: query })
    return response.data
  },

  async getAdminNewsletterById(id: string): Promise<ApiResponse<Newsletter>> {
    const response = await apiClient.get<ApiResponse<Newsletter>>(`/admin/newsletters/${id}`)
    return response.data
  },

  async createNewsletter(data: Partial<Newsletter>): Promise<ApiResponse<Newsletter>> {
    const response = await apiClient.post<ApiResponse<Newsletter>>('/admin/newsletters', data)
    return response.data
  },

  async updateNewsletter(id: string, data: Partial<Newsletter>): Promise<ApiResponse<Newsletter>> {
    const response = await apiClient.patch<ApiResponse<Newsletter>>(`/admin/newsletters/${id}`, data)
    return response.data
  },

  async deleteNewsletter(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/newsletters/${id}`)
    return response.data
  },
}

export default newsletterService
