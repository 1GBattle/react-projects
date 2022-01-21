import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import {} from 'react-router-dom'

import CreateTodo from './components/CreateTodo'
import Header from './components/Header'
import TodoList from './components/TodoList'

import './styles/App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'New Todo',
      content: 'Some todo content here'
    },

    {
      id: 2,
      title: 'Some Other Todo',
      content:
        'Some random generated content here for the use of just putting random content and filling a space'
    },

    {
      id: 3,
      title: 'Some random todo',
      content: 'random content to be put into the unused space inside of the box'
    }
  ])

  return (
    <div>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            component={() => <TodoList todos={todos} setTodos={setTodos} />}
            todos={todos}
          />
          <Route
            exact
            path='/createtodo'
            component={() => <CreateTodo todos={todos} setTodos={setTodos} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
