import { configureStore } from "@reduxjs/toolkit"
import BookSlice from "./bookSlice"

const store = configureStore({
  reducer: BookSlice,
})

export default store
