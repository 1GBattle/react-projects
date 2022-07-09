import React, { useState } from 'react'

import { TodoModel } from '../../Models/TodoModel'

import '../Styles/TodoCard.css'
import axios from 'axios'

interface TodoCardProps extends TodoModel {
  deleteTodo: (id: string | undefined) => void
}

const outlineColor = (urgency: string | undefined) => {
  if (urgency === 'urgent') {
    return 'outline-urgent'
  }

  if (urgency === 'can wait') {
    return 'outline-can-wait'
  }
}

const TodoCard: React.FunctionComponent<TodoCardProps> = ({
  id,
  title,
  urgency,
  deleteTodo,
  isComplete
}) => {
  const [newTitle, setNewTitle] = useState(title)
  const [editingTitle, setEditingNewTitle] = useState(false)

  const changeIsComplete = async () => {
    isComplete = !isComplete

    await axios
      .put(`https://localhost:7028/api/todo/${id}`, {
        isComplete,
        id,
        title,
        urgency
      })
      .then(() => {})
      .catch((err) => console.log(err))
  }

  const submitEditTodo = async () => {
    await axios
      .put(`https://localhost:7028/api/todo/${id}`, {
        isComplete,
        id,
        title: newTitle,
        urgency
      })
      .then(() => {})
      .catch((err) => console.log(err))

    setEditingNewTitle(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      submitEditTodo().then()
      setEditingNewTitle(false)
      console.log('key entered')
    }
  }

  return (
    <div className={'todo-card ' + outlineColor(urgency)}>
      <div>
        <div>
          {editingTitle ? (
            <input
              className="edit-todo-input"
              value={newTitle}
              autoFocus={true}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          ) : (
            <h1 className="todo-title">{title}</h1>
          )}
        </div>
      </div>

      <div className="todo-buttons">
        <button onClick={() => deleteTodo(id)} className="btn todo-btn">
          Delete
        </button>
        <button
          className="btn todo-btn"
          onClick={() => {
            setEditingNewTitle(!editingTitle)
          }}
        >
          Edit
        </button>
        {isComplete ? (
          <button
            className="btn todo-btn gradient"
            onClick={() => {
              changeIsComplete().then(() => console.log(title))
              console.log(isComplete)
            }}
          >
            Incomplete
          </button>
        ) : (
          <button
            className="btn todo-btn gradient"
            onClick={() => {
              changeIsComplete().then()
            }}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoCard
