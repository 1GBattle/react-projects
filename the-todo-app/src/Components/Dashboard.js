import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import TodoList from './TodoList'

import '../styles/Dashboard.css'
import CreateTodo from './CreateTodo'

const DashBoard = () => {
  const [displayCreateTodo, setDisplayCreateTodo] = useState(false)

  const completedTodos = useSelector((state) => state.todos.value)
    .map((todo) => todo)
    .filter((todo) => todo.isCompleted === true)

  const activeTodos = useSelector((state) => state.todos.value)
    .map((todo) => todo)
    .filter((todo) => todo.isCompleted === false)

  const displayCreateTodoComponent = () => {
    if (displayCreateTodo) {
      console.log(displayCreateTodo)
      return <CreateTodo />
    } else {
      return null
    }
  }

  return (
    <div className='dashboard-container box-shadow'>
      <h1 className='dashboard-title'>Things To Get Done</h1>
      <div className='todo-functions-placeholder'>
        <div className='todo-functions-container'>
          <button
            className='btn add-new-btn'
            onClick={() => setDisplayCreateTodo(true)}
          >
            Create
          </button>

          <div className='search-container'>
            <input className='todo-search-bar' placeholder='Search Todos...' />
            <button className='btn search-todos-btn'>Search</button>
          </div>
        </div>
      </div>

      {displayCreateTodo ? (
        <div className='create-todo-container'>
          <CreateTodo setDisplayCreateTodo={setDisplayCreateTodo} />
        </div>
      ) : null}

      <div className='lists-container'>
        <div className='completed-todo-list box-shadow'>
          <TodoList listTitle='Completed' todos={completedTodos} />
        </div>
        <div className='active-todo-list box-shadow'>
          <TodoList listTitle='Active' todos={activeTodos} />
        </div>
      </div>
    </div>
  )
}

export default DashBoard