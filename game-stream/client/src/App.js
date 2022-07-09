import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import NavigationBar from './Components/NavigationBar/NavigationBar'
import StreamCreate from './Components/Stream/StreamCreate'
import StreamDelete from './Components/Stream/StreamDelete'
import StreamList from './Components/Stream/StreamList'
import StreamShow from './Components/Stream/StreamShow'
import StreamEdit from './Components/Stream/StreamEdit'
import history from './history'

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <NavigationBar />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/stream/create' exact component={StreamCreate} />
            <Route path='/stream/delete/:id' exact component={StreamDelete} />
            <Route path='/stream/show/:id' exact component={StreamShow} />
            <Route path='/stream/edit/:id' exact component={StreamEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
