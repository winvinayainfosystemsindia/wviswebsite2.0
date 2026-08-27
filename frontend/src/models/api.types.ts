export interface PaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
  pagination?: PaginationMeta
  stats?: Record<string, number>
}

export interface ApiErrorResponse {
  success: false
  message: string
  errors?: Record<string, string[]> | Array<{ path: string; message: string }>
}
