import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import { authApi } from '../Services/auth/authService'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
export default store