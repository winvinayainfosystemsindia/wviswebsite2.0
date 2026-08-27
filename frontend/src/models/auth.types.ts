export interface AuthUser {
  id: string
  email: string
  name: string
  role: 'SUPERADMIN' | 'ADMIN' | 'EDITOR'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  user: AuthUser
  token: string
}

export interface LoginApiResponse {
  success: boolean
  message: string
  token?: string
  user?: AuthUser
}

export interface MeApiResponse {
  success: boolean
  user?: AuthUser
  message?: string
}
