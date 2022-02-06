import React from 'react'

import Booklist from './Booklist'

import '../styles/bookdashboard.css'
import fetchBooks from '../api/bookapi'
import { useSelector } from 'react-redux'

const BookDashboard = () => {
  console.log(useSelector((state) => state))
  const completedBooks = useSelector((state) => state.books.value)
    .map((book) => book)
    .filter((book) => book.pages === book.completedPages)

  const activeBooks = useSelector((store) => store.books.value)
    .map((book) => book)
    .filter((book) => book.pages !== book.completedPages)

  return (
    <div className="book-dashboard-container">
      <div className="active-book-container">
        <Booklist listName="Books in Progress" booksInList={activeBooks} />
      </div>

      <div className="completed-book-list">
        <Booklist listName="Completed Books" booksInList={completedBooks} />
      </div>

      <div className="wishlist-book-list">
        <Booklist listName="Your Wishlist" booksInList={[{}]} />
      </div>
    </div>
  )
}

export default BookDashboard
