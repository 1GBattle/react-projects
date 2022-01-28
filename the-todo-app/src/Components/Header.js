import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <header className='header'>
        <div>
          <Link to='/' className='header-title-link'>
            <h1 className='header-title'>The Todo App</h1>
          </Link>
        </div>

        <div>
          <Link to='/create' className='header-title-link'>
            {/* <p className='header-create-new-btn'>Create New</p> */}
            Create New
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header
