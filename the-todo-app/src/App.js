import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import CreateNewTodo from './Components/CreateNewTodo'
import DashBoard from './Components/Dashboard'
import EditTodo from './Components/EditTodo'
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route exact path='/create' component={CreateNewTodo} />
        <Route exact path='/edit/:id' component={EditTodo} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
