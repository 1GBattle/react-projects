import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const P1 = () => {
  return (
    <div>
      page1
      <a href='/pagetwo'>Nav to Page 2</a>
    </div>
  )
}

const P2 = () => {
  return (
    <div>
      page2
      <a href='/'>Nav to Page 1</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={P1} />
          <Route path='/pagetwo' exact component={P2} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
