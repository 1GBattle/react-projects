import React from 'react'

import '../styles/SeasonDisplay.css'

const seasonConfig = {
  summer: {
    text: "It's hot out",
    iconName: 'sun'
  },
  winter: {
    text: "It's cold out",
    iconName: 'snowflake'
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter'
  } else {
    return latitude > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon-left massive icon`} />
      <h1 className='text'>{text}</h1>
      <i className={`${iconName} icon-right massive icon`} />
    </div>
  )
}

export default SeasonDisplay
