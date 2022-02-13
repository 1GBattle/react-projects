import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

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
        id: uuidv4(),
        completedPages: 0,
      }

      books.push(book)
    } else {
      const book = {
        author: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        pageCount: item.volumeInfo.pageCount,
        img: '#',
        id: uuidv4(),
        completedPages: 0,
      }

      books.push(book)
    }
  })

  return books
}

export default mainFetchFunction
