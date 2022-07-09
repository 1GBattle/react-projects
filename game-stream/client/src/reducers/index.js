import { combineReducers } from 'redux'

import authReducer from './authReducer'
import streamsReducer from './streamReducers'

export default combineReducers({
  auth: authReducer,
  streams: streamsReducer
})
