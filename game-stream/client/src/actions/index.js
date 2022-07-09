import streamNetworkRequest from '../apis/streams'
import history from '../history'
import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  GET_STREAM,
  LIST_STREAMS,
  SIGN_IN,
  SIGN_OUT
} from './actionTypes'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth
  const response = await streamNetworkRequest.post('/streams', {
    ...formValues,
    userId
  })

  dispatch({ type: CREATE_STREAM, payload: response.data })

  history.push('/')
}

export const listStreams = () => async (dispatch) => {
  const response = await streamNetworkRequest.get('/streams')

  dispatch({ type: LIST_STREAMS, payload: response.data })
}

export const getStream = (id) => async (dispatch) => {
  const response = await streamNetworkRequest.get(`/streams/${id}`)

  dispatch({ type: GET_STREAM, payload: response.data })
}

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamNetworkRequest.patch(`/streams/${id}`, formValues)

  dispatch({ type: EDIT_STREAM, payload: response.data })

  history.push('/')
}

export const deleteStream = (id) => async (dispatch) => {
  await streamNetworkRequest.delete(`/streams/${id}`)

  dispatch({ type: DELETE_STREAM, payload: id })
  history.push('/')
}
