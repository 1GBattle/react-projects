import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

import '../styles/completedTodoList.css'

const CompletedTodoList = () => {
  const todos = useSelector((state) =>
    state.todos.value.filter((todo) => todo.isCompleted === true)
  )
  return (
    <div className='completed-todo-list-container'>
      <div className='completed-todo-list-title-container'>
        <h1 className='completed-todo-list-title'>Completed Todos</h1>
      </div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            priority={todo.priority}
            id={todo.id}
            todo={todo}
            isCompleted={todo.isCompleted}
          />
        )
      })}
    </div>
  )
}

export default CompletedTodoList
