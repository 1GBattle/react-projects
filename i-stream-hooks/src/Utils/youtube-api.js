import axios from 'axios'

const makeApiRequest = async (searchTerm) => {
  const apiResponse = await axios.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        q: searchTerm,
        key: 'AIzaSyAP-OGLzjmFX1GtzWWUuI_vU857RdEELC8'
      }
    }
  )
  return apiResponse.data.items
}

export default makeApiRequest
