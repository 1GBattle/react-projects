import React, { useRef, useEffect, createRef } from 'react'
import flv from 'flv.js'
import { connect } from 'react-redux'

import { getStream } from '../../actions'

const StreamShow = ({ match, stream, getStream }) => {
  const streamId = match.params.id
  const videoRef = useRef(null)
  const player = createRef(null)

  useEffect(() => {
    getStream(streamId)
  }, [getStream, streamId])

  useEffect(() => {
    const buildPlayer = () => {
      if (!stream) {
        return
      }

      player.current = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${streamId}.flv`
      })

      player.current.attachMediaElement(videoRef.current)
      player.current.load()
    }

    buildPlayer()

    return () => {
      if (player.current) {
        console.log('unmounted')

        player.current.destroy()
      }
    }
  }, [stream, streamId, player])

  if (!stream) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls={true} />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { getStream })(StreamShow)
