import './styles/App.css'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import BookList from './Components/BookList'
import WishList from './Components/WishList'
import { useSelector } from 'react-redux'

function App() {
  const books = useSelector((state) => state.books.value)
  const completedBooks = books.filter(
    (book) => book.completedPages === book.pages
  )
  const activeBooks = books.filter((book) => book.completedPages !== book.pages)

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
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
