import axios from 'axios'
import defaultBookCover from '../assets/default_book_cover_2015.jpeg'

const getBook = async (searchString) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=search+terms${searchString}`
  )

  return response
}

const mainFetchFunction = async (searchString) => {
  const result = await getBook(searchString)
  let books = []

  result.data.items.forEach((item) => {
    if (item.volumeInfo.imageLinks !== null) {
      const book = {
        author: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        pageCount: item.volumeInfo.pageCount,
        img: item.volumeInfo.imageLinks,
        id: item.accessInfo.id,
        completedPages: 0,
      }

      books.push(book)
    } else {
      const book = {
        author: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        pageCount: item.volumeInfo.pageCount,
        img: '#',
        id: item.accessInfo.id,
        completedPages: 0,
      }

      books.push(book)
    }
  })

  return books
}

export default mainFetchFunction
