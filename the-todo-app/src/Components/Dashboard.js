import React from 'react'

import ActiveTodoList from './ActiveTodoList'
import CompletedTodoList from './CompletedTodoList'

import '../styles/dashboard.css'
import HighPriorityTodoList from './HighPritoryList'

const DashBoard = () => {
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
