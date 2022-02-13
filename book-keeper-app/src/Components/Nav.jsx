import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import defaultBookCover from '../assets/default_book_cover_2015.jpeg'
import Modal from './Modal'
import { addBook, addPerspectiveBooks } from '../redux/bookSlice'
import mainFetchFunction from '../api/bookApi'

import '../styles/nav.css'

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const perspectiveBooks = useSelector(
    (state) => state.books.value.perspectiveBooks
  )

  const dispatchAsyncFunction = async (searchTerm) => {
    dispatch(addPerspectiveBooks(await mainFetchFunction(searchTerm)))
  }

  const onSearchSubmit = (searchTerm) => {
    dispatchAsyncFunction(searchTerm)

    setSearchTerm('')
    setIsModalTwoOpen(true)
    setIsModalOpen(false)
  }

  const displayModal = () => {
    //conditional renders each modal based on Open state
    if (isModalOpen === true) {
      return (
        <Modal isModalOpen={isModalOpen} isModalTwoOpen={isModalTwoOpen}>
          <h1 className="modal-title">Search for book</h1>

          <div className="modal-input-container">
            <label className="modal-input-label">Book Title</label>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="modal-input"
              required={true}
              placeholder="Enter a search"
            />
          </div>

          <div className="modal-btn-container">
            <button
              className="btn modal-btn"
              onClick={() => onSearchSubmit(searchTerm)}
            >
              Search
            </button>
          </div>
        </Modal>
      )
    }

    if (isModalTwoOpen === true) {
      return (
        <Modal>
          <h1 className="modal-title">Select Book</h1>
          <div className="books-select-container">
            {perspectiveBooks.map((book) => {
              return (
                <div className="book-select-container" key={book.id}>
                  {book.img ? (
                    <img
                      className="book-select-img"
                      src={book.img.smallThumbnail}
                      alt="book cover"
                    />
                  ) : (
                    <img
                      className="book-select-img"
                      src={defaultBookCover}
                      alt="default book cover"
                    />
                  )}

                  <div className="book-select-content">
                    <h3 className="book-select-title">{book.title}</h3>
                    {book.author && book.author.length > 1 ? (
                      <p className="book-author">{book.author.join(', ')}</p>
                    ) : (
                      <p className="book-author">{book.author}</p>
                    )}
                    <p className="book-select-pagecount">
                      {book.pageCount} Pages
                    </p>
                  </div>

                  <button
                    className="btn create-book-btn"
                    onClick={() => {
                      dispatch(addBook(book))
                      setIsModalTwoOpen(false)
                    }}
                  >
                    Select Book
                  </button>
                </div>
              )
            })}
          </div>
        </Modal>
      )
    }
  }

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
          <button className="add-book-btn" onClick={() => setIsModalOpen(true)}>
            Add Book
          </button>
        </ul>
      </nav>

      {displayModal()}
    </div>
  )
}

export default Nav
