import React from 'react'

import Booklist from './Booklist'

import '../styles/bookdashboard.css'
import fetchBooks from '../api/bookapi'

const BookDashboard = () => {
  fetchBooks('harry potter')
  return (
    <div className="book-dashboard-container">
      <div className="active-book-container">
        <Booklist listName="Books in Progress" />
      </div>

      <div className="completed-book-list">
        <Booklist listName="Completed Books" />
      </div>

      <div className="wishlist-book-list">
        <Booklist listName="Your Wishlist" />
      </div>
    </div>
  )
}

export default BookDashboard
