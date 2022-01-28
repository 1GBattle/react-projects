import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import CreateNewTodo from './Components/CreateNewTodo'
import DashBoard from './Components/Dashboard'
import EditTodo from './Components/EditTodo'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/create' component={CreateNewTodo} />
          <Route exact path='/edit/:id' component={EditTodo} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
