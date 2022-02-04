import React, { useState, lazy, Suspense } from "react"

import "../Styles/App.css"

import Accordion from "./Accordion"
import NavBar from "./NavBar/NavBar"
import Route from "./Route"

const WikiSearch = React.lazy(() => import("./WikiSearch/WikiSearch"))
const Translate = React.lazy(() => import("./Translate/Translate"))

const accordionItems = [
  {
    title: "What is react",
    content: "React is a front-end javascript framework",
  },
  {
    title: "Why use react",
    content: "React makes building front-end easier",
  },
  {
    title: "How do you use react",
    content: "you use react by creating Components",
  },
]

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar path={window.location.pathname} />
      <Route path="/">
        <Accordion items={accordionItems} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/wikisearch">
        <WikiSearch />
      </Route>
    </Suspense>
  )
}

export default App
