import React, { useEffect, useState } from 'react'
import { QuantityPicker } from 'react-qty-picker'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import '../styles/CreateTodo.css'

const CreateTodo = ({ todos, setTodos }) => {
  const [createdTodo, setCreatedTodo] = useState([])

  const setNewTodoTitle = (todoTitle) => {
    setCreatedTodo({ ...createdTodo, title: todoTitle })
  }

  const setNewTodoContent = (todoContent) => {
    setCreatedTodo({ ...createdTodo, content: todoContent })
  }

  const setNewTodoPriority = (todoPriority) => {
    setCreatedTodo({ ...createdTodo, priority: parseInt(todoPriority) })
  }

  useEffect(() => {
    setCreatedTodo({ ...createdTodo, id: uuidv4() })
  }, [])

  return (
    <div className='create-todo-container box-shadow'>
      <h2 className='create-todo-title'>Create A New Todo</h2>

      <div className='grid grid--2-cols-uneven input-fields-container'>
        <div className='input-field title-field'>
          <div className='title-input-box'>
            <label className='input-field-label'>Title</label>
            <input
              className='todo-title-input'
              placeholder='New Todo Title'
              value={createdTodo.title}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
          </div>

          <div className='input-field priority-field'>
            <label className='input-field-label'>Priority (10 Highest)</label>
            <QuantityPicker
              smooth
              min={1}
              max={10}
              value={1}
              onChange={(value) => setNewTodoPriority(value)}
            />
          </div>
        </div>

        <div className='input-field content-field'>
          <label className='input-field-label'>Content</label>
          <textarea
            className='todo-content-input'
            value={createdTodo.content}
            onChange={(e) => setNewTodoContent(e.target.value)}
          />
        </div>
      </div>

      <div className='create-todo-button-container'>
        <Link
          to='/'
          className='btn submit-create-todo-button'
          onClick={() => setTodos([...todos, createdTodo])}
        >
          Create Todo
        </Link>
      </div>
    </div>
  )
}

export default CreateTodo
