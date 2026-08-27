import apiClient from './apiClient'
import type { ApiResponse, Testimonial, TestimonialQuery } from '../models'

export const testimonialsService = {
  async getPublicTestimonials(query?: TestimonialQuery): Promise<ApiResponse<Testimonial[]>> {
    const response = await apiClient.get<ApiResponse<Testimonial[]>>('/testimonials', {
      params: query,
    })
    return response.data
  },
}

export default testimonialsService
