import React from 'react'

import '../styles/CTA.css'

const CTA = () => {
  return (
    <section className='section-cta'>
      <div className='container'>
        <div className='cta'>
          <div className='cta-text-box'>
            <h2 className='heading-secondary'>Get your first meal free</h2>
            <p className='cta-text'>
              Healthy, tasty and hassle-free meals are waiting for you. Start eating
              well today. You can cancel or pause anytime. And the first meal is on
              us!
            </p>

            <form className='cta-form' action='#'>
              <div className='cta-form-input-box'>
                <label for='full-name' className='cta-form-label'>
                  Full Name
                </label>
                <input
                  id='full-name'
                  className='cta-form-input'
                  type='text'
                  placeholder='John Smith'
                />
              </div>

              <div className='cta-form-input-box'>
                <label for='email' className='cta-form-label'>
                  Email
                </label>
                <input
                  id='email'
                  className='cta-form-input'
                  type='email'
                  placeholder='me@example.com'
                />
              </div>

              <div className='cta-form-input-box'>
                <label for='reference' className='cta-form-label'>
                  How'd you find us
                </label>

                <select id='reference'>
                  <option value='friends'>Friends and family</option>
                  <option value='internet'>Internet</option>
                  <option value='youtube'>Youtube Video</option>
                  <option value='podcast'>Podcast</option>
                  <option value='ad'>Ad</option>
                </select>
              </div>

              <button className='btn'>Sign up now</button>
            </form>
          </div>
          <div
            className='cta-img-box'
            role='img'
            aria-label='woman enjoying food'
          ></div>
        </div>
      </div>
    </section>
  )
}

export default CTA
