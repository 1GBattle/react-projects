import moment from 'moment'
import React from 'react'

import { useAppSelector } from '../Hooks/CustomHooks'

import '../Styles/WeatherDisplayHeading.css'

const WeatherDisplayHeading = () => {
  const forecastToday = useAppSelector((state) => state.forecast.value[0])

  return (
    <div className="weather-display-heading-container">
      <div className="display-date-container">
        <h1 className="display-date">{moment().format('ddd MM')}</h1>
        <p className="display-city">Weekly forcast for </p>
      </div>

      {forecastToday && (
        <div className="display-img-container">
          <img
            className="weather-display-heading-img"
            src={forecastToday.iconUrl}
            alt="weather icon"
          />

          <p className="display-condition">{forecastToday.condition}</p>
        </div>
      )}

      {forecastToday && (
        <div className="weather-display-today">
          <h1 className="today-weather">{forecastToday.maxTempFahrenheit}°</h1>
        </div>
      )}
    </div>
  )
}

export default WeatherDisplayHeading
