import React from 'react'

import '../styles/bookList.css'
import getBook from '../api/bookApi'
import { useDispatch } from 'react-redux'
import { removeBook } from '../redux/bookSlice'
import defaultBookCover from '../assets/default_book_cover_2015.jpeg'

const BookList = ({ listTitle, books }) => {
  const dispatch = useDispatch()
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

          return (
            <div className="book-container">
              {book.img ? (
                <img
                  className="book-img"
                  src={book.img.smallThumbnail}
                  alt="book cover"
                />
              ) : (
                <img
                  className="book-img"
                  src={defaultBookCover}
                  alt="default book cover"
                />
              )}
              {/*<img className="book-img" src={book.img.smallThumbnail} alt="#" />*/}

              <div className="book-content-container">
                <div className="book-progress-bar">
                  <div style={{ width: `${progressBarRatio}%` }}>
                    <p className="book-progress">{progressBarRatio}%</p>
                  </div>
                </div>

                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Written By: {book.author}</p>
                <p className="book-pages">
                  Book Length: {book.pageCount} Pages
                </p>
                {/*<p className="book-genre">Genre: {book.genre}</p>*/}
              </div>

              <div className="book-functions-container">
                <button className="btn add-completed-pages-btn">
                  Compete Pages
                </button>
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
