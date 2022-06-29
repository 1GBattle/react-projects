import React from 'react'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import WeatherDisplayHeading from './Components/WeatherDisplayHeading'

const App = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="content-container">
        <SearchBar />
        <WeatherDisplayHeading />
      </div>
    </div>
  )
}

export default App
