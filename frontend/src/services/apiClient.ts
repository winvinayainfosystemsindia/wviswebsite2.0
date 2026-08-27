import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor: Attach JWT Bearer Token if logged in
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('wvis_auth_token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

// Response Interceptor: Format error messages clearly
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; errors?: Array<{ field?: string; message?: string }> | Record<string, string[]> }>) => {
    let customMessage = error.response?.data?.message

    if (error.response?.data?.errors) {
      if (Array.isArray(error.response.data.errors)) {
        const detailStr = error.response.data.errors.map((e) => e.message || '').filter(Boolean).join('. ')
        if (detailStr && (!customMessage || customMessage === 'Validation failed')) {
          customMessage = detailStr
        }
      }
    }

    if (!customMessage) {
      customMessage = error.message || 'An unexpected network error occurred. Please try again.'
    }

    // If 401 unauthorized on protected route, clean up auth storage
    if (error.response?.status === 401 && !error.config?.url?.includes('/auth/login')) {
      localStorage.removeItem('wvis_auth_token')
      localStorage.removeItem('wvis_auth_user')
    }

    return Promise.reject(new Error(customMessage))
  }
)

export default apiClient
