import { createSlice } from '@reduxjs/toolkit'

const authReducers = createSlice({
  name: 'auth',
  initialState: {
    value: null
  },

  reducers: {
    logIn: (state, action) => {
      state.value = action.payload
    },

    logOut: (state, action) => {
      state.value = action.payload
    }
  }
})

export default authReducers.reducer

export const { logIn, logOut } = authReducers.actions
