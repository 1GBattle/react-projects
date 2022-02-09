import React from 'react'
import { createPortal } from 'react-dom'

const Modal = () => {
  return (
    <div className="modal-container">
      <h1>Modal</h1>
    </div>
  )
}

export default createPortal(Modal, document.getElementById('modal'))
