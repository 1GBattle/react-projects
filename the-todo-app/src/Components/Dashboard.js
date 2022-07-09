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

  const displayCreateButton = () => {
    if (displayCreateTodo) {
      return 'display-none'
    }
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Things To Get Done</h1>

      <div className="todo-functions-placeholder">
        <div className="create-todo-btn-container">
          <button
            className={'btn add-new-btn box-shadow ' + displayCreateButton()}
            onClick={() => setDisplayCreateTodo(true)}
          >
            Create
          </button>
        </div>
      </div>

      {displayCreateButton ? (
        <div className="create-todo-container">
          <CreateTodo
            setDisplayCreateTodo={setDisplayCreateTodo}
            displayCreateTodo={displayCreateTodo}
          />
        </div>
      ) : null}

      <div className="lists-container">
        <div className="completed-todo-list box-shadow">
          <TodoList listTitle="Completed" todos={completedTodos} />
        </div>
        <div className="active-todo-list box-shadow">
          <TodoList listTitle="Active" todos={activeTodos} />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
