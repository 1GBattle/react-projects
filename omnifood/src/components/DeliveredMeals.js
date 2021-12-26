import React from 'react'

import '../styles/DeliveredMeals.css'

import customerImage_1 from '../content/img/customers/customer-1.jpg'
import customerImage_2 from '../content/img/customers/customer-2.jpg'
import customerImage_3 from '../content/img/customers/customer-3.jpg'
import customerImage_4 from '../content/img/customers/customer-4.jpg'
import customerImage_5 from '../content/img/customers/customer-5.jpg'
import customerImage_6 from '../content/img/customers/customer-6.jpg'

const DeliveredMeals = () => {
  return (
    <div className='delivered-meals'>
      <div className='delivered-imgs'>
        <img className='customer-image' src={customerImage_1} alt='Customer ' />
        <img className='customer-image' src={customerImage_2} alt='Customer ' />
        <img className='customer-image' src={customerImage_3} alt='Customer ' />
        <img className='customer-image' src={customerImage_4} alt='Customer ' />
        <img className='customer-image' src={customerImage_5} alt='Customer ' />
        <img className='customer-image' src={customerImage_6} alt='Customer' />
      </div>
      <p className='delivered-text'>
        <span className='delivered-amount'>250,000+</span> meals delivered last year
      </p>
    </div>
  )
}

export default DeliveredMeals
