export interface Forecast {
  city?: string
  country?: string
  date?: string
  imageUrl?: string
  tempCelsiusMax: number
  tempCelsiusMin: number
  tempFahrenheitMax: number
  tempFahrenheitMin: number
  avgTempCelsius: number
  avgTempFahrenheit: number
  chanceOfRain: number
  willItRain: boolean
  sunrise?: string
  sunset?: string
  condition?: string
}
