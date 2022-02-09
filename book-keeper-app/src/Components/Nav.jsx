import React from 'react'

import '../styles/nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="page-title-container">
        <Link className="header-link" to="/">
          <h1 className="page-title">📘 The Book-Keeper App</h1>
        </Link>
      </div>

      <nav className="nav">
        <ul className="nav-list">
          <Link className="nav-list-link" to="/">
            All Books
          </Link>
          <Link className="nav-list-link" to="/books/inprogress">
            Books In Progress
          </Link>
          <Link className="nav-list-link" to="/books/completed">
            Completed Books
          </Link>
          <Link className="nav-list-link" to="/books/wishlist">
            Wish List
          </Link>
          <button className=" add-book-btn">Add Book</button>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
