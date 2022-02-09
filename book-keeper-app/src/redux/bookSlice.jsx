import { createSlice } from '@reduxjs/toolkit'

const BookSlice = createSlice({
  name: 'books',
  initialState: {
    value: [
      {
        bookName: 'book1',
        author: 'author1',
        genre: 'dystopian',
        completedPages: 10,
        pages: 100,
        id: 1,
      },
      {
        bookName: 'Book2',
        author: 'author1',
        genre: 'dystopian',
        completedPages: 25,
        pages: 305,
        id: 2,
      },
      {
        bookName: 'Book3',
        author: 'author1',
        genre: 'dystopian',
        completedPages: 156,
        pages: 500,
        id: 3,
      },
      {
        bookName: 'Book3',
        author: 'author1',
        genre: 'dystopian',
        completedPages: 156,
        pages: 500,
        id: 4,
      },
    ],
  },

  reducers: {
    addBook: (state, action) => {
      state.value = [state.value, ...action.payload]
    },
    removeBook: (state, action) => {
      state.value = state.value
        .map((book) => book)
        .filter((book) => book.id !== action.payload)
    },
  },
})

export default BookSlice.reducer

export const { addBook, removeBook } = BookSlice.actions
