import React from 'react'
import '../Styles/WeatherDisplayHeading.css'

const WeatherDisplayHeading = () => {
  return (
    <div className="weather-display-heading-container">
      <div className="display-date-container">
        <h1 className="display-date">{new Date().toLocaleDateString()}</h1>
        <p className="display-city">Weekly forcast for (city goes here)</p>
      </div>
    </div>
  )
}

export default WeatherDisplayHeading
