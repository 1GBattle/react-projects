import React from 'react'

import Book from './Book'

import '../styles/bookList.css'

const BookList = ({ listTitle, books }) => {
  let progressBarRatio = 0

  return (
    <div className="centered-page book-list-container">
      <h1 className="book-list-title">{listTitle}</h1>
      <div className="books-container">
        {books.map((book) => {
          if (book.pageCount) {
            progressBarRatio = Math.floor(
              (book.completedPages / book.pageCount) * 100
            )
          }

          return <Book book={book} progressBarRatio={progressBarRatio} />
        })}
      </div>
    </div>
  )
}
export default BookList
