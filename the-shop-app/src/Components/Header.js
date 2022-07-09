import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/header.css'

const Header = () => {
  return (
    <div className='place-holder'>
      <div className='header-container'>
        <header className='header'>
          <h1 className='page-title'>The Shop App</h1>
          <p className='page-description'>Your one stop for all things hot</p>

          {/* <nav className='header-nav'>
            <Link className='nav-link' to='/'>
              Women
            </Link>

            <Link className='nav-link' to='/'>
              Men
            </Link>

            <Link className='nav-link' to='/'>
              Kids/Toddlers
            </Link>
          </nav> */}
        </header>

        <div className='search-bar-container'>
          <input className='search-bar' placeholder='search' />
          <button className='btn search-bar-btn'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Header
