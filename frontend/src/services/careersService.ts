import apiClient from './apiClient'
import type { ApiResponse, CareerDomain, CareerQuery } from '../models'

export const careersService = {
  async getPublicCareerDomains(query?: CareerQuery): Promise<ApiResponse<CareerDomain[]>> {
    const response = await apiClient.get<ApiResponse<CareerDomain[]>>('/careers', {
      params: query,
    })
    return response.data
  },
}

export default careersService
