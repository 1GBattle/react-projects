import React from 'react'
import { connect } from 'react-redux'

import { deleteStream } from '../../actions'
import history from '../../history'
import Modal from '../Modal'

const StreamDelete = ({ deleteStream, stream, ...props }) => {
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

  return (
    <div>
      {stream ? (
        <Modal
          headerMessage={'Delete Stream'}
          contentMessage={`Are you sure you want to delete "${stream.title}" stream? This action cannot be undone. `}
          actions={actions}
          onDismiss={onDismiss}
          streamTitle={stream.title}
        />
      ) : null}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { deleteStream })(StreamDelete)
