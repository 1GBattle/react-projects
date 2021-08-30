import React, { useEffect, useRef, useState } from 'react'
import makeApiRequest from '../../utils/googleTranslate'

const Convert = ({ language, userInput }) => {
  const [translatedText, setTranslatedText] = useState('')
  const [debouncedText, setDebonucedText] = useState('')

  useEffect(() => {
    const debouncedTimer = setTimeout(() => {
      setDebonucedText(userInput)
    }, 500)

    return () => {
      clearTimeout(debouncedTimer)
    }
  }, [debouncedText, userInput])

  useEffect(() => {
    if (debouncedText) {
      makeApiRequest(debouncedText, language.value).then((response) => {
        setTranslatedText(response.data.data.translations[0].translatedText)
      })
    }
  }, [debouncedText, language])

  return (
    <div>
      <div>{translatedText}</div>
    </div>
  )
}

export default Convert
