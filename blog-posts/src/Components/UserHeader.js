import react, { useEffect } from 'react'
import { connect } from 'react-redux'

const UserHeader = ({ userId, user }) => {
  console.log('user', user)

  if (!user) {
    return null
  }

  return <div className={'header'}>User Name</div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.id)
  }
}

export default connect(mapStateToProps)(UserHeader)
