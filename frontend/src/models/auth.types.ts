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
