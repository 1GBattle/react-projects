import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from '../redux/reducers/todoReducers'

const EditTodo = ({ match }) => {
  const todos = useSelector((state) => state.todos.value)
  const [selectedTodo, setSelectedTodo] = useState({
    ...todos.find((todo) => todo.id === match.params.id)
  })

  const dispatch = useDispatch()

  const onTitleChange = (e) => {
    setSelectedTodo({ ...selectedTodo, title: e.target.value })
  }

  const onPriorityChange = (e) => {
    setSelectedTodo({ ...selectedTodo, priority: e.target.value })
  }

  const onAdditionalInfoChange = (e) => {
    setSelectedTodo({ ...selectedTodo, additionalInfo: e.target.value })
  }

  const onTodoCompletionChange = (e) => {
    setSelectedTodo({ ...selectedTodo, isCompleted: e.target.checked })
  }

  return (
    <div className='create-new-placeholder'>
      <div className='create-new-container'>
        <div className='create-new-input-container'>
          <div className='create-new-title-container'>
            <label className='create-new-title-label'>Title</label>
            <input
              value={selectedTodo.title}
              className='create-new-title-input'
              onChange={(e) => onTitleChange(e)}
              required
            />
          </div>

          <div className='create-new-priority-picker'>
            <label className='priority-label'>Priority</label>
            <select
              name='priorities'
              className='priority-selector'
              onChange={(e) => onPriorityChange(e)}
              value={selectedTodo.priority}
            >
              <option value={'Low'}>Low</option>
              <option value={'Moderate'}>Moderate</option>
              <option value={'Important'}>Important</option>
              <option value={'Very Important'}>Very Important</option>
            </select>
          </div>
        </div>

        <div className='create-new-checkbox-container' style={{ marginBottom: 32 }}>
          <input
            className='create-new-checkbox'
            type='checkbox'
            onChange={(e) => onTodoCompletionChange(e)}
          />
          <label className='create-new-checkbox-label'>Mark as completed</label>
        </div>

        <div className='create-new-text-area-container'>
          <label className='create-new-text-area-label'>Additional Info</label>
          <textarea
            className='create-new-text-area'
            value={selectedTodo.additionalInfo}
            onChange={(e) => onAdditionalInfoChange(e)}
          ></textarea>
        </div>

        <div className='create-new-btn-container'>
          <Link to='/'>
            <button
              className='btn create-new-submit-btn'
              onClick={() => dispatch(editTodo(selectedTodo))}
            >
              Save Changes
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EditTodo
