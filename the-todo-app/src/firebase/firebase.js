import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDZULdhoGotBd_fhiRDIPfsaCjwy178rNw',
  authDomain: 'the-todo-app-339018.firebaseapp.com',
  databaseURL: 'https://the-todo-app-339018-default-rtdb.firebaseio.com',
  projectId: 'the-todo-app-339018',
  storageBucket: 'the-todo-app-339018.appspot.com',
  messagingSenderId: '783346491530',
  appId: '1:783346491530:web:cbeec45a8a23c52c1f0d73',
  measurementId: 'G-VHH54DB8HZ'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
let user = {}

const signIn = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      user = result.user
    })
    .catch((err) => {
      const errCode = err.code
      const errMessage = err.message
      const errEmail = err.email
      const credential = GoogleAuthProvider.credentialFromError(err)
    })

const signUserOut = () =>
  signOut(auth)
    .then(() => {
      console.log('sign out successful')
    })
    .catch(() => {
      console.log('error occured while trying to sign you out')
    })

export { signIn, signUserOut, user }
