import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Sidebar from '../Components/Sidebar'

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sidebar' component={Sidebar} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
