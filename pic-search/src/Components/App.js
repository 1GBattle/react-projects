import React from 'react'

import 'semantic-ui-css/semantic.min.css'
import '../Styles/App.css'

import unsplashApi from '../API/unsplash'
import ImageList from './ImageList'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (searchTerm) => {
    const response = await unsplashApi.get('/search/photos', {
      params: { query: searchTerm, per_page: 30 }
    })

    this.setState({
      images: response.data.results.map((image) => image.urls.regular)
    })
  }

  render() {
    return (
      <div>
        <div className='ui container ' style={{ marginTop: '10px' }}>
          <SearchBar onFormSubmission={this.onSearchSubmit} />
          <div>
            {this.state.images.length !== 0 && (
              <h3 className='image-found-text'>
                Found: {this.state.images.length} images
              </h3>
            )}
          </div>
        </div>
        <div>
          <ImageList images={this.state.images} />
        </div>
      </div>
    )
  }
}

export default App
