import React, { useState } from 'react'
import { QuantityPicker } from 'react-qty-picker'
import { Link } from 'react-router-dom'

const EditTodo = ({ match, todos, setTodo }) => {
  const [selectedTodo, setSelectedTodo] = useState(
    todos.map((todo) => todo).find((todo) => todo.id === match.params.id)
  )

  const handleTodoUpdate = () => {
    setTodo(todos.map((todo) => (todo.id === match.params.id ? selectedTodo : todo)))
  }

  return (
    <div className='create-todo-container box-shadow'>
      <h2 className='create-todo-title'>Edit</h2>

      <div className='grid grid--2-cols-uneven input-fields-container'>
        <div className='input-field title-field'>
          <div className='title-input-box'>
            <label className='input-field-label'>Title</label>
            <input
              className='todo-title-input'
              placeholder='New Todo Title'
              value={selectedTodo.title}
              onChange={(e) =>
                setSelectedTodo({ ...selectedTodo, title: e.target.value })
              }
            />
          </div>

          <div className='input-field priority-field'>
            <label className='input-field-label'>Priority (10 Highest)</label>
            <QuantityPicker
              smooth
              min={1}
              max={10}
              value={selectedTodo.priority}
              onChange={(value) =>
                setSelectedTodo({ ...selectedTodo, priority: value })
              }
            />
          </div>
        </div>

        <div className='input-field content-field'>
          <label className='input-field-label'>Content</label>
          <textarea
            className='todo-content-input'
            value={selectedTodo.content}
            onChange={(e) =>
              setSelectedTodo({ ...selectedTodo, content: e.target.value })
            }
          />
        </div>
      </div>

      <div className='create-todo-button-container'>
        <Link
          to='/'
          className='btn submit-create-todo-button'
          onClick={handleTodoUpdate}
        >
          Confirm Edit
        </Link>
      </div>
    </div>
  )
}

export default EditTodo
