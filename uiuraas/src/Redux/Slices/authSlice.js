import { createSlice } from '@reduxjs/toolkit'
import {  userLogin,getUserProfile } from './Auth/authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout: (state) => {
        localStorage.removeItem('userToken') // delete token from storage
        state.loading = false
        state.userInfo = null
        state.userToken = null
        state.error = null
      },
      setCredentials: (state, { payload }) => {
        state.userInfo = payload
      },
    },
    extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // get user profile
    [getUserProfile.pending]: (state) => {
      state.loading = true
      state.error = null
    }
    ,
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
    
  },
})
export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer