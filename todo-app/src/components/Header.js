import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header box-shadow'>
      <h2 className='page-title'>The Todo App</h2>

      <div className='nav-buttons-container'>
        <nav>
          <Link to='/' className='btn home-button'>
            Home
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
