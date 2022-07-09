import React from 'react'

import '../Styles/App.css'

import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  passPropToParent = (videos) => {
    this.setState({ videos, selectedVideo: videos[0] })
  }

  videoSelect = (video) => {
    console.log('video from app', video)
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar passPropToParent={this.passPropToParent} />

        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              {this.state.selectedVideo && (
                <VideoDetail selectedVideo={this.state.selectedVideo} />
              )}
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} videoSelect={this.videoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
