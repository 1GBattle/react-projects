import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = (index) => {
    setActiveIndex(index)
  }

  const itemsToRender = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active' : ''

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${isActive}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return <div className='ui styled accordion'>{itemsToRender}</div>
}

export default Accordion
// en.wikipedia.org/w/api.php?action=query&list=search&format=json&rsearch=
