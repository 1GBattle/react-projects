import React, { useState } from 'react'
import '../styles/createNewTodo.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/reducers/todoReducers'
import { addTodos } from '../firebase/firebase'

const CreateNewTodo = () => {
  const user = useSelector((state) => state.user.value)
  const todos = useSelector((state) => state.todos.value)
  const [newTodo, setNewTodo] = useState({
    title: '',
    priority: '',
    additionalInfo: '',
    isCompleted: false,
    id: uuidv4(),
    userId: user.uid
  })

  const dispatch = useDispatch()

  const onTitleChange = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value })
  }

  const onPriorityChange = (e) => {
    setNewTodo({ ...newTodo, priority: e.target.value })
  }

  const onAdditionalInfoChange = (e) => {
    setNewTodo({ ...newTodo, additionalInfo: e.target.value })
  }

  const addTodosToDatabase = () => {
    if (user) {
      dispatch(addTodo(newTodo))
      addTodos(todos, user.uid)
    } else {
      dispatch(addTodo(newTodo))
    }
  }

  return (
    <div className='create-new-placeholder'>
      <div className='create-new-container'>
        <div className='create-new-input-container'>
          <div className='create-new-title-container'>
            <label className='create-new-title-label'>Title</label>
            <input
              value={newTodo.title}
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
            >
              <option value={'Low'}>Low</option>
              <option value={'Moderate'}>Moderate</option>
              <option value={'Important'}>Important</option>
              <option value={'Very Important'}>Very Important</option>
            </select>
          </div>
        </div>

        <div className='create-new-text-area-container'>
          <label className='create-new-text-area-label'>Additional Info</label>
          <textarea
            className='create-new-text-area'
            value={newTodo.additionalInfo}
            onChange={(e) => onAdditionalInfoChange(e)}
          ></textarea>
        </div>

        <div className='create-new-btn-container'>
          <Link to='/'>
            <button
              className='btn create-new-submit-btn'
              onClick={() => addTodosToDatabase()}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateNewTodo
