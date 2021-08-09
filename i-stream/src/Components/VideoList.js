import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videoSelect, videos }) => {
  const videosToRender = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.id.videoId}
        src={video.snippet.thumbnails.medium.url}
        videoTitle={video.snippet.title}
        onVideoSelect={videoSelect}
      />
    )
  })

  return <div className='ui relaxed divided list'>{videosToRender}</div>
}

export default VideoList
