import React from 'react'

import DeliveredMeals from './DeliveredMeals'

import '../styles/Hero.css'

import heroImage from '../content/img/hero.png'

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero-container'>
        <div className='hero-text-box'>
          <h1 className='heading-primary'>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className='hero-description'>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional needs. We
            have delivered 250,000+ meals last year!
          </p>

          <a href='#' className='btn btn--full margin-right-sm'>
            Start Eating Well
          </a>
          <a href='#' className='btn btn--outline'>
            Learn More &darr;
          </a>
        </div>

        <div className='hero-image-box'>
          <img
            className='hero-image'
            src={heroImage}
            alt='Woman enjoying food, meals in storage container, and food bowls on a table'
          />
        </div>

        <DeliveredMeals />
      </div>
    </section>
  )
}

export default Hero
