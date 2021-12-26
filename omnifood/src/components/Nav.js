import React from 'react'

import '../styles/Nav.css'

import omniFoodLogo from '../content/img/omnifood-logo.png'

const Nav = () => {
  return (
    <div>
      <header className='header'>
        <img className='logo' src={omniFoodLogo} alt='omnifood logo' />
        <nav className='main-nav'>
          <ul className='main-nav-list'>
            <li>
              <a className='main-nav-element' href='#'>
                How it Works
              </a>
              <a className='main-nav-element' href='#'>
                Meals
              </a>
              <a className='main-nav-element' href='#'>
                Testimonials
              </a>
              <a className='main-nav-element' href='#'>
                Pricing
              </a>
              <a className='main-nav-element nav-cta' href='#'>
                Try for free
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav
