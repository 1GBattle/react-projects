import React, { useState } from 'react'
import defaultBookCover from '../assets/default_book_cover_2015.jpeg'
import { removeBook, editBook } from '../redux/bookSlice'
import { useDispatch } from 'react-redux'
import Modal from './Modal'

const Book = ({ book, progressBarRatio }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pagesCompleted, setPagesCompleted] = useState(0)

  const addCompletedPages = () => {
    dispatch(editBook({ ...book, completedPages: pagesCompleted }))
    setIsModalOpen(false)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const hideModal = () => {
    setPagesCompleted(0)
    setIsModalOpen(false)
  }

  const displayModal = () => {
    if (isModalOpen) {
      return (
        <Modal>
          <h2 className="modal-title">How many pages have you read today</h2>

          <div className="pages-completed-input-container">
            <label className="pages-completed-label">Pages Completed</label>
            <input
              className="pages-completed-input"
              value={pagesCompleted}
              type="number"
              required
              onChange={(e) => setPagesCompleted(e.target.value)}
            />
          </div>

          <div className="modal-btn-container">
            <button
              className="btn page-count-btn"
              onClick={() => addCompletedPages()}
            >
              Save
            </button>
            <button
              className="btn page-count-cancel-btn"
              onClick={() => hideModal()}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )
    }
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

      <div className="book-content-container">
        <div className="book-progress-bar">
          <div style={{ width: `${progressBarRatio}%` }}>
            <p className="book-progress">{progressBarRatio}%</p>
          </div>
        </div>

        <h3 className="book-title">{book.title}</h3>
        {book.author && book.author.length > 1 ? (
          <p className="book-author">{book.author.join(', ')}</p>
        ) : (
          <p className="book-author">{book.author}</p>
        )}
        <p className="book-pages">Book Length: {book.pageCount} Pages</p>
      </div>

      <div className="book-functions-container">
        <button
          className="btn add-completed-pages-btn"
          onClick={() => showModal()}
        >
          Compete Pages
        </button>
      </div>
      <button
        className="btn delete-btn"
        onClick={() => dispatch(removeBook(book.id))}
      >
        Remove Book
      </button>

      {displayModal()}
    </div>
  )
}

export default Book
