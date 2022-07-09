import React from 'react'

import '../styles/FeaturedIn.css'

import businessInsiderLogo from '../content/img/logos/business-insider.png'
import forbesLogo from '../content/img/logos/forbes.png'
import techCrunchLogo from '../content/img/logos/techcrunch.png'
import newYorkTimesLogo from '../content/img/logos/the-new-york-times.png'
import usaTodayLogo from '../content/img/logos/usa-today.png'

const FeaturedIn = () => {
  return (
    <section className='featured-in'>
      <div className='container featured-in-section'>
        <h2 className='heading-featured-in'>Featured In</h2>

        <div className='img-container'>
          <img
            className='featured-in-logo'
            src={businessInsiderLogo}
            alt='business insider logo'
          />
          <img className='featured-in-logo' src={forbesLogo} alt='forbes logo' />
          <img
            className='featured-in-logo'
            src={techCrunchLogo}
            alt='tech crunch logo'
          />
          <img
            className='featured-in-logo'
            src={newYorkTimesLogo}
            alt='the new york times logo'
          />
          <img
            className='featured-in-logo'
            src={usaTodayLogo}
            alt='U.S.A today logo'
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedIn
