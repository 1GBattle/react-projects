import React from 'react'

import '../styles/booklist.css'

const Booklist = ({ listName }) => {
  return (
    <div className="book-list-container">
      <h2>{listName}</h2>
    </div>
  )
}

export default Booklist
