import React from "react"
import ReactDOM from "react-dom"

const Modal = ({ headerMessage, contentMessage, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className='ui dimmer modals visible active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{headerMessage}</div>
        <div className='content'>{contentMessage}</div>
        <div className='actions'>{actions}</div>
        <div className={"some random name here"}></div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
