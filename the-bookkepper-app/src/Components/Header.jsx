import React from "react"

import "../styles/header.css"

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <h1 className="header-page-title">📘 The Book Keeper App</h1>

        <div className="header-nav-container">
          <nav>
            <ul className="nav-list">
              <li className="nav-list-link">Completed Books</li>
              <li className="nav-list-link">Books in Progress</li>
              <li className="nav-list-link">Wishlist</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
