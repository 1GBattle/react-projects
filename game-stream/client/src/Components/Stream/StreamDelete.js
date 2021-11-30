import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { deleteStream, getStream } from '../../actions'
import history from '../../history'
import Modal from '../Modal'

const StreamDelete = ({ deleteStream, stream, getStream, ...props }) => {
  useEffect(() => {
    getStream(props.match.params.id)
  }, [getStream])

  const handleClick = () => {
    deleteStream(props.match.params.id)
  }

  const onDismiss = () => {
    history.push('/')
  }

  const actions = (
    <React.Fragment>
      <button onClick={handleClick} className='ui primary button negative'>
        Yes
      </button>
      <button className='ui button'>No</button>
    </React.Fragment>
  )

  const renderModalContent = () => {
    if (stream) {
      return `Are you sure you want to delete "${stream.title}" stream? This action cannot be undone.`
    } else {
      return 'Are you sure you want to delete this stream'
    }
  }

  return (
    <div>
      <Modal
        headerMessage={'Delete Stream'}
        contentMessage={renderModalContent()}
        actions={actions}
        onDismiss={onDismiss}
        streamTitle={stream.title}
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { deleteStream, getStream })(StreamDelete)
