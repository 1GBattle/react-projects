import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidV4 } from 'uuid'
import { addTodo } from '../redux/TodoSlice'
import '../styles/CreateTodo.css'

const CreateTodo = ({ setDisplayCreateTodo }) => {
  const todoId = uuidV4()
  const [newTodo, setNewTodo] = useState({
    title: '',
    id: todoId,
    isCompleted: false
  })

  const dispatch = useDispatch()

  const onTodoTitleChange = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value })
  }

  const onTodoCreate = () => {
    if (newTodo.title) {
      dispatch(addTodo(newTodo))
      setNewTodo({ ...newTodo, title: '' })
      setDisplayCreateTodo(false)
    } else {
      alert("Empty tasks aren't allowed")
    }
  }

  return (
    <div className='create-new-todo-container'>
      <div className='create-new-todo-input-container box-shadow'>
        <div className='create-new-input'>
          <div className='create-new-functions-container'>
            <h3 className='create-todo-title'>Create New Todo</h3>
            <h3
              className='close-create-todo-btn'
              onClick={() => setDisplayCreateTodo(false)}
            >
              X
            </h3>
          </div>

          <input
            className='create-todo-input'
            placeholder='Title...'
            value={newTodo.title}
            onChange={(e) => onTodoTitleChange(e)}
            required={true}
          />
        </div>

        <div className='button-container'>
          <button className='btn add-todo-btn' onClick={() => onTodoCreate()}>
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateTodo
