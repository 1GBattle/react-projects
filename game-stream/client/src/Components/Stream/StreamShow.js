import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStream } from '../../actions'

const StreamShow = ({ props }) => {
  useEffect(() => {
    getStream(props.match.params.id)
  })

  return (
    <div>
      <p>StreamShow</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(null, { getStream })(StreamShow)
