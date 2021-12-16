import React from 'react'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

const Button = () => {
  const renderSubmitText = (value) => {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  const renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => renderSubmitText(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  return (
    <div>
      <ColorContext.Consumer>{(color) => renderButton(color)}</ColorContext.Consumer>
    </div>
  )
}

export default Button
