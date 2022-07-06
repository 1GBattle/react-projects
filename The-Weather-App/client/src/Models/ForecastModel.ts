export default interface ForecastModel {
  localtime: string
  date: string
  maxTempCelsius: number
  minTempCelsius: number
  maxTempFahrenheit: number
  minTempFahrenheit: number
  chanceOfRain: number
  condition: string
  iconUrl: string
  sunrise: string
  sunset: string
}
