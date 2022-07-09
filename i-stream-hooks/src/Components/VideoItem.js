import React from 'react'

import '../Styles/VideoItem.css'

const VideoItem = ({ src, onVideoSelect, videoTitle, video }) => {
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img className='ui image' src={src} alt={video.snippet.title} />
      <div className='content'>
        <div className='header'>{videoTitle}</div>
      </div>
    </div>
  )
}

export default VideoItem
