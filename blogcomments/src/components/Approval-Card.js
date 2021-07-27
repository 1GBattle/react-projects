import React from 'react'

import Comments from './Comments'

const showComment = () => {
  console.log('some text')
  return (
    <div>
      <Comments />
    </div>
  )
}

const ApprovalCard = (props) => {
  console.log(props)
  return (
    <div className='ui cards'>
      <div className='card'>
        <div className='content'>{props.children}</div>
        <div className='ui extra content'>
          <div className='ui two buttons'>
            <button onClick={showComment} className='ui basic button green'>
              Approve Comment
            </button>
            <button className='ui basic red button'>Reject Comment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard
