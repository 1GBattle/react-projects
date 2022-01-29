import React from 'react'

import '../styles/userNameBox.css'

const UserNameBox = ({ userName }) => {
  return (
    <div className='user-name-title-container'>
      <h2 className='user-name-title'>Welcome, {userName}</h2>
    </div>
  )
}

export default UserNameBox
