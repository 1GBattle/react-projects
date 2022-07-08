import React, { useEffect } from 'react'
import { getForecast } from './api/forecast'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import WeatherCardHolder from './Components/WeatherCardHolder'
import WeatherDisplayHeading from './Components/WeatherDisplayHeading'
import { useAppDispatch } from './Hooks/CustomHooks'
import { setForecast } from './Store/reducers/ForecastSlice'

const App = () => {
  const [searchCity, setSearchCity] = React.useState('houston')
  const dispatch = useAppDispatch()

  useEffect(() => {
    getForecast(7, searchCity).then((forecast) => {
      dispatch(setForecast(forecast))
    })
  }, [searchCity, dispatch])

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="content-container">
        <SearchBar setSearchCity={setSearchCity} />
        <WeatherDisplayHeading searchCity={searchCity} />
        <WeatherCardHolder />
      </div>
    </div>
  )
}

export default App
