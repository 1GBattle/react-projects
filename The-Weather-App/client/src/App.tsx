import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import WeatherCardHolder from './Components/WeatherCardHolder'
import WeatherDisplayHeading from './Components/WeatherDisplayHeading'
// import { WeatherService } from 'm3o/weather'
import { APIKey } from './APIKEY'
import axios from 'axios'

const App = () => {
  const [forecast, setForecast] = useState()

  useEffect(() => {
    const weatherService = async () => {
      const res = await axios.post(
        'https://api.m3o.com/v1/weather/Forecast',
        { days: 5, city: 'London' },
        {
          headers: {
            Authorization: `Bearer ${APIKey}`,
            'Content-Type': 'application/json',
          },
        }
      )

      setForecast(res.data)
    }

    weatherService().catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="content-container">
        <SearchBar />
        <WeatherDisplayHeading />
        <WeatherCardHolder />
      </div>
    </div>
  )
}

export default App
