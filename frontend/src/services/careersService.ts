import apiClient from './apiClient'
import type { CareerDomain, ApiResponse } from '../models'

export const careersService = {
  async getPublicCareerDomains(query?: any): Promise<ApiResponse<CareerDomain[]>> {
    const response = await apiClient.get<ApiResponse<CareerDomain[]>>('/careers', { params: query })
    return response.data
  },

  async getAdminCareers(query?: any): Promise<ApiResponse<CareerDomain[]>> {
    const response = await apiClient.get<ApiResponse<CareerDomain[]>>('/admin/careers', { params: query })
    return response.data
  },

  async createCareer(data: Partial<CareerDomain>): Promise<ApiResponse<CareerDomain>> {
    const response = await apiClient.post<ApiResponse<CareerDomain>>('/admin/careers', data)
    return response.data
  },

  async updateCareer(id: string, data: Partial<CareerDomain>): Promise<ApiResponse<CareerDomain>> {
    const response = await apiClient.patch<ApiResponse<CareerDomain>>(`/admin/careers/${id}`, data)
    return response.data
  },

  async deleteCareer(id: string): Promise<ApiResponse<null>> {
    const response = await apiClient.delete<ApiResponse<null>>(`/admin/careers/${id}`)
    return response.data
  },
}

export default careersService
