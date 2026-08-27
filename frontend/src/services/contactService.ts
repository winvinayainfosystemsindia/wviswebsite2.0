import apiClient from './apiClient'
import type { ContactInquiryInput, ContactInquiryResponse, ContactInquiryItem, ApiResponse, PaginatedResponse } from '../models'

export const contactService = {
  async submitContactInquiry(data: ContactInquiryInput): Promise<ApiResponse<ContactInquiryResponse>> {
    const response = await apiClient.post<ApiResponse<ContactInquiryResponse>>('/contact', data)
    return response.data
  },

  async getAdminInquiries(query?: { status?: string; search?: string; page?: number; limit?: number }): Promise<PaginatedResponse<ContactInquiryItem> & { stats?: { totalAll: number; new: number; inProgress: number; resolved: number; archived: number } }> {
    const response = await apiClient.get('/admin/contact', { params: query })
    return response.data
  },

  async updateInquiryStatus(id: string, status: string, notes?: string): Promise<ApiResponse<ContactInquiryItem>> {
    const response = await apiClient.patch<ApiResponse<ContactInquiryItem>>(`/admin/contact/${id}/status`, { status, notes })
    return response.data
  },

  async deleteInquiry(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/contact/${id}`)
    return response.data
  },
}

export default contactService
