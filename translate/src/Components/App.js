import React, { useState } from 'react'
import UserCreate from './userCreate'
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

const App = () => {
  const [language, setLanguage] = useState('english')

  const onLanguageChange = (language) => {
    setLanguage(language)
  }

  return (
    <div className='ui container'>
      <div>
        Select a language:
        <i className='flag us' onClick={() => onLanguageChange('english')} />
        <i className='flag nl' onClick={() => onLanguageChange('dutch')} />
      </div>

      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value={'red'}>
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  )
}

export default App
