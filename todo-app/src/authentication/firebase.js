import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDZULdhoGotBd_fhiRDIPfsaCjwy178rNw',
  authDomain: 'the-todo-app-339018.firebaseapp.com',
  projectId: 'the-todo-app-339018',
  storageBucket: 'the-todo-app-339018.appspot.com',
  messagingSenderId: '783346491530',
  appId: '1:783346491530:web:cbeec45a8a23c52c1f0d73',
  measurementId: 'G-VHH54DB8HZ'
}

const app = initializeApp(firebaseConfig)
const authProvider = new GoogleAuthProvider()
const auth = getAuth()
const user = auth.currentUser

const signInWithGoogle = () =>
  signInWithPopup(auth, authProvider)
    .then((result) => {
      //Gives us our access token for the google api
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accesstoken
    })
    .catch((err) => {
      const errCode = err.code
      const errorMessage = err.message
      const email = err.email
      const credential = GoogleAuthProvider.credentialFromError(err)
    })

export { signInWithGoogle, user }
