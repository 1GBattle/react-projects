import React from 'react'

import '../styles/PricingFeatures.css'

const PricingFeatures = () => {
  return (
    <section className='section-pricing-features'>
      <div className='container'>
        <span className='subheading'>Pricing</span>
        <h2 className='heading-secondary'>Eating well without breaking the bank</h2>
      </div>

      <div className='container grid grid--2-cols'>
        <div className='pricing-plan'>
          <header className='pricing-plan-header'>
            <p className='pricing-plan-name'>Starter</p>
            <p className='pricing-plan-price'>
              <span>$</span>399
            </p>
            <p className='pricing-plan-text'>per month, just $13 per meal!</p>
          </header>

          <ul className='list'>
            <li className='list-item'>
              <ion-icon classname='ist-icon' name='checkmark-outline'></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              Order from 11am to 9pm
            </li>
            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              Delivery is always free
            </li>

            <li className='list-item'>
              <ion-icon className='list-icon' name='close-outline'></ion-icon>
            </li>
          </ul>
          <div className='pricing-plan-btn'>
            <a href='#' className='btn btn--full'>
              Start Eating Well
            </a>
          </div>
        </div>

        <div className='pricing-plan pricing-plan-complete'>
          <header className='pricing-plan-header'>
            <p className='pricing-plan-name'>Complete</p>
            <p className='pricing-plan-price'>
              <span>$</span>649
            </p>
            <p className='pricing-plan-text'>per month, just $11 per meal!</p>
          </header>

          <ul className='list'>
            <li className='list-item'>
              <ion-icon classname='ist-icon' name='checkmark-outline'></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              Order meals <strong>24/7</strong>
            </li>
            <li className='list-item'>
              <ion-icon classname='list-icon' name='checkmark-outline'></ion-icon>
              Delivery is always free
            </li>
            <li className='list-item'>
              <ion-icon className='list-icon' name='checkmark-outline'></ion-icon>
              Get access to Omnifood recipes
            </li>
          </ul>

          <div className='pricing-plan-btn'>
            <a href='#' className='btn btn--full'>
              Start Eating Well
            </a>
          </div>
        </div>
      </div>

      <div className='container grid grid--4-cols'>
        <div className='feature'>
          <span className='feature-icon'>
            <ion-icon name='infinite-outline'></ion-icon>
          </span>
          <p className='feature-title'>Never cook again</p>
          <p className='feature-text'>
            Omnifood operates 365 days, includeing major holidays
          </p>
        </div>
        <div className='feature'>
          <span className='feature-icon'>
            <ion-icon name='nutrition-outline'></ion-icon>
          </span>
          <p className='feature-title'>Local and organic</p>
          <p className='feature-text'>
            Our cooks only use local, fresh, and organic products to prepare your
            meals.
          </p>
        </div>
        <div className='feature'>
          <span>
            <ion-icon className='feature-icon' name='leaf-outline'></ion-icon>
          </span>

          <p className='feature-title'>No waste</p>
          <p className='feature-text'>
            All our partners only use reusable containers to package all your meals.
          </p>
        </div>
        <div className='feature'>
          <span className='feature-icon'>
            <ion-icon name='pause-outline'></ion-icon>
          </span>
          <p className='feature-title'>Pause anytime</p>
          <p className='feature-text'>
            Going on vacation? Just pause your subscription, and we refund unused
            days.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingFeatures
