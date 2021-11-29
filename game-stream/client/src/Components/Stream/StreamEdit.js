import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { editStream, getStream } from '../../actions'
import StreamForm from './StreamForm'

const StreamEdit = ({ stream, handleSubmit, editStream, getStream, ...props }) => {
  const currentStream = useRef('')
  const streamId = props.match.params.id

  useEffect(() => {
    getStream(streamId)
  }, [getStream, streamId])

  currentStream.current = stream

  const onSubmit = (formValues) => {
    editStream(stream.id, formValues)
  }

  const printStreamValues = () => {
    if (stream) {
      return (
        <div>
          <h1>{stream.title}</h1>
          <h2>{stream.description}</h2>
          <StreamForm
            onSubmit={onSubmit}
            initialValues={_.pick(stream, 'title', 'description')}
          />
        </div>
      )
    } else {
      return <div>No stream found</div>
    }
  }

  return printStreamValues()
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit)
