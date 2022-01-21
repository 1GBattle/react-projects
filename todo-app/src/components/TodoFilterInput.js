import React, { useState } from 'react'

import '../styles/TodoFilterInput.css'

const TodoFilterInput = ({ todos }) => {
  const filterTodos = (searchTerm) => {
    todos.map((todo) => todo).filter((todo) => todo.title.includes(searchTerm))
  }

  return (
    <div className='filter-input-container'>
      <input className='filter-input' placeholder='Find Todo' />
      <button className='btn filter-todo-btn' onClick={() => {}}>
        Search
      </button>
    </div>
  )
}

export default TodoFilterInput
