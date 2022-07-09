import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  GET_STREAM,
  LIST_STREAMS
} from '../actions/actionTypes'

import _ from 'lodash'

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case EDIT_STREAM:
    case GET_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case LIST_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case DELETE_STREAM:
      return _.omit(state, action.payload)

    default:
      return state
  }
}

export default streamsReducer
