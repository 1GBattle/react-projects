import React from 'react'
import ReactDOM from 'react-dom'

import '../styles/modal.css'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-container">{children}</div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
