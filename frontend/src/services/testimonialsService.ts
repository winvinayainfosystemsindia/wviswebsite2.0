import apiClient from './apiClient'
import type { Testimonial, TestimonialQuery, ApiResponse } from '../models'

export const testimonialsService = {
  async getPublicTestimonials(query?: TestimonialQuery): Promise<ApiResponse<Testimonial[]>> {
    const response = await apiClient.get<ApiResponse<Testimonial[]>>('/testimonials', { params: query })
    return response.data
  },

  async getAdminTestimonials(query?: TestimonialQuery): Promise<ApiResponse<Testimonial[]>> {
    const response = await apiClient.get<ApiResponse<Testimonial[]>>('/admin/testimonials', { params: query })
    return response.data
  },

  async createTestimonial(data: Partial<Testimonial>): Promise<ApiResponse<Testimonial>> {
    const response = await apiClient.post<ApiResponse<Testimonial>>('/admin/testimonials', data)
    return response.data
  },

  async updateTestimonial(id: string, data: Partial<Testimonial>): Promise<ApiResponse<Testimonial>> {
    const response = await apiClient.patch<ApiResponse<Testimonial>>(`/admin/testimonials/${id}`, data)
    return response.data
  },

  async deleteTestimonial(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/testimonials/${id}`)
    return response.data
  },
}

export default testimonialsService
