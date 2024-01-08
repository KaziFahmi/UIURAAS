import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slices/authSlice'
import { authApi } from '../Slices/Auth/authService'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
export default store