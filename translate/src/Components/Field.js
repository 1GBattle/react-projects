import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

const Field = () => {
  const contextType = useContext(LanguageContext)

  const getLabelText = () => {
    if (contextType === 'english') {
      return 'Name'
    } else {
      return 'Naam'
    }
  }

  return (
    <div className='ui field'>
      <label>{getLabelText()}</label>
      <input />
    </div>
  )
}

export default Field
