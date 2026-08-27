import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthUser } from '../../models'
import authService from '../../services/authService'

interface AuthState {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: authService.getStoredUser(),
  token: authService.getToken(),
  isAuthenticated: authService.isAuthenticated(),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: AuthUser; token: string }>
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    logoutUser: (state) => {
      authService.logout()
      state.user = null
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { setCredentials, logoutUser } = authSlice.actions
export default authSlice.reducer
