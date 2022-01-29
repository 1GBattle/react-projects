import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import CreateNewTodo from './Components/CreateNewTodo'
import DashBoard from './Components/Dashboard'
import EditTodo from './Components/EditTodo'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' component={DashBoard} />
          <Route exact path='/create' component={CreateNewTodo} />
          <Route exact path='/edit/:id' component={EditTodo} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
