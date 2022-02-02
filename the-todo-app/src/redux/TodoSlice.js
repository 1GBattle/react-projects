import { createSlice } from '@reduxjs/toolkit'

let value = []

if (localStorage.todos){
  value = JSON.parse(localStorage.todos)
}

const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    value
  },

  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload]
      localStorage.setItem('todos', JSON.stringify(state.value))
    },
    editTodo: (state, action) => {
      state.value = state.value.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
      localStorage.setItem('todos', JSON.stringify(state.value))
    },
    deleteTodo: (state, action) => {
      state.value = state.value
        .map((todo) => todo)
        .filter((todo) => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.value))
    }
  }
})

export default TodoSlice.reducer

export const { addTodo, editTodo, deleteTodo } = TodoSlice.actions
