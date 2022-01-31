import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { get, getDatabase, onValue, ref, set } from 'firebase/database'

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
const db = getDatabase(
  app,
  'https://the-todo-app-339018-default-rtdb.firebaseio.com/'
)
const googleProvider = new GoogleAuthProvider()
let user = {}
let todosFromDb = [{}]

const signIn = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      user = result.user
    })
    .catch((err) => {
      console.log(err)
    })

const signUserOut = () =>
  signOut(auth)
    .then(() => {
      console.log('sign out successful')
    })
    .catch(() => {
      console.log('error occured while trying to sign you out')
    })

const addTodos = (todos, userId) => {
  set(ref(db, '/todos-' + userId), { ...todos })
}

const getTodos = (userId) => {
  const userTodoRef = ref(db, '/todos-' + userId)
  onValue(userTodoRef, (snapShot) => {
    const data = snapShot.val()
    todosFromDb = data
  })
}

export { signIn, signUserOut, addTodos, getTodos, user, todosFromDb }
