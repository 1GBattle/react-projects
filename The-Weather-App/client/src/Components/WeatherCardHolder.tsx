import React from 'react'

import { useAppSelector } from '../Hooks/CustomHooks'
import WeatherCard from './WeatherCard'
import ForecastModel from '../Models/ForecastModel'

import '../Styles/WeatherCardHolder.css'

const WeatherCardHolder = () => {
  let forecasts = useAppSelector((state) => state.forecast.value)
  const forecastsToMap = forecasts.slice(1)

  return (
    <div className="weather-card-holder-container">
      <div className="weather-card-holder">
        <div className="weather-card-holder-title">
          <h1>Your forecast for the rest of the week</h1>
        </div>

        <div className="weather-card-holder-cards">
          {forecastsToMap.map((forecast: ForecastModel) => {
            return <WeatherCard key={Math.random()} forecast={forecast} />
          })}
        </div>
      </div>
    </div>
  )
}

export default WeatherCardHolder
