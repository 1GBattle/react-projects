import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

import '../styles/activeTodoList.css'

const ActiveTodoList = () => {
  const todos = useSelector((state) =>
    state.todos.value.filter((todo) => todo.isCompleted !== true)
  )

  if (todos === []) {
    return (
      <div className='active-todo-list-container'>
        <div className='active-todo-list-title-container'>
          <h1 className='active-todo-list-title'>Active Todos</h1>
        </div>
      </div>
    )
  }

  return (
    <div className='active-todo-list-container'>
      <div className='active-todo-list-title-container'>
        <h1 className='active-todo-list-title'>Active Todos</h1>
      </div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            priority={todo.priority}
            id={todo.id}
            todo={todo}
          />
        )
      })}
    </div>
  )
}

export default ActiveTodoList
