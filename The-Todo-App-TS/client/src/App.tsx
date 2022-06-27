import React, { useEffect, useState } from 'react'
import axios from 'axios'

import NavBar from './Components/NavBar'
import TodoList from './Components/TodoList'
import NewTodo from './Components/NewTodo'

import { TodoModel } from '../Models/TodoModel'
import './Styles/App.css'
import SearchBar from './Components/SearchBar'

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([])
  const [isNewTodoOpen, setIsNewTodoOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const completedTodos = todos.filter((todo) => todo.isComplete)
  const incompleteTodos = todos.filter((todo) => !todo.isComplete)

  useEffect(() => {
    axios.get('https://localhost:7028/api/Todo').then((res) => {
      setTodos(res.data)
    })
  }, [setTodos, todos])
  return (
    <div>
      <NavBar
        isNewTodoOpen={isNewTodoOpen}
        setIsNewTodoOpen={setIsNewTodoOpen}
      />

      {isNewTodoOpen ? null : (
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      )}

      {searchQuery ? (
        <TodoList
          listTitle={'results'}
          todos={todos.filter((todo) => todo.title?.includes(searchQuery))}
        />
      ) : null}

      {isNewTodoOpen ? (
        <NewTodo
          setIsNewTodoOpen={setIsNewTodoOpen}
          isNewTodoOpen={isNewTodoOpen}
        />
      ) : null}

      {searchQuery ? null : (
        <div className="container todo-list-holder">
          <div className="todo-lists-container">
            <TodoList listTitle={'remaining'} todos={incompleteTodos} />
            <TodoList listTitle={'completed'} todos={completedTodos} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
