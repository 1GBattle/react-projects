import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/TodoSlice'

import '../styles/TodoItem.css'

const TodoItem = ({ todoTitle, todoId, todoObj }) => {
  const dispatch = useDispatch()

  const onTodoDelete = () => {
    dispatch(deleteTodo(todoId))
  }

  const onTodoEdit = (e) => {
    dispatch(editTodo({ ...todoObj, isCompleted: e.target.checked }))
  }

  return (
    <div className='todo-item-placeholder'>
      <div className='todo-item-container'>
        <div className='todo-item-content-container'>
          <h3 className='todo-item-title'>
            {todoTitle.charAt(0).toUpperCase() + todoTitle.slice(1)}
          </h3>

          <h3 className='todo-item-delete-btn' onClick={() => onTodoDelete()}>
            X
          </h3>
        </div>

        <input
          className='isCompleted-checkbox'
          type='checkbox'
          checked={todoObj.isCompleted}
          onChange={(e) => onTodoEdit(e)}
        />
        <label className='isCompleted-label'>Completed</label>
      </div>
    </div>
  )
}

export default TodoItem
