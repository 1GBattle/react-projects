import React from 'react'

import '../styles/bookList.css'
import getBook from '../api/bookApi'
import { useDispatch } from 'react-redux'
import { removeBook } from '../redux/bookSlice'

const BookList = ({ listTitle, books }) => {
  const dispatch = useDispatch()

  return (
    <div className="centered-page book-list-container">
      <h1 className="book-list-title">{listTitle}</h1>
      <div className="books-container">
        {books.map((book) => {
          const progressBarRatio = Math.floor(
            (book.completedPages / book.pages) * 100
          )

          return (
            <div className="book-container" key={book.id}>
              <img
                className="book-img"
                src="https://books.google.com/books/content?id=m3GzoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                alt="#"
              />

              <div className="book-content-container">
                <div className="book-progress-bar">
                  <div style={{ width: `${progressBarRatio}%` }}>
                    <p className="book-progress">{progressBarRatio}%</p>
                  </div>
                </div>

                <h3 className="book-title">{book.bookName}</h3>
                <p className="book-author">Written By: {book.author}</p>
                <p className="book-pages">Book Length: {book.pages} Pages</p>
                <p className="book-genre">Genre: {book.genre}</p>
              </div>

              <div className="book-functions-container">
                <button className="btn add-completed-pages-btn">
                  Compete Pages
                </button>
                <button className="btn edit-book-btn">Edit Book Details</button>
              </div>
              <button
                className="btn delete-btn"
                onClick={() => dispatch(removeBook(book.id))}
              >
                Remove Book
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default BookList
