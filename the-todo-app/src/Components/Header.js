import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { signIn, signUserOut, user } from '../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from '../redux/reducers/authSlice'

const Header = () => {
  const dispatch = useDispatch()
  const userFromStore = useSelector((state) => state.user.value)

  const signUserIn = () => {
    signIn()
    dispatch(logIn({ ...user }))
    console.log(userFromStore)
  }

  const signOutUser = () => {
    signUserOut()
    dispatch(logOut(null))
    console.log(userFromStore)
  }

  const displayAuthButton = () => {
    if (userFromStore) {
      return (
        <button className='btn logout-btn' onClick={() => signOutUser()}>
          Logout
        </button>
      )
    } else {
      return (
        <button className='btn login-btn' onClick={() => signUserIn()}>
          Login
        </button>
      )
    }
  }

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
            Create New
          </Link>
          {displayAuthButton()}
        </div>
      </header>
    </div>
  )
}

export default Header
