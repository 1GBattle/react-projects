import moment from 'moment'
import React from 'react'

import { useAppSelector } from '../Hooks/CustomHooks'

import '../Styles/WeatherDisplayHeading.css'

interface WeatherDisplayHeadingProps {
  searchCity: string
}

const WeatherDisplayHeading: React.FunctionComponent<
  WeatherDisplayHeadingProps
> = ({ searchCity }) => {
  const forecastToday = useAppSelector((state) => state.forecast.value[0])

  return (
    <div className="weather-display-heading-container">
      <div className="display-date-container">
        <h1 className="display-date">{moment().format('ddd MM')}</h1>
        <p className="display-city">
          Today's weather for {searchCity.toUpperCase()}
        </p>
      </div>

      {forecastToday && (
        <div className="display-img-container">
          <img
            className="weather-display-heading-img"
            src={forecastToday.iconUrl}
            alt="weather icon"
          />
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
