import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import { Route, BrowserRouter } from 'react-router-dom'

import CreateTodo from './components/CreateTodo'
import EditTodo from './components/EditTodo'
import TodoList from './components/TodoList'

import './styles/App.css'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div>
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

          <Route
            exact
            path='/edit/:id'
            render={(props) => (
              <EditTodo {...props} todos={todos} setTodo={setTodos} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
