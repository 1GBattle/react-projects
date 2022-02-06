import { createSlice } from '@reduxjs/toolkit'

const books = [
  {
    bookTitle: 'book1',
    bookAuthor: 'author1',
    pages: 150,
    completedPages: 75,
  },
  {
    bookTitle: 'book2',
    bookAuthor: 'author2',
    pages: 300,
    completedPages: 15,
  },
  {
    bookTitle: 'book3',
    bookAuthor: 'author3',
    pages: 165,
    completedPages: 90,
  },
  {
    bookTitle: 'book4',
    bookAuthor: 'author4',
    pages: 290,
    completedPages: 45,
  },
  {
    bookTitle: 'book5',
    bookAuthor: 'author5',
    pages: 98,
    completedPages: 10,
  },
]

const BookSlice = createSlice({
  name: 'books',
  initialState: {
    value: books,
  },

  reducers: {
    addBook: (state, action) => {
      console.log(action.payload)
    },
  },
})

export default BookSlice.reducer
export const { addBook } = BookSlice.actions
