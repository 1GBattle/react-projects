import React from 'react'
import LoadingScreen from './LoadingScreen'

const embedBaseUrl = `https://www.youtube.com/embed/`

const VideoDetail = ({ selectedVideo }) => {
  return selectedVideo ? (
    <div>
      <div className='ui embed'>
        <iframe
          title={selectedVideo.snippet.title}
          src={embedBaseUrl + selectedVideo.id.videoId}
        />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  ) : (
    <LoadingScreen />
  )
}

export default VideoDetail
