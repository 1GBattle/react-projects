const Comments = (props) => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='' src={props.image} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            {props.userName}
          </a>
          <div className='meatadata'>
            <span className='date'>
              {Date(props.timePosted).replace(
                'GMT-0500 (Central Daylight Time)',
                ''
              )}
            </span>
          </div>
          <div className='text'>{props.comment}</div>
        </div>
      </div>
    </div>
  )
}

export default Comments
