import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import NavigationBar from './Components/NavigationBar/NavigationBar'
import StreamCreate from './Components/Stream/StreamCreate'
import StreamDelete from './Components/Stream/StreamDelete'
import StreamList from './Components/Stream/StreamList'
import StreamShow from './Components/Stream/StreamShow'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavigationBar />

          <Route path='/streamlist' exact component={StreamList} />
          <Route path='/createstream' exact component={StreamCreate} />
          <Route path='/deletestream' exact component={StreamDelete} />
          <Route path='/showstream' exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
