import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ForecastModel from '../../Models/ForecastModel'

const ForecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    value: [] as ForecastModel[] | never[],
  },

  reducers: {
    setForecast: (
      state: any,
      action: PayloadAction<ForecastModel | never[]>
    ) => {
      state.value = action.payload
    },
  },
})

export const { setForecast } = ForecastSlice.actions
export default ForecastSlice.reducer
