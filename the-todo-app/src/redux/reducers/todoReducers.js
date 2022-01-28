import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    editTodo: (state, action) => {
      state.value = state.value.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    },
    deleteTodo: (state, action) => {
      state.value = state.value
        .map((todo) => todo)
        .filter((todo) => todo.id !== action.payload)
    }
  }
})

export default todoSlice.reducer
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions
