import { configureStore } from '@reduxjs/toolkit'
import ForecastSlice from './reducers/ForecastSlice'

const store = configureStore({
  reducer: { forecast: ForecastSlice },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
