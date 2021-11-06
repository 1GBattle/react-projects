import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import NavigationBar from './Components/NavigationBar/NavigationBar'
import StreamCreate from './Components/Stream/StreamCreate'
import StreamDelete from './Components/Stream/StreamDelete'
import StreamList from './Components/Stream/StreamList'
import StreamShow from './Components/Stream/StreamShow'
import StreamEdit from './Components/Stream/StreamEdit'

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <NavigationBar />

          <Route path='/' exact component={StreamList} />
          <Route path='/stream/create' exact component={StreamCreate} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/stream/show' exact component={StreamShow} />
          <Route path='/stream/edit' exact component={StreamEdit} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
