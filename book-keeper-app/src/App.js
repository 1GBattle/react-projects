import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from './Components/Home'
import Nav from './Components/Nav'
import BookList from './Components/BookList'
import WishList from './Components/WishList'

import './styles/App.css'

function App() {
  const books = useSelector((state) => state.books.value.books)

  const completedBooks = books.filter(
    (book) => book.completedPages >= book.pageCount
  )
  const activeBooks = books.filter(
    (book) => book.completedPages < book.pageCount
  )

  console.log(completedBooks, activeBooks)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home completedBooks={completedBooks} activeBooks={activeBooks} />
          }
        />
        <Route
          exact
          path="/books/inprogress"
          element={
            <BookList listTitle="Books in progress" books={activeBooks} />
          }
        />
        <Route
          exact
          path="/books/completed"
          element={
            <BookList listTitle="Completed Books" books={completedBooks} />
          }
        />
        <Route exact path="/books/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
