import React from 'react'

import TodoItem from './TodoItem'

import '../styles/TodoList.css'

const TodoList = ({ listTitle, todos }) => {
  return (
    <div className='todo-list-container'>
      <h1 className='todo-list-title'>{listTitle}</h1>

      {todos.map((todo) => {
        return (
          <div className='todo-list-item' key={todo.id}>
            <TodoItem todoObj={todo} todoTitle={todo.title} todoId={todo.id} />
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
