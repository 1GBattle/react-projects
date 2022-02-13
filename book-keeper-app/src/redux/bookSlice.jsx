import { createSlice } from '@reduxjs/toolkit'

const BookSlice = createSlice({
  name: 'books',
  initialState: {
    value: {
      books: [],
      perspectiveBooks: [],
    },
  },

  reducers: {
    addBook: (state, action) => {
      state.value.books = [...state.value.books, action.payload]
    },
    addPerspectiveBooks: (state, action) => {
      state.value.perspectiveBooks = action.payload
    },
    editBook: (state, action) => {
      state.value.books = state.value.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      )
    },
    removeBook: (state, action) => {
      state.value.books = state.value.books
        .map((book) => book)
        .filter((book) => book.id !== action.payload)
    },
  },
})

export default BookSlice.reducer

export const { addBook, removeBook, addPerspectiveBooks, editBook } =
  BookSlice.actions
