import React from 'react'
import { Link } from 'react-router-dom'

import TodoFilterInput from './TodoFilterInput'
import Todos from './Todos'
import { signInWithGoogle, user } from '../authentication/firebase'

import '../styles/TodoList.css'

import signInButton from '../assests/google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'

const TodoList = ({ todos, setTodos }) => {
  const displayAddTodoMessage = () => {
    if (todos.length === 0) {
      return (
        <div>
          <h2 className='add-todo-message'>Add a task to get started</h2>
        </div>
      )
    }
  }

  const displayGoogleSignInButton = () => {
    console.log(user)
    if (!user) {
      return (
        <button
          className='btn google-sign-in-btn'
          onClick={() => signInWithGoogle()}
        >
          <img alt='Google sign in button' src={signInButton} />
        </button>
      )
    } else {
      return null
    }
  }

  return (
    <div className='todo-list-container'>
      <header className='header-container'>
        <h2 className='box-title'>The Todo App</h2>

        {displayGoogleSignInButton()}
      </header>

      <div className='todo-list-header-controls'>
        <div className='todo-search-bar'>
          <TodoFilterInput />
        </div>

        <div className='create-new-todo-button-container'>
          <Link to='/createtodo' className='btn create-todo-button'>
            Create New
          </Link>
        </div>
      </div>

      <h4 className='box-description'>Notes</h4>

      <div>
        {displayAddTodoMessage()}
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default TodoList
