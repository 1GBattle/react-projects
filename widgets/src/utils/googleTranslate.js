import axios from 'axios'

const makeApiRequest = async (textToTranslate, translateLanguage) => {
  return await axios.post(
    'https://translation.googleapis.com/language/translate/v2',
    {},
    {
      params: {
        q: textToTranslate,
        source: 'en',
        target: translateLanguage,
        format: 'text',
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      }
    }
  )
}

export default makeApiRequest
