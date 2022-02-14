import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/modal.css'

const Modal = ({ children, setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const closeOnKeyUp = (e) => {
    if (e.code === 'Escape') {
      closeModal()
    }
  }

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      onClick={(e) => closeModal(e)}
      onKeyUp={(e) => closeOnKeyUp(e)}
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        onKeyUp={(e) => closeOnKeyUp(e)}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
