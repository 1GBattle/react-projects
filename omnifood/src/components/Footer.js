import React from 'react'

import '../styles/Footer.css'

import logo from '../content/img/omnifood-logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container grid grid--5-cols'>
        <div className='logo-col'>
          <a href='#'>
            <img className='logo' src={logo} alt='omnifood logo' />
          </a>

          <ul className='social-links'>
            <li>
              <ion-icon className='social-icon' name='logo-instagram'></ion-icon>
            </li>
            <li>
              <ion-icon className='social-icon' name='logo-facebook'></ion-icon>
            </li>
            <li>
              <ion-icon className='social-icon' name='logo-twitter'></ion-icon>
            </li>
          </ul>

          <p className='copyright'>
            Copyright &copy; 2021 by Omnifood, inc. All rights reserved
          </p>
        </div>

        <div className='address-col'>
          <p className='footer-heading'>Contact Us</p>
          <address className='contacts'>
            <p className='address'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <a href='tel:415-201-6370' className='phone-number'>
              415-201-6370
            </a>
            <a href='mailto:hello@omnifood.com' className='email'>
              hello@omnifood.com
            </a>
          </address>
        </div>

        <nav className='nav-col'>
          <p className='footer-heading'>Account</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-nav-el' href='#'>
                Recipe Directory
              </a>
            </li>

            <li>
              <a className='footer-nav-el' href='#'>
                Privacy and Terms
              </a>
            </li>

            <li>
              <a className='footer-nav-el' href='#'>
                IOS App
              </a>
            </li>

            <li>
              <a className='footer-nav-el' href='#'>
                Android App
              </a>
            </li>
          </ul>
        </nav>

        <nav className='nav-col'>
          <p className='footer-heading'>Company</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-nav-el' href='#'>
                About Omnifood
              </a>
            </li>
            <li>
              <a className='footer-nav-el' href='#'>
                For Business
              </a>
            </li>
            <li>
              <a className='footer-nav-el' href='#'>
                Cooking Partners
              </a>
            </li>
            <li>
              <a className='footer-nav-el' href='#'>
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className='nav-col'>
          <p className='footer-heading'>Resources</p>
          <ul className='footer-nav'>
            <li>
              <a className='footer-nav-el' href='#'>
                Recipe Directory
              </a>
            </li>
            <li>
              <a className='footer-nav-el' href='#'>
                Help Center
              </a>
            </li>
            <li>
              <a className='footer-nav-el' href='#'>
                Privacy & Terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
