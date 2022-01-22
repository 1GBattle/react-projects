import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Todos.css'

const Todos = ({ todos, setTodos }) => {
  const deleteTodo = (todoId) => {
    const remainingTodos = todos
      .map((todo) => todo)
      .filter((todo) => todo.id !== todoId)

    setTodos([...remainingTodos])
  }

  return (
    <div className='grid grid--2-cols'>
      {todos.map((todo) => (
        <div key={todo.id} className='todo-container'>
          <div className='todo-header-container'>
            <h2 className='todo-title'>{todo.title}</h2>

            <div className='button-container'>
              <Link to={`/edit/${todo.id}`} className='btn todo-edit-btn'>
                Edit
              </Link>
              <button
                className='btn todo-delete-btn'
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>

          <div>
            <p className='todo-priority'>Priority: {todo.priority}</p>
          </div>

          <p className='todo-content'>{todo.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Todos
