import React from 'react'
import Book from './Book'

import '../styles/home.css'

const Home = ({ activeBooks, completedBooks }) => {
  if (!activeBooks && !completedBooks) {
    return (
      <div className="centered-page books-not-found-container">
        <h1>No books found in reading list</h1>
      </div>
    )
  }

  return (
    <div className="centered-page home-page-container">
      <h1 className="home-book-title">Active Books</h1>

      <div className="active-books-container">
        {activeBooks.map((book) => {
          return (
            <div className="home-book-container" key={book.id}>
              <div className="home-book">
                <Book book={book} progressBarRatio={null} />
              </div>
            </div>
          )
        })}
      </div>
      <h1 className="home-book-title">Completed Books</h1>

      <div className="completed-books-container">
        {completedBooks.map((book) => {
          return (
            <div className="home-book-container" key={book.id}>
              <div className="home-book">
                <Book book={book} progressBarRatio={null} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
