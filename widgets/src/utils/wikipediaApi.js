import axios from 'axios'

const makeRequest = async (searchTerm) => {
  const apiResponse = await axios.get('https://en.wikipedia.org/w/api.php?', {
    params: {
      action: 'query',
      list: 'search',
      format: 'json',
      origin: '*',
      srsearch: searchTerm
    }
  })
  console.log(apiResponse)
  return apiResponse
}

export default makeRequest
