import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Components/Home"

import "./styles/App.css"
import Header from "./Components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
