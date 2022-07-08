import React, { useEffect } from 'react'
import '../Styles/WeatherCard.css'

import ForecastModel from '../Models/ForecastModel'
import moment from 'moment'

interface WeatherCardProps {
  forecast: ForecastModel
}

const WeatherCard: React.FunctionComponent<WeatherCardProps> = ({
  forecast,
}) => {
  return (
    <div className="weather-card-container">
      <div className="weather-card">
        <div className="weather-card-title">
          <p>{moment(forecast.date).format('ddd')}</p>
        </div>
        <div className="weather-card-content">
          <div className="weather-card-img-container">
            <img
              className="weather-card-img"
              src={forecast.iconUrl}
              alt="weather icon"
            />
          </div>
          <div className="weather-card-text-container">
            <p className="weather-condition">{forecast.condition}</p>
            <p className="chance-of-rain">
              {forecast.chanceOfRain}% chance of rain
            </p>
            <p className="temp-high-f">High: {forecast.maxTempFahrenheit}°</p>
            <p className="temp-low-f">Low: {forecast.minTempFahrenheit}°</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
