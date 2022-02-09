import axios from 'axios'

const searchString = 'catcher in the rye'
const getBook = () => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=search+terms${searchString}`
    )
    .then((response) => console.log(response.data))
}

export default getBook
