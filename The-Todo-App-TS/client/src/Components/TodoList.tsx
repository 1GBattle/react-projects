import React from 'react'
import axios from 'axios'

import TodoCard from './TodoCard'
import { TodoModel } from '../../Models/TodoModel'

import '../Styles/TodoList.css'

interface TodoListProps {
  listTitle: string
  todos: TodoModel[] | undefined
}

const TodoList: React.FunctionComponent<TodoListProps> = ({
  listTitle,
  todos
}) => {
  const deleteTodo = async (id: string | undefined) => {
    const todoToDelete = todos?.find((todo) => id == todo.id)

    await axios.delete(`https://localhost:7028/api/Todo/${todoToDelete?.id}`)
  }

  return (
    <div className="container lists-container">
      <div className="title-container">
        {listTitle === 'results' ? (
          <h1 className="remaining-todos">
            Found {todos?.length} {listTitle}
          </h1>
        ) : (
          <h1 className="remaining-todos">
            You have {todos?.length} {listTitle} todos
          </h1>
        )}
      </div>

      <div className="todo-list">
        {todos?.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              urgency={todo.urgency}
              deleteTodo={deleteTodo}
              isComplete={todo.isComplete}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
