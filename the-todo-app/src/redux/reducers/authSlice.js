import { createSlice } from '@reduxjs/toolkit'

const authReducers = createSlice({
  name: 'auth',
  initialState: {
    value: null
  },

  reducers: {
    logIn: (state, action) => {
      state.value = action.payload
      console.log(state.value)
    },

    logOut: (state, action) => {
      state.value = action.payload
      console.log(state.value)
    }
  }
})

export default authReducers.reducer

export const { logIn, logOut } = authReducers.actions
