import React from 'react'
import { useSelector } from 'react-redux'

import TodoItem from './TodoItem'

import '../styles/highPriorityTodoList.css'

const HighPriorityTodoList = () => {
  const todos = useSelector((state) =>
    state.todos.value.filter(
      (todo) =>
        (todo.priority === 'Very Important') | (todo.priority === 'Important') &&
        todo.isCompleted === false
    )
  )
  return (
    <div className='high-priority-todo-list-container'>
      <div className='high-priority-todo-list-title-container'>
        <h1 className='high-priority-todo-list-title'>High Priority Todos</h1>
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

export default HighPriorityTodoList
