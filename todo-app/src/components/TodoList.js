import React from 'react'
import { Link } from 'react-router-dom'

import TodoFilterInput from './TodoFilterInput'

import '../styles/TodoList.css'
import Todos from './Todos'

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='todo-list-container'>
      <h2 className='box-title'>Notes</h2>

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

      <div>
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default TodoList
