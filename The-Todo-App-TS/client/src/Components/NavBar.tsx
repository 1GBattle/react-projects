import React from 'react'
import '../Styles/NavBar.css'

interface NavBarProps {
  setIsNewTodoOpen: (value: boolean) => void
  isNewTodoOpen: boolean
}

const NavBar: React.FunctionComponent<NavBarProps> = ({
  setIsNewTodoOpen,
  isNewTodoOpen
}) => {
  return (
    <div className="nav-container box-shadow gradient">
      <h1 className="page-title">
        The Great Todo App{' '}
        <button
          className="btn add-todo-btn gradient"
          onClick={() => setIsNewTodoOpen(!isNewTodoOpen)}
        >
          +
        </button>
      </h1>
    </div>
  )
}

export default NavBar
