import React, { useState } from 'react'
import DropDown from '../DropDown/DropDown'
import Convert from './Convert'

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = () => {
  const [userInput, setUserInput] = useState('')
  const [language, setLanguage] = useState(options[0])

  const label = 'language'

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Enter Text</label>
        <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      </div>

      <DropDown
        options={options}
        language={language}
        setLanguage={setLanguage}
        label={label}
      />
      <hr />

      <h3 className='ui header'>Output:</h3>
      <Convert language={language} userInput={userInput} />
    </div>
  )
}

export default Translate
