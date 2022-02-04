import { createSlice } from "@reduxjs/toolkit"

const BookSlice = createSlice({
  name: "books",
  initialState: [],

  reducers: {
    addBook: (state, action) => {
      console.log(action.payload)
    },
  },
})

export default BookSlice.reducer
export const { addBook } = BookSlice.actions
