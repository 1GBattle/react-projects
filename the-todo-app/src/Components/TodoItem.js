import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo } from '../redux/reducers/todoReducers'

import '../styles/todoItem.css'

const TodoItem = ({ title, priority, id, todo }) => {
  const dispatch = useDispatch()
  return (
    <div className='todo-item-container'>
      <h2 className='todo-item-title'>{title}</h2>
      <p className='todo-item-priority'>Priority: {priority}</p>

      <div className='todo-item-buttons-container'>
        <Link className='btn edit-todo-btn' to={`/edit/${id}`}>
          Edit
        </Link>
        <button
          className='btn delete-todo-btn'
          onClick={() => dispatch(deleteTodo(id))}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
