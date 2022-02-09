import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './bookSlice'

const store = configureStore({
  reducer: {
    books: BookSlice,
  },
})

export default store
