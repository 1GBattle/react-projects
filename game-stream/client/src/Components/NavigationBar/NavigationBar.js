import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <Link to={'/createstream'}>Create Stream</Link>
      <Link to={'/showstream'}>Show Streams</Link>
    </div>
  )
}

export default NavigationBar
