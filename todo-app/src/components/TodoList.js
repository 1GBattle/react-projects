import React from 'react'
import { Link } from 'react-router-dom'

import TodoFilterInput from './TodoFilterInput'

import '../styles/TodoList.css'
import Todos from './Todos'

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

  return (
    <div className='todo-list-container'>
      <h2 className='box-title'>The Todo App</h2>

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
