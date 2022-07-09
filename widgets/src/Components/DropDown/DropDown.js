import React, { useEffect, useRef, useState } from 'react'

import '../../Styles/colorDropDown.css'

const DropDown = ({ options, label, setLanguage, language }) => {
  const [selection, setSelection] = useState(options[0])
  const [isComponentOpen, setIsComponentOpen] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return
      }
      setIsComponentOpen(false)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true })
    }
  }, [])

  const optionsToRender = options
    .filter((option) => selection !== option)
    .map((option) => {
      return (
        <div
          key={option.value}
          className='item'
          onClick={() => {
            setSelection(option)
            setLanguage(option)
          }}
        >
          {option.label}
        </div>
      )
    })
  return (
    <div>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <label className='label'>Select a {label} </label>
          <div
            onClick={() => setIsComponentOpen(!isComponentOpen)}
            className={`ui selection dropdown ${
              isComponentOpen ? 'visible active' : ''
            }`}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selection.label}</div>
            <div className={`menu ${isComponentOpen ? 'visible transition' : ''}`}>
              {optionsToRender}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDown
