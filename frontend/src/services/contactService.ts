import apiClient from './apiClient'
import type { ApiResponse, ContactInquiryInput, ContactInquiryResponse } from '../models'

export const contactService = {
  async submitContactInquiry(data: ContactInquiryInput): Promise<ApiResponse<ContactInquiryResponse>> {
    const response = await apiClient.post<ApiResponse<ContactInquiryResponse>>('/contact', data)
    return response.data
  },
}

export default contactService
