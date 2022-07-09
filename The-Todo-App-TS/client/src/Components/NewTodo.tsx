import React, { useState } from 'react'
import axios from 'axios'

import '../Styles/NewTodo.css'
import UUID from 'uuidjs'

interface NewTodoProps {
  setIsNewTodoOpen: (value: boolean) => void
  isNewTodoOpen: boolean
}

const NewTodo: React.FunctionComponent<NewTodoProps> = ({
  setIsNewTodoOpen
}) => {
  const [title, setTitle] = useState('')
  const [urgency, setUrgency] = useState('urgent')

  const submitTodo = async (id: string, title: string, urgency: string) => {
    await axios
      .post('https://localhost:7028/api/Todo', {
        id,
        title,
        urgency
      })
      .then(() => {})
      .catch((err) => console.log(err))

    setIsNewTodoOpen(false)
  }
  return (
    <div className="container new-todo-container">
      <div className="input-containers">
        <div className="input-container">
          <label className="input-label">Title</label>
          <input
            required={true}
            autoFocus={true}
            className="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a title..."
          />
        </div>

        <div className="input-container">
          <label className="input-label">Urgency</label>
          <select
            className="select"
            value={urgency}
            onChange={(e) => {
              setUrgency(e.target.value)
              console.log(e.target.value)
            }}
          >
            <option value="urgent">Urgent</option>
            <option value="low">Low</option>
            <option value="can wait">Can Wait</option>
          </select>
        </div>
      </div>

      <div className="input-container ">
        <button
          className="btn confirm-btn gradient"
          onClick={() => submitTodo(UUID.generate(), title, urgency)}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default NewTodo
