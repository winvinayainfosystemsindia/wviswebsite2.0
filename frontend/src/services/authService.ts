import apiClient from './apiClient'
import type { ApiResponse, AuthResponse, AuthUser, LoginCredentials } from '../models'

const TOKEN_KEY = 'wvis_auth_token'
const USER_KEY = 'wvis_auth_user'

export const authService = {
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/login', credentials)
    if (response.data?.success && response.data.data?.token) {
      localStorage.setItem(TOKEN_KEY, response.data.data.token)
      localStorage.setItem(USER_KEY, JSON.stringify(response.data.data.user))
    }
    return response.data
  },

  async getProfile(): Promise<ApiResponse<{ user: AuthUser }>> {
    const response = await apiClient.get<ApiResponse<{ user: AuthUser }>>('/auth/me')
    return response.data
  },

  logout(): void {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  },

  getStoredUser(): AuthUser | null {
    const raw = localStorage.getItem(USER_KEY)
    if (!raw) return null
    try {
      return JSON.parse(raw) as AuthUser
    } catch {
      return null
    }
  },

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem(TOKEN_KEY))
  },
}

export default authService
