import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


const backendURL = 'http://103.87.215.12:5000'
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ id, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON\
      console.log(id,password)
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        { id, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)