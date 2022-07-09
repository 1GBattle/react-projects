import React, { useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../actions'

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  const auth = useRef('')

  const onAuthChange = useCallback(
    (isSignedIn) => {
      if (isSignedIn) {
        signIn(auth.current.currentUser.get().getId())
      } else {
        signOut()
      }
    },
    [signIn, signOut]
  )

  //set up for the login process
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '514523468126-5g5nm3c32n1tp5pis0tb6seololpad6r.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          //calls onAuthChange when the current sign in status
          //isSignedIn listens for changes from onAuthChange
          auth.current = window.gapi.auth2.getAuthInstance()
          onAuthChange(auth.current.isSignedIn.get())
          auth.current.isSignedIn.listen(onAuthChange)
        })
    })
  }, [onAuthChange])

  const onSignInClick = () => {
    window.gapi.auth2.getAuthInstance().signIn()
  }

  const onSignOutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut()
  }

  //condition that renders a button based on current sign in status
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null
    } else if (isSignedIn) {
      return (
        <button className='ui red google button' onClick={onSignOutClick}>
          <i className='google icon'></i>Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui red google button' onClick={onSignInClick}>
          <i className='google icon'></i>Sign In With Google
        </button>
      )
    }
  }
  return <div>{renderAuthButton()}</div>
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
