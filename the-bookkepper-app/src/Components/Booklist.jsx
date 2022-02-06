import React from 'react'

import '../styles/booklist.css'

const Booklist = ({ listName, booksInList }) => {
  return (
    <div className="book-list-container">
      <h2>{listName}</h2>

      <div className="book-list-container">
        {booksInList.map((book) => {
          return (
            <div className="book-in-list">
              <div className="progress">
                <div
                  className={`progress - bar w-${Math.floor(
                    (book.completedPages / book.pages) * 100
                  )}}`}
                  role="progressbar"
                  style={{
                    width:
                      'Math.floor((book.completedPages / book.pages) * 100)%',
                  }}
                >
                  {Math.floor((book.completedPages / book.pages) * 100)}%
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Booklist
