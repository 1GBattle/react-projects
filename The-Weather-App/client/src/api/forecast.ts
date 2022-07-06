import { APIKey } from '../APIKEY'

export const getForecast = async (days: number, location: string) => {
  const res = await fetch('https://api.m3o.com/v1/weather/Forecast', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${APIKey}`,
    },
    method: 'Post',
    body: JSON.stringify({
      days,
      location,
    }),
  })

  return await res.json().then((data) => {
    return data.forecast.map((forecast: any) => {
      return {
        localTime: new Date().toISOString(),
        date: new Date().toISOString(),
        maxTempCelsius: forecast.max_temp_c,
        minTempCelsius: forecast.min_temp_c,
        maxTempFahrenheit: forecast.max_temp_f,
        minTempFahrenheit: forecast.min_temp_f,
        chanceOfRain: forecast.chance_of_rain,
        condition: forecast.condition,
        iconUrl: forecast.icon_url,
        sunrise: forecast.sunrise,
        sunset: forecast.sunset,
      }
    })
  })
}
