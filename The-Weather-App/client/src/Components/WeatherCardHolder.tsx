import React from 'react'
import WeatherCard from './WeatherCard'

import '../Styles/WeatherCardHolder.css'
import { useAppSelector } from '../Hooks/CustomHooks'

const WeatherCardHolder = () => {
  const forecasts = useAppSelector((state) => state.forecast.value)

  return (
    <div className="weather-card-holder-container">
      <div className="weather-card-holder">
        <div className="weather-card-holder-title">
          <h1>Next five days...</h1>
        </div>

        <div className="weather-card-holder-cards">
          {forecasts.map((forecast) => {
            return <WeatherCard forecast={forecast} />
          })}
        </div>
      </div>
    </div>
  )
}

export default WeatherCardHolder
