import React, { useEffect } from 'react'

import ActiveTodoList from './ActiveTodoList'
import CompletedTodoList from './CompletedTodoList'

import '../styles/dashboard.css'
import HighPriorityTodoList from './HighPritoryList'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, todosFromDb } from '../firebase/firebase'
import { addTodo, addTodoFromDatabase } from '../redux/reducers/todoReducers'

const DashBoard = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.value)
  console.log(todosFromDb)

  useEffect(() => {
    if (user) {
      getTodos(user.uid)
      dispatch(addTodoFromDatabase(todos))
      console.log(todos)
    }
  }, [])

  return (
    <div className='placeholder-container'>
      <div className='page-container'>
        <CompletedTodoList />
        <ActiveTodoList />
        <HighPriorityTodoList />
      </div>
    </div>
  )
}

export default DashBoard
