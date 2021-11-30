import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from '../Api/GoogleAuth'

const NavigationBar = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamer
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          Show Streams
        </Link>
        <GoogleAuth className='item' />
        {/* <Link to='/stream/create' className='item'>
          Create Stream
        </Link> */}
      </div>
    </div>
  )
}

export default NavigationBar
