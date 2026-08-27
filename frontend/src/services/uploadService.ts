import apiClient from './apiClient'
import type { ApiResponse } from '../models'

export interface UploadedFileResult {
  originalName: string
  filename: string
  mimetype: string
  size: number
  url: string
}

export const uploadService = {
  async uploadFile(
    file: File,
    onProgress?: (progressPercent: number) => void
  ): Promise<ApiResponse<{ file: UploadedFileResult }>> {
    const formData = new FormData()
    formData.append('file', file)

    const response = await apiClient.post<ApiResponse<{ file: UploadedFileResult }>>(
      '/admin/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total && onProgress) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            onProgress(percent)
          }
        },
      }
    )

    return response.data
  },
}

export default uploadService
