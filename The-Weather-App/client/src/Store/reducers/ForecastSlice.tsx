import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ForecastModel from '../../Models/ForecastModel'

const ForecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    value: [] as ForecastModel[],
  },

  reducers: {
    setForecast: (state: any, action: PayloadAction<ForecastModel>) => {
      state.value = action.payload
    },
  },
})

export const { setForecast } = ForecastSlice.actions
export default ForecastSlice.reducer
