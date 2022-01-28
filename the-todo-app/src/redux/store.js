import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../redux/reducers/todoReducers'

const store = configureStore({
  reducer: {
    todos: todoSlice
  }
})

export default store
