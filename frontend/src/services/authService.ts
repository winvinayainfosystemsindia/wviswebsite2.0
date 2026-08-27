import apiClient from './apiClient'
import type { AuthUser, LoginCredentials, LoginApiResponse, MeApiResponse } from '../models'

const TOKEN_KEY = 'wvis_auth_token'
const USER_KEY = 'wvis_auth_user'

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginApiResponse> {
    const response = await apiClient.post<LoginApiResponse>('/auth/login', credentials)
    const data = response.data
    if (data.success && data.token && data.user) {
      localStorage.setItem(TOKEN_KEY, data.token)
      localStorage.setItem(USER_KEY, JSON.stringify(data.user))
    }
    return data
  },

  async getProfile(): Promise<MeApiResponse> {
    const response = await apiClient.get<MeApiResponse>('/auth/me')
    const data = response.data
    if (data.success && data.user) {
      localStorage.setItem(USER_KEY, JSON.stringify(data.user))
    }
    return data
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
