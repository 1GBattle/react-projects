import axios from 'axios'

let API_URL = `https://www.googleapis.com/books/v1/volumes`

const fetchBooks = async (searchTerm) => {
  await axios
    .get(`${API_URL}?q=${searchTerm}`)
    .then((result) => console.log(result))
}

export default fetchBooks
