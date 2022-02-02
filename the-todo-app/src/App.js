import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import DashBoard from './Components/Dashboard'
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' component={DashBoard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
