import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { v4 as uuidV4 } from 'uuid'

import { addTodo } from '../redux/TodoSlice'
import '../styles/CreateTodo.css'

const CreateTodo = ({ setDisplayCreateTodo, displayCreateTodo }) => {
  const todoId = uuidV4()
  const [newTodo, setNewTodo] = useState({
    title: '',
    id: todoId,
    isCompleted: false,
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

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onTodoCreate(e)
    }
  }

  const closeOnEsc = (e) => {
    if (e.key === 'Escape') {
      setDisplayCreateTodo(false)
    }
  }

  const closeOnClick = (e) => {
    setDisplayCreateTodo(false)
    e.stopPropagation()
  }

  const createTodoContent = ReactDOM.createPortal(
    <div
      className="backdrop"
      onKeyDown={(e) => closeOnEsc(e)}
      onClick={(e) => closeOnClick(e)}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => closeOnEsc(e)}
      >
        <div className="create-new-todo-container box-shadow">
          <div className="create-new-todo-input-container box-shadow">
            <div className="create-new-input">
              <div className="create-new-functions-container">
                <h3 className="create-todo-title">Create New Todo</h3>
                <h3
                  className="close-create-todo-btn"
                  onClick={() => setDisplayCreateTodo(false)}
                >
                  X
                </h3>
              </div>

              <input
                className="create-todo-input"
                placeholder="Title..."
                value={newTodo.title}
                onChange={(e) => onTodoTitleChange(e)}
                onKeyDown={(e) => _handleKeyDown(e)}
                required={true}
                autoFocus={true}
              />
            </div>

            <div className="button-container">
              <button
                className="btn add-todo-btn"
                onClick={() => onTodoCreate()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )

  if (displayCreateTodo) {
    return createTodoContent
  } else {
    return null
  }
}

export default CreateTodo
