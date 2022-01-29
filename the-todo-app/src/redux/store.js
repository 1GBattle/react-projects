import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../redux/reducers/todoReducers'
import authSlice from './reducers/authSlice'

const store = configureStore({
  reducer: {
    todos: todoSlice,
    user: authSlice
  }
})

export default store
