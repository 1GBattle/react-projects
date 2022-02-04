import React from "react"

import "../styles/home.css"
import BookDashboard from "./BookDashboard"

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="page-title">Welcome, [name], Let's start reading</h2>

      <div className="book-dashboard">
        <BookDashboard />
      </div>
    </div>
  )
}

export default Home
